import React,{Component} from 'react';
import SearchBar from './searchBar';
import {connect} from 'react-redux';
import {setSearchTerm,loadData,errAc} from './actionCreators'

class items extends Component {
  props:{
    err:null,
    items:[],
    searchTerm:'',
    handleInput:Function,
    handleData:Function,
    handleErr:Function
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json")
    .then(res=>res.json())
    .then(
      (data)=>{
        console.log(data);
        this.props.handleData(data);
      }
      ,
      (err)=>this.props.handleErr({err})
    )
  }

  render(){
    const matchedItems = [...new Set(this.props.items)].filter(item =>`${item}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >=0 );
    console.log("rerendering")
    if (this.props.err){
      return (<div>err </div>);
    } else if(!this.props.items.length){
      return (<div> loading </div>);
    } else {
      return (
        <div>
          <SearchBar searchTerm={this.props.searchTerm} setSearchTerm={this.props.handleInput}/>
          <ul>
            {matchedItems.map((item)=>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps =(state)=>({
  err:state.err,
  items:state.items,
  searchTerm:state.searchTerm
})

const mapDispatchToProps=(dispatch:Function)=>({
  handleInput(event){
    dispatch(setSearchTerm(event.target.value))
  },
  handleData(data){
    dispatch(loadData(data))
  },
  handleErr(err){
    dispatch(errAc(err))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(items);
