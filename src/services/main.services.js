import { deleteFileSvc, uploadFileSvc } from "./firebase.services";
import axios from "axios";
export const generateImage = async (prompt, image) => {
  const file_fb_props = await uploadFileSvc(image);
  const response = await axios.post("/images/ai-backdrop", {
    prompt: prompt,
    image: file_fb_props.url,
  });
  deleteFileSvc(file_fb_props.filename);
  console.log(response.data);
  return response.data[1];
};
