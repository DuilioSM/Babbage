import React from 'react'
import Cisco from '../components/Cisco'
import Croquis from '../components/Croquis'
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
      <Croquis/>
    </>
  )
}

export default Projects