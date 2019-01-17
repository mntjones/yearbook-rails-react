
import React, { Component } from 'react';
import MemberCard from './MemberCard';


class Members extends Component {

    render() {
        console.log("These are Members.js props: ", this.props)
        debugger;
        return(
            <div className='MembersContainer'>
                <h1 className='App-header'>Members In Your Yearbook</h1>

                {this.props.members.map(member => 
                    <MemberCard 
                        key={member.id}
                        member={member}
                    />
                )}
            </div>
        )}
}

export default Members;