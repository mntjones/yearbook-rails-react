import React from 'react';


const MemberCard = ({ member }) => {
  
  return(
    <div key={member.id} className='member-card'>
      <h3>{member.name}</h3>
      <h4>{member.age} years</h4>
      <h4>Motto: {member.motto}</h4>
      <img className="member-image" src={member.img_url} alt={member.name} />
      <br></br>
      <button onClick={() => { member.destroyMember(member.id) }}>DELETE</button>
    </div>
  )
}
        
export default MemberCard;