import React from 'react'
import countries from '../utils/countries'
import { connect } from 'react-redux'
const SingleGame = (props) => {
  const homeFlag = countries[props.home] ? `https://www.countryflags.io/${countries[props.home]}/flat/64.png` :  `https://www.countryflags.io/${countries['None']}/flat/64.png`;
  const awayFlag =  countries[props.away] ? `https://www.countryflags.io/${countries[props.away]}/flat/64.png` : `https://www.countryflags.io/${countries['None']}/flat/64.png`;
  return (
    <div className="form-group d-flex flex-sm-row justify-content-center">
      <p>{props.num}</p>
     <p><img src={homeFlag}/></p>
      <p>{props.home}</p>
      <input type="number" min="0" max="9" maxLength="1" className="form-control form-control-sm" onChange={e => {
                                                    props.changeScores(props.index, props.home, Number(e.target.value),'h',props.away,props.gr)
                                                   }
                                                     }/>
      <input type="number" min="0" max="9" className="form-control form-control-sm" onChange={e => {
      props.changeScores(props.index, props.away, Number(e.target.value),'a',props.home,props.gr)
     }
      } />
      <p>{props.away}</p>
      <p><img src={awayFlag} alt="flag"/></p>
    </div>
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
   

  }
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)