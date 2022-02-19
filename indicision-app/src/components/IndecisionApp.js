import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  //Life cycle method for rendering a component
  componentDidMount = () => {
    //Try catch for catch bad data in the DB
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("invalid JSON data");
    }
  };

  //Life cycle method for rendering an updated component
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem("options", json);
    }
    console.log("SAVING DATA");
  };

  //Life cycle method for go awy a component
  componentWillUnmount = () => {
    console.log("Inside componentWillUnmount");
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = (prevState) => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add an option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The option is already exist";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };

  render() {
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handAddOption={this.handAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    );
  }
}
