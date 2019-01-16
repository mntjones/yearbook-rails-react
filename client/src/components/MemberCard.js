import React from 'react';

const MemberCard = ({ member }) => (
  <div key={member.id} className="MemberCard">
    <h3>{member.name}</h3>
    <p>Age: {member.age} years</p>
    <img className="image" src={member.img_url} alt={member.name} />
    <p>Personal Motto: {member.motto} </p>
  </div>
)

export default MemberCard;