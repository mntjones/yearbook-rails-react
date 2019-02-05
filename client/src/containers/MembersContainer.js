import React, {Component} from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import Member from '../components/Member';
import { getMembers, destroyMember } from '../actions/MembersActions';
import { prePopulate } from '../actions/MemberFormActions';
import './MembersContainer.css';


// added variable to keep track of sorting state
let listMembers = [];
let sort = false

class MembersContainer extends Component {


 constructor(props) {
  super(props)

  this.state={
    members: []
  }
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

// handle my sort on button click
// create a new array and use the sort method on it - sorted array in members variable
    this.handleSort = () => {
      const members = [...this.props.members].sort(function(a,b) {return b.likes-a.likes})
      
      // assigning my global variable the sorted members array
      listMembers = members;
      //updating my globale sort variable to true
      sort = true
      //updating state
      this.setState({members: listMembers}, () => {console.log(listMembers)})
      //returning my global variable with the sorted list of members
      return listMembers

    }

// this function sets what list of members we see: either the original array of members
// sent by props, or the sorted list. This is determined by the value of the sort variable.

    this.setArray =() => {
      // if the sort button was not clicked, then listMembers has the original list
      // of members sent by props
      if (sort === false) {
        listMembers = this.props.members
        return listMembers
      }
      // if sort is true, then use the value of listMembers that was set in the sort function
      else {
        return listMembers
      }
    }

    // variable holds whichever array was determined in function setArray
    //this is what is used for the map function on line 97.
    let memberArray = this.setArray();

    return(

      <div className="members-container">
        <div className="App-header"><h1>Yearbook Members</h1></div>
        <MemberForm />
        <button className="form-button" onClick={this.handleSort}>Sort by Likes</button>
        
        {memberArray.map(member => <Member key={member.id} member={member} destroyMember={this.props.destroyMember} 
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
