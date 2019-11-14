import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
})

export function addItemAction() {
    return ({
        type: ADD_ITEM
    })
}

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2api.taobao.org/app/mock/235937/example/1573109523197')
            .then((res) => {
                const action=getListAction(res.data)
                dispatch(action)
            })
    }

}