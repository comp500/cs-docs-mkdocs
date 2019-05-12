const walk = require("walk");
const fs = require("fs");
const AsciiMathParser = require("esm")(module)("asciimath2tex");
const parser = new AsciiMathParser.default();
const katex = require("katex");
const path = require("path");
const entities = new require("html-entities").AllHtmlEntities;
const minify = require("html-minifier").minify;

let walker = walk.walk("./site");

const katexSrc = /{% block extrahead %}\s*([\s\S]+?)\s*{% endblock %}/
	.exec(fs.readFileSync("./theme/main.html", "utf8"))[1]
	.replace(/\r\n/g, "\n");

walker.on("file", function(root, fileStats, next) {
	if (!fileStats.name.endsWith(".html")) {
		next();
		return;
	}
	fs.readFile(path.join(root, fileStats.name), "utf8", (err, data) => {
		if (err != null) {
			next();
			return;
		}
		let replaced = false;
		data = data.replace(/`([^`]+?)`/g, (math, mathTrimmed) => {
			replaced = true;
			//console.log(entities.decode(mathTrimmed));
			const tex = parser.parse(entities.decode(mathTrimmed));
			//console.log(tex);
			return katex.renderToString(tex, {
				throwOnError: true
			});
		});
		if (!replaced) {
			// Remove KaTeX CSS
			data = data.replace(katexSrc, "");
		}
		data = minify(data, {
			collapseWhitespace: true,
			preserveLineBreaks: true,
			removeComments: true
		});
		console.log(path.join(root, fileStats.name));
		fs.writeFileSync(path.join(root, fileStats.name), data);
		next();
	});
});

walker.on("errors", function(root, nodeStatsArray, next) {
	next();
});

walker.on("end", function() {
	console.log("all done");
});
