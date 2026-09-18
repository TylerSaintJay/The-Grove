from PIL import Image
import numpy as np

src_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'
img = Image.open(src_path).convert('RGBA')
data = np.array(img)

print(f"Image size: {img.size[0]} x {img.size[1]}")

# Find non-white, non-transparent pixels (the actual logo content)
# A pixel is "content" if it's not near-white and has some alpha
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Content: not white (r<230 or g<230 or b<230) and visible (a > 20)
content_mask = (a > 20) & ~((r > 230) & (g > 230) & (b > 230))

rows = np.where(content_mask.any(axis=1))[0]
cols = np.where(content_mask.any(axis=0))[0]

if len(rows) == 0 or len(cols) == 0:
    # Try with less strict white threshold
    content_mask = a > 20
    rows = np.where(content_mask.any(axis=1))[0]
    cols = np.where(content_mask.any(axis=0))[0]

min_y, max_y = rows[0], rows[-1]
min_x, max_x = cols[0], cols[-1]

content_w = max_x - min_x + 1
content_h = max_y - min_y + 1
center_x = (min_x + max_x) / 2
center_y = (min_y + max_y) / 2
img_center_x = img.size[0] / 2
img_center_y = img.size[1] / 2

print(f"Content bounding box: X={min_x} to {max_x}, Y={min_y} to {max_y}")
print(f"Content size: {content_w} x {content_h}")
print(f"Content center: ({center_x:.1f}, {center_y:.1f})")
print(f"Image center: ({img_center_x:.1f}, {img_center_y:.1f})")
print(f"Offset from center: X={center_x - img_center_x:.1f}px, Y={center_y - img_center_y:.1f}px")
print(f"Left margin: {min_x}px, Right margin: {img.size[0] - max_x - 1}px")
print(f"Top margin: {min_y}px, Bottom margin: {img.size[1] - max_y - 1}px")

# Now crop tight to content and create a square centered canvas
padding = 40  # pixels of breathing room on each side
crop = img.crop((min_x, min_y, max_x + 1, max_y + 1))
square_size = max(content_w, content_h) + (padding * 2)
out = Image.new('RGBA', (square_size, square_size), (0, 0, 0, 0))
paste_x = (square_size - content_w) // 2
paste_y = (square_size - content_h) // 2
out.paste(crop, (paste_x, paste_y))

out_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'
out.save(out_path, 'PNG')
print(f"\nSaved centered logo: {square_size}x{square_size}px")
print(f"Paste position: ({paste_x}, {paste_y})")
