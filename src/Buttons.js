import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="calc-buttons">
                <div className="row">
                    <button className="col-3" name="CE" onClick={e => this.props.reset(e.target.name)}>CE</button>
                    <button className="col-1" name="/" onClick={e => this.props.addToCurrent(e.target.name)}>/</button>
                </div>
                <div className="row">
                    <button className="col-1" name="7" onClick={e => this.props.addToCurrent(e.target.name)}>7</button>
                    <button className="col-1" name="8" onClick={e => this.props.addToCurrent(e.target.name)}>8</button>
                    <button className="col-1" name="9" onClick={e => this.props.addToCurrent(e.target.name)}>9</button>
                    <button className="col-1" name="*" onClick={e => this.props.addToCurrent(e.target.name)}>*</button>
                </div>
                <div className="row">
                    <button className="col-1" name="4" onClick={e => this.props.addToCurrent(e.target.name)}>4</button>
                    <button className="col-1" name="5" onClick={e => this.props.addToCurrent(e.target.name)}>5</button>
                    <button className="col-1" name="6" onClick={e => this.props.addToCurrent(e.target.name)}>6</button>
                    <button className="col-1" name="-" onClick={e => this.props.addToCurrent(e.target.name)}>-</button>
                </div>
                <div className="row">
                    <button className="col-1" name="1" onClick={e => this.props.addToCurrent(e.target.name)}>1</button>
                    <button className="col-1" name="2" onClick={e => this.props.addToCurrent(e.target.name)}>2</button>
                    <button className="col-1" name="3" onClick={e => this.props.addToCurrent(e.target.name)}>3</button>
                    <button className="col-1" name="+" onClick={e => this.props.addToCurrent(e.target.name)}>+</button>
                </div>
                <div className="row">
                    <button className="col-2" name="0" onClick={e => this.props.addToCurrent(e.target.name)}>0</button>
                    <button className="col-1" name="." onClick={e => this.props.addToCurrent(e.target.name)}>.</button>
                    <button className="col-1" name="=" onClick={e => this.props.calculate(e.target.name)}>=</button>
                </div>
            </div>
        )
    }
}

export default Buttons;