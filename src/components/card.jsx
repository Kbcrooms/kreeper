import React,{Component} from 'react';

class Card extends Component{

  render(){
    return(
      <div className="card">
        <img src={this.props.profile.picture.large}/>
        <h1>{this.props.profile.name.first +" "+this.props.profile.name.last}</h1>
        <div className="cardInfo">
          Age: {this.props.profile.dob.age}<br/>
          Email: {this.props.profile.email}<br/>
          Phone: {this.props.profile.cell}
        </div>
      </div>
    );
  }
}

export default Card;
