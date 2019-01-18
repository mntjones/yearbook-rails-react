import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MemberForm from './MemberForm';
import Members from '../components/Members';
import { getMembers } from '../actions/MembersActions';
import './MembersContainer.css';

class MembersContainer extends Component {

  componentDidMount() {
    this.props.getMembers();
  }
  
  render() {
    console.log("Members Props:", this.props)

    return (
      <div className="work">
        <Members/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ members: state.members })
}

 export default connect(mapStateToProps, { getMembers })(MembersContainer);