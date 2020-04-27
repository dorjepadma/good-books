import React from 'react';
import Avatar from '../components/Avatar'
import Content from '../components/Content'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      Message: '',
      disabled: false,
      emailSent: null,
    }
  }
  handleChange = (event) => {
  const target = event.target;
  //checkbox would only be needed for sign up for email etc. 
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  })
}

handleSubmit = (event) => {
  event.preventDefault();

  this.setState({
    disabled: true,
    emailSent: false
  });
}

  render() {
    return(
    <div>
      <Avatar title={this.props.title} />
      <Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='Message'>Message</Form.Label>
            <Form.Control id='message' name='message' as='textArea' rows='5' value={this.state.message} onChange={this.handleChange} />
          </Form.Group>


          <Button className='d-inline-block' variant='primary' type='submit' disabled={this.state.disabled}>
            Submit
          </Button>

          {this.state.emailSent === true && <p className='d-inline success-msg'>I will be in touch soon</p>}
          {this.state.emailSent === false && <p className='d-inline err-msg'>Email not sent</p>}


        </Form>
      </Content>
    </div>
      );
    }
}
export default ContactPage