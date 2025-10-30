const fs = require('fs');
const path = require('path');

const legalFiles = [
  'app/cookies/page.tsx',
  'app/terms/page.tsx',
  'app/refund-policy/page.tsx',
  'app/privacy/page.tsx'
];

function fixHeadingsInContent(content) {
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // Skip empty lines, table separators, and lines with inline bold
    if (!line.trim() || line.includes('|---') || line.includes('| `')) {
      return line;
    }
    
    // Pattern: Lines starting with ** followed by number (e.g., **2.1) or specific headings
    // that don't already end with **
    const headingPattern = /^\*\*((?:\d+(?:\.\d+)*\s+[^*]+?)|(?:[A-Z][^*]+?))$/;
    
    if (headingPattern.test(line)) {
      return line + '**';
    }
    
    return line;
  });
  
  return fixedLines.join('\n');
}

function fixLegalFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Find all content blocks within template literals
  // Match content: `...` patterns
  const contentPattern = /content:\s*`([^`]*)`/gs;
  
  fileContent = fileContent.replace(contentPattern, (match, content) => {
    const fixedContent = fixHeadingsInContent(content);
    return `content: \`${fixedContent}\``;
  });
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✓ Fixed ${filePath}`);
}

console.log('Starting legal heading fix...\n');

legalFiles.forEach(file => {
  try {
    fixLegalFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('\nAll files processed!');
