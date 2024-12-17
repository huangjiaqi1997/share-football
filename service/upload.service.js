const connection = require("../sql");

class UploadService {
  async insertAvatarFile(filename, mimetype, size, userId) {
    // const statement = "INSERT INTO file (filename, mimetype, size, userId) VALUES (?,?,?,?);";
    const statement =
      "INSERT INTO file (filename, mimetype, size) VALUES (?,?,?);";
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
    ]);
    return result;
  }
}

module.exports = new UploadService();
