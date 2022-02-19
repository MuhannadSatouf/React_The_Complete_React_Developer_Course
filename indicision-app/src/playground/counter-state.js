class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //Try catch for catch bad data in the DB

    const stringValue = localStorage.getItem("count");
    const intValue = parseInt(stringValue, 10);
    console.log(intValue);

    if (!isNaN(intValue)) {
      this.setState(() => ({ count: intValue }));
    }
  }
  //Life cycle method for rendering an updated component
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
    console.log("saving data");
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleRest() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleRest}>Rest</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
