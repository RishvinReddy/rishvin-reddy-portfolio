const fs = require('fs');
const path = require('path');

function removeSections(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove the Main Call to Action
    // In _footer.html or pages using it, it starts at <!-- Main Call to Action -->
    // and ends before <!-- Simplified Base Footer --> or <!-- Grid Footer -->
    content = content.replace(/<!-- Main Call to Action -->[\s\S]*?(?=<!-- (?:Simplified Base Footer|Grid Footer|Footer Base|Footer Grid|Simple Footer Base)[ \-]*-->)/gi, '');
    
    // Some pages might have a different footer structure, let's also remove specifically:
    content = content.replace(/<!-- Main Call to Action -->[\s\S]*?(?=<!-- Footer)/gi, '');

    // Sometimes it's right before the grid
    content = content.replace(/<!-- Main Call to Action -->[\s\S]*?<div class="grid grid-cols-1/gi, '<div class="grid grid-cols-1');

    // Remove the 'Have an idea? Let's build' section block (found in index.html)
    // The exact string is "Have an idea? Let's build<br>"
    // This section is typically a large column block. Let's find it more robustly:
    let haveIdeaIndex = content.indexOf("Have an idea? Let's build");
    if (haveIdeaIndex !== -1) {
        // Find the start of its container column
        let searchContent = content.substring(0, haveIdeaIndex);
        let startContainer = searchContent.lastIndexOf('<div class="col-span-1 lg:col-span-5 flex flex-col justify-between"');
        if (startContainer === -1) {
             startContainer = searchContent.lastIndexOf('<div'); // Fallback to nearest div
        }
        
        let endContainer = content.indexOf('</div>', haveIdeaIndex + 100);
        // We'll just replace the inner text if we can't safely grab the whole container block.
        // Actually, let's use a regex that matches the parent div and its contents.
    }
    
    // Better regex for the specific "Have an idea?" block
    // It's wrapped in a col-span-5 div
    content = content.replace(/<div class="col-span-1 lg:col-span-5[^>]*>[\s\S]*?Have an idea\? Let's build[\s\S]*?<\/form>\s*<\/div>\s*<\/div>/g, '');
    
    // Also strip just the H2 and surrounding text if the regex didn't catch it
    content = content.replace(/<div[^>]*>\s*<span[^>]*>\s*<span[^>]*><\/span>\s*<span[^>]*><\/span>\s*<\/span>\s*Open for Collaboration\s*<\/div>\s*<h2[^>]*>\s*Have an idea\? Let's build<br>[\s\S]*?<\/h2>/g, '');

    // Fallback: remove the CTA if the earlier replace failed
    content = content.replace(/<h2[^>]*>\s*Ready to build[\s\S]*?something great together\?[\s\S]*?<\/h2>[\s\S]*?<a href="Contact_page\.html"[^>]*>[\s\S]*?<\/a>/gi, '');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log('Updated', filePath);
    }
}

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            removeSections(fullPath);
        }
    }
}

processDir('.');
