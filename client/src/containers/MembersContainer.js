import React, {Component} from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import Member from '../components/Member';
import { getMembers, destroyMember } from '../actions/MembersActions';
import { prePopulate } from '../actions/MemberFormActions';
import './MembersContainer.css';


class MembersContainer extends Component {


 constructor(props) {
  super(props)

  this.state={
    members: this.props.members
  }
  this.handleUpdate = this.handleUpdate.bind(this)
  this.updateMember = this.updateMember.bind(this)
 }

  componentDidMount() {
    this.props.getMembers()
    
  }


  handleUpdate(member){
    console.log("fetch starts")
    fetch(`http://localhost:3000/api/members/${member.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({member: member}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateMember(member)
        console.log(member)
      })
  }

  updateMember(member){

      let updatedMember = this.props.members.filter((m) => m.id !== member.id)
      this.setState({
        members: {...this.props.members, updatedMember}
      })
      console.log("update member")

      // this fixes Async problem, but not strictly React (this is a Redux method)
      // and it refetches all members again, so not data friendly

      this.props.getMembers()

    }

  render() {
    return(
      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
        <MemberForm />
        {this.props.members.map(member => <Member key={member.id} member={member} destroyMember={this.props.destroyMember} 
          prePopulate={ this.props.prePopulate } handleUpdate = {this.handleUpdate} updateMember={this.updateMember}
          />)}

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

export default connect(mapStateToProps, { getMembers, destroyMember, prePopulate })(MembersContainer);
