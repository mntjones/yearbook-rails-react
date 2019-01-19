export default (state = {members:[]}, action) => {
  switch(action.type) {
  	
    case 'GET_MEMBERS_SUCCESS':
      return { ...state, members: action.members };

    case 'CREATE_MEMBER_SUCCESS':
      return { ...state, members: [ ...state.members, action.member ] };

    case 'DELETE_MEMBER':

      return { ...state, members: state.members.filter(member => member.id !== action.id) };
    
    default: 
      return state;
  }
}
