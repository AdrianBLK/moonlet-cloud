
const evilDns = require('evil-dns');
const {scrapper} = require('../utils/scrapper');

// String match
evilDns.add('moonlet.xyz', '212.146.84.81');

scrapper({
    urls: [
        'https://moonlet.xyz',
        'https://moonlet.xyz/404.html',
        'https://moonlet.xyz/favicon.ico'
    ],
    dest: './hosting/moonlet.xyz',
    urlFilter: (url) => (url || "").startsWith('https://moonlet.xyz')
});