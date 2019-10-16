import { config, uploader } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
const { CLOUD_NAME, CLOUD_KEY, API_SECRET } = process.env;
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: API_SECRET
  });
  next();
};

export { cloudinaryConfig, uploader };
