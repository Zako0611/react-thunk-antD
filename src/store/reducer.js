import{CHANGE_INPUT_VALUE,ADD_ITEM,DEL_ITEM,GET_LIST} from './actionTypes'
const defaultState = {
    inputValue:"",
    list:[]
}

export default (state = defaultState, action) => {
    // console.log(state,action)
    // Reducer只能接收state，不能改变state

    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }

    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        if(newState.inputValue === ""){
            return state
        }else{
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
    }
    if(action.type === DEL_ITEM){
        // console.log(action);
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action.data);
        newState = action.data.data
        return newState
    }

    return state
}