import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from 'axios';


class PublicProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {personalProfile : '',
      obj : {
        // FirstName:  this.props.freelance.FirstName,
        // LastName:  this.props.freelance.LastName,
        // Age: this.props.freelance.Age,
        // Email:this.props.freelance.Email,
        // PhoneNumber:  this.props.freelance.PhoneNumber,
        // Description: this.props.freelance.Description,
        // Skills:  this.props.freelance.Skills
      }
    }
}
   
componentDidMount(){
  console.log('Home mounted')
  axios.get('http://127.0.0.1:3008/signup')
  .then(res => {
      console.log('job offers ===>', res.data)
      this.setState({obj : res.data})
  })
  .catch(err => console.log('client side catch error ===>' , err))
  console.log('whay u do thisDVD',this.state.obj)
}   
// componentDidUpdate(prevProps) {
//   // Utilisation classique (pensez bien à comparer les props) :
//   if (this.props.freelance !== prevProps.freelance) {
//     this.fetchData(this.props.freelance);
//   }
// }
  
    render() {
      console.log(this.props.freelance)
      
     return (
       <div>Hello numbers
       <img src={this.props.freelance.avatar}  width="50" height="100"></img>
       <h1>First Name: {this.state.obj.FirstName}</h1>
       <h1>Last Name: {this.state.obj.LastName}</h1>
       <h1>Age: {this.state.obj.Age}</h1>
       <h1>Email: {this.state.obj.Email}</h1>
       <h1>Phone: {this.state.obj.PhoneNumber}</h1>
       <h1>Description: {this.state.obj.Description}</h1>
       <h1>Skills: {this.state.obj.Skills}</h1>
       </div>
     )   
    }
}

export default PublicProfile;