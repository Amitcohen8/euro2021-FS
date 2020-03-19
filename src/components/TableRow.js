import React from 'react'
import { connect } from 'react-redux'
const TableRow = (props) => {
  const {team,p,w,d,l,gs,ga,gd,pts} = props

  return (

    <>
    
      <tr>
        <td>{team}</td>
        <td>{p}</td>
        <td>{w}</td>
        <td>{d}</td>
        <td>{l}</td>
        <td>{gs}</td>
        <td>{ga}</td>
        <td>{gd}</td>
        <td>{pts}</td>
      </tr>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores,
  }
}
export default connect(mapStateToProps)(TableRow)