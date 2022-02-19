class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    super(props);
    this.state = {
      visibility: false,
    };
  }

  handleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {" "}
          {this.state.visibility ? "Hide details" : "show details"}
        </button>
        {this.state.visibility && <div>Hej there, now u can see me</div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
