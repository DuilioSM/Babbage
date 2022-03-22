import React from "react";
import TableCiscoItem from "./TableCiscoItem";

const infomation = [
  {
    device: "Router 1",
    interface: "g0/0",
    direction: "192.168.1.1",
    mask: "255.255.255.0",
    gateway: "192.168.1.8",
  },
  {
    device: "Switch 1",
    interface: "f0/5",
    direction: "192.168.1.7",
    mask: "255.255.255.0",
    gateway: "192.168.1.9",
  },
  {
    device: "Server 1",
    interface: "f0",
    direction: "192.168.1.6",
    mask: "255.255.255.0",
    gateway: "192.168.1.10",
  },
  {
    device: "PC0",
    interface: "f0",
    direction: "192.168.1.2",
    mask: "255.255.255.0",
    gateway: "192.168.1.12",
  },
  {
    device: "PC1",
    interface: "f0",
    direction: "192.168.1.3",
    mask: "255.255.255.0",
    gateway: "192.168.1.12",
  },
  {
    device: "PC2",
    interface: "f0",
    direction: "192.168.1.4",
    mask: "255.255.255.0",
    gateway: "192.168.1.13",
  },
  {
    device: "PC3",
    interface: "f0",
    direction: "192.168.1.5",
    mask: "255.255.255.0",
    gateway: "192.168.1.14",
  },
  {
    device: "Cloud",
    interface: "s0",
    direction: "128.1.1.1",
    mask: "255.255.255.0",
    gateway: "192.168.1.15",
  },
];

function TableCisco() {
  return (
    <div className="w-full flex justify-center pb-20 bg-blueGray md:">
      <table className="shadow-item w-screen md:w-auto">
        <caption className="text-3xl py-5 font-extrabold leading-tight tracking-wider">
          Tabla de ruteo
        </caption>
        <thead className="w-full text-xs">
          <tr className=" bg-grayText text-offWhite  ">
            <th className="border-r-2 border-offWhite md:border-r-4 md:px-5 md:py-2">Dispositivo</th>
            <th className="border-r-2 border-offWhite md:border-r-4 md:px-5 md:py-2">Interfaz</th>
            <th className="border-r-2 border-offWhite md:border-r-4 md:px-5 md:py-2">Dirección IP</th>
            <th className="border-r-2 border-offWhite md:border-r-4 md:px-5 md:py-2">Máscara de subred</th>
            <th className=" border-offWhite md:px-5 md:py-2">Gateway predeterminado</th>
          </tr>
        </thead>
        <tbody className="w-full text-xs">
          {infomation.map((info) => (
            <TableCiscoItem info={info} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCisco;
