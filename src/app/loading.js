import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center">
      <img className="h-96" src="spinner.svg" alt="loading..." />
    </div>
  );
}

export default Loading;
