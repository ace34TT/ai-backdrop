import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { generateImage } from "./../services/main.services";

export const Form = ({ isProcessing, setIsProcessing, setResult }) => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState(null);
  // !
  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);
  const onDropRejected = useCallback((fileRejections) => {
    fileRejections.forEach((fileRejection) => {
      fileRejection.errors.forEach((error) => {
        if (error.code === "file-too-large") {
          alert(`Error: ${error.message}`);
        }
      });
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: {
      "image/*": [],
    },
    minSize: 0,
    maxSize: 50 * 1024 * 1024,
    maxFiles: 1,
  });

  const handleGenerate = async () => {
    try {
      setIsProcessing(true);
      const _result = await generateImage(prompt, image);
      setResult(_result);
      setIsProcessing(false);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="max-w-xl h-full flex flex-col justify-between ">
        <div className="flex-none">
          <h1 className="text-center">Upload your product’s picture</h1>
          <p className="text-center">
            Visualize your product with a new perspective, with a modern design
          </p>
        </div>
        <div className="grow mt-10">
          <div>
            <label htmlFor="" className="font-bold">
              Prompt{" "}
            </label>
            <textarea
              className="w-full border-2 rounded-md p-2"
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="font-bold">
              Image{" "}
            </label>
            <div
              {...getRootProps()}
              className=" full border-dashed border-2 bg-white rounded-md border-accent-400 px-5 py-10 cursor-pointer hover:bg-accent-50"
            >
              <input {...getInputProps()} />
              {image ? (
                <div className="h-full w-full flex items-center justify-center font-bold">
                  <p>{image.name}</p>
                </div>
              ) : (
                <div className="h-full prose max-w-none flex flex-col items-center justify-center">
                  <button
                    className="rounded-xl font-semibold px-8 py-4 "
                    type="button"
                  >
                    Drop you file here <br /> or{" "}
                    <span className="font-normal text-blue-600 underline">
                      click to browse
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className={`block mx-auto mt-5 px-4 py-2 ${
              isProcessing || !image || !prompt
                ? "bg-neutral-500"
                : "bg-emerald-600"
            } text-white font-bold`}
            disabled={isProcessing || !image || !prompt}
            onClick={() => {
              handleGenerate();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
