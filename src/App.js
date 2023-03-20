import { render } from "@testing-library/react";
import React from "react";
import img from "./Image/loginImage.png";
import "./App.css"
 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            Person: {
                FullName: "Najet Souissi",
                Bio: "Web developper",
                Profession: "Student",
                imgSrc: img,
            },
            shows: false,
            counter: 0,
        };
    }

    showprofil = () => {
        this.setState({ shows: !this.state.shows,
           counter: 0 });

        setInterval (() => {
                this.setState({ counter: this.state.counter + 1 });
            },
            1000);
    };

    render() {
        return (
            <div className="App">
                {this.state.shows && (
                    <div style={{color:'rosybrown'}}>
                        <h1>{this.state.Person.FullName}</h1>
                        <h1>{this.state.Person.Bio}</h1>
                        <h1>{this.state.Person.Profession}</h1>
                        <img src={this.state.Person.imgSrc} />
                    </div>
                )}
                <div>
                    <button onClick={this.showprofil}> clickme </button>
                </div>

                <h1>counter: {this.state.counter}</h1>
            </div>
        );
    }
}

export default App;
