import React from "react";
import CiscoItemText from "./CiscoItemText";

function CiscoItem(props) {

  return (
      props.id === 1 ?
    <div className="flex justify-between px-20 py-10 ">
      <CiscoItemText {...props}/>
      <img className=" w-2/5 ml-10 border-none rounded-3xl shadow-item" src={props.img} alt={props.title} />
    </div>
    :
    <div className="flex justify-between px-20 py-10 bg-blueGray">
      <img className="w-2/5 mr-10 border-none rounded-3xl shadow-item" src={props.img} alt={props.title} />
      <CiscoItemText {...props}/>
    </div>
  );
}

export default CiscoItem;
