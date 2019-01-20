import React, { Component } from 'react';
import { updateMember } from '../actions/MembersActions';
import { updateMemberFormData } from '../actions/MemberFormActions';
import { connect } from 'react-redux';


class MemberFormEdit extends Component {

    componentDidMount(){
        const currentFormData = Object.assign({}, this.props.MemberFormDataReducer.prefill)
        this.props.updateMemberFormData(currentFormData)
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentFormData = Object.assign({}, this.props.MemberFormDataReducer, {
            [name]: value
        })
        this.props.updateMemberFormData(currentFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateMember(this.props.match.params.id, this.props.MemberFormDataReducer)
        .then(() => this.props.history.push(`/members/`))
    }

    render() {

        console.log("THESE ARE EDIT PROPS: ", this.props)

        const { name, age, img_url, motto } = this.props.MemberFormDataReducer;
        return (
          <div className="form">
		        <h2>EDIT PERSON</h2>
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
		          <button type="submit">UPDATE</button>

		        </form>
		      </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        MemberFormDataReducer: state.MemberFormDataReducer,
        prefill: state.MemberFormDataReducer.prefill
    }
}

export default connect(mapStateToProps, { updateMemberFormData, updateMember })(MemberFormEdit);
