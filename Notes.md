Notes

Description:

A page where you can add a Member:
	- name
	- age
	- image
	- personal motto

As you add, they fill the page.



EXTRA CODE:

CONTAINER
seeMember={this.props.seeMember}


import { getMembers, destroyMember, seeMember } from '../actions/MembersActions';

export default connect(mapStateToProps, { getMembers, destroyMember, prePopulate, seeMember })


ACTIONS
const showMember = id => {
  return {
    type: 'SHOW_MEMBER',
    id
  }
}

export const seeMember = id => {
  return (dispatch => {
    return fetch(`${API_URL}/members/${id}`)
    .then(response => response.json())
    .then(members => dispatch(showMember(id)))
    .catch(error => console.log(error))
  })
}


MEMBER

onClick={() => props.seeMember(props.member.id)}

REDUCER

    case 'SHOW_MEMBER':
      const show = { members: state.members.filter(member => member.id === action.id)};
      return show