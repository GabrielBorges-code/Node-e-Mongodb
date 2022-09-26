const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (e) => {
//     if(e) {
//         console.log(e)
//     } else {
//         console.log("pasta criada com sucesso")
//     }
// });

fs.writeFileSync(
  path.join(__dirname, "test", "test.js"),
  "console.log('Hello world!')",
  (e) => {
    if (e) {
      return console.log(e);
    } else {
      console.log("arquivo criado");
    }
  }
);

fs.appendFile(
  path.join(__dirname, "test", "test.js"),
  "console.log('new Hello world!')",
  (e) => {
    if (e) {
      return console.log(e);
    } else {
      console.log("arquivo criado");
    }
  }
);

fs.readFile(path.join(__dirname, "test", "test.js"), "utf8", (e, data) => {
  if(e) {
    return console.log(e)
  }

  console.log(data)
})
