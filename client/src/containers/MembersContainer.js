import React, {Component} from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import MemberCard from '../components/MemberCard';
import { getMembers } from '../actions/MembersActions';
import './MembersContainer.css';

class MembersContainer extends Component {

  componentDidMount() {
    this.props.getMembers()
  }

  render() {

    return(
      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
  
        {this.props.members.map(member => <MemberCard key={member.id} member={member} /> )}

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


