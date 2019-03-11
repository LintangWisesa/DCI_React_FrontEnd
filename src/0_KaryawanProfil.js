import React, { Component } from 'react'
import axios from 'axios'

class ProfilKaryawan extends Component{

    state = {
        karyawan: '', tgl_lahir: '', tgl_masuk: '', tgl_awal: '', tgl_akhir: ''
    }

    componentDidMount(){
        console.log(this.props.match.params.profil)
        var nip = this.props.match.params.profil
        var link = `http://localhost:1234/master/${nip}`
        axios.get(link).then((x)=>{
            console.log(x.data[0])
            this.setState({
                karyawan: x.data[0],
                tgl_lahir: x.data[0].tgl_lahir.split('T')[0],
                tgl_masuk: x.data[0].tgl_masuk.split('T')[0],
                tgl_awal: x.data[0].tgl_awal.split('T')[0],
                tgl_akhir: x.data[0].tgl_akhir.split('T')[0]
            })
        })
        .catch((x)=>{console.log(x)})
    }

    render(){

        return(
            <div>
                <div id="wrapper">
                <div id="content-wrapper" style={{marginTop: '120px'}}>
                <div class="container-fluid">
                    <div class="card mb-3 mx-5">
                        <div class="card-header alert alert-primary">
                            <i class="far fa-address-card"></i>&nbsp;&nbsp;Profil Karyawan
                        </div>

                        <div class="card-body" style={{textTransform: 'capitalize'}}>
                            
                            <button onClick={()=>{window.location.href = "/Master%20Karyawan";}} className="btn btn-info mb-3 ml-4">
                                <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Kembali
                            </button>
                            <button className="btn btn-success mb-3 ml-2">
                                <i class="fas fa-save"></i>&nbsp;&nbsp;Update
                            </button>
                            <button onClick={()=>{window.location.href = "/Master%20Karyawan";}} className="btn btn-danger mb-3 ml-2">
                                <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                            </button>
                            
                            
                            <div class='row my-3'>

                                {/* Data Diri */}

                                <div class='col-4 mx-5'>
                                    <div class="table-responsive">
                                        <h4><i class="mb-3 far fa-address-card"></i>&nbsp;&nbsp;Data Diri</h4>
                                        <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <th style={{width:150}}>NIP</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.nip}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Nama</th>
                                                    <td><input className="form-control"style={{textTransform:'capitalize'}}  defaultValue={this.state.karyawan.nama}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Gender</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kelamin}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Tanggal Lahir</th>
                                                    <td><input type='date' className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.tgl_lahir}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Kota Asal</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.lahir}/></td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div> 

                                {/* Foto */}
                                
                                <div class='col-3' style={{textAlign: 'center'}}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HFLw9fcwYyNkUls-_g8umpEqAZlp4WHViwoFqr9vq3wqhlmu" 
                                    class="rounded-circle my-4"/>
                                    <br/>
                                    <button className='btn btn-secondary btn-sm' style={{width:'210px', height:'40px'}}>
                                        <input type="file" id="foto" name="foto"/>
                                    </button>
                                </div>

                                {/* Data Karyawan */}

                                <div class="table-responsive mt-3 mx-5">
                                    <h4><i class="fas fa-user-tie mb-3"></i>&nbsp;&nbsp;Data Karyawan</h4>
                                        <table class="table table-bordered table-hover row" width='100%' id="dataTable" cellspacing="0">
                                            <tbody className='col-12'>
                                                <tr>
                                                    <th style={{width:150}}>Department</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.fulldept}/></td>

                                                    <th style={{width:150}}>Status</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.stat_peg}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Jabatan</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.jabatan}/></td>
                                                
                                                    <th>Tanggal Masuk</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_masuk}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Divisi</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.divisi}/></td>
                                                
                                                    <th>Tanggal Awal</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_awal}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Seksi</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.seksi}/></td>

                                                    <th>Tanggal Akhir</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_akhir}/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                {/* Data Pribadi */}
                                                                
                                <div class="table-responsive mt-3 mx-5">
                                    <h4><i class="fas fa-user-circle mb-3"></i>&nbsp;&nbsp;Pribadi</h4>
                                    <table class="row table table-bordered table-hover row" id="dataTable" width="100%" cellspacing="0">
                                        <tbody className='col-12'>
                                            <tr>
                                                <th style={{width:150}}>Pendidikan</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.didik}/></td>
                                            
                                                <th style={{width:150}}>Jumlah Anak</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.jml_anak}/></td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.status}/></td>
                                            
                                                <th>Agama</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.agama}/></td>
                                            </tr>
                                            <tr>
                                                <th>Ibu Kandung</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.ibu_kandung}/></td>
                                            
                                                <th>No. telp</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.telp}/></td>
                                            </tr>
                                            <tr>
                                                <th>Pasangan</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.nama_pasangan}/></td>
                                            
                                                <th>Emergency</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.emergency}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row table table-bordered table-hover row" id="dataTable" width="100%" cellspacing="0">
                                        <tbody className='col-12'>
                                            <tr>
                                                <th style={{width:150}}>Alamat</th>
                                                <td class='table-secondary'>
                                                    <input className="form-control mb-2" style={{width:585, textTransform:'capitalize'}} defaultValue={this.state.karyawan.alamat}/>
                                                    <input className="form-control" style={{width:585, textTransform:'capitalize'}} defaultValue={this.state.karyawan.alamat1}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>No. KTP</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_ktp}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. Rekening</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_rek}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. Rekening P</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_rekp}/></td>
                                            </tr>
                                            <tr>
                                                <th>NPWP</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.npwp}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. KPJ</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_kpj}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. SIM</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.sim}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* File Lampiran */}

                                <div class="table-responsive mt-3 mx-5">
                                    <h4><i class="fas fa-folder mb-3"></i>&nbsp;&nbsp;File Lampiran</h4>
                                    <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <th style={{width:120}} >File 1</th>
                                            <td class='table-secondary'>{this.state.karyawan.file1 ? this.state.karyawan.file1 : <input type="file" id="f1" name="f1"/>}</td>
                                        
                                            <th style={{width:120}} >File 6</th>
                                            <td class='table-secondary'>{this.state.karyawan.file6 ? this.state.karyawan.file6 : <input type="file" id="f6" name="f6"/>}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width:120}} >File 2</th>
                                            <td class='table-secondary'>{this.state.karyawan.file2 ? this.state.karyawan.file2 : <input type="file" id="f2" name="f2"/>}</td>
                                        
                                            <th style={{width:120}} >File 7</th>
                                            <td class='table-secondary'>{this.state.karyawan.file7 ? this.state.karyawan.file7 : <input type="file" id="f7" name="f7"/>}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width:120}} >File 3</th>
                                            <td class='table-secondary'>{this.state.karyawan.file3 ? this.state.karyawan.file3 : <input type="file" id="f3" name="f3"/>}</td>
                                        
                                            <th style={{width:120}} >File 8</th>
                                            <td class='table-secondary'>{this.state.karyawan.file8 ? this.state.karyawan.file8 : <input type="file" id="f8" name="f8"/>}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width:120}} >File 4</th>
                                            <td class='table-secondary'>{this.state.karyawan.file4 ? this.state.karyawan.file4 : <input type="file" id="f4" name="f4"/>}</td>
                                        
                                            <th style={{width:120}} >File 9</th>
                                            <td class='table-secondary'>{this.state.karyawan.file9 ? this.state.karyawan.file9 : <input type="file" id="f9" name="f9"/>}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width:120}} >File 5</th>
                                            <td class='table-secondary'>{this.state.karyawan.file5 ? this.state.karyawan.file5 : <input type="file" id="f5" name="f5"/>}</td>
                                        
                                            <th style={{width:120}} >File 10</th>
                                            <td class='table-secondary'>{this.state.karyawan.file10 ? this.state.karyawan.file10 : <input type="file" id="f10" name="f10"/>}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>

                            </div>
                            <button onClick={()=>{window.location.href = "/Master%20Karyawan";}} className="btn btn-info mb-3 ml-4">
                                <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Kembali
                            </button>
                            <button className="btn btn-success mb-3 ml-2">
                                <i class="fas fa-save"></i>&nbsp;&nbsp;Update
                            </button>
                            <button onClick={()=>{window.location.href = "/Master%20Karyawan";}} className="btn btn-danger mb-3 ml-2">
                                <i class="fas fa-window-close"></i>&nbsp;&nbsp;Batal
                            </button>
                        </div>

                        <div class="card-footer small text-muted">
                            Update terakhir:
                        </div>
                    </div>
                </div>
                </div>
                </div>
           </div>
        )
    }
}

export default ProfilKaryawan