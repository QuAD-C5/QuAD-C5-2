import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import axios from "axios";

class PublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personalProfile: "" };
  }

  render() {
    console.log(this.props.freelance);
    return (
      <div className="divuserProfile">
        <Card className="userProfile">
          <Col xs={6} md={4}>
            <Image
              id ="useravatar"
              className="comapny-avatar"
              src="https://www.flaticon.com/svg/static/icons/svg/3003/3003035.svg"
              roundedCircle
            />
          </Col>
          <CardBody>
            <Card className="userInfoCard">
              <CardText id="UserFName">
                {"F.name: " + this.props.freelance.FirstName}
              </CardText>
              <CardText id="UserLName">
                {"L.name: " + this.props.freelance.LastName}
              </CardText>
              <CardText id="UserAge">
                {"Age: " + this.props.freelance.Age || " "}
              </CardText>
              <CardText id="UserEmail">{this.props.freelance.Email}</CardText>
              <CardText id="UserPhone">
                {"phone number: " + this.props.freelance.PhoneNumber || " "}
              </CardText>
              <CardText id="UserDescription">
                {"BIO: " + this.props.freelance.Description || " "}
              </CardText>
              <CardText id="UserSkills">
                {" "}
                {this.props.freelance.skills || " "}
              </CardText>
            </Card>
            <Label id="msgProfile">
              you can edit your account information by clicking here.
            </Label>
          </CardBody>
        </Card>

        {/* <img src={this.props.freelance.avatar}  width="50" height="100"></img>
       <h1>First Name: {this.props.freelance.FirstName}</h1>
       <h1>Last Name: {this.props.freelance.LastName}</h1>
       <h1>Age: {this.props.freelance.Age}</h1>
       <h1>Email: </h1>
       <h1>Phone: {this.props.freelance.PhoneNumber}</h1>
       <h1>Description: </h1>
       <h1>Skills: {this.props.freelance.Skills}</h1> */}
      </div>
    );
  }
}

export default PublicProfile;
