// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
const auth = require("../middleWare/auth");
const authAdmin = require("../middleWare/authAdmin");
const fs = require("fs");

//Upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//Upload image only admin can use
router.post("/upload", auth, authAdmin, (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).send("No files were uploaded.");

    const { file } = req.files;

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect!" });
    }
    //if file size > 2MB
    if (file.size > 1024 * 1024 * 2) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large!" });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "E-commerce" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
