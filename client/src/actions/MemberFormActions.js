// ** Action Creators **

export const updateMemberFormData = MemberFormDataReducer => {
  return {
    type: 'UPDATED_DATA',
    MemberFormDataReducer
  }
}

export const resetMemberForm = () => {
  return {
    type: 'RESET_MEMBER_FORM'
  }
}

export const prePopulate = data => {
  return {
    type: 'PRE_POPULATE',
    payload: data
  }
}