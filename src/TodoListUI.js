import React  from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI=(props)=>{
    return (
        <div style={{ margin: '30px 10px' }}>
        <div>
            <Input
                placeholder="write Something"
                style={{ width: '250px', marginRight: '10px' }}
                onChange={props.changInputValue}
                value={props.inputValue}
            />
            <Button type="primary"  onClick={props.clickbtn}>Add</Button>
        </div>
        <div style={{ width: '300px', marginTop: '10px' }}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index)=> (<List.Item onClick={props.clickdel.bind(item,index)} >{item}</List.Item>)}
             />
        </div>
    </div>
     );
}

export default TodoListUI;