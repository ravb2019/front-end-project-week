import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.notes[this.props.match.params.id].title,
      content: this.props.notes[this.props.match.params.id].content
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editNote(this.state, this.props.match.params.id);
    // this.setState({title: "", content: ""});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" name="title"
                     value={this.state.title} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="textarea" name="content"
                     value={this.state.content} onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

export default withRouter(EditNote);