import { resetMemberForm } from './MemberFormActions';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **//


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

const deleteMember = id => {
  return {
    type: 'DELETE_MEMBER',
    id
  }
}

const editMember = member => {
  return {
    type: 'UPDATE_MEMBER',
    member
  }
}



// ** Async Actions **//

export const getMembers = () => {
  return (dispatch => {
    return fetch(`${API_URL}/members`)
    .then(response => response.json())
    .then(members => dispatch(setMembers(members)))
    .catch(error => console.log(error))
  })
}

export const createMember= member => {
  console.log('C')
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
      console.log('D')
      dispatch(addMember(member))
      dispatch(resetMemberForm())
    })
    .catch(error => console.log(error))
  }
  console.log("E")
}

export const destroyMember = id => {
  return dispatch => {
    return fetch(`${API_URL}/members/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
        dispatch(deleteMember(id))
    })
    .catch(error => console.log(error))
  }
}

export const updateMember = (id, member) => {
  return dispatch => {
    return fetch(`${API_URL}/members/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({member: member})
    })
    .then(response => response.json())
    .then(member => {
        dispatch(editMember(member))
        dispatch(resetMemberForm())
    })
    .catch(error => console.log(error))
  }
}