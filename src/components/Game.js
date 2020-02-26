import React from 'react';
import { connect } from 'react-redux'

import './Game.scss'
import '../App.scss'
import '../index.css'
import './SingleGame'

import SingleGame from './SingleGame';

const Games = (props) => {
  const resultsA = props.scores.groups.a.results;
  const resultsB = props.scores.groups.b.results;
  const resultsC = props.scores.groups.c.results;
  const resultsD = props.scores.groups.d.results;
  const resultsE = props.scores.groups.e.results;
  const resultsF = props.scores.groups.f.results;
  const resultsR16 = props.scores.groups.r16.results;
  const resultsQF = props.scores.groups.qf.results;
  const resultsSF = props.scores.groups.sf.results;
  const resultsFinal = props.scores.groups.final.results;
 
const fixturesA = resultsA.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'a'} num={team.num}/>
})
const fixturesB = resultsB.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'b'} num={team.num}/>
})
const fixturesC = resultsC.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'c'} num={team.num}/>
})
const fixturesD = resultsD.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'d'} num={team.num}/>
})
const fixturesE = resultsE.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'e'} num={team.num}/>
})
const fixturesF = resultsF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'f'} num={team.num}/>
})
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
  return (
<div className="game-form">
    <form>
      <h2>Group stage</h2>
    {fixturesA}
    {fixturesB}
    {fixturesC}
    {fixturesD}
    {fixturesE}
    {fixturesF}
    <h2>Round of 16</h2>
    {fixturesR16}
    <h2>Quarter-Finals</h2>
    {fixturesQF}
    <h2>Semi-Finals</h2>
    {fixturesSF}
    <h2>Final</h2>
    {fixturesFinal}
    </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    scores: state.scores
  }
}
export default connect(mapStateToProps)(Games)