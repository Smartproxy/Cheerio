const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
    try {
        const response = await axios.get('https://ip.smartproxy.com/', {
            proxy: {
                protocol: 'http',
                host: 'gate.smartproxy.com',
                port: 7000,
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }
        })        
        const html = response.data;
        const $ = cheerio.load(html);
        const siteBody = $('body');
        const output = siteBody.text();
        console.log(output);
    }
    catch (error) {
        console.log('Something went wrong...');
    }
})();
