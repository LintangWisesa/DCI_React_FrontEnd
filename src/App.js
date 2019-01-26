import React, { Component } from 'react'
import Dashboard from './dci_Dashboard'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  
  state = {
    login: false,
    loading: false,
    user: {}
  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'loginOK':
          NotificationManager.success(`Selamat datang ${this.state.user.nama}`, 'Selamat datang!');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'kosong':
          NotificationManager.warning('Ketik nama & password Anda untuk proses autentikasi', 'Input nama & password!');
          break;
        case 'gagal':
          NotificationManager.error('Gagal! nama & password Anda tidak terdaftar', 'Login gagal!');
          break;
      }
    };
  };

  masukLogin = ()=>{
    this.setState({
      loading: true
    })
    if (this.refs.nama.value || this.refs.password.value){
      var url = 'http://localhost:1234/login'
      axios.post(url, {
        nama: this.refs.nama.value,
        password: this.refs.password.value
      }).then((res)=>{
        console.log(res.data.status)
        if(res.data.status === 'error'){
          setTimeout(
            this.createNotification('gagal'), 500
          )
          this.setState({loading: false})
          this.refs.nama.value = ''
          this.refs.password.value = ''
        } else {
          this.setState({
            login: true,
            user: res.data
          })
        }
      }).catch((res)=>{
        console.log(res.data.status)
      })
    } else {
      setTimeout(
        this.createNotification('kosong'), 500
      )
      this.setState({loading: false})
    }
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
        <div class="card card-login mx-auto">
          <h5 class="card-header bg-dark text-white text-center">
            {this.state.loading ? <img style={{height:'30px', width:'30px'}} alt="" src="wait.gif"/> : 'Login ke Dashboard'}
          </h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <div class="form-label-group">
                  <input ref='nama' type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                  <label for="inputEmail">Nama pengguna</label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label-group">
                  <input ref='password' type="password" id="inputPassword" class="form-control" placeholder="Password" required="required"/>
                  <label for="inputPassword">Password</label>
                </div>
              </div>
              <div class="form-group">
              </div>
                <a onClick={this.masukLogin}
                class="btn btn-success btn-block text-white" href>
                  {this.state.loading ? <img style={{height:'30px', width:'30px'}} alt="" src="wait.gif"/> : <span><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Login</span>}
                </a>
            </form>
            <div class="text-center">
              <small class="d-block small my-3">
                Copyright © PT Dela Cemara Indah 2019
              </small>
            </div>
          </div>
        </div>
      </div>
        <small className="text-center" style={{position: 'fixed', bottom: '25px', width:'100%'}}>
          Copyright © PT Dela Cemara Indah 2019
        </small>
    </div>
    
    return(
      <div>
        <NotificationContainer/>
        {this.state.login ? <Dashboard user={this.state.user}/> : loginForm}
      </div>
    )
  }
}

export default App