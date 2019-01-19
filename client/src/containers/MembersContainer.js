import React, {Component} from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import Member from '../components/Member';
import { getMembers, destroyMember } from '../actions/MembersActions';
import './MembersContainer.css';


class MembersContainer extends Component {

  componentDidMount() {
    this.props.getMembers()
  }

  render() {
    return(
      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
        <MemberForm />
        {this.props.members.map(member => <Member key={member.id} member={member} destroyMember={this.props.destroyMember} /> )}
        <div>{this.props.children}</div>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return ({
    members: state.members.members,
    MemberFormData: state.MemberFormData
  })
}

export default connect(mapStateToProps, { getMembers, destroyMember })(MembersContainer);
