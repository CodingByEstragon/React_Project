import React from 'react';
import './Login.css';
import {HiOutlineMail} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';

function Login() {
  return (
    <>
      <body className='loginBody'>
        <div class="container">
            <div class="forms">
                <div class="form login">
                    <span class="title">Login</span>
                    <form>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your email" required/>
                            <span><HiOutlineMail/></span>
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="Enter your password" required/>
                            <span><AiFillLock/></span>                      
                        </div>
                        <div class="checkbox-textSignin">
                            <div class="checkbox-contentSignin">
                                <input type="checkbox" id="logCheck"/>
                                <label for="logCheck" class="rememberMeSignin">Remember me</label>
                            </div>
                            <a href="#" class="forgotPasswordSignin">Forgot password?</a>
                        </div>

                        <div class="input-field button">
                            <input type="button" value="Login Now"/>
                        </div>
                    </form>
                    <div class="loginSignup">
                        <span class="notMemberSignin">Not a member?
                            <a class="signupNow" href="/signup">Signup now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </body>
    </>
  )
}

export default Login
