from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\public\images\grove-crest.png')
w, h = img.size
print(f"Logo file: {w}x{h}px")
print(f"Square: {w == h}")
print(f"Mode: {img.mode}")

if img.mode == 'RGBA':
    data = np.array(img)
    corners = [int(data[0,0,3]), int(data[0,-1,3]), int(data[-1,0,3]), int(data[-1,-1,3])]
    print(f"Corner alpha values (0=transparent, 255=opaque): {corners}")
    cx, cy = w//2, h//2
    center = data[cy, cx].tolist()
    print(f"Center pixel RGBA: {center}")
    
    # Count fully transparent vs opaque pixels
    transparent = int(np.sum(data[:,:,3] == 0))
    opaque = int(np.sum(data[:,:,3] > 20))
    total = w * h
    print(f"Transparent pixels: {transparent}/{total} ({100*transparent//total}%)")
    print(f"Visible pixels: {opaque}/{total} ({100*opaque//total}%)")

print("")
print("Used in 3 components - all share the same fixed file:")
print("  AgeGate.tsx   - w-28 h-28 (112px)")
print("  HeroSection.tsx - w-20/w-24 sm:w-24/sm:h-24 (80-96px)")
print("  Footer.tsx    - w-14 h-14 (56px)")
