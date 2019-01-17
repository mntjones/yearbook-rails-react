import { resetMemberForm } from './MemberFormActions';

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
    return dispatch => {
        dispatch(loadMembers())
        return fetch('http://localhost:3000/api/v1/members')
        .then(response => response.json())
        .then(members => dispatch(setMembers(members)))
        .catch(error => console.log(error))
    }
}

export const createMember = member => {
  return dispatch => {
    dispatch(postRequest())
    return fetch('http://localhost:3001/api/members', {
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