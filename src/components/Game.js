import React from 'react';
import { connect } from 'react-redux'
import countries from '../utils/countries'
// import './Game.scss'
import '../App.scss'
import '../index.css'
import './SingleGame'

import SingleGame from './SingleGame';

const Games = (props) => {
  const {a,b,c,d,e,f,r16,qf,sf,final} = props.scores
  const resultsA = a.results;
  const resultsB = b.results;
  const resultsC = c.results;
  const resultsD = d.results;
  const resultsE = e.results;
  const resultsF = f.results;
  const groupsResults = [...resultsA,...resultsB,...resultsC,...resultsD,...resultsE,...resultsF]
  groupsResults.sort((a,b)=>a.num-b.num)
  const resultsR16 = r16.results;
  const resultsQF = qf.results;
  const resultsSF = sf.results;
  const resultsFinal = final.results;
 
  const GroupFixtures = groupsResults.map((game)=>{
    return <SingleGame key={game.num} home={game.home} away={game.away}  gr={game.gr} num={game.num}/>
  })
// const fixturesA = resultsA.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'a'} num={team.num}/>
// })
// const fixturesB = resultsB.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'b'} num={team.num}/>
// })
// const fixturesC = resultsC.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'c'} num={team.num}/>
// })
// const fixturesD = resultsD.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'d'} num={team.num}/>
// })
// const fixturesE = resultsE.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'e'} num={team.num}/>
// })
// const fixturesF = resultsF.map((team,index)=>{
//   return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'f'} num={team.num}/>
// })
const fixturesR16 = resultsR16.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'r16'} num={team.num}/>
})
const fixturesQF = resultsQF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'qf'} num={team.num}/>
})
const fixturesSF = resultsSF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'sf'} num={team.num}/>
})
const fixturesFinal = resultsFinal.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'final'} num={team.num}/>
})

const {winner} = props.scores.final.results[0];
const winnerFlag = countries[winner] ? `https://www.countryflags.io/${countries[winner]}/flat/64.png` :  <div/>;
  return (
<div className="game-form">
    <form>
    <h2>Group stage</h2>
    {GroupFixtures}
    {/* {fixturesA}
    {fixturesB}
    {fixturesC}
    {fixturesD}
    {fixturesE}
    {fixturesF} */}
    <h2>Round of 16</h2>
    {fixturesR16}
    <h2>Quarter-Finals</h2>
    {fixturesQF}
    <h2>Semi-Finals</h2>
    {fixturesSF}
    <h2>Final</h2>
    {fixturesFinal}
    {countries[winner] ? 
    <>
    <h2>Winner</h2>
    <div className="winner">
    <img src={winnerFlag} alt="winner flag" />
    <p>{winner}</p>
    
    </div>
    </>
    : 
    <div/> }
    <a>Submit</a>
    </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    scores: state.scores.groups
  }
}
export default connect(mapStateToProps)(Games)