import React from 'react'
import countries from '../utils/countries'
import { connect } from 'react-redux'
import { useState } from 'react'
const SingleGame = (props) => {

const [input,setInput] = useState({homeInput:"",awayInput:""})
const [isValid,setIsValid] = useState(true)
const { homeInput,awayInput } = input;

const inputValidation = (e) => {
if(e.target.value < 0 || e.target.value > 9 || Number.isInteger(e.target.value) || isNaN(e.target.value)){
setInput({[e.target.name]:""})
setIsValid(false)
} 
// else if(e.target.value === ""){
//   e.target.value = null
// }
else {
  if(isValid === false){setIsValid(true)}
  setInput({[e.target.name]:e.target.value})}
}

const validEmptyString = (e) =>{
  if(e.target.value === ''){
return null
  } else {
    return Number(e.target.value)
  }
}
  const homeFlag = countries[props.home] ? `https://www.countryflags.io/${countries[props.home]}/flat/48.png` :  `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  const awayFlag =  countries[props.away] ? `https://www.countryflags.io/${countries[props.away]}/flat/48.png` : `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  return (
    <>
    {/* <div className="form-group d-flex flex-sm-row justify-content-center"> */}
    <div className="form-group">
      <p>{props.num}</p>
      
     <p><img src={homeFlag}/></p>
      <p>{props.home}</p>
      <input type="number"  className="form-control home" name="homeInput" value={homeInput} onChange={e=>{inputValidation(e)}} onBlur={e => {
                                                    if(isValid){ 
                                                      props.changeScores(props.index, props.home, validEmptyString(e),'h',props.away,props.gr)
                                                    props.evalR16()}
                                                   }
                                                     } />
                                                    
      <input type="number" className="form-control away" name="awayInput" value={awayInput}  onChange={e=>{inputValidation(e)}} onBlur={e => {
     if(isValid) {props.changeScores(props.index, props.away, validEmptyString(e),'a',props.home,props.gr)
      props.evalR16()}
     }
      } />
      <p>{props.away}</p>
      <p><img src={awayFlag} alt="flag"/></p>
      <p>{(props.gr).toUpperCase()}</p>
    </div>
    {!isValid ? <p className="validation-comment">The value must be between 0 to 9</p> : <div/>}
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

  }
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)