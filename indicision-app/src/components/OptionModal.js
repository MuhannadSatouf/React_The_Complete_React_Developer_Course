import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
// using !! before will convert it to boolean !! "String " will gives true, !!undefined will return false
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleDeleteSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleDeleteSelectedOption}>
      OK
    </button>
  </Modal>
);
export default OptionModal;
