import React, { Component } from 'react'
import store from './store'
import TodoListUI from './TodoListUI'


import{changInputValueAction,addItemAction,delItemAction,getTodoList} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState());
        this.state = store.getState()
        this.changInputValue = this.changInputValue.bind(this)
        this.clickbtn=this.clickbtn.bind(this)
        // this.clickdel=this.clickdel.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)

    }

    storeChange(){
        this.setState(store.getState())
    }

    changInputValue(e) {
        const action = changInputValueAction(e.target.value)
        store.dispatch(action)

    }
    clickbtn(){
        const action= addItemAction()
        store.dispatch(action)
    }

    clickdel(index){
        const action=delItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        const action=getTodoList()
        store.dispatch(action)
    }

    render() {
        return (
        <TodoListUI
            inputValue={this.state.inputValue}
            changInputValue={this.changInputValue}
            clickbtn={this.clickbtn}
            list={this.state.list}
            clickdel={this.clickdel}
        />);
    }
}

export default TodoList;


