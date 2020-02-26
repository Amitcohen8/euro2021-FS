import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './GroupTable.scss'
import TableRow from './TableRow'

const GroupTable = (props) => {
  let teamsA = props.scores.groups.a.teams;
  let teamsB = props.scores.groups.b.teams;
  let teamsC = props.scores.groups.c.teams;
  let teamsD = props.scores.groups.d.teams;
  let teamsE = props.scores.groups.e.teams;
  let teamsF = props.scores.groups.f.teams;



  const standingA = teamsA.map((item, index) => <TableRow key={index} {...item} g="A"  />)
  const standingB = teamsB.map((item, index) => <TableRow key={index} {...item} g="B"/>)
  const standingC = teamsC.map((item, index) => <TableRow key={index} {...item} g="C" />)
  const standingD = teamsD.map((item, index) => <TableRow key={index} {...item} g="D"/>)
  const standingE = teamsE.map((item, index) => <TableRow key={index} {...item} g="E" />)
  const standingF = teamsF.map((item, index) => <TableRow key={index} {...item} g="F" />)


  const tableFrame = { border: 'solid', borderColor: '#D2D3CC', borderWidth: '2px' }

  return (
    <div className="table">
      <Table striped bordered>
        <thead>
          <tr>
           
           
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GS</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <>
          <tbody style={tableFrame}>

            {standingA}

          </tbody>
          <tbody style={tableFrame}>
            {standingB}
          </tbody >
          <tbody style={tableFrame}>
            {standingC}
          </tbody >
          <tbody style={tableFrame}>
            {standingD}
          </tbody >
          <tbody style={tableFrame}>
            {standingE}
          </tbody >
          <tbody style={tableFrame}>
            {standingF}
          </tbody >
        </>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    scores: state.scores,
  }
}
export default connect(mapStateToProps)(GroupTable)