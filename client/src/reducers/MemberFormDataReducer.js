const initialState = {
  name: '', 
  age: '', 
  img_url: '', 
  motto: '',
  prefill: {}
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.MemberFormDataReducer;

    case 'RESET_MEMBER_FORM':
      return initialState;

     case 'PRE_POPULATE':
      return { ...state, prefill: action.payload }
    
    default: 
      return state;
  }
}