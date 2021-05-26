import React,{Component} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Login extends Component{
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email:'',
      password:''
    }
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e){
      this.setState({
          password:e.target.value
      })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email:this.state.email,
      password:this.state.password
    }

    console.log(user);
    axios.post('https://r24hkart.herokuapp.com/customers/login', user)
    .then(function (response) {
      if (response.data.Code === 'Su') {
          window.location = "/welcome"
      } else if (response.data.Code === 'Fa'){
          window.location = "/signup"
      }
  })
  .catch(function(error) {
      window.location = "/signup"
  })
    this.setState({
      email:'',
      password:''
    })
  }
  render()
  {
    return(
        <div className="container">
          <form class="form-signin" onSubmit={this.onSubmit}>
      <img class="logoimg" src="https://www.scienceabc.com/wp-content/uploads/2016/05/shopping-cart.jpg" alt="24Hcart" width="72" height="72"/>
     <center><h1 >Please Login</h1></center> 
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" value={this.state.email}
                onChange={this.onChangeEmail} required autofocus/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password"  value={this.state.password}
                onChange={this.onChangePassword} required/>
      <div class="checkbox mb-3">
      <center>
      <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </center>
      
        <br/>
        <center>
        <a href="/signup">Dont have account create one</a>
        </center>
     
      </div>
      <input type="submit" value="Login" className="btn btn-primary" />
      <center> <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p></center>
    </form>
        </div>
        );
    
  }
}
