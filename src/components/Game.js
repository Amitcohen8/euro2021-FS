import React, {useState} from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';
import GroupTable from './GroupTable';
import './Game.scss'
import '../App.scss'
import '../index.css'
import './SingleGame'
import { Form, Col, Row } from 'react-bootstrap'
import SingleGame from './SingleGame';

const Games = (props) => {
  const resultsA = props.scores.groups.a.results;
  const resultsB = props.scores.groups.b.results;
  const resultsC = props.scores.groups.c.results;
  const resultsD = props.scores.groups.d.results;
  const resultsE = props.scores.groups.e.results;
  const resultsF = props.scores.groups.f.results;
 
 
const fixturesA = resultsA.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'a'}/>
})
const fixturesB = resultsB.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'b'}/>
})
const fixturesC = resultsC.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'c'}/>
})
const fixturesD = resultsD.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'d'}/>
})
const fixturesE = resultsE.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'e'}/>
})
const fixturesF = resultsF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'f'}/>
})
  return (
<div className="game-form">
    <form>
    {fixturesA}
    {fixturesB}
    {fixturesC}
    {fixturesD}
    {fixturesE}
    {fixturesF}
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