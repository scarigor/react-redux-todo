import React, {Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import Validator from 'validator';
import InlineError from '../../Messages/InlineError/InlineError'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  }

  validate = data => {
    const errors = {}
    if (!Validator.isEmail(data.email))
      errors.email = 'Invalid email!'
    if (!data.password)
      errors.password = 'Cant be blank!'
    return errors
  }

  handleChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  handleSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
    }
  }

  render() {
    const { data, errors } = this.state
    return (<div className='login-page'>
      <h1 className='login-heading'>Login</h1>

      <Form onSubmit={this.handleSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input onChange={this.handleChange} id='email' name='email' type='email' placeholder='type your email here...' value={data.email}/> {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input onChange={this.handleChange} id='password' name='password' type='password' placeholder='Password' value={data.password}/> {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>

        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions'/>
        </Form.Field>
        <Button primary="primary" type='submit'>Submit</Button>
      </Form>
    </div>)
  }
}

export default LoginForm;
