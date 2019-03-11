import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MasterKaryawan extends Component{

    state = {
        karyawans: [],
        nip: ''
    }

    componentDidMount(){
        var urlUsers = 'http://localhost:1234/master'
        axios.get(urlUsers)
        .then((x)=>{
            this.setState({
                karyawans: x.data
            })
        }).catch(()=>{
            console.log('error')
        })
    }

    render(){

        // ============================ function ===============================

        // ============================ komponen ===============================

        var allkaryawan = this.state.karyawans.map((val, i)=>{
            var data = {
                nip: val.nip,
                nama: val.nama,
                jabatan: val.jabatan,
                department: val.department,
                seksi: val.seksi,
                stat_peg: val.stat_peg,
                telp: val.telp
            }
            return(
                <tr key={i}>
                    <td><Link to={`/karyawan/${data.nip}`}>{data.nip}</Link></td>
                    <td><Link to={`/karyawan/${data.nip}`}>{data.nama}</Link></td>
                    <td>{data.jabatan}</td>
                    <td>{data.department}</td>
                    <td>{data.seksi}</td>
                    <td>{data.stat_peg}</td>
                    <td>{data.telp}</td>
                </tr>
            )
        })

        // ============================ JSX body ===============================

        return(
            <div>
                <div id="wrapper">
                <div id="content-wrapper" style={{marginTop: '120px'}}>
                <div class="container-fluid">

                    {/* {// DataTables Example -->} */}
                    <div class="card mb-3 mx-5">
                    <div class="card-header alert alert-primary">
                        <i class="fas fa-table"></i>
                        &nbsp;&nbsp;Master Karyawan</div>
                    
                    <div class="card-body" style={{textTransform: 'capitalize'}}>
                        
                        <button onClick={()=>{window.location.href = "/Add%20Karyawan";}} 
                        className="btn btn-success mb-3">
                            <i class="fas fa-user-plus"></i>&nbsp;&nbsp;Tambah Karyawan
                        </button>

                        <div class="table-responsive">
                        <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                            <thead className='thead-dark'>
                            <tr>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Jabatan</th>
                                <th>Department</th>
                                <th>Seksi</th>
                                <th>Status</th>
                                <th>No. Telp</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Jabatan</th>
                                <th>Department</th>
                                <th>Seksi</th>
                                <th>Status</th>
                                <th>No. Telp</th>
                            </tr>
                            </tfoot>
                            <tbody>
                                {allkaryawan}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div class="card-footer small text-muted"></div>
                    </div>

                </div>
                </div>
                </div>
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
            
        </div>
        )
    }
}

export default MasterKaryawan