import React , { Component }from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Auth Successful") {
          alert("login successful");
        }
      });

    }
  
  render(){

    return (
      <form onSubmit={this.handleSubmit}>
      <div className="login"> 
      <div className='loginPage'>
        <div className='loginContainer'>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
        </div>

        <div className='loginForm'>
            <div className="loginFormContainer">
                <h4>Log In</h4>
                <div className="loginContent">
                    <div className="email">
                      <i class="fa-solid fa-user"></i> <br></br>
                      <input type="email" placeholder='Enter Email'  
                      onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>
                    <div className="password">
                    <i class="fa-solid fa-lock"></i> <br></br>
                      <input type='password' placeholder='Enter password'
                         onChange={(e) => this.setState({ password: e.target.value })}
                      />
                    </div>
                    <div className="loginCheck">
                      <input type="checkbox" />
                      <span>Keep me Logged In</span>
                    </div>
                    <div className="loginBtn">
                    <button type='submit' >LOG IN</button>
                    </div>
                    <div className="extraContent">
                      <span className='small'>FORGOT PASSWORD? </span>
                      <span className='small'>NEW USER? </span>
                      <span className='small'>REGISTER</span>
                    </div>
                </div>
                
            </div>
    
            <hr></hr>
            <div className="socialIcons">
              <span>Or Login Using : </span>
              <i class="fa-brands fa-google"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
        </div>
      </div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className="homeBtn">Go Back</div>
      </Link>
    </div>
    </form>
  )
}
}

// export default Login;