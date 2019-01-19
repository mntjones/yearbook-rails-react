import React from 'react'
 
const Member = props => {
  return (
    <div>
      <div key={props.member.id} className='member-card'>
      	<h3>{props.member.name}</h3>
      	<h4>{props.member.age} years</h4>
      	<h4>Motto: {props.member.motto}</h4>
      	<img className="member-image" src={props.member.img_url} alt={props.member.name} />
      <br></br>
      <button onClick={() => props.destroyMember(props.member.id)}>DELETE</button>
      </div>
      
    </div>
  )
}
 
export default Member;