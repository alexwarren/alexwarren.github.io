// usage:
//    node import.js wordpress_export_file.xml

var xmlFile = process.argv[2];
var source = process.argv[3];

var fs = require("fs");

var parseString = require("xml2js").parseString;
var xml = fs.readFileSync(xmlFile);

var pad = function (n) {
    if (n > 9) return "" + n;
    return "0" + n;
};

parseString(xml, function (err, result) {
    result.rss.channel[0].item.forEach(function(element) {
        var get = function (attr) {
            return element[attr][0];
        };

        var postType = get("wp:post_type");
        if (postType !== "page" && postType !== "post") return;
        if (get("wp:status") !== "publish") return;
        
        console.log("\n\n");
        console.log(get("title"));
        console.log(get("wp:post_date"));
        console.log(get("wp:post_name"));   // slug
        //console.log(get("content:encoded"));

        console.log(element);

        var date = new Date(get("wp:post_date"));
        var filename = `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}-${get("wp:post_name")}.md`;
        var permalink = `/${date.getFullYear()}/${pad(date.getMonth()+1)}/${pad(date.getDate())}/${get("wp:post_name")}`;
        console.log(filename);
        console.log(permalink);

        var sourceYaml = "";

        if (source) {
            sourceYaml = `source: ${source}
sourceUrl: ${get("link")}
`;
        }

        var content = `---
layout: post
title: >
    ${get("title")}
permalink: ${permalink}
${sourceYaml}---
${get("content:encoded")}`;

        fs.writeFileSync(`../_posts/${filename}`, content);
    }, this);
});