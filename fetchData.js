const cheerio = require("cheerio");
const request = require("request");

exports.fetchData = async (req, res, next) => {
  let data = [];
  let options = {
    headers: { "user-agent": "node.js" },
  };

  await new Promise((resolve, reject) => {
    request(
      "https://wealthygorilla.com/top-20-richest-people-world/",
      options,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(body);
          let people = [],
            netWorth = [],
            images = [];
          $("#mvp-content-wrap h2")
            .map(function (i, el) {
              people.push($(el).text());
            })
            .get();

          $("#mvp-content-wrap h3")
            .map(function (i, el) {
              netWorth.push($(el).text());
            })
            .get();

          $("p img.sp-no-webp")
            .map(function (i, el) {
              images.push($(el).attr("data-src"));
            })
            .get();

          netWorth.reverse();
          netWorth.splice(0, 2);
          netWorth.length = netWorth.length - 15;

          people.reverse();
          people.shift();
          people.length = people.length - 16;

          images.reverse();
          images.length = images.length - 15;

          for (let i = 0; i < 10; i++) {
            data.push({
              fullName: people[i].match(/[a-zA-Z" "]/g).join("").trim(),
              netWorth:
                parseInt(netWorth[i].match(/\d/g).join("")) * 100000000,
              imgSrc: images[i],
            });
          }
          console.log(data);
          resolve(data);
        } else {
          reject();
          throw new Error("Error on getting data...");
        }
      },
    );
  });

  res.json(data);
  next();
};
