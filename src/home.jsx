import React,{Component} from 'react';
import Card from './components/card';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadedData: false,
      data: {}
    };
  }
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=2')
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({loadedData:true,data:result.results});
          console.log(this.state.data[0].picture.thumbnail);
        },
        (error) => {
          console.log("Some bufoonery is afoot!");
        }
      );
  }
  render(){
    return(
      <div>
        <h1>
          Home
        </h1>
        {
          this.state.loadedData? this.state.data.map(profile => <Card key={profile.id.value} profile={profile}/>):"...Loading"
        }
      </div>
    );
  }
}

export default Home;
