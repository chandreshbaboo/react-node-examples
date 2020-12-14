import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: ""
      }
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    fetch("/users/getCurrentUser")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          user: json
        });
      });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { user } = this.state;
    return (
      <div className="user">
        <h1>Hello {user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

export default User;
