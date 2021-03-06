import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
import TodoHeader from './todoHeader';
import TodoFooter from './todoFooter';
import TodoList from './todoList';

export default class extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:10}}>
               <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                <div className="panel-heading">
                <TodoHeader/>
                </div>
                <div className="panel-body">
                <TodoList/>
                </div>
                <div className="panel-footer">
                <TodoFooter/>
                </div>
                
                </div></div>
               </div>
            </div>
        )
    }
}