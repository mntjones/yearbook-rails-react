
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