import React from "react";
import PropTypes from "prop-types";

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ["java", "php"],
    };
    this.addOne = this.addOne.bind(this)
  }

  addOne(todo) {
    const {languages} = this.state
    languages.unshift(todo)
    this.setState(languages)
  }

  render() {
    return (
      <div>
        <h1>Simple TODO List</h1>
        <Add count={this.state.languages.length} addOne={this.addOne}/>
        <List languages={this.state.languages} />
      </div>
    );
  }
}

class Add extends React.Component {

  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    
  }

  addTodo() {
    const input = this.input.value.trim()
    if(!input) {
      return
    }
    this.props.addOne(input)
    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input ref={input=>this.input=input}></input>
        <button onClick={this.addTodo}>add {this.props.count + 1}</button>
      </div>
    );
  }
}

Add.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired
};

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  languages: PropTypes.array.isRequired,
};

export default PageOne;
