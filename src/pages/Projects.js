import React from "react";
import Budget from "../components/Budget";
import Cisco from "../components/Cisco";
import Croquis from "../components/Croquis";
import DownloadJava from "../components/DownloadJava";
import Gantt from "../components/Gantt";
import Problem from "../components/Problem";
import TableCisco from "../components/TableCisco";
import WebApp from "../components/WebApp";

function Projects() {
  return (
    <>
      <Problem />
      <Croquis />
      <Budget />
      <WebApp />
      <TableCisco />
      <Cisco />
      <Gantt />
      <DownloadJava />
    </>
  );
}

export default Projects;
