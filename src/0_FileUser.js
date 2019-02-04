import React, { Component } from 'react'
import axios from 'axios'

class FileUser extends Component{

    state = {
        allUsers: [],
        allMenu: [],
        allNewMenu: [],
        allDepts: [],
        userEdit: {},
        cek: false
    }

    componentDidMount(){
        var urlUsers = 'http://localhost:1234/userDept'
        axios.get(urlUsers)
        .then((x)=>{
            this.setState({
                allUsers: x.data
            })
            var urlDept = 'http://localhost:1234/depts'
            axios.get(urlDept)
            .then((x)=>{
                this.setState({
                    allDepts: x.data
                })
            })
        }).catch(()=>{
            console.log('error')
        })
    }

    ubahnama = (x) => {
        this.setState({
            userEdit: {
                nama: x
            }
        })
    }
    ubahpass = (x) => {
        this.setState({
            userEdit: {
                pass: x
            }
        })
    }
    ubahdept = (x) => {
        this.setState({
            userEdit: {
                dept: x
            }
        })
        console.log(x)
    }
    ubahmenu = (x) => {
        console.log(x)
    }

    render(){

        // ============================ function ===============================

        var editButton = (dataUser)=>{
            this.setState({
                userEdit: dataUser
            })
            var submenu = `http://localhost:1234/menu/id/${dataUser.id}`
            axios.get(submenu).then((x)=>{
                this.setState({
                    allMenu: x.data
                })
            }).catch(()=>{
                console.log('error')
            })
        }

        var addButton = ()=>{
            var submenu = `http://localhost:1234/menu`
            axios.get(submenu).then((x)=>{
                this.setState({
                    allNewMenu: x.data
                })
            }).catch(()=>{
                console.log('error')
            })
        }

        // ============================ komponen ===============================

        var allMenu = this.state.allMenu.map((val, i)=>{
            var dataMenu = {
                id_user: val.id_user,
                id_menu: val.id_menu,
                submenu: val.submenu,
                status: val.status
            }
            return(
                <label key={i} className="col-md-4" style={{fontSize:'12px'}}>
                    <input type = "checkbox"
                    defaultChecked = {dataMenu.status === 'ok' ? true : false}
                    value = {[dataMenu.id_user, dataMenu.id_menu]}
                    onChange = {(e)=>{this.ubahmenu(e.target.value)}}
                    />
                    &nbsp;{dataMenu.submenu}
                </label>
            )
        })

        var allNewMenu = this.state.allNewMenu.map((val, i)=>{
            var dataMenu = {
                id: val.id,
                submenu: val.submenu
            }
            return(
                <label key={i} className="col-md-4" style={{fontSize:'12px'}}>
                    <input type = "checkbox"
                    value = {dataMenu.id}
                    onChange = {(e)=>{console.log(dataMenu.id)}}
                    />
                    &nbsp;{dataMenu.submenu}
                </label>
            )
        })

        var allDepts = this.state.allDepts.map((val, i)=>{
            var dataDept = {
                dept: val.dept,
                fulldept: val.fulldept
            }
            return(
                <option value={dataDept.dept} key={i}>Dept: {dataDept.dept}/{dataDept.fulldept}</option>
            )
        })

        var allUsers = this.state.allUsers.map((val, i)=>{
            var dataUser = {
                id: val.id,
                nama: val.nama,
                pass: val.password,
                dept: val.dept,
                fulldept: val.fulldept,
                dibuat: val.dibuat,
                diupdate: val.diupdate
            }
            return(
                <tr key={i}>
                    <td>{dataUser.id}</td>
                    <td>{dataUser.nama}</td>
                    <td>{dataUser.fulldept}</td>
                    <td>{dataUser.dibuat}</td>
                    <td>{dataUser.diupdate}</td>
                    <td>
                        <button onClick={()=>{editButton(dataUser)}} type="button" class="btn btn-info" 
                        data-toggle="modal" data-target="#exampleModalCenter">
                            <i class="fas fa-edit"></i>&nbsp;&nbsp;Edit
                        </button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                            <i class="fas fa-trash-alt"></i>&nbsp;&nbsp;Hapus
                        </button>
                    </td>
                </tr>
            )
        })

        // ============================ JSX body ===============================

        return(
            <div>
                <div id="wrapper">
                <div id="content-wrapper" style={{marginTop: '80px'}}>
                <div class="container-fluid">

                    {/* {// DataTables Example -->} */}
                    <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-table"></i>
                        &nbsp;&nbsp;File User</div>
                    <div class="card-body">

                        <button onClick={addButton} className="btn btn-success mb-3" 
                        data-toggle="modal" data-target="#exampleModalCenter2">
                            <i class="fas fa-user-plus"></i>&nbsp;&nbsp;Tambah
                        </button>

                        <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Department</th>
                                <th>Dibuat</th>
                                <th>Diupdate</th>
                                <th>Menu</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Department</th>
                                <th>Dibuat</th>
                                <th>Diupdate</th>
                                <th>Menu</th>
                            </tr>
                            </tfoot>
                            <tbody>
                                {allUsers}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>

                </div>
                </div>
                </div>
                <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
                </a>

                {/* {// Edit Modal popup -->} */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">
                                <i class="fas fa-user-edit"></i>&nbsp;Edit Data User
                            </h5>
                            <button href="/File%20User" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <input onChange={(e)=>{this.ubahnama(e.target.value)}} 
                                        value={this.state.userEdit.nama} 
                                        ref='nama' type="text" id="inputNama" class="form-control" 
                                        placeholder="Ketik nama..." required="required" autofocus="autofocus"/>
                                        <label for="inputNama">Nama</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <input onChange={(e)=>{this.ubahpass(e.target.value)}}
                                        value={this.state.userEdit.pass} ref='password' type="text" id="inputPassword" class="form-control" placeholder="Password" required="required"/>
                                        <label for="inputPassword">Password</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <select onChange={(e)=>{this.ubahdept(e.target.value)}}
                                        select={this.state.userEdit.dept} ref='dept' type="text" id="inputDept" 
                                        class="custom-select form-control" placeholder="Dept" required="required">
                                            <option selected disabled hidden value={this.state.userEdit.dept}>
                                                Dept: {this.state.userEdit.dept}/{this.state.userEdit.fulldept}
                                            </option>
                                            {allDepts}
                                        </select>
                                        </div>
                                    </div>
                                </div>

                                <hr/>
                                <h5 class="mb-3 modal-title" id="exampleModalCenterTitle">
                                    <i class="fas fa-list-ul"></i>&nbsp;&nbsp;Menu Diizinkan
                                </h5>
                                <div className="row">
                                    {allMenu}
                                </div>

                                <div class="modal-footer">
                                    <button href="/File%20User" type="button" class="btn btn-success">
                                        <i class="far fa-save"></i>&nbsp;&nbsp;Simpan
                                    </button>
                                    <button onClick={()=>{window.location.reload()}} href="/File%20User" type="button" class="btn btn-danger" data-dismiss="modal">
                                        <i class="fas fa-times"></i>&nbsp;&nbsp;Batal
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {// Add user Modal popup -->} */}
            <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">
                                <i class="fas fa-user-plus"></i>&nbsp;Tambah Data User
                            </h5>
                            <button href="/File%20User" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <div class="form-label-group">
                                        <input ref='nama' type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                                        <label for="inputEmail">Nama pengguna</label>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-label-group">
                                        <input ref='pass' type="email" id="inputPass" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                                        <label for="inputPass">Password</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <select
                                        ref='dept' type="text" id="inputDept" 
                                        class="custom-select form-control" placeholder="Dept" required="required">
                                            <option hidden>
                                                Pilih department...
                                            </option>
                                            {allDepts}
                                        </select>
                                        </div>
                                    </div>
                                </div>

                                <hr/>
                                <h5 class="mb-3 modal-title" id="exampleModalCenterTitle">
                                    <i class="fas fa-list-ul"></i>&nbsp;&nbsp;Menu Diizinkan
                                </h5>
                                <div className="row">
                                    {allNewMenu}
                                </div>

                                <div class="modal-footer">
                                    <button href="/File%20User" type="button" class="btn btn-success">
                                        <i class="far fa-save"></i>&nbsp;&nbsp;Simpan
                                    </button>
                                    <button onClick={()=>{window.location.reload()}} href="/File%20User" type="button" class="btn btn-danger" data-dismiss="modal">
                                        <i class="fas fa-times"></i>&nbsp;&nbsp;Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default FileUser