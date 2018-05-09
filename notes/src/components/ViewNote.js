import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledEditDelete: false
    }
  }

  showEditDelete = () => {
    this.setState({enabledEditDelete: true})
  }

  hideEditDelete = () => {
    this.setState({enabledEditDelete: false})
  }

  render() {
    return (
      <div onMouseEnter={this.showEditDelete} onMouseLeave={this.hideEditDelete}>
        { this.state.enabledEditDelete &&
          <Row>
            <Col>
              <Link bsStyle="primary" to={`/edit/${this.props.match.params.id}`}>
                <Button>Edit</Button>
              </Link>
              <Link bsStyle="danger" to={`/delete/${this.props.match.params.id}`}>
                <Button>Delete</Button>
              </Link>
            </Col>
          </Row>
        }
        <Row>
          <Col>
            <h3>{this.props.notes[this.props.match.params.id].title}</h3>
            {this.props.notes[this.props.match.params.id].content
              .replace(/\r?\n/g, '<br>').replace(/<br>+/g, '<br>')
                .split('<br>').map((para, index) => {
                  return (
                    <p key={index}>{para}</p>
                  )
              })}
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(ViewNote);