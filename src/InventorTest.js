import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return(<div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Inventor Test</h1>
        <p>Which of the following did this inventor create?</p>
      </div>
    </div>
  );
}

function Turn(inventor, inventions){
  return (<div className="row turn" style={{backGround:"white"}}>
            <div className="col-4 offset-1">
              <img src={inventor.imageUrl} className="athorimage" alt="inventor"/>
            </div>
            <div className="col-6">
                {inventions.map((title) => <p>{title}</p>)}
            </div>
          </div>);
}

function Continue(){
return (<div/>);
}


function Footer(){
return (<div className="row" id="footer">
          <p className="text-muted credit">
            Credit for content here
          </p>
  </div>);
}

class InventorTest extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn/>
        <Continue/>
        <Footer/>
      </div>
    );
  }
}

export default InventorTest;
