from PIL import Image
import numpy as np
from collections import deque

src_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'
img = Image.open(src_path).convert('RGBA')
data = np.array(img, dtype=np.uint8)

h, w = data.shape[:2]
print(f"Image: {w}x{h}")

# -----------------------------------------------------------------
# Step 1: Make ALL near-white pixels fully transparent
# This covers both exterior and interior shield fill
# -----------------------------------------------------------------
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Very aggressive white removal - any pixel that is "whitish"
is_white = (r.astype(int) + g.astype(int) + b.astype(int)) > 600  # avg > 200 per channel
data[is_white, 3] = 0

print(f"Removed {int(np.sum(is_white))} white pixels")

# -----------------------------------------------------------------
# Step 2: Clean up any remaining greyish pixels inside shield
# that might be anti-aliasing artifacts between gold and white
# -----------------------------------------------------------------
r2, g2, b2, a2 = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
# Pixels that are light (not gold, not dark) - greyish/off-white
is_light = (a2 > 0) & (r2 > 180) & (g2 > 170) & (b2 > 150) & ~(
    # Keep actual gold: high red, medium green, low-medium blue
    (r2 > 160) & (g2 > 120) & (g2 < 185) & (b2 < 110)
)
data[is_light, 3] = 0
print(f"Removed {int(np.sum(is_light))} light/grey pixels")

# -----------------------------------------------------------------
# Step 3: Auto-crop tight to gold artwork only, then re-center
# -----------------------------------------------------------------
content = data[:,:,3] > 30
rows = np.where(content.any(axis=1))[0]
cols = np.where(content.any(axis=0))[0]

if len(rows) == 0:
    print("ERROR: No content found after cleanup!")
    exit()

min_y, max_y = rows[0], rows[-1]
min_x, max_x = cols[0], cols[-1]
cw = max_x - min_x + 1
ch = max_y - min_y + 1
print(f"Gold content bounding box: {cw}x{ch} at ({min_x},{min_y})")

# Crop to content
out = Image.fromarray(data, 'RGBA')
cropped = out.crop((min_x, min_y, max_x+1, max_y+1))

# Create perfect square with even padding
padding = 60
sq = max(cw, ch) + padding * 2
final = Image.new('RGBA', (sq, sq), (0, 0, 0, 0))
px = (sq - cw) // 2
py = (sq - ch) // 2
final.paste(cropped, (px, py), cropped)

final.save(src_path, 'PNG')
print(f"Saved: {sq}x{sq}px, logo at ({px},{py})")

# Quick sanity check
arr = np.array(final)
corners = [int(arr[0,0,3]), int(arr[0,-1,3]), int(arr[-1,0,3]), int(arr[-1,-1,3])]
print(f"Corner alphas (all should be 0): {corners}")
cx_check = arr[sq//2, sq//2]
print(f"Center pixel RGBA: {cx_check.tolist()}")
