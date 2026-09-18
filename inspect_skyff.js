const fs = require('fs');
const content = fs.readFileSync('C:/Users/Admin/.gemini/antigravity/brain/4b718c87-636c-4505-9579-d38f527b1258/.system_generated/steps/791/content.md', 'utf8');

// Find all links
const links = [...new Set([...content.matchAll(/href=["'](https:\/\/skyff420spaza\.co\.za\/[^"']*)["']/gi)].map(m => m[1]))];
console.log('--- LINKS ---');
links.forEach(l => console.log(l));

// Find sections mentioning delivery, shipping, terms, payment, faq, about
console.log('--- KEYWORDS MATCH ---');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (/shipping|delivery|courier|dispatch|refund|policy|privacy|terms|faq|pax|uber|pep|pudo/i.test(line)) {
    // Strip HTML tags
    const clean = line.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean.length > 10 && clean.length < 300) {
      console.log(`[Line ${idx}] ${clean}`);
    }
  }
});
