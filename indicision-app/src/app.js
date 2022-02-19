import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = "Muhanand";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi, My name is ${this.name}.`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting("Muhannad"));

//---------------------

// class NewSyntax {
//   name = "Muhannad Satouf";
//   getGreeting = (name) => {
//     return `Hi, My name is ${this.name}.`;
//   };
// }
// const newSyntax = new NewSyntax();
// const getGreeting = newSyntax.getGreeting;
// console.log(getGreeting("Muhannad Satouf"));
