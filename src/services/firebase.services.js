import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { generateRandomString } from "./../helpers/file.helpers";
import { storage } from "./../configs/firebase.configs";

const folder = "ai-backdrop";
export const uploadFileSvc = async (/** @type {any} */ file) => {
  const randomFileName = generateRandomString(10);
  const fileExtension = file.name.split(".").pop();
  const storageRef = ref(
    storage,
    `${folder}/${randomFileName + "." + fileExtension}`
  );
  //   const resizedImage = await resizeImage(file);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        reject(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef);
          resolve({ url, filename: randomFileName + "." + fileExtension });
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};
export const deleteFileSvc = (/** @type {string} */ filename) => {
  const fileRef = ref(storage, folder + "/" + filename);
  deleteObject(fileRef);
};
