import React from "react";

const Result = ({ url, setResult }) => {
  return (
    <div className="w-fit">
      <button className="font-bold" onClick={() => setResult(null)}>
        {"<"} back
      </button>
      <div className="w-full flex gap-5">
        <img
          src={url}
          className="w-[500px] h-[500px] rounded-lg object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Result;
