import urllib.request
import time

# Simple screenshot using Python's PIL after fetching with playwright via subprocess
import subprocess
import os

result = subprocess.run(
    ['python', '-c', '''
import time
try:
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:3000")
        time.sleep(2)
        page.screenshot(path="screenshot_agegate.png")
        browser.close()
        print("Screenshot saved")
except Exception as e:
    print(f"Error: {e}")
'''],
    capture_output=True, text=True
)
print(result.stdout)
print(result.stderr)
