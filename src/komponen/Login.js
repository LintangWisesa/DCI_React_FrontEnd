import React, { Component } from 'react'

class Home extends Component {
  render(){
    return(
      <div>
        
        {/* <div class="container" style={this.state.user ? {visibility: 'hidden'} : {visibility: 'visible'}}> */}
        <div class="container">
          <div class="mx-auto my-5">
            <h1 class="text-center text-white">
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
                  <div class="checkbox">
                    <label class='small'>
                      <input type="checkbox" value="remember-me"/>
                        &nbsp;Ingat password
                    </label>
                  </div>
                </div>
                {/* <Link to='/home'> */}
                  {/* <a onClick={()=>{this.setState({user:'aku'})}} */}
                  <a onClick={this.props.login}
                  class="btn btn-info btn-block text-white" href>
                    Login
                  </a>
                {/* </Link> */}
              </form>
              <div class="text-center">
                <a class="d-block small mt-3" href="register.html">Daftarkan akun baru</a>
                <a class="d-block small" href="forgot-password.html">Lupa password?</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home