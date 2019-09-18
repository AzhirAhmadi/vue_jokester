import * as types from './mutation-types'

export const  initJokes = ({commit}) => {
    let fecths = []
    
    for(let i=0;i<10;i++){
        fecths.push(fetch('https://sv443.net/jokeapi/category/Any',{
            method: 'GET'
        }).then(response => response.json()))
    }
    let combinedData = [];
    Promise.all(fecths).then(function(values){
        for(let i=0;i<10;i++){
            combinedData.push(values[i])
        }
        commit(types.INIT_JOKES, combinedData)
    });
}

export const  addJoke = ({commit}) => {
    fetch('https://sv443.net/jokeapi/category/Any',{
        method: 'GET'
    }).then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const  removeJoke = ({commit}, index) => {
    commit(types.REMOVE_JOKE, index)
}