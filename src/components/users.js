import React, { Component } from "react";
import CondUsers from "./condUsers";

class Users extends Component {
  state = {
    users: [
      { id: 1, name: "Rafayel", age: 22 },
      { id: 2, name: "Karen", age: 10 },
      { id: 3, name: "Roza", age: 35 },
      { id: 4, name: "Vardan", age: 46 },
      { id: 5, name: "Gayane", age: 50 },
      { id: 6, name: "Tigran", age: 18 },
    ],
  };

  render() {
    return <div className='users'>
        <CondUsers  
            key={this.state.users.id}
            users={this.state.users}/>
    </div>;
  }
}

export default Users;
