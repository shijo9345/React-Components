import React, { Component } from 'react';
class State extends Component{
    constructor(props){
        super(props);{
            this.state={
                id:1,
                name:"Rahul"
            }
        }}

        changeStateValues = () => {
            this.setState({
                id: 2,
                name: "Raju"
            });
        }
    
        render(){
            return (
                <div>
                    <p>{this.state.id}</p>
                    <p>{this.state.name}</p>
                    <button onClick={this.changeStateValues}>Change State</button>

                </div>
            )
        }
    }
export default State