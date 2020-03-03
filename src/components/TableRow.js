import React from 'react'
import { connect } from 'react-redux'
const TableRow = (props) => {


  return (

    <>
    
      <tr>
        <td>{props.team}</td>
        <td>{props.p}</td>
        <td>{props.w}</td>
        <td>{props.d}</td>
        <td>{props.l}</td>
        <td>{props.gs}</td>
        <td>{props.ga}</td>
        <td>{props.gd}</td>
        <td>{props.pts}</td>
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