import React from "react";
import { Form } from "react-bootstrap";
import "../../Content/css/bootstrap.min.css";
import "../../Content/css/main.css";
import logo from "../../Content/img/mylogo3.png";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 5,
        }}
      
    />
);

export default function Login() {
    return (
        <div style={{"background": "#08663a"}}>
        <div className="authentication" >
            <div className="container">
                <Form action="./Body">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                            <div className="login-screen">
                                <div className="login-box">
                                    <a href="#" className="login-logo">
                                        <img src={logo} alt="Admin Dashboard" />
                                    </a>
                                    <h5 style={{"color": "black"}}>Welcome back,<br />Please Login to your Account.</h5>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="actions mb-4">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="remember_pwd" />
                                            <label className="custom-control-label" for="remember_pwd">Remember me</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="forgot-pwd">
                                        <a className="link" href="forgot-pwd.html">Forgot password?</a>
                                    </div>

                                    <div>
                                        <ColoredLine color="red" />
                                    </div>

                                    <div className="actions align-left">
                                        <span className="additional-link">New here?</span>
                                        <a href="signup.html" className="btn btn-dark">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
        </div>
    )
};