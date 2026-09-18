from PIL import Image
import numpy as np
from collections import deque

# Use the ORIGINAL upload (untouched source)
original_path = r'C:\Users\Admin\.gemini\antigravity\brain\4b718c87-636c-4505-9579-d38f527b1258\.user_uploaded\media__1785560469511.png'
out_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'

img = Image.open(original_path).convert('RGBA')
data = np.array(img, dtype=np.uint8)
h, w = data.shape[:2]
print(f"Original source: {w}x{h}, mode: {img.mode}")

# ---------------------------------------------------------------
# FLOOD FILL from ALL edges to find exterior white
# ---------------------------------------------------------------
visited = np.zeros((h, w), dtype=bool)
queue = deque()

# Seed all border pixels that are near-white
def is_removable(pixel):
    r, g, b, a = int(pixel[0]), int(pixel[1]), int(pixel[2]), int(pixel[3])
    if a < 10:
        return True  # already transparent
    return (r + g + b) > 580  # near-white

# Add all border pixels as seeds
for x in range(w):
    for y in [0, h-1]:
        if not visited[y, x] and is_removable(data[y, x]):
            queue.append((y, x))
            visited[y, x] = True
for y in range(h):
    for x in [0, w-1]:
        if not visited[y, x] and is_removable(data[y, x]):
            queue.append((y, x))
            visited[y, x] = True

# BFS flood fill outward
count_exterior = 0
while queue:
    cy, cx = queue.popleft()
    data[cy, cx, 3] = 0
    count_exterior += 1
    for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
        ny, nx = cy+dy, cx+dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            if is_removable(data[ny, nx]):
                visited[ny, nx] = True
                queue.append((ny, nx))

print(f"Exterior white removed: {count_exterior} pixels")

# ---------------------------------------------------------------
# INTERIOR FLOOD FILL - find the white fill inside the shield
# Sample from known interior locations (center area of shield)
# ---------------------------------------------------------------
interior_seeds = []
# The shield interior white fill is roughly in the center of the image
# Try multiple center-ish points
center_y, center_x = h//2, w//2
for dy in range(-30, 31, 10):
    for dx in range(-30, 31, 10):
        sy, sx = center_y + dy, center_x + dx
        if 0 <= sy < h and 0 <= sx < w:
            if not visited[sy, sx] and is_removable(data[sy, sx]):
                interior_seeds.append((sy, sx))
                visited[sy, sx] = True

print(f"Interior seed points found: {len(interior_seeds)}")
for seed in interior_seeds:
    queue.append(seed)

count_interior = 0
while queue:
    cy, cx = queue.popleft()
    data[cy, cx, 3] = 0
    count_interior += 1
    for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
        ny, nx = cy+dy, cx+dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            if is_removable(data[ny, nx]):
                visited[ny, nx] = True
                queue.append((ny, nx))

print(f"Interior white removed: {count_interior} pixels")

# ---------------------------------------------------------------
# Crop tight to gold artwork & center on square canvas
# ---------------------------------------------------------------
content = data[:,:,3] > 30
rows = np.where(content.any(axis=1))[0]
cols = np.where(content.any(axis=0))[0]

min_y, max_y = rows[0], rows[-1]
min_x, max_x = cols[0], cols[-1]
cw = max_x - min_x + 1
ch = max_y - min_y + 1
print(f"Gold artwork: {cw}x{ch}")

out_img = Image.fromarray(data, 'RGBA')
cropped = out_img.crop((min_x, min_y, max_x+1, max_y+1))

padding = 60
sq = max(cw, ch) + padding * 2
final = Image.new('RGBA', (sq, sq), (0, 0, 0, 0))
px = (sq - cw) // 2
py = (sq - ch) // 2
final.paste(cropped, (px, py), cropped)

final.save(out_path, 'PNG')
print(f"Saved: {sq}x{sq}px")

# Verify
arr = np.array(final)
corners = [int(arr[0,0,3]), int(arr[0,-1,3]), int(arr[-1,0,3]), int(arr[-1,-1,3])]
transparent_pct = int(100 * np.sum(arr[:,:,3] == 0) / (sq*sq))
print(f"Corner alphas: {corners}")
print(f"Transparent: {transparent_pct}% of image")
