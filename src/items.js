import React,{Component} from 'react';
import SearchBar from './searchBar'
class items extends Component {
  constructor(props){
    super(props);
    this.state={
      err: null,
      isLoaded:false,
      items:[],
      searchTerm:'',
    }
    this.setSearchTerm= this.setSearchTerm.bind(this);
  }
  setSearchTerm(event){
    this.setState({searchTerm:event.target.value})
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json")
    .then(res=>res.json())
    .then(
      (result)=>{
        console.log(result)
        this.setState({
          isLoaded:true,
          items:result.Reggae
        })
      }
      ,
      (err)=>this.setState({err})
    )
  }

  render(){
    const {err,isLoaded,items,searchTerm} = this.state;
    const matchedItems = [...new Set(items)].filter(item =>`${item}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >=0 );
    console.log("rerendering")
    if (err){
      return (<div>err </div>);
    } else if(!isLoaded){
      return (<div> loading </div>);
    } else {
      return (
        <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={this.setSearchTerm}/>
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

export default items;
