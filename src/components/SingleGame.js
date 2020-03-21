import React from 'react'
import countries from '../utils/countries'
import { connect } from 'react-redux'
import { useState } from 'react'
const SingleGame = (props) => {

const [input,setInput] = useState({
  homeInput:"",
  awayInput:"",
homeInputP:"",
awayInputP:""
})
const [isValid,setIsValid] = useState({
  game:true,
  gamePenalty:true
} )
const {game,gamePenalty} = isValid;
const { homeInput,awayInput,homeInputP,awayInputP } = input;
const {home,away,gr,num,changeScores,penalty,evalR16} = props
const {results} = props.scores[gr];
const isPenalty = props.scores.penalty[num]
// const gameIndex = results.findIndex(game=>game.num === props.num);
// const {isActive} = results[gameIndex].penalty
const intValidation = "return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));";
const inputValidation = (e) => {
if(e.target.value < 0 || e.target.value > 9 || Number.isInteger(e.target.value) || isNaN(e.target.value)){
setInput({[e.target.name]:""})
setIsValid({game:false})
} 
else {
  if(game === false){setIsValid({game:true})}
  setInput({[e.target.name]:e.target.value})
}
}

const validEmptyString = (e) =>{
  if(e.target.value === ''){
return null
  } else {
    return Number(e.target.value)
  }
}
const drawValidation= (e) =>{
  setInput({[e.target.name]:e.target.value})
let penaltyScore;
if(e.target.name === "homeInputP" ){
  penaltyScore=e.target.value-awayInputP;
}else{
  penaltyScore=homeInputP-e.target.value;
}

if(penaltyScore === 0 ) {
  setIsValid({gamePenalty:false})
setInput({[e.target.name]:""})
}
else if(gamePenalty === false) {setIsValid({gamePenalty:true})}
}
  const homeFlag = countries[home] ? `https://www.countryflags.io/${countries[home]}/flat/48.png` :  `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  const awayFlag =  countries[away] ? `https://www.countryflags.io/${countries[away]}/flat/48.png` : `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  return (
    <>
    {/* <div className="form-group d-flex flex-sm-row justify-content-center"> */}
    <div className="form-group">
      <p>{num}</p>
      
     <p><img src={homeFlag}/></p>
      <p>{home}</p>
      
      <input  type="text" onkeypress={intValidation}  className="form-control home" name="homeInput" value={homeInput}
       onChange={e=>{inputValidation(e)}} 
        onBlur={e => {
                                                    if(game){ 
                                                      changeScores(num, home, validEmptyString(e),'h',away,gr)
                                                    evalR16()
                                                    }
                                                   }
                                                     } />
                                                    
      <input  type="text" onkeypress={intValidation} className="form-control away" name="awayInput" value={awayInput} 
        onChange={e=>{inputValidation(e)}} 
        onBlur={e => {
      if(game) { 
       changeScores(num, away, validEmptyString(e),'a',home,gr)
      evalR16()
       } 
     }
      } />
    
      <p>{away}</p>
      <p><img src={awayFlag} alt="flag"/></p>
      <p>{(gr).toUpperCase()}</p>
    </div>
    {isPenalty?
    <div className="form-group">
     <p>Penalty Shootout</p>
    <p><img src={homeFlag}/></p>
      <p>{home}</p>
      
    <input type="text" onkeypress={intValidation} className="form-control home" name="homeInputP" value={homeInputP} onChange={e=>{
     inputValidation(e)
      drawValidation(e)}}
      
       onBlur={e=>{if(gamePenalty&&game){ penalty(validEmptyString(e),num,'h',gr)}}} autoFocus/>
    <input type="text" onkeypress={intValidation} className="form-control away" name="awayInputP" value={awayInputP}
     onChange={e=>{drawValidation(e)
      inputValidation(e)
     }}
      onBlur={e=>{if(gamePenalty&&game){penalty(validEmptyString(e),num,'a',gr)}}} />
    <p>{away}</p>
    <p><img src={awayFlag} alt="flag"/></p>
    <p>{gr.toUpperCase()}</p>
    </div>
    
     : <div/>
    }
    {!gamePenalty ? <p className="validation-comment">Penalty score can't be draw</p> : <div/>}
    {!game ? <p className="validation-comment">The value must be between 0 to 9</p> : <div/>}
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changeScores: (index, team, score,side,opponent,gr) => dispatch({
      type: 'CHANGE_SCORE',
       index,
      team,
      score,
     side,
     opponent,
     gr
    }),
    evalR16: () => dispatch({
      type: 'EVAL_R16',
    }),
    penalty: (goal,gameNumber,s,stage) => dispatch({
      type: 'PENALTY',
      goal,gameNumber,s,stage
    }),

  }
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores.groups
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)