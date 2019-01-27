import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

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
      var menu = val.submenu
      return <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>{menu}</a>
    })

    var subMutasi = this.state.subMutasi.map((val, i)=>{
      var menu = val.submenu
      return <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>{menu}</a>
    })

    var subLaporan = this.state.subLaporan.map((val, i)=>{
      var menu = val.submenu
      return <a key={i} class="dropdown-item" style={{cursor:'pointer'}}>{menu}</a>
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

          <div id="wrapper">

          <div id="content-wrapper" style={{marginTop: '80px'}}>

            <div class="container-fluid">

              {/* {// Icon Cards-->} */}
              <div class="row">
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-primary o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-comments"></i>
                      </div>
                      <div class="mr-5">26 New Messages!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-warning o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-list"></i>
                      </div>
                      <div class="mr-5">11 New Tasks!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-success o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-shopping-cart"></i>
                      </div>
                      <div class="mr-5">123 New Orders!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-danger o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-life-ring"></i>
                      </div>
                      <div class="mr-5">13 New Tickets!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* {// Area Chart Example-->} */}
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-area"></i>
                  Area Chart Example</div>
                <div class="card-body">
                  <canvas id="myAreaChart" width="100%" height="30"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

              {/* {// DataTables Example -->} */}
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  Data Table Example</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr>
                          <td>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                        <tr>
                          <td>Airi Satou</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

            </div>

            {/* {// Sticky Footer -->} */}
            <footer class="sticky-footer">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright © PT Dela Cemara Indah 2018</span>
                </div>
              </div>
            </footer>
          </div>
          </div>
          <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
          </a>

          {/* {// Logout Modal-->} */}
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
