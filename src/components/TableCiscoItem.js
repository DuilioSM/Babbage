import React from "react";

function TableCiscoItem({info}) {
  return (
    <tr className="text-center">
      <td className="py-2 border-4 border-offWhite bg-blueGray">{info.device}</td>
      <td className="py-2 border-4 border-offWhite bg-blueGray">{info.direction}</td>
      <td className="py-2 border-4 border-offWhite bg-blueGray">{info.gateway}</td>
      <td className="py-2 border-4 border-offWhite bg-blueGray">{info.interface}</td>
      <td className="py-2 border-4 border-offWhite bg-blueGray">{info.mask}</td>
    </tr> 
  );
}

export default TableCiscoItem;
