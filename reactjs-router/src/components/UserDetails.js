import React from 'react';
import Api from './Api';

export default class UserDetails extends React.Component {  
    constructor(props) {
        super();
        this.state = {
            id:'',
            name: '',
            username: '',
            email: ''
        }
    }
    componentDidMount() {
        Api.get(`users/${this.props.match.params.id}`).then(res => {
            if(res.status == 200);
              {
                  const user = res.data;
                  this.setState(user);
            }
          })
    }

    render() {
    return (
      <div>
          ID: { this.state.id }<br/>
          Username: { this.state.username }<br/>
          Name: { this.state.name }                    
      </div>
    )
  }
}
