import React from 'react';
import './App.css';
import Title from './title/title'
import CountDown from './countdown/CountDown'
import Controlar from './controlar/controlar'
import Laps from './laps/lap'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      time:{
        minit:0,
        sec:0,
        mili:0,
      },
      lap:[]
    }

  }

  getStart(){
    this.intervalID=setInterval(() => {
      let minit=this.state.time.minit
      let sec=this.state.time.sec
      let mili=this.state.time.mili

      if(mili>=10){
        sec=sec+1
        mili=0
      }
      if(sec>=60){
        minit=minit+1
        sec=0
      }
      this.setState({
        ...this.state,
       time:{
        minit,
        sec,
        mili:mili+1
       }
      })

    },100)

  }

  getPause(){
    clearInterval(this.intervalID)
  }

  getLap(){
    let time={
      ...this.state.time
    }
    this.setState({
      ...this.state,
      lap:[time, ...this.state.lap]
    })

  }
  getReset(){
    this.setState({
      time:{
        minit:0,
        sec:0,
        mili:0,
      },
      lap:[]
    })
  }

render(){

  return (
    <div className="App">
      <div className="container py-5">
      <div className="row">
    <div className="col-sm-8 offset-sm-2">
    <Title />
    <CountDown time={this.state.time} />
    <Controlar 
      start={this.getStart.bind(this)}
      pause={this.getPause.bind(this)}
      reset={this.getReset.bind(this)}
      lap={this.getLap.bind(this)}
    /> 
    <Laps className="my-5" lap={this.state.lap} />
    </div>

      </div>
    
    
      
      </div>

    </div>
  );
}
}

export default App;
