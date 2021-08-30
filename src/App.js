import React from 'react';
import Buttons from "./Buttons"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "",
        };
    }

    addToCurrent = (button) => {
        this.setState({
            current: this.state.current + button
        })
    }

    reset = (button) => {
        this.setState({
            current: ""
        })
    }

    calculate = () => {
        try {
            this.setState({
                current: (eval(this.state.current) || "") + ""
            })
        }
        catch (e) {
            this.setState({
                current: "error"
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="okay">
                    <input className="current-number" type="text" value={this.state.current}></input>
                    <Buttons calculate={this.calculate} reset={this.reset} addToCurrent={this.addToCurrent} />
                </div>
            </div>
        )
    }

}

export default App;