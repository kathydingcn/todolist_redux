import React from 'react';
import {connect} from 'react-redux';
class TodoList extends React.Component{
    render(){
        return(
            <ul className="list-group">
                {/* <li className="list-group-item">Study React</li> */}
                {this.props.todos.map((item,index)=>(
                    <li className="list-group-item" key={index}>
                        <input type="checkbox"/>
                        {item.title}
                        <span className="pull-right"><button className="btn btn-danger">X</button></span>
                    </li>
                ))}
            </ul>
        )
    }
}

//map dispatch to props
//map state to props, 获取状态，以用来在页面中渲染。
export default connect(
    state=>({todos:state.todos}),
    dispatch => (
        {}
    )
)(TodoList);