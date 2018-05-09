import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState({show: false});
    return <Redirect to="/view" />
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteNote(this.props.match.params.id);
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
          <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default withRouter(DeleteNote);