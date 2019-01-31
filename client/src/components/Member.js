import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Like from './Like';
 
class Member extends Component {

  constructor(props) {
    super(props)
    this.state = {
      member: this.props.member
    }

  }

  handleLikes() {


  }

  render () {
    return (
      <div>
        <div key={this.props.member.id} className='member-card'>
          <h3>{this.props.member.name}</h3>
          <h4>{this.props.member.age} years</h4>
          <h4>Motto: {this.props.member.motto}</h4>
          <img className="member-image" src={this.props.member.img_url} alt={this.props.member.name} />
          <br></br>
          <button onClick={() => this.props.member.destroyMember(this.props.member.id)}>DELETE</button>
          <button>
            <Link to={`/members/${this.props.member.id}/edit`} onClick={ () => this.props.member.prePopulate({ 
              name: this.props.member.name, age: this.props.member.age, img_url: this.props.member.img_url, motto: this.props.member.motto}) 
              } className="link">UPDATE</Link>
          </button>
          
          <button onClick={() => this.handleLikes()}> LIKE </button>
          
        </div>
      </div>
    )
  
  }
}
 
export default Member;