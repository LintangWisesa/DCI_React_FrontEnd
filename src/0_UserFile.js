import React, { Component } from 'react'
import axios from 'axios'

class FileUser extends Component{

    state = {
        allUsers: [],
        allMenu: [],
        allNewMenu: [],
        allDepts: [],
        userEdit: {},
        cek: false,
        editnama: '', editpass: '', editdept: '', editmenu: [],
        newnama: '', newpass: '', newdept: '', newmenu: [], newid: ''
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
    ubahmenu = (x, y) => {
        console.log(x+' '+y)
    }

    editDataUser = (id) => {
        console.log(id)
        var nama = this.state.editnama ? this.state.editnama : this.state.userEdit.nama
        var pass = this.state.editpass ? this.state.editpass : this.state.userEdit.pass
        var dept = this.state.editdept ? this.state.editdept : this.state.userEdit.dept
        var menu = this.state.editmenu
        axios.put(`http://localhost:1234/users/${id}`, {
            nama: nama,
            pass: pass,
            dept: dept
        }).then((x)=>{
            console.log(x)
            var menuBaru = this.state.editmenu.map((val,i)=>{
                return [id, val.id_menu, val.status]
            })
            axios.post('http://localhost:1234/menu', {
                dataBaru: menuBaru,
            }).then((x)=>{
                console.log(x)
            }).catch((x)=>{
                console.log(x)
            })
        }).catch((x)=>{
            console.log(x)
        })
        window.location.reload()
    }

    addDataUser = () => {
        console.log(this.state.newnama)
        console.log(this.state.newpass)
        console.log(this.state.newdept)
        console.log(this.state.newmenu)
        axios.post('http://localhost:1234/users', {
            nama: this.state.newnama,
            pass: this.state.newpass,
            dept: this.state.newdept
        }).then((x)=>{
            // console.log(x)
            console.log(x.data[0].id)
            var newid = x.data[0].id
            var menuBaru = this.state.newmenu.map((val,i)=>{
                return [newid, val.id_menu, val.status]
            })
            axios.post('http://localhost:1234/menu', {
                dataBaru: menuBaru,
            }).then((x)=>{
                console.log(x)
            }).catch((x)=>{
                console.log(x)
            })
        }).catch((x)=>{
            console.log(x)
        })
        window.location.reload()
    }

    hapusDataUser = (id) => {
        console.log(id)
        axios.delete(`http://localhost:1234/users/${id}`).then(()=>{
            console.log('Hapus sukses')
        }).catch(()=>{
            console.log('error')
        })
        window.location.reload()
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
                    <input type = "checkbox" ref={`cekbok${i}`}
                    defaultChecked = {dataMenu.status === 'ok' ? true : false}
                    value = {[dataMenu.id_user, dataMenu.id_menu]}
                    onChange = {(e)=>{
                        var dataKirim = []
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:1, status:this.refs.cekbok0.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:2, status:this.refs.cekbok1.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:3, status:this.refs.cekbok2.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:4, status:this.refs.cekbok3.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:5, status:this.refs.cekbok4.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:6, status:this.refs.cekbok5.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:7, status:this.refs.cekbok6.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:8, status:this.refs.cekbok7.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:9, status:this.refs.cekbok8.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:10, status:this.refs.cekbok9.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:11, status:this.refs.cekbok10.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:12, status:this.refs.cekbok11.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:13, status:this.refs.cekbok12.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:14, status:this.refs.cekbok13.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:15, status:this.refs.cekbok14.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:16, status:this.refs.cekbok15.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:17, status:this.refs.cekbok16.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:18, status:this.refs.cekbok17.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:19, status:this.refs.cekbok18.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:20, status:this.refs.cekbok19.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:21, status:this.refs.cekbok20.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:22, status:this.refs.cekbok21.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:23, status:this.refs.cekbok22.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:24, status:this.refs.cekbok23.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:25, status:this.refs.cekbok24.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:26, status:this.refs.cekbok25.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:27, status:this.refs.cekbok26.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:28, status:this.refs.cekbok27.checked ? 'ok' : 'no access'})
                        console.log(dataKirim)
                        this.setState({editmenu: dataKirim})
                    }}
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
                    <input type = "checkbox" ref={`cekbok${i}`}
                    value = {dataMenu.id}
                    onChange = {(e)=>{
                        var dataKirim = []
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:1, status:this.refs.cekbok0.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:2, status:this.refs.cekbok1.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:3, status:this.refs.cekbok2.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:4, status:this.refs.cekbok3.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:5, status:this.refs.cekbok4.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:6, status:this.refs.cekbok5.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:7, status:this.refs.cekbok6.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:8, status:this.refs.cekbok7.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:9, status:this.refs.cekbok8.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:10, status:this.refs.cekbok9.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:11, status:this.refs.cekbok10.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:12, status:this.refs.cekbok11.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:13, status:this.refs.cekbok12.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:14, status:this.refs.cekbok13.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:15, status:this.refs.cekbok14.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:16, status:this.refs.cekbok15.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:17, status:this.refs.cekbok16.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:18, status:this.refs.cekbok17.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:19, status:this.refs.cekbok18.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:20, status:this.refs.cekbok19.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:21, status:this.refs.cekbok20.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:22, status:this.refs.cekbok21.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:23, status:this.refs.cekbok22.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:24, status:this.refs.cekbok23.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:25, status:this.refs.cekbok24.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:26, status:this.refs.cekbok25.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:27, status:this.refs.cekbok26.checked ? 'ok' : 'no access'})
                        dataKirim.push({id_user:dataMenu.id_user, id_menu:28, status:this.refs.cekbok27.checked ? 'ok' : 'no access'})
                        console.log(dataKirim)
                        this.setState({newmenu: dataKirim})
                    }}
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
                        <button 
                        onClick={()=>{this.hapusDataUser(dataUser.id)}}
                        type="button" class="btn btn-danger">
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
                <div id="content-wrapper" style={{marginTop: '120px'}}>
                <div class="container-fluid">

                    {/* {// DataTables Example -->} */}
                    <div class="card mb-3 mx-5">
                    <div class="card-header alert alert-primary">
                        <i class="fas fa-table"></i>
                        &nbsp;&nbsp;File User</div>
                    <div class="card-body" style={{textTransform: 'capitalize'}}>

                        <button onClick={addButton} className="btn btn-success mb-3" 
                        data-toggle="modal" data-target="#exampleModalCenter2">
                            <i class="fas fa-user-plus"></i>&nbsp;&nbsp;Tambah User
                        </button>

                        <div class="table-responsive">
                        <table class="table table-hover table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead className='thead-dark'>
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
                    <div class="card-footer small text-muted"></div>
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
                                        <input onChange={(e)=>{
                                            console.log(e.target.value)
                                            this.setState({editnama: e.target.value})
                                        }} 
                                        defaultValue={this.state.userEdit.nama}
                                        ref='nama' type="text" id="inputNama" class="form-control" 
                                        placeholder="Ketik nama..." required="required" autofocus="autofocus"/>
                                        <label for="inputNama">Nama</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <input onChange={(e)=>{
                                            console.log(e.target.value)
                                            this.setState({editpass: e.target.value})
                                        }}
                                        defaultValue={this.state.userEdit.pass}
                                        ref='password' type="text" id="inputPassword" class="form-control" placeholder="Password" required="required"/>
                                        <label for="inputPassword">Password</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <select onChange={(e)=>{
                                            console.log(e.target.value)
                                            this.setState({editdept: e.target.value})
                                        }}
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
                                    <button
                                    onClick = {()=>{this.editDataUser(this.state.userEdit.id)}} 
                                    href="/File%20User" type="button" class="btn btn-success">
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
                                        <input onChange={(e)=>{this.setState({newnama: e.target.value})}} ref='nama' 
                                        type="text" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                                        <label for="inputEmail">Nama pengguna</label>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-label-group">
                                        <input onChange={(e)=>{this.setState({newpass: e.target.value})}} ref='pass' 
                                        type="text" id="inputPass" class="form-control" placeholder="Email address" required="required" autofocus="autofocus"/>
                                        <label for="inputPass">Password</label>
                                        </div>
                                    </div>
                                    <div class="form-group" className="col-md-4">
                                        <div class="form-label-group">
                                        <select onChange={(e)=>{
                                            console.log(e.target.value)
                                            this.setState({newdept: e.target.value})
                                        }}
                                        ref='dept' type="text" id="inputDept" 
                                        class="custom-select form-control" placeholder="Dept" required="required">
                                            <option selected disabled hidden value='Pilih Department...'>
                                                Pilih department... {this.state.userEdit.dept} {this.state.userEdit.fulldept}
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
                                    <button 
                                    onClick={()=>{this.addDataUser()}}
                                    href="/File%20User" type="button" class="btn btn-success">
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