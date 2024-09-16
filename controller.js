const multer = require('multer');
const path = require('path');
const Image=require('./Schema')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

// Initialize upload variable
const upload = multer({ storage: storage, fileFilter: imageFilter });
const exampleControllerMethod =async  function(req, res){
    // upload.array('images',10)(req, res, (err) => {
    //     if (err) {
    //         return res.status(400).send({ message: err.message });
    //     }
    //     console.log(req.files)
    //     console.log(Object.keys(req.files).length==0)
    //     if (req.file) {
    //         console.log(req.file,"ssksksksksks")
    //         return res.status(400).send({ message: 'Please upload an image' });
    //     }
    //     // File uploaded successfully
    //     res.status(200).send({ message: 'Image uploaded successfully', file: req.file });
    // });
    upload.any()(req, res, async(err) => {
        if (err) {
            return res.status(400).send({ message: err.message });
        }
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send({ message: 'Please upload images' });
        }
        const fileNames = req.files.map(file => file.filename);  // or file.path for full path

        try {
            const newImageEntry = new Image({
                title: req.body.title,   
                images: fileNames        
            });

            const savedEntry = await newImageEntry.save();

            res.status(200).send({
                message: 'Images uploaded and saved to the database successfully',
                data: savedEntry
            });
    } catch (dbError) {
        console.error('Error saving to the database:', dbError);
        res.status(500).send({ message: 'Error saving image data to the database' });
    }
});

};
module.exports={exampleControllerMethod};









