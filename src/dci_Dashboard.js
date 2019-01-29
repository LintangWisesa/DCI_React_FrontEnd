import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

import { Link, Route } from 'react-router-dom'
import welcome from './0_welcome'
import FileUser from './0_FileUser'

class Dashboard extends Component {

  state = {
    user: this.props.user,
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

  componentDidMount(){
    this.setState({
      user: this.props.user
    })
    console.log(this.state.user)
    setTimeout(
      this.createNotification('loginOK'), 500
    )
    axios.post('http://localhost:1234/menu/master', {
      nama: this.state.user.nama
    }).then((x)=>{
      console.log(x.data)
      if(x.data.length > 0){
        this.setState({subMaster: x.data})
      } else {
        this.setState({subMaster: [{submenu: 'Menu tidak tersedia'}]})
      }
    })
    axios.post('http://localhost:1234/menu/mutasi', {
      nama: this.state.user.nama
    }).then((x)=>{
      console.log(x.data)
      if(x.data.length > 0){
        this.setState({subMutasi: x.data})
      } else {
        this.setState({subMutasi: [{submenu: 'Menu tidak tersedia'}]})
      }
    })
    axios.post('http://localhost:1234/menu/laporan', {
      nama: this.state.user.nama
    }).then((x)=>{
      console.log(x.data)
      if(x.data.length > 0){
        this.setState({subLaporan: x.data})
      } else {
        this.setState({subLaporan: [{submenu: 'Menu tidak tersedia'}]})
        console.log(this.state.subLaporan)
      }
    })
  }

  render() {

    var subMaster = this.state.subMaster.map((val, i)=>{
      if (this.state.subMaster.length > 1){  
        var menu = val.submenu
        return (
        <Link to={`/${menu}`}>
          <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        </Link>
        )} else {
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
        <Link to={`/${menu}`}>
          <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        </Link>
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
        <Link to={`/${menu}`}>
          <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
            {menu}
          </a>
        </Link>
      )} else {
        var menu = val.submenu
        return (
        <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>
          {menu}
        </a>
      )}
    })

    return (
      <div className="Dashboard">
        <NotificationContainer/>
        <nav style={{position: 'fixed', width:'100%', zIndex:'9999', height:'70px'}} class="navbar navbar-expand navbar-dark bg-dark static-top">

          <a class="navbar-brand mr-1" href="/">
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
                <a class="dropdown-item" style={{cursor:'pointer'}}>Profil Saya</a>
                <a href='/' class="dropdown-item" style={{cursor:'pointer'}}>
                  Logout
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
    );
  }
}

export default Dashboard;
