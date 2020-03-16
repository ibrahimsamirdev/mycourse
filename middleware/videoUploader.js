const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/videos/')
    },
    filename: function (req, file, cb) {
        let filetype = '';
        if(file.mimetype === 'file') {
            filetype = 'mp4';
        }
        cb(null, Math.floor(new Date() / 1000) + '.' + filetype )
    }
  })
   
module.exports.videoUploader = multer({ storage: storage, limits:{fileSize:31457280} })

