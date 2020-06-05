import React, { Component } from 'react';
import Input from './Input';

class Chirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: ''
        };
    }
    render() {
        return (
            <div className="border border-info rounded p-3 m-4">
            <div className="text-left">
              <h4 
                className="text-muted p-2"
                value={Input.username}
                ></h4>
            </div>
            <h2 
                className="p-2 m-3"
                value={Input.message}></h2>
            <div className="text-right">
              <button className="btn btn-info">Admin</button>
            </div>
          </div>
        )
    }
}

export default Chirp;


