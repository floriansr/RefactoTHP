import React, { Component } from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal } from 'antd/es';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editProfilModal: false,
      editPublicationModal: false,
      previewPublicationModal: false,
      previewItem: 0,
      uploadModal: false,
      profileData: {
        username: 'RefactoProject',
        email: 'myprofile@thp.fr',
        phoneNumber: '0601020304',
        createdAt: '2020-02-23T07:50:17.335Z',
        firstname: 'TheHacking',
        lastname: 'Project',
        profilePicture: 'https://blog.thehackingproject.org/wp-content/uploads/2019/03/short_white-1.png',
        posts: [
          {
            imageUrl: 'https://f1.pngfuel.com/png/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clip-art.png',
            description: 'This is a Javascript logo',
            hashtags: ['#Javascript', '#reactJS'],
            mentions: ['@TheHackingProject'],
            id: 1,
          },
          {
            imageUrl: 'https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png',
            description: 'This is the React logo',
            hashtags: ['#React', '#formation'],
            mentions: ['@THP'],
            id: 2,
          },
          {
            imageUrl: 'https://avatars2.githubusercontent.com/u/25484553?s=200&v=4',
            description: 'The Hacking Project logo',
            hashtags: ['#THP', '#TheHackingProject'],
            mentions: ['@youhou', '@week7'],
            id: 3,
          }
        ]
      }
    }
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  openPreview(postNumber) {
    this.setState({
      previewItem: postNumber,
      previewPublicationModal: true,
    });
    console.log('preview')
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <Row type="flex" align="middle" justify="center">
          <Col sm={16} xs={24}>
            <Card bordered>
              <Row type="flex" align="middle" justify="center">
                <Col md={14} sm={16} xs={24}>
                  <Row type="flex" justify="space-between">
                    <Col span={10} className="text-center">
                      <Avatar size={100} icon="user" className="profil-pic" src={this.state.profileData.profilePicture} />
                      <h3>{`${this.state.profileData.firstname} ${this.state.profileData.lastname}`}</h3>
                    </Col>
                    <Col span={10}>
                      <p>
                        <Icon type="user" className="p-icon" />
                        {this.state.profileData.username}
                      </p>
                      <p>
                        <Icon type="mail" className="p-icon" />
                        {this.state.profileData.email}
                      </p>
                      <p>
                        <Icon type="phone" className="p-icon" />
                        {this.state.profileData.phoneNumber}
                      </p>
                      <p>
                        <Icon type="calendar" className="p-icon" />
                        {this.formatDate(this.state.profileData.createdAt)}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={10} sm={16} xs={24} className="text-center">
                  <Button type="ghost" icon="setting" onClick={() => this.setState({ editProfilModal: true })}>Edit account</Button>
                  <br />
                  <br />
                  <Button type="ghost" icon="upload" onClick={() => this.setState({ uploadModal: true })}>Upload a picture</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col sm={18} xs={24}>
            <Col span={24} className="container text-center">
              <h2>
                <Icon type="save" />
                <span className="span-icon">Publications</span>
              </h2>
              <Card bordered className="card-pubs" onClick={() => this.openPreview(0)}>
                <img src={this.state.profileData.posts[0].imageUrl} width={200} height={200} alt={this.state.profileData.posts[0].imageUrl} />
              </Card>
              <Card bordered className="card-pubs" onClick={() => this.openPreview(1)}>
                <img src={this.state.profileData.posts[1].imageUrl} width={200} height={200} alt={this.state.profileData.posts[1].imageUrl} />
              </Card>
              <Card bordered className="card-pubs" onClick={() => this.openPreview(2)}>
                <img src={this.state.profileData.posts[2].imageUrl} width={200} height={200} alt={this.state.profileData.posts[2].imageUrl} />
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
