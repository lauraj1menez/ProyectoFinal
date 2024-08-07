// test.js
const fs = require('fs');

test('Verifica el contenido del h3', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    const h3Match = html.match(/<h3[^>]*>([^<]+)<\/h3>/);
    const h3Text = h3Match ? h3Match[1] : null;
    expect(h3Text).toBe('Hola Mundo');
});
