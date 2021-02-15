const fs = require("fs");
module.exports = function (mainDir, subDirs) {
  subDirs.forEach((item, index) => {
    fs.mkdir(
      `${__dirname}/../../${mainDir}/${item}`,
      { recursive: true },
      (err) => {
        if (err) throw err;
      }
    );
  });

  console.log("Created");
};
