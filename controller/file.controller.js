const fs = require("node:fs");

class FileController {
  async read(ctx) {
    const { filename, mimetype } = ctx.fileInfo;
    console.log(filename, mimetype);
    ctx.set("Content-Type", mimetype);
    ctx.body = fs.createReadStream(`./uploads/${filename}`);
    // ctx.body = "file";
  }
}

module.exports = new FileController();
