import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            username: '',
            message: ''
        }
    }
    render() {
        return (
            <div className="border border-info rounded p-3 m-4">
            <div className="text-left">
              <input 
                className="text-muted p-2"
                placeholder="username"
                value={this.state.username}
                onChange={(event) => { this.setState( {username: event.target.value })}}
                />
            </div>
            <input 
            className="p-2 m-3 input-large"
            placeholder="your message"
            value={this.state.message}
            onChange={(event) => { this.setState( {message: event.target.value })}}
             />
            <div className="text-right">
              <button className="btn btn-info">Submit</button>
            </div>
          </div>
        )
    }
}

export default Input;

// function Main() {
//   return (

        // <div className="border border-info rounded p-3 m-4">
        //   <div className="text-left">
        //     <h4 className="text-muted p-2">Username</h4>
        //   </div>
        //   <h2 className="p-2 m-3">Example message #1.</h2>
        //   <div className="text-right">
        //     <button className="btn btn-info">Admin</button>
        //   </div>
        // </div>

//   );
// }