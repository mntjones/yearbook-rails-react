
export const updateMemberFormData = MemberFormData => {
  return {
    type: 'UPDATED_DATA',
    MemberFormData
  }
}

export const resetMemberForm = () => {
  return {
    type: 'RESET_MEMBER_FORM'
  }
}