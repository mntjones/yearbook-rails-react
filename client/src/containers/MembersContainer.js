import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MembersContainer.css';

import MemberCard from '../components/MemberCard';
import MemberForm from './MemberForm';

import { getMembers } from '../actions/MembersActions';


class MembersContainer extends Component {

 componentDidMount() {
   this.props.getMembers()
  }
  
  render() {
    return (
      <div className="members-container">
        <h1>Your Yearbook</h1>
        {this.props.members.map(member => <MemberCard key={member.id} member={member} />)}

        <MemberForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    members: state.members
  })
}

 export default connect(mapStateToProps, { getMembers })(MembersContainer);