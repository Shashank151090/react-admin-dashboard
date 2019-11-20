import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);

    this.state = {
      email: "",
      fname: "",
      lname: "",
      address: "",
      city: "",
      country: "",
      pincode: "",
      about: "",
    };
    this.userData = this.state;
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
 }
 handleFnameChange(e) {
    this.setState({fname: e.target.value});
 }
 handleLnameChange(e) {
  this.setState({lname: e.target.value});
}
 handleAddressChange(e) {
  this.setState({address: e.target.value});
 }
 handleCityChange(e) {
  this.setState({city: e.target.value});
}
handleCountryChange(e) {
this.setState({country: e.target.value});
}
handleZipChange(e) {
this.setState({pincode: e.target.value});
}
handleAboutChange(e) {
  this.setState({about: e.target.value});
  }
    
  handleSave() {
    console.log(this.userData)
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            disabled
                            name="userName" id="userName" 
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="mike@email.com" name="email" id="email" type="email" onChange={this.handleEmailChange}  />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="Company"
                            name="fname"
                            onChange={this.handleFnameChange} 
                            id="fname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            name="lname"
                            onChange={this.handleLnameChange} 
                            id="lname"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder="Home Address"
                            name="address"
                            onChange={this.handleAddressChange} 
                            id="address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="City"
                            name="city"
                            onChange={this.handleCityChange} 
                            id="city"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder="Country"
                            name="country"
                            onChange={this.handleCountryChange} 
                            id="country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" onChange={this.handleZipChange} name="pincode" id="pincode" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            placeholder="Here can be your description"
                            name="about"
                            onChange={this.handleAboutChange} 
                            id="about"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button className="btn-fill" color="primary" type="button" onClick={this.handleSave}>
                    Save
                  </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">{this.state.fname} {this.state.lname}</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                    <h5 className="title"><i>{this.state.email}</i></h5>
                  </div>
                  <div className="card-description">
                    {this.state.about}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
