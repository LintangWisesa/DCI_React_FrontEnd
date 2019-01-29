import React, { Component } from 'react'
import axios from 'axios'

class FileUser extends Component{

    state = {
        allUsers: [],
        userEdit: {}
    }

    componentDidMount(){
        var url = 'http://localhost:1234/users'
        axios.get(url)
        .then((x)=>{
            this.setState({
                allUsers: x.data
            })
        }).catch(()=>{
            console.log('error')
        })
    }

    render(){

        var editButton = (dataUser)=>{
            this.setState({
                userEdit: dataUser
            })
            console.log(this.state.userEdit)
        }

        var allUsers = this.state.allUsers.map((val, i)=>{
            var dataUser = {
                id: val.id,
                nama: val.nama,
                pass: val.password,
                dept: val.dept,
                dibuat: val.dibuat,
                diupdate: val.diupdate
            }
            return(
                <tr key={i}>
                    <td>{dataUser.id}</td>
                    <td>{dataUser.nama}</td>
                    <td>{dataUser.pass}</td>
                    <td>{dataUser.dept}</td>
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
                        <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Password</th>
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
                                <th>Password</th>
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

                {/* {// copyright Footer -->} */}
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

                {/* {// Edit Modal popup -->} */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    
                                        <div class="form-group" className="col-md-4">
                                            <div class="form-label-group">
                                            <input value={this.state.userEdit.nama} ref='nama' type="text" id="inputNama" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                                            <label for="inputNama">Nama</label>
                                            </div>
                                        </div>
                                        <div class="form-group" className="col-md-4">
                                            <div class="form-label-group">
                                            <input value={this.state.userEdit.pass} ref='password' type="password" id="inputPassword" class="form-control" placeholder="Password" required="required"/>
                                            <label for="inputPassword">Password</label>
                                            </div>
                                        </div>
                                        <div class="form-group" className="col-md-4">
                                            <div class="form-label-group">
                                            <select select={this.state.userEdit.dept} ref='dept' type="text" id="inputDept" class="form-control" placeholder="Dept" required="required">
                                                <option>Department: {this.state.userEdit.dept}</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            </div>
                                        </div>
                                    
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success">
                                        <i class="far fa-save"></i>&nbsp;&nbsp;Simpan
                                    </button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">
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