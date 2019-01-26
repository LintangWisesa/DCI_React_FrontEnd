import React, { Component } from 'react'
import Dashboard from './dci_Dashboard'

class App extends Component {
  
  state = {
    login: false
  }

  render(){
    
    // form login
    var loginForm = 
    <div>
      <div class="container">
        <div class="mx-auto my-5"><br/><br/>
          <h1 class="text-center">
            <img alt='dci' src="dci.jpg" class="img-thumbnail" width="5%" height="5%"/>
            &nbsp;&nbsp;PT. Dela Cemara Indah
          </h1>
        </div>
        <div class="card card-login mx-auto mt-5">
          <h5 class="card-header bg-info text-white text-center">
            Login ke Dashboard
          </h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                  <label for="inputEmail">Nama pengguna</label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required"/>
                  <label for="inputPassword">Password</label>
                </div>
              </div>
              <div class="form-group">
              </div>
                <a onClick={()=>{this.setState({login: true})}}
                class="btn btn-info btn-block text-white" href>
                  Login
                </a>
            </form>
            <div class="text-center">
              <small class="d-block small my-3">
                Copyright © PT Dela Cemara Indah 2018
              </small>
            </div>
          </div>
        </div>
      </div>
        <small className="text-center" style={{position: 'fixed', bottom: '25px', width:'100%'}}>
          Copyright © PT Dela Cemara Indah 2018
        </small>
    </div>
    
    return(
      <div>
        {this.state.login ? <Dashboard/> : loginForm}
      </div>
    )
  }
}

export default App