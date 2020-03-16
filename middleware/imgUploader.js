const multer  = require('multer')

const filter = function (req, file, cb) {
  if (
    !file.mimetype.includes("jpeg") &&
    !file.mimetype.includes("jpg") 
    // !file.mimetype.includes("png") &&
    // !file.mimetype.includes("gif")
  ) {
    return cb(null, false, new Error("Only jpg/jpeg images are allowed"));
  }
  cb(null, true);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/images/')
    },
    filename: function (req, file, cb) {
        let filetype = '';
        if(file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, Math.floor(new Date() / 1000) + '.' + filetype )
    }
  })
   
module.exports.imgUploader = multer({ storage: storage, limits:{fileSize:1048576}, fileFilter: filter})

