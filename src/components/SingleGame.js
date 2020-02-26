import React from 'react'
import { connect } from 'react-redux'
const SingleGame = (props) => {
  return (
    <div className="form-group d-flex flex-sm-row justify-content-center">
      <p>{props.num}</p>
      <p>{props.home}</p>
      <input type="number" min="0" max="9" className="form-control form-control-sm" onChange={e => {
                                                    props.changeScores(props.index, props.home, Number(e.target.value),'h',props.away,props.gr)
                                                   }
                                                     }/>
      <input type="number" min="0" max="9" className="form-control form-control-sm" onChange={e => {
      props.changeScores(props.index, props.away, Number(e.target.value),'a',props.home,props.gr)
     }
      } />
      <p>{props.away}</p>
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