import { useState } from "react";
import { Form } from "./Form";
import Result from "./Result";
import LoadingScreen from "./../components/LoadingScreen";

const MainPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  return (
    <>
      <LoadingScreen isLoading={isProcessing} />
      <div className="h-screen max-h-screen">
        {/* <Header /> */}
        <div
          className={`prose py-20 ${
            result ? "w-full max-w-none px-10 flex justify-center" : "mx-auto"
          }  h-full max-h-[calc(100%-80px)]`}
        >
          {result ? (
            <Result url={result} setResult={setResult} />
          ) : (
            <Form
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
              setResult={setResult}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
