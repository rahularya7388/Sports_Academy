import multer from "multer";
import fs from 'fs';
import path from 'path';

// const folderPath = './public/pics';
const folderPath =path.resolve('public','pics')

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  
}

const storage = multer.diskStorage({
  destination: folderPath,
  filename: (request, file, cb) => {
    const ext = path.extname(file.originalname);              // e.g. ".jpg"
    const base = path.basename(file.originalname, ext);       // e.g. "photo"
    const uniqueSuffix = Date.now();                          // e.g. "1728473123123"
    cb(null, `${base}_${uniqueSuffix}${ext}`);                // -> "photo_1728473123123.jpg"
  }
});

export const imageUpload=multer({storage:storage}

).single("imageFile")//input type= file name="imageName" pass same name here

// export { imageUpload}
//export default image_upload