const initialState = {
  name: '', 
  age: 0, 
  img_url: '', 
  motto: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.MemberFormDataReducer;

    case 'RESET_MEMBER_FORM':
      return initialState;
    
    default: 
      return state;
  }
}