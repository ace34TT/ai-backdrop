import { ColorRing } from "react-loader-spinner";

const LoadingScreen = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="top-0 left-0 fixed flex items-center justify-center bg-white h-screen w-screen z-50">
          <div className="flex h-full flex-col justify-center items-center relative">
            <span className="text-5xl">
              <span className="font-extrabold">AI</span> Backdrop
            </span>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#3FA57D", "#3FA57D", "#3FA57D", "#3FA57D", "#3FA57D"]}
            />
            {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-5">
                <span className="font-light text-2xl">By</span>
                <img src={Logo} className="m-0 p-0 w-36 h-auto" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
