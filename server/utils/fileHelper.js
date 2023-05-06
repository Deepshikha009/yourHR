const fs = require('fs');

const removeFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to remove file');
    }
  });
};

module.exports = { removeFile };
