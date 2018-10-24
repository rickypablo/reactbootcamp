import React, {Component } from 'react';

class HelloText extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: ""
        };
    }

    customerNameChanged = (event) => {
        let stateChanged = {
            name: event.target.value,
            isvisible: event.target.value !== ''
        };

        this.setState(stateChanged);
    }

    render() { 
        return (
            <div>
                <input type="text" name="customer" onChange={this.customerNameChanged} />
                <div>{this.state.isvisible ? <p>Hello {this.state.name}</p> : null}</div>
            </div>
        );
    }
}

export default HelloText;