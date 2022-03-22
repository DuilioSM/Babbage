import React from "react";

function ValueItem({ img, title, text }) {
  return (
    <div className="flex items-center justify-start w-fit">
      <img alt={title} src={img} className="w-20 md:w-24" />
      <div className="pl-6">
        <h5 className="text-xl font-extrabold leading-tight tracking-widest text-highRed">{title}</h5>
        <p className="pt-4 text-grayText text-sm font-normal  leading-snug tracking-widest">{text}</p>
      </div>
    </div>
  );
}

export default ValueItem;
