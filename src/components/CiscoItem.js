import React from "react";
import CiscoItemText from "./CiscoItemText";

function CiscoItem(props) {

  return props.id === 1 ? (
    <div className="flex flex-col items-center px-5 py-10 md:justify-between md:px-20 md:flex-row">
      <CiscoItemText {...props} />
      <img
        className="md:w-2/5 mt-8 md:ml-10 border-none rounded-3xl shadow-item"
        src={props.img}
        alt={props.title}
      />
    </div>
  ) : (
    <div className="flex flex-col items-center px-5 py-10 bg-blueGray md:justify-between md:px-20 md:flex-row">
      <img
        className="md:w-2/5 mb-8 md:ml-10 border-none rounded-3xl shadow-item"
        src={props.img}
        alt={props.title}
      />
      <CiscoItemText {...props} />
    </div>
  );
}

export default CiscoItem;
