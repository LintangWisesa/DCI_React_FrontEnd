import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Home from './komponen/Home'

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: ''
    }
  }

  render() {

    return (
      <div className="App">
        
        {/* navigasi */}
        <nav style={this.state.user ? {visibility: 'visible'} : {visibility: 'hidden'}}
        class="navbar navbar-expand navbar-dark bg-dark static-top">
          <a class="navbar-brand mr-1" href="index.html">
            <img alt='dci' src="dci.jpg" class="mx-2" width="8%" height="8%"/>
            <b>PT Dela Cemara Indah</b>
            <button class="btn btn-link btn-lg text-white order-1 order-sm-0" id="sidebarToggle" href="a">
              <i class="fas fa-bars"></i>
            </button>
          </a>
          <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Pencarian..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="a" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger">9+</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                <a class="dropdown-item" href="a">Action</a>
                <a class="dropdown-item" href="a">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="a">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="a" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw"></i>
                <span class="badge badge-danger">7</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                <a class="dropdown-item" href="a">Action</a>
                <a class="dropdown-item" href="a">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="a">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="a" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-circle fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="a">Settings</a>
                <a class="dropdown-item" href="a">Activity Log</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="a" data-toggle="modal" data-target="#logoutModal">Logout</a>
              </div>
            </li>
          </ul>
        </nav>

      {/* Route */}
      <div>
      <Route exact path="/" component={'login'}/>
      <Route path="/home" component={Home}/>
      {/* <Route path="/header" component={Header}/> */}
      {/* <Route path="/footer" component={Footer}/> */}
      </div>

      {/* login form */}
      <div class="container" style={this.state.user ? {visibility: 'hidden'} : {visibility: 'visible'}}>
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
                <Link to='/home'>
                  <a onClick={()=>{this.setState({user:'aku'})}}
                  class="btn btn-info btn-block text-white" href>
                    Login
                  </a>
                </Link>
              </form>
              <div class="text-center">
                <a class="d-block small mt-3" href="register.html">Daftarkan akun baru</a>
                <a class="d-block small" href="forgot-password.html">Lupa password?</a>
              </div>
            </div>
          </div>
        </div>

    </div>
    );
  }
}

export default App;
