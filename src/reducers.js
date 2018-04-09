import {SET_SEARCH_TERM, LOAD_DATA, ERR} from './actions';


const DEFAULT_STATE={
  err:null,
  items:[],
  searchTerm:''
};

// a subreducer, (state,action) ->  changed state
const setSearchTerm =(state,action)=>{
  Object.assign({},state,{searchTerm:action.payload});
};

const loadData =(state,action)=>{
  Object.assign({},state,{items:action.payload});
};
const err =(state,action)=>{
  Object.assign({},state,{err:action.payload});
};

const rootReducer =(state=DEFAULT_STATE, action)=>{
  switch(action.type){
    case SET_SEARCH_TERM:
      return setSearchTerm(state,action);
    case LOAD_DATA:
      return loadData(state,action);
    case ERR:
      return err(state,action);
    default:
      return state;
  }
}

export default rootReducer;
