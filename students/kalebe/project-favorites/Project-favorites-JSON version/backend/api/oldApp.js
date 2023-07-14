const http = require("http");
const URL = require("url");
const fs = require("fs");
const path = require("path");
const data = require("./urls.json");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Headers": "*",
    });

    if (req.method === "POST") {
      let Mybody = "";
      req.on("data", (chunk) => {
        Mybody += chunk.toString();
      });

      req.on("end", () => {
        let arrayJson = new Array();
        arrayJson.push(JSON.parse(Mybody));
        arrayJson.push(data);

        fs.writeFile(
          path.join(__dirname, "urls.json"),
          JSON.stringify(arrayJson, null, 2),
          (err) => {
            if (err) throw err;
            res.end(
              "Operação realizada com sucesso! " + JSON.stringify(newData)
            );
          }
        );
      });
    }

    const { name, url, del } = URL.parse(req.url, true).query;

    if (!name || !url) {
      return res.end(JSON.stringify(data));
    }
    if (del) {
      data.urls = data.urls.filter((item) => item.url != url);
      return res.end("Apagado " + data.urls);
    }

    return fs.writeFile(
      path.join(__dirname, "urls.json"),
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) throw err;
        res.end("Operação realizada com sucesso! " + JSON.stringify(data));
      }
    );
  })
  .listen(5000, () => {
    console.log("Api rodando ");
  });
