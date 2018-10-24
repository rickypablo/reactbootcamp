import React from 'react';
import Api from './Api';
import { NavLink } from 'react-router-dom';

export default class UserList extends React.Component {  
    state = {
        users : []
      }

    componentDidMount() {
        Api.get(`users`).then(res => {
            if(res.status == 200);
            {
                const users = res.data;
                this.setState({ users });
            }
        })
    }

    render() {
    return (
      <div>
        <table>
            <tr>
                <td>ID</td>
                <td>NAME</td>                
            </tr>
                { this.state.users.map(user => 
                    <tr>
                        <td><NavLink to={`userdetails/${user.id}`}>{user.id}</NavLink></td>
                        <td>{user.name}</td>                        
                    </tr>
                )}
        </table>
      </div>
    )
  }
}
