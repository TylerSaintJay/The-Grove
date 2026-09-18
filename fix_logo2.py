from PIL import Image
import numpy as np

src_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'
img = Image.open(src_path).convert('RGBA')
data = np.array(img, dtype=np.uint8)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Mark near-white pixels as transparent
is_white = (r > 215) & (g > 205) & (b > 185)
data[is_white, 3] = 0

out = Image.fromarray(data, 'RGBA')

# Auto-crop tight and re-center on square canvas
np_out = np.array(out)
content = np_out[:,:,3] > 20
rows = np.where(content.any(axis=1))[0]
cols = np.where(content.any(axis=0))[0]
min_y, max_y = rows[0], rows[-1]
min_x, max_x = cols[0], cols[-1]
cropped = out.crop((min_x, min_y, max_x+1, max_y+1))

cw, ch = cropped.size
padding = 50
sq = max(cw, ch) + padding * 2
final = Image.new('RGBA', (sq, sq), (0, 0, 0, 0))
px = (sq - cw) // 2
py = (sq - ch) // 2
final.paste(cropped, (px, py), cropped)

final.save(src_path, 'PNG')
print(f"Done! {sq}x{sq}px, logo centered at ({px},{py})")
