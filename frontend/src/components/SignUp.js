import {React, useEffect, useState, useRef} from 'react'
import './SignUp.css'
import {HiOutlineMail} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SignUp() {

    // const [values, setValues] = useState({
    //     name: 'testname',
    //     email: 'test.name@gmail.com',
    //     password: 'testpassword'
    // })
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(pwd); 
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user,email, pwd, matchPwd])

  return (
    <>
      <body className='registrationBody'>
        <div className="containerSignup">
            <div className="formsSignup">
                <div className="form loginSignup">
                    <span className="titleSignup">Registration</span>
                    {/* <form action="#" onSubmit={handleSubmit}> */}
                    <form action="#">
                        <div className="input-fieldSignup">
                            <label>
                                Username:
                            </label>
                            <input type="text" placeholder="Enter your name" 
                                ref={userRef} 
                                auroComplete="off" 
                                onChange={(e) => setUser(e.target.value)} 
                                required 
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby='"uidnote'
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <span><AiOutlineUser/></span>
                        </div>
                        <div className="input-fieldSignup">
                            <input type="email" placeholder="Enter your email" required/>
                            <span><HiOutlineMail/></span>
                        </div>
                        <div className="input-fieldSignup">
                            <input type="password" placeholder="Enter your password" required/>
                            <span><AiFillLock/></span>                      
                        </div>
                        <div className="input-fieldSignup">
                            <input type="password" placeholder="Confirm password" required/>
                            <span><AiFillLock/></span>                      
                        </div>      
                        <div className="checkbox-textSignup">
                            <div className="checkbox-contentSignup">
                                <input type="checkbox" id="logCheck"/>
                                <label for="logCheck" className="rememberMeSignup">Remember me</label>
                            </div>
                            <a href="#" className="forgotPasswordSignup">Forgot password?</a>
                        </div>

                        <div className="input-fieldSignup buttonSignup">
                            <input type="button" value="Register Now"/>
                        </div>
                    </form>
                    <div className="registration-signup">
                        <span className="MemberSignup">Are you a member?
                            <a className="signinNow" href="/login">Signin now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </body>
    </>
  )
}

export default SignUp
