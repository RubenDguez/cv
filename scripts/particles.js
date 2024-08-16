const colors = [
    'purple',
    'medium-blue',
    'light-blue',
    'red',
    'orange',
    'yellow',
    'cyan',
    'light-green',
    'lime',
    'magenta',
    'lightish-red',
    'pink',
];

const textContent = [
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'WebdriverIO',
    'NPM',
    'AWS',
    'Docker',
    'GIT',
    'GitHub Actions',
    'SQL',
    'HTML',
    'CSS',
];

// Create and append div elements with corresponding colors
// Set text content and data-text attribute for each element
colors.forEach((color, i) => {
    const div = document.createElement('div');
    div.setAttribute('id', color);
    div.setAttribute('class', color);
    div.textContent = textContent[i];
    div.setAttribute('data-text', textContent[i]);
    document.body.appendChild(div);
});
