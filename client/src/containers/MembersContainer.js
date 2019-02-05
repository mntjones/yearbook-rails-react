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

 }

  componentDidMount() {
    this.props.getMembers()
    
  }

  handleUpdate(member){
    console.log("fetch starts")

    console.log(member)
    fetch(`http://localhost:3000/api/members/${member.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({member: member}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((member) => { 
        console.log("updating")

        this.setState(state => {
          const members = state.members.filter((m) => m.id !== member.id);
          state.members.concat(member);
          return { members, }
        })
      }
    )
  }

  
  render() {

  this.handleSort = () => {
      const members = [...this.props.members].sort(function(a,b) {return b.likes-a.likes})
      console.log(members)
      return members
    }

    return(
      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
        <MemberForm />
        <button className="form-button" onClick={this.handleSort}>Sort by Likes</button>

        {this.props.members.map(member => <Member key={member.id} member={member} destroyMember={this.props.destroyMember} 
          prePopulate={ this.props.prePopulate } handleUpdate = {this.handleUpdate} handleSort={this.handleSort}
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
