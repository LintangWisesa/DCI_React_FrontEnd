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

                                <div class='col-8 mx-5'>
                                    <div class="table-responsive">
                                        <h4><i class="mb-3 far fa-address-card"></i>&nbsp;&nbsp;Data Diri</h4>
                                        <table class="row table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                                            <tbody className='col-12'>
                                                <tr>
                                                    <th style={{width:150}}>NIP</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.nip}/></td>

                                                    <th style={{width:150}}>Nama</th>
                                                    <td><input className="form-control"style={{textTransform:'capitalize'}}  defaultValue={this.state.karyawan.nama}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Tempat Lahir</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.lahir}/></td>
                                                
                                                    <th>Tanggal Lahir</th>
                                                    <td><input type='date' className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.tgl_lahir}/></td>
                                                </tr>
                                                <tr>
                                                    <th style={{width:150}}>Gender</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.kelamin} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.kelamin}>{this.state.karyawan.kelamin}</option>
                                                            <option>L (Laki-laki)</option>
                                                            <option>P (Perempuan)</option>
                                                        </select>
                                                    </td>

                                                    <th>Agama</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.agama}/></td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div> 

                                {/* Foto */}
                                
                                <div class='col-3' style={{textAlign: 'left'}}>
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
                                                    <th style={{width:150}}>Kategori ???</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.kategori} ref='kat' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.kategori}>{this.state.karyawan.kategori}</option>
                                                            <option>DR (Direct)</option>
                                                            <option>IN (Indirect)</option>
                                                            <option>SD (Semi Direct)</option>
                                                        </select>
                                                    </td>
                                                    
                                                    <th style={{width:150}}>Department</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.fulldept} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.fulldept}>{this.state.karyawan.fulldept}</option>
                                                            <option>AC (Accounting & Finance)</option>
                                                            <option>DL (Delivery)</option>
                                                            <option>EG (Engineering)</option>
                                                            <option>GA (General Affair)</option>
                                                            <option>HR (Human Resources)</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{width:150}}>Divisi ???</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.divisi} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.divisi}>{this.state.karyawan.divisi}</option>
                                                            <option>AC (Accounting & Finance)</option>
                                                            <option>DL (Delivery)</option>
                                                            <option>EG (Engineering)</option>
                                                            <option>GA (General Affair)</option>
                                                            <option>HR (Human Resources)</option>
                                                        </select>
                                                    </td>
                                                    
                                                    <th style={{width:150}}>Subseksi ???</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.sseksi} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.sseksi}>{this.state.karyawan.sseksi}</option>
                                                            <option>AC (Accounting)</option>
                                                            <option>FI (Finance)</option>
                                                            <option>AK (Analis Kimia)</option>
                                                            <option>BP (Big Press)</option>
                                                            <option>SP (Small Press)</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{width:150}}>Jabatan</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.jabatan} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.jabatan}>{this.state.karyawan.jabatan}</option>
                                                            <option>AD (Administrator)</option>
                                                            <option>AM (Assistant Manager)</option>
                                                            <option>AV (Advisor)</option>
                                                            <option>DD (Driver Delivery)</option>
                                                            <option>DO (Driver Office)</option>
                                                            <option>DS (Dies Setter)</option>
                                                        </select>
                                                    </td>
                                                    
                                                    <th>Level</th>
                                                    <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.level}/></td>                                                    
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    <th style={{width:150}}>Status Pegawai</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.stat_peg} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.stat_peg}>{this.state.karyawan.stat_peg}</option>
                                                            <option>Tetap</option>
                                                            <option>Kontrak</option>
                                                            <option>Honor</option>
                                                            <option>Outsourcing</option>
                                                        </select>
                                                    </td>
                                                    
                                                    <th style={{width:150}}>Asal Karyawan</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.latar} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.latar}>{this.state.karyawan.latar}</option>
                                                            <option>DCI</option>
                                                            <option>AJ</option>
                                                            <option>WPS</option>
                                                            <option>Mardizu</option>
                                                        </select>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th>Tanggal Masuk</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_masuk}/></td>
                                                
                                                    <th style={{width:150}}>Staff/Non</th>
                                                    <td>
                                                        {/* <input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.kategori}/> */}
                                                        <select onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            // this.setState({editdept: e.target.value})
                                                        }}
                                                        style={{textTransform:'capitalize'}}
                                                        select={this.state.karyawan.staff} ref='dep' type="text" 
                                                        class="custom-select form-control" placeholder="Dept" required="required">
                                                            <option selected disabled hidden value={this.state.karyawan.staff}>{this.state.karyawan.staff}</option>
                                                            <option>Staff</option>
                                                            <option>Non-Staff</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Awal Kontrak</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_awal}/></td>

                                                    <th>Akhir Kontrak</th>
                                                    <td><input type='date' className="form-control" defaultValue={this.state.tgl_akhir}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Catatan</th>
                                                    <td><input type='text' className="form-control" defaultValue={'Tidak ada'}/></td>
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
                                            
                                                <th>No. telp</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.telp}/></td>
                                            </tr>
                                            <tr>
                                                <th>Ibu Kandung</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.ibu_kandung}/></td>
                                            
                                                <th>Pasangan</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.nama_pasangan}/></td>
                                            </tr>
                                            <tr>
                                                <th>Emergency</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.emergency}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. KTP</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_ktp}/></td>
                                            
                                                <th>NPWP</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.npwp}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. Rekening</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_rek}/></td>
                                            
                                                <th>No. Rekening P ??? Bank</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_rekp}/></td>
                                            </tr>
                                            <tr>
                                                <th>SPSI</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.spsi}/></td>

                                                <th>No. KPJ</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.no_kpj}/></td>
                                            </tr>
                                            <tr>
                                                <th>No. SIM</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.sim}/></td>
                                            
                                                <th>Klinik ???</th>
                                                <td><input className="form-control" style={{textTransform:'capitalize'}} defaultValue={this.state.karyawan.sim}/></td>
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