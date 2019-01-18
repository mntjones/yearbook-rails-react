import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMemberFormData } from '../actions/MemberFormActions';
import { createMember } from '../actions/MembersActions';

class MemberForm extends Component {

	handleOnChange = event => {
    const { name, value } = event.target;
    const currentFormData = Object.assign({}, this.props.MemberFormDataReducer, {
      [name]: value
    })
    this.props.updateMemberFormData(currentFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMember(this.props.MemberFormDataReducer)
  }

  render() {

    const { name, age, img_url, motto } = this.props.MemberFormDataReducer;

    return (
      <div className="form">
        Add A Person to your Yearbook
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
            <label htmlFor="motto">Personal motto:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="motto"
              value={motto}
            />
          </div>

          <button type="submit">Add Person</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { MemberFormDataReducer: state.MemberFormDataReducer }
}

export default connect(mapStateToProps, {updateMemberFormData, createMember})(MemberForm);