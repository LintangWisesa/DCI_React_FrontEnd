import React, { Component } from 'react'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import SimpleStorage from "react-simple-storage";

import { Link, Route } from 'react-router-dom'
import welcome from './0_welcome'
import FileUser from './0_FileUser'

class App extends Component {
  
  state = {
    login: false,
    loading: false,
    user: {},
    subMaster: [],
    subMutasi: [],
    subLaporan: []
  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'logoutOK':
          NotificationManager.info(`Sampai jumpa kembali...`, 'Logout sukses!');
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

  logout = ()=>{
    this.setState({
      loading: true
    })
    setTimeout(
      this.createNotification('logoutOK'), 500
    )
    this.setState({
      loading: false,
      login: false,
      user: {}
    })
  }

  masukLogin = ()=>{
    this.setState({
      loading: true
    })
    if (this.refs.nama.value && this.refs.password.value){
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
          setTimeout(
            this.createNotification('loginOK'), 500
          )
          axios.post('http://localhost:1234/menu/master', {
            nama: this.state.user.nama
          }).then((x)=>{
            console.log(x.data)
            if(x.data.length > 0){
              this.setState({
                subMaster: x.data,
                loading: false
              })
            } else {
              this.setState({
                subMaster: [{submenu: 'Menu tidak tersedia'}],
                loading: false
              })
            }
          })
          axios.post('http://localhost:1234/menu/mutasi', {
            nama: this.state.user.nama
          }).then((x)=>{
            console.log(x.data)
            if(x.data.length > 0){
              this.setState({
                subMutasi: x.data,
                loading: false
              })
            } else {
              this.setState({
                subMutasi: [{submenu: 'Menu tidak tersedia'}],
                loading: false
              })
            }
          })
          axios.post('http://localhost:1234/menu/laporan', {
            nama: this.state.user.nama
          }).then((x)=>{
            console.log(x.data)
            if(x.data.length > 0){
              this.setState({
                subLaporan: x.data,
                loading: false
              })
            } else {
              this.setState({
                subLaporan: [{submenu: 'Menu tidak tersedia'}],
                loading: false
              })
            }
          })
        }
      }).catch((res)=>{
        console.log(res.data.status)
      })
    } else {
      setTimeout(
        this.createNotification('kosong'), 500
      )
      this.refs.nama.value = ''
      this.refs.password.value = ''
      this.setState({loading: false})
    }
  }

  render(){

    // form login
    var loginForm = 
    <div>
      <div class="container">
        <div class="mx-auto my-3"><br/><br/>
          <h2 class="text-center">
            <img alt='dci' src="dci.jpg" class="img-thumbnail" width="5%" height="5%"/>
            &nbsp;&nbsp;PT. Dela Cemara Indah
          </h2>
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

    var subMaster = this.state.subMaster.map((val, i)=>{
      if (this.state.subMaster.length > 1){  
        var menu = val.submenu
        return (
        // <Link to={`/${menu}`}>
          <a href={`/${menu}`} key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        // </Link>
        )} else {
          var menu = val.submenu
          return (
            <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
              {menu}
            </a>
        )}
    })

    var subMutasi = this.state.subMutasi.map((val, i)=>{
      if (this.state.subMutasi.length > 1){  
        var menu = val.submenu
        return (
        // <Link to={`/${menu}`}>
          <a href={`/${menu}`} key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        // </Link>
      )} else {
        var menu = val.submenu
        return (
        <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
          {menu}
        </a>
      )}
    })

    var subLaporan = this.state.subLaporan.map((val, i)=>{
      if (this.state.subLaporan.length > 1){  
        var menu = val.submenu
        return (
        // <Link to={`/${menu}`}>
          <a href={`/${menu}`} key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        // </Link>
      )} else {
        var menu = val.submenu
        return (
        <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
          {menu}
        </a>
      )}
    })

    // dashboard
    var dashboard = 
    <div className="Dashboard">
        
        <NotificationContainer/>
        
        <nav style={{position: 'fixed', width:'100%', zIndex:'9999', height:'70px'}} 
        class="navbar navbar-expand navbar-dark bg-dark static-top">
          
          <a class="navbar-brand" href="/">
            <img alt src="dci.jpg" class="mx-2" width="8%" height="8%"/>
            <b>PT Dela Cemara Indah</b>
          </a>

          {/* {// Navbar -->} */}
          <ul class="navbar-nav ml-auto ml-md-0">
            
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Master File
              </a>
              <div class="dropdown-menu dropdown-menu-left" aria-labelledby="alertsDropdown">
                {subMaster}
              </div>
            </li>

            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mutasi
              </a>
              <div class="dropdown-menu dropdown-menu-left" aria-labelledby="alertsDropdown">
                {subMutasi}
              </div>
            </li>

            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Laporan
              </a>
              <div class="dropdown-menu dropdown-menu-left" aria-labelledby="alertsDropdown">
                {subLaporan}
              </div>
            </li>

            <li class="nav-item dropdown no-arrow ml-auto">
              <a class="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i>&nbsp;&nbsp;
                {this.state.user.nama}
              </a>
              <div class="dropdown-menu dropdown-menu-left" aria-labelledby="alertsDropdown">
                <a class="dropdown-item" style={{cursor:'pointer'}}>
                  <i class="far fa-address-card"></i>&nbsp;&nbsp;Profil Saya
                </a>
                <a onClick={this.logout} class="dropdown-item" style={{cursor:'pointer'}}>
                  {this.state.loading ? <img style={{height:'30px', width:'30px'}} alt="" src="wait.gif"/> : <span><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</span>}
                </a>
              </div>
            </li>
          </ul>

          </nav>

        <div>
          <Route exact path="/" component={welcome}/>
          <Route path="/File User" component={FileUser}/>
        </div>
      </div>

    return(
      <div>
        <SimpleStorage parent={this} />
        <NotificationContainer/>
        {this.state.login ? dashboard : loginForm}
        
        {/* {// copyright Footer -->} */}
        <footer class="sticky-footer" style={{width:'100%'}}>
            <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright © PT Dela Cemara Indah 2019</span>
            </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default App