import React, {Component} from 'react';

const divWithColor=number=>{
  return (
    <div key={number}>number:{number}</div>
  );
}


class Generator extends Component{
  constructor (){
    super();
    this.state={
      seq:[],
      next:0,
    }
  }
  generate(len){
    console.log('generate',this.state.seq);
    let res=[];
    while (res.length<len){
      let n = Math.floor(Math.random()*100);
      if (res.indexOf(n)<0) {res.push(n)}
    }
    return res;
  }

  componentWillMount(){
    if (!this.state.seq.length){
      this.setState((prevState)=>({seq:this.generate(10)}))
      }
  }


  componentDidMount(){
    setTimeout(()=>{
      let {next} = this.state;
      console.log(next)
      this.setState((state)=>({next:(next+1)}))
    },1000)
  }
  render(){
    let {seq,next} = this.state;
    return (
      <div>
        {seq.slice(0,next).map(d=>d)}
      </div>
    )
  }
}



export default Generator;
