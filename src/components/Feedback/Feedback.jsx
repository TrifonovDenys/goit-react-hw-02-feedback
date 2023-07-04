// import './Feedback.module.css'
import { Component } from 'react'

export class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  hendleGoodClick = () => this.setState((prevStage) => ({ good: prevStage.good + 1 }))
  hendleNeutralClick = () => this.setState((prevStage) => ({ neutral: prevStage.neutral + 1 }))
  hendleBadClick = () => this.setState((prevStage) => ({ bad: prevStage.bad + 1 }))
  // countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad 
  // countPositiveFeedbackPercentage = () => (this.state.good *100)/(this.state.good + this.state.neutral + this.state.bad)
  
  render() {
    return (
      <>
        <div><button id='1' className='' onClick={this.hendleGoodClick}>Good</button>   
        <button id='2' className='' onClick={this.hendleNeutralClick}>Neutral</button>
        <button id='3' className='' onClick={this.hendleBadClick}>Bad</button></div>
        
         
        <p id='1' className=''>Good: {this.state.good}</p>
        <p id='2' className=''>Neutral: {this.state.neutral}</p>
        <p id='3' className=''>Bad: {this.state.bad}</p>
        <p id='4' className=''>Total: { this.state.good + this.state.neutral + this.state.bad}</p>
        <p id='5' className=''>Positive: {(this.state.good *100)/(this.state.good + this.state.neutral + this.state.bad) }</p>
      </>
    )
  }
}