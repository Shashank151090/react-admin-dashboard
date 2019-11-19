import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";
import {
  userTable,
  userPost
} from "variables/tableData.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      userTableData: userTable,
      postData: userPost,
      commentsArray: [],
      modalDemo: false,
      modalTitle: "",
      modalBody: ""
    };
    this.toggleModalDemo = this.toggleModalDemo.bind(this);
  }
 
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <h5>Comments deleted successfully...</h5>
            <ul>
          {this.state.commentsArray.map((item, index) => (
        <li>{item.title}</li>
      ))}
      </ul>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-trash-simple",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  toggleModalDemo(post){
    this.setState({
        modalDemo: !this.state.modalDemo,
        modalTitle: post.title,
        modalBody: post.body
    });
    console.log(post)
}

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  getPost(user) {
    console.log(user)
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id)
        .then(res => res.json())
        .then((data) => {
          this.setState({ postData: data })
        })
  }

  selectPost(e,post) {
    console.log(e.target.checked)
    console.log(post)

    if(e.target.checked == true){
      this.state.commentsArray.push(post)
    }
    else{
      var index = this.state.commentsArray.indexOf(post);
    if (index !== -1) this.state.commentsArray.splice(post, 1);
    }
    console.log(this.state.commentsArray);
  }

  render() {
    return (
      <>
        <div className="content">
        <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Shipments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Accounts
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2"
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Purchases
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Sessions
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Shipments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Posts({this.state.postData.length})</h6>
                  <p className="card-category d-inline"> today</p>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={() => this.notify("tc")}
                      >
                        <p className="text-danger">Delete</p>
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                      {this.state.postData.map(post =>
                        <tr>
                          <td>
                          <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" onClick={(event) => this.selectPost(event, post)}/>
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                          <p className="title">{post.title}</p>
                            <p className="text-muted">
                              {post.body}
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" onClick={() => this.toggleModalDemo(post)} />
                            </Button>
                            <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
                            <form>
                                <FormGroup>
                                <div className="modal-header">
                                
                              <input type="text" className="modal-title" value= {this.state.modalTitle} id="exampleModalLabel">
                              </input>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                                onClick={this.toggleModalDemo}
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </button>
                            </div>
                            </FormGroup>
                            <FormGroup>
                            <textarea rows="4" cols="50" name="comment" form="usrform">
                                {this.state.modalBody}
                            </textarea>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModalDemo}>
                                    Close
                                </Button>
                                <Button color="primary">
                                    Save changes
                                </Button>
                            </ModalFooter>
                            </FormGroup>
                        </form>
                        </Modal>
                           
                          </td>
                        </tr> 
                      )}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Users</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.userTableData.map(user =>
                        <tr  onClick={() => this.getPost(user)}>
                          <td>{user.username} </td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                        </tr> 
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
