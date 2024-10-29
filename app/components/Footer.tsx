import React from "react";

export default function Footer() {
  return (
    <div className="relative h-[80vh] w-full ">
      <footer className="bg-[#101010] font-clash  text-white w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center  justify-center w-screen gap-5">
          <h1 className="text-[15rem] font-wig">CB Digital</h1>
          <span className="w-1/2 h-1 bg-white"></span>
          <p className="text-sm">© 2021 CB Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
