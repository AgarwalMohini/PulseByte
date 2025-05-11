import { Divider, Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom';
import React from 'react'

function Login() {

  const onFinish=(values)=>{
    console.log("Received values of Form:", values);

  };
  return (
    <div className='authentication'>
      <div className='authentication-form card p-3'>
        <h1 className='card-title'>Welcome back</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email'/>
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button my-2' htmlType='submit' >LOGIN</Button>

          <Link to='/register' className='anchor mt-3'> Click here to register</Link>
        </Form>
      </div>
    </div>
  )
}

export default Login;