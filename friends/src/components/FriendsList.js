import React from "react";
import { connect } from "react-redux";

import { fetchData } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (!this.props.friends) {
      return <div>Loading...</div>;
    }
    return (
      <div className="friendsList">
        {this.props.friends.map((friend, index) => {
          return <p key={index}>{friend.name}</p>;
        })}
      </div>
    );
  }
}

// Check on deconstructed way to do this later
const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchData }
)(FriendsList);
