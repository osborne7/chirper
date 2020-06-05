import React, { Component } from 'react';
import Header from './Header';
import Input from './Input';
import Chirp from './Chirp';
// import logo from './logo.svg';
// import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Input />
        <Chirp username={Input.username} message={Input.message}/>
      </div>

    )
  }
}


// function Main() {
//   return (
//     <div className="container-fluid text-center">
//         <h1 className="bg-light text-info p-3 m-2 rounded">chirper</h1>
//         <div className="border border-info rounded p-3 m-4">
//           <div className="text-left">
//             <h4 className="text-muted p-2">Username</h4>
//           </div>
//           <h2 className="p-2 m-3">Example message #1.</h2>
//           <div className="text-right">
//             <button className="btn btn-info">Admin</button>
//           </div>
//         </div>
//       </div>
//   );
// }

export default Main;
