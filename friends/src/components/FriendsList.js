import React from "react";
import { connect } from "react-redux";

import { fetchData, addFriend } from "../actions";

const ages = [...Array(100).keys()].splice(18);

class FriendsList extends React.Component {
  state = {
    newFriend: {
      name: "",
      age: 0,
      email: ""
    }
  };

  componentDidMount() {
    this.props.fetchData();
  }

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitFriend = e => {
    e.preventDefault();
    if (
      true &&
      this.state.newFriend.name &&
      this.state.newFriend.age &&
      this.state.newFriend.email
    ) {
      this.props.addFriend(this.state.newFriend);
      e.target.reset();
      this.setState({
        newFriend: {
          name: "",
          age: 0,
          email: ""
        }
      });
    } else {
      alert("Please complete form before adding friend");
    }
  };

  render() {
    if (!this.props.friends) {
      return <div>Loading...</div>;
    }
    return (
      <div className="friendsList">
        {this.props.friends.map((friend, index) => {
          console.log(friend);
          return (
            <p key={index}>
              <a href={`mailto:${friend.email}`}>{friend.name}</a>, {friend.age}
            </p>
          );
        })}
        <form onSubmit={this.submitFriend} className="addFriend">
          <input
            onChange={this.handleChanges}
            type="text"
            name="name"
            placeholder="Name"
          />
          <select onChange={this.handleChanges} name="age" defaultValue="Age">
            <option>Age</option>
            {ages.map((age, index) => {
              return (
                <option key={index} value={age}>
                  {age}
                </option>
              );
            })}
          </select>
          <input
            onChange={this.handleChanges}
            type="text"
            name="email"
            placeholder="Email"
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

// Check on deconstructed way to do this later
const mapStateToProps = ({ friends }) => ({
  friends
});

export default connect(
  mapStateToProps,
  { fetchData, addFriend }
)(FriendsList);
