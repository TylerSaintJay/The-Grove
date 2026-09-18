from PIL import Image, ImageDraw
import numpy as np

logo_path = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png'
out_preview = r'C:\Users\Admin\.gemini\antigravity\brain\4b718c87-636c-4505-9579-d38f527b1258\logo_preview_dark.png'

# Load logo
logo = Image.open(logo_path).convert('RGBA')
lw, lh = logo.size

# Create dark forest green background (the site background colour #0b1f16)
bg_color = (11, 31, 22, 255)  # #0b1f16
preview_size = 400
bg = Image.new('RGBA', (preview_size, preview_size), bg_color)

# Paste logo centered at 120px
logo_display_size = 120
logo_resized = logo.resize((logo_display_size, logo_display_size), Image.LANCZOS)
px = (preview_size - logo_display_size) // 2
py = (preview_size - logo_display_size) // 2
bg.paste(logo_resized, (px, py), logo_resized)

bg.save(out_preview, 'PNG')
print(f"Preview saved to: {out_preview}")

# Check pixel at center of logo area in the composite
arr = np.array(bg)
center = arr[preview_size//2, preview_size//2]
print(f"Center pixel in composite: R={center[0]} G={center[1]} B={center[2]}")
if center[0] == 11 and center[1] == 31:
    print("Center is dark green - logo interior IS transparent!")
elif center[0] > 200:
    print("Center is bright - logo interior is NOT transparent (white still there)")
else:
    print(f"Center is gold/other: RGB({center[0]},{center[1]},{center[2]})")
