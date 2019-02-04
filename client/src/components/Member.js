import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Member extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.member.likes
    }

    this.handleLikes = this.handleLikes.bind(this)
  }

  // order of things happening on Likes:
  // button click -> handleLikes (below) called
  // handleUpdate fires -> put "fetch starts"
  // handleLikes setState fires -> console.log (this.state.likes)
  // updateMember fires (updating member))
  // second then in handleUpdate fires -> member info with new like data
  // put fetch finishes 

  // Problem - when I navigate away from page, likes # revertes to old number
  // when I refresh page, new number appears


  handleLikes = () => {
    // this line updates the component with number of likes (no persistence)
    //this.setState(prevLikes => ({likes: prevLikes.likes + 1}));

    // this is for persistence, uses callback to handle member update 
    this.setState({
      likes: this.state.likes + 1}, () => {
        let member = {id: this.props.member.id, name: this.props.member.name, 
          age: this.props.member.age, img_url: this.props.member.img_url, likes: this.state.likes}
 
        this.props.handleUpdate(member)
        console.log(this.state.likes)}
    )
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
          <button className="member-button" onClick={() => this.props.member.destroyMember(this.props.member.id)}>DELETE</button>
          <button className="member-button">
            <Link to={`/members/${this.props.member.id}/edit`} onClick={ () => this.props.member.prePopulate({ 
              name: this.props.member.name, age: this.props.member.age, img_url: this.props.member.img_url, motto: this.props.member.motto}) 
              } className="link">UPDATE</Link>
          </button>
          
          <button className="member-button" onClick={() => this.handleLikes()}> LIKE </button>
          <p className="likes">Likes: { this.state.likes }</p>
        </div>
      </div>
    )
  
  }
}
 
export default Member;