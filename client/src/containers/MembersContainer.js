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
    members: []
  }
  // added memberArray variable
  this.memberArray = [...this.props.members]
  this.handleUpdate = this.handleUpdate.bind(this)

 }

  componentDidMount() {
    this.props.getMembers()

  }

  handleUpdate(member){

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
        this.setState(state => {
          const members = state.members.filter((m) => m.id !== member.id);
          state.members.concat(member);
          return { members, }
        })
      }
    )
  }

  
  render() {
    // local variables to hold state
    let sort = false;


    // initialize method to make sure that memberArray from constructor is not empty
    this.initialize = () => {
      if (this.memberArray.length === 0) {
        return this.memberArray = [...this.props.members]
      }
    }

  // handle my sort on button click
    this.handleSort = () => {
      //updating my  sort variable to true
      sort = true;

      // create a new array and use the sort method on it - sorted array in members variable
      const members = [...this.props.members].sort(function(a,b) {return b.likes-a.likes})

      // assigning my local variable the sorted members array which is used as a holder for the setArray method
      this.memberArray = members
      //setState to trigger rerender
      this.setState({members: this.memberArray}, () => {console.log(this.memberArray)})

      return this.memberArray
    }

    // run this to give memberArray an initial value
   this.initialize();

    return(


      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
        <MemberForm />
        <button className="form-button" onClick={this.handleSort}>Sort by Likes</button>
        
        {this.memberArray.map(member => <Member key={member.id} member={member} destroyMember={this.props.destroyMember} 
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
