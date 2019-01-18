//import { resetMemberForm } from './MemberFormActions';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **

const loadMembers = () => {
    return {
        type: 'MAKE_MEMBERS_REQUEST'
    }
}

const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',
    members
  }
}

const postRequest = () => {
    return {
        type: 'MAKE_POST_REQUEST'
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

