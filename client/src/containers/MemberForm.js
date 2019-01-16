import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMemberFormData } from '../actions/MemberFormActions';
import { createMember } from '../actions/MembersActions';

class MemberForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentMemberFormData = Object.assign({}, this.props.MemberFormData, {
      [name]: value
    })
    this.props.updateMemberFormData(currentMemberFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMember(this.props.MemberFormData)
  }

  render() {
    const { name, age, img_url, motto } = this.props.MemberFormData;

    return (
      <div>
        Add A Member To Your Yearbook

        // Form Data
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="age"
              value={age}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image Url:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="motto">Personal Motto:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="motto"
              value={motto}
            />
          </div>

          <button type="submit">Add Member</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    MemberFormData: state.MemberFormData
  }
}

export default connect(mapStateToProps, { 
  updateMemberFormData,
  createMember
})(MemberForm);