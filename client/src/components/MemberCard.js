import React from 'react';

const MemberCard = (props) => (
  <div key={props.member.id} className="MemberCard">
    <h3>Name: {props.member.name}</h3>
    <p>Age: {props.member.age} years</p>
    <img className="image" src={props.member.img_url} alt={props.member.name} />
    <p>Personal Motto: {props.member.motto} </p>
  </div>
)

export default MemberCard;