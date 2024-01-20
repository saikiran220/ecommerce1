import React from 'react'
import { Formik,Form, Field } from 'formik';
import * as Yup from 'yup';
import {Button, Form as BootstrapForm, Col, Row} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';



const Loginform = () => {
    const navigate=useNavigate();
    const {login}=useAuth()

    const initialValues={
        user_name:'',
        password:''
    }
    const Schema=Yup.object().shape({
      user_name:Yup.string().required('username is required'),
        password:Yup.string().required('Password is required')
    })
    const onSubmit=async(values)=>{
        console.log(values)
        try {
            await login(values);
            navigate('/');  
  
          } catch (error) {
            
          }
    }
  return (
    <div>
        <div className='container loginContainer normal-login'>
          <Row>
            <div className='col-md-12 text-center'>
              <NavLink><img src={"/myntra_logo2.png"} style={{height:"90px"}} /></NavLink>
            </div>
          </Row>
          <Row>
            <div className='col-md-12'>
              <p>Login in using your Email or phoneNumber </p>
            </div>
          </Row>
          <Row>
            <div className='col-md-12 '>
              <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSubmit}>
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <Row>
                      <Col md={4}>
                        <BootstrapForm.Group controlId='user_name'>
                          <BootstrapForm.Label>User Name</BootstrapForm.Label>
                          <Field type='text' name='user_name' id='inputformControl' className={touched.user_name && errors.user_name ? "form-control is-invalid " : "form-control"} />
                          {touched.user_name && errors.user_name && (<div className='text-danger'>{errors.user_name}</div>)}
                        </BootstrapForm.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <BootstrapForm.Group controlId='password'>
                          <BootstrapForm.Label>Password</BootstrapForm.Label>
                          <Field type="password" name="password" id='inputformControl' className={errors.password && touched.password ? '  form-control is-invalid' : 'form-control'} />
                          {touched.password && errors.password && (<div className='text-danger'>{errors.password}</div>)}
                        </BootstrapForm.Group>
                      </Col>
                    </Row>
                    <div className='col-md-12 text-center'>
                      <Button type='submit' className='Submitbutton' disabled={isSubmitting}>Submit</Button>
                    </div>
  
                  </Form>
                )}
              </Formik>
            </div>
          </Row>
        </div>
  
      </div>
  )
}

export default Loginform
