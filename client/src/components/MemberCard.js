import React from 'react';

const MemberCard = ({ member }) => {
  console.log("These are the MemberCard props:", member)
  return(
    <div key={member.id} className='member-card'>
      <h3>{member.name}</h3>
      <h4>{member.age} years</h4>
      <h4>Motto: {member.motto}</h4>
      <img className="member-image" src={member.img_url} alt={member.name} />
    </div>
  )
}
        
export default MemberCard;