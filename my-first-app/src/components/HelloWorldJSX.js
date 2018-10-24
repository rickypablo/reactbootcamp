import React, {Component} from 'react';

class HelloWorldJSX extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello World<br/>
                <button onClick={this.props.clickHandler}>Click Me!</button>
            </div>
            );
    }
}

export default HelloWorldJSX;