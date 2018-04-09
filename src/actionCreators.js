import {SET_SEARCH_TERM, LOAD_DATA, ERR} from './actions';

export function setSearchTerm(searchTerm){
  return {type:SET_SEARCH_TERM, payload: searchTerm}
}



export function loadData(data){
  return {type:LOAD_DATA, payload:data}
}

export function errAc(err){
  return {type:ERR, payload:err}
}
