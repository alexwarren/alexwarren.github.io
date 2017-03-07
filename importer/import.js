// usage:
//    node import.js wordpress_export_file.xml

var xmlFile = process.argv[2];

var fs = require("fs");

var parseString = require("xml2js").parseString;
var xml = fs.readFileSync(xmlFile);

parseString(xml, function (err, result) {
    result.rss.channel[0].item.forEach(function(element) {
        var postType = element["wp:post_type"][0];
        if (postType !== "page" && postType !== "post") return;
        
        console.log(element.title[0]);
        console.log(element["wp:post_date"][0]);
        console.log(element["wp:post_name"][0]);
        console.log(element["wp:post_type"][0]);

        //console.log(element);
        console.log("\n\n");
    }, this);
});