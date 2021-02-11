import React, { Component } from "react";
import "../App.css"

class CondUsers extends Component {
  render() {
    const { users } = this.props;
    const userList = users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <hr/>
      </div>
    ));
    if (userList.length === 6) {
      return <div>
        {userList}
      </div>
    } else {
      return <div>
        There is not anything to return
      </div>
    }
  }
}

export default CondUsers;
