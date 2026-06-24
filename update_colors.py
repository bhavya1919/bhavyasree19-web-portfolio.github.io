import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace root variables
css = re.sub(r'--navy:\s*#[0-9a-fA-F]+;', '--navy: #F3EBFD;', css)
css = re.sub(r'--navy-light:\s*#[0-9a-fA-F]+;', '--navy-light: #E6E6FA;', css)
css = re.sub(r'--blue:\s*#[0-9a-fA-F]+;', '--blue: #097969;', css)
css = re.sub(r'--steel:\s*#[0-9a-fA-F]+;', '--steel: #6C757D;', css)
css = re.sub(r'--ice:\s*#[0-9a-fA-F]+;', '--ice: #2B2B2B;', css)
css = re.sub(r'--snow:\s*#[0-9a-fA-F]+;', '--snow: #1A1A2E;', css)
css = re.sub(r'--white:\s*#[0-9a-fA-F]+;', '--white: #151525;', css)

# Add violet to root
if '--violet' not in css:
    css = css.replace('--white: #151525;', '--white: #151525;\n  --violet: #8A2BE2;')

# Replace hardcoded RGBAs
css = re.sub(r'rgba\(\s*10\s*,\s*25\s*,\s*49\s*,', 'rgba(243, 235, 253,', css)
css = re.sub(r'rgba\(\s*26\s*,\s*61\s*,\s*99\s*,', 'rgba(230, 230, 250,', css)
css = re.sub(r'rgba\(\s*74\s*,\s*127\s*,\s*167\s*,', 'rgba(9, 121, 105,', css)
css = re.sub(r'rgba\(\s*179\s*,\s*207\s*,\s*229\s*,', 'rgba(108, 117, 125,', css)
css = re.sub(r'rgba\(\s*246\s*,\s*250\s*,\s*253\s*,', 'rgba(26, 26, 46,', css)

# Make badges/tags use Violet
# .exp-tag, .edu-status--active, .proj-tag, .cert-tag are currently using Emerald Green (var(--blue)).
# We'll replace them with var(--violet) for Bright Violet Badges.

# .exp-tag
css = re.sub(r'\.exp-tag\s*\{[^}]+\}', 
             r'.exp-tag {\n  padding: 0.25rem 0.75rem;\n  background-color: rgba(138, 43, 226, 0.1);\n  color: var(--violet);\n  font-size: 0.75rem;\n  border-radius: 999px;\n}', css)

# .proj-tag
css = re.sub(r'\.proj-tag\s*\{[^}]+\}', 
             r'.proj-tag {\n  padding: 0.25rem 0.75rem;\n  background-color: rgba(138, 43, 226, 0.1);\n  color: var(--violet);\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 999px;\n  border: 1px solid rgba(138, 43, 226, 0.2);\n}', css)

# .cert-tag
css = re.sub(r'\.cert-tag\s*\{[^}]+\}', 
             r'.cert-tag {\n  padding: 0.25rem 0.75rem;\n  background-color: rgba(138, 43, 226, 0.1);\n  color: var(--violet);\n  font-size: 0.75rem;\n  border-radius: 999px;\n  border: 1px solid rgba(138, 43, 226, 0.2);\n}', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Styles updated successfully.")
