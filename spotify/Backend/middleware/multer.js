const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/'); // Folder to store files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Add timestamp to avoid overwriting
    },
  });

  const upload = multer({
    storage : storage,
  })

  module.exports = upload;