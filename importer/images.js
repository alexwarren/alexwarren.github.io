var fs = require("fs");
var http = require("follow-redirects").http;

var re = /(https?:[^\s"\<]+)/g;

var max = 500;
var count = 0;

var getUrl = function (c, url) {
    try {
        console.log(`${c} ${url}`);
        http.get(url, (res) => {
            const statusCode = res.statusCode;
            const contentType = res.headers['content-type'];

            if (statusCode !== 200) {
                console.log(`${c} ${statusCode} ${url}`);
                // consume response data to free up memory
                res.resume();
                return;
            }

            if (statusCode !== 200 || !/^image\//.test(contentType)) {
                console.log(`${c} ${contentType} ${url}`);
                // consume response data to free up memory
                res.resume();
                return;
            }

            console.log(`${c} FETCHING ${url}`);

            let rawData = [];
            res.on('data', (chunk) => {
                console.log(`${c} got data`);
                rawData.push(chunk)
            });
            res.on('end', () => {
                var buffer = Buffer.concat(rawData);
                console.log(buffer.toString('base64'));
            });
        }).on('error', (e) => {
            console.log(`${c} Got error: ${e.message}`);
        });
    }
    catch (e) {
        console.log(`${c} ERROR ${e}`);
    }
}

fs.readdir("../_posts", (err, files) => {
    files.forEach(file => {
        fs.readFile("../_posts/" + file, (err, data) => {
            if (err) throw err;
            var content = data.toString();
            
            do {
                var m = re.exec(content);
                if (m) {
                    if (count++ > max) break;
                    getUrl(count, m[1]);
                }
            } while (m && count < max);
        });
    });
});