import React from 'react';

const Like = props => {

	console.log(props)

	return (
		<p className="likes">Likes: { props.member.likes }</p>

	)

}

export default Like