var fs = require("fs");
var http = require("follow-redirects").http;

var re = /(https?:[^\s"\<]+)/g;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var getUrl = function (c, url, file) {
    console.log(`${c} QUEUE ${url}`);
    setTimeout(function () {
        try {
            console.log(`${c} GET ${url}`);
            //console.log(`${c} ${url}`);
            http.get(url, (res) => {
                const statusCode = res.statusCode;
                const contentType = res.headers['content-type'];

                console.log(`${c} RESPONSE (${statusCode}, ${contentType}) ${url}`);

                if (statusCode !== 200) {
                    //console.log(`${c} ${statusCode} ${url}`);
                    // consume response data to free up memory
                    res.resume();
                    return;
                }

                if (!/^image\//.test(contentType)) {
                    //console.log(`${c} ${contentType} ${url}`);
                    // consume response data to free up memory
                    res.resume();
                    return;
                }

                //console.log(`${c} FETCHING ${url}`);

                let rawData = [];
                res.on('data', (chunk) => {
                    //console.log(`${c} got data`);
                    rawData.push(chunk)
                });
                res.on('end', () => {
                    var buffer = Buffer.concat(rawData);
                    //console.log(buffer.toString('base64'));
                    console.log(`${url} SUCCESS for ${file}`);

                    var year = file.substr(10, 4);
                    var filename = `/images/${year}/` + url.replace(/https?:\/\//, "").replace(/\//g, "-");

                    fs.writeFileSync(".." + filename, buffer);

                    var content = fs.readFileSync(file).toString();
                    content = content.replaceAll(url, filename);
                    fs.writeFileSync(file, content);
                });
            }).on('error', (e) => {
                //console.log(`${url} Got error: ${e.message}`);
            });
        }
        catch (e) {
            //console.log(`${c} ERROR ${e}`);
        }
    }, c * 200);
}

var count = 0;

fs.readdir("../_posts", (err, files) => {
    files.forEach(filename => {
        var file = "../_posts/" + filename;
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            var content = data.toString();
            
            do {
                var m = re.exec(content);
                if (m) {
                    count++;
                    getUrl(count, m[1], file);
                }
            } while (m);
        });
    });
});