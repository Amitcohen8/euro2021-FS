import React from 'react'
import { connect } from 'react-redux'
const TableRow = (props) => {

    // const {p,team,w,d,l,gs,ga,gd,pts} = props

    
    // let update = {};
// const teamGames = props.results.filter(result=>props.team === (result.home || result.away))
// const update = teamGames.reduce((a, b,c) => {
  
//     return ({gh: a.gh + b.gh,ga: a.ga + b.ga,p:c+1})})
// const update = () =>{
// const score = teamGames[0].gh-teamGames[0].ga;
// console.log('&&&&&',score)
// }

// if(teamGames.home === props.team){
//     const score = teamGames.gh-teamGames.ga; 
// update = {
//     p : 1,
// w: score > 0 ? 1 : 0,
// d: score === 0 ? 1 : 0,
// l: score < 0 ? 1 : 0,
// gs: teamGames.gh,
// ga: teamGames.ga,
// gd: score,
// }
// }else{
//     const score = teamGames.ga-teamGames.gh; 
//     update = {
//         p : 1,
//     w: score > 0 ? 1 : 0,
//     d: score === 0 ? 1 : 0,
//     l: score < 0 ? 1 : 0,
//     gs: teamGames.gh,
//     ga: teamGames.ga,
//     gd: score,
//     }
// }
    return(

        <>
      <tr>  
      
      <td onClick={()=>console.log('hhhhhhhh',props)}>{props.team}</td>
      <td>{props.p}</td>
      <td>{props.w}</td>
      <td>{props.d}</td>
      <td>{props.l}</td>
      <td>{props.gs}</td>
      <td>{props.ga}</td>
      <td>{props.gd}</td>
      <td>{props.pts}</td>
      {/* <td>1</td>
      <td >Italy</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td> */}
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