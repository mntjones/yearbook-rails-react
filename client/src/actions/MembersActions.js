import { resetMemberForm } from './MemberFormActions';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **


const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',
    members
  }
}


const addMember = member => {
  return {
    type: 'CREATE_MEMBER_SUCCESS',
    member
  }
} 

// ** Async Actions **
export const getMembers = () => {
    return (dispatch => {
      return fetch(`${API_URL}/members`)
      .then(response => response.json())
      .then(members => dispatch(setMembers(members)))
      .catch(error => console.log(error))
    })
}

export const createMember= member => {
  return dispatch => {
    return fetch(`${API_URL}/members`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ member: member })
    })
      .then(response => response.json())
      .then(member => {
        dispatch(addMember(member))
        dispatch(resetMemberForm())
      })
      .catch(error => console.log(error))
  }
}
