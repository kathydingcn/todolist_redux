import React from 'react';
import {connect} from 'react-redux';
import {ADD_TODO} from '../store/action_types';
// input then press enter, dispatch ADD_TODO 
 class TodoHeader extends React.Component{
    handleKeyDown=(event)=>{
        if((event.keyCode === 13) && event.target.value){
            let title = event.target.value;
            this.props.addTodo(title);
            event.target.value='';
        }
    }
    render(){
        return(
             
               <input type="text" className="form-control" onKeyDown={this.handleKeyDown}/> 
             
        )
    }
}
//map dispatch to props，下面用到
//map state to props, 获取状态，以用来在页面中渲染。
export default connect(
    state=>({}),
    dispatch => ({
        addTodo:(title)=>dispatch({type:ADD_TODO, title})
    })
)(TodoHeader);