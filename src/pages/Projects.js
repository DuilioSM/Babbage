import React from 'react'
import BabbageAnimation from '../components/BabbageAnimation'
import Cisco from '../components/Cisco'
import Problem from '../components/Problem'
import TableCisco from '../components/TableCisco'
import WebApp from '../components/WebApp'

function Projects() {
  return (
    <>
      <Problem/>
      <WebApp/>
      <TableCisco/>
      <Cisco/>
      <BabbageAnimation/>
    </>
  )
}

export default Projects