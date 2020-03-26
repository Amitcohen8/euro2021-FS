import React from 'react'
import { connect } from 'react-redux'
import countries from '../utils/countries'
const TableRow = (props) => {
  const {team,p,w,d,l,gs,ga,gd,pts,results} = props
  const r16Teams = [];
results.forEach(item=>{
if(countries[item.home])r16Teams.push(item.home)
if(countries[item.away])r16Teams.push(item.away)

  
})
const isQualified = r16Teams.includes(team)
  return (

    <>
    
      <tr className="success">
        <td onClick={()=>console.log(isQualified)}>{team}</td>
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
    results: state.scores.groups.r16.results,
  }
}
export default connect(mapStateToProps)(TableRow)