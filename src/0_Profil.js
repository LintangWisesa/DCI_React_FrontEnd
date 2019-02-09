import React, { Component } from 'react'
import axios from 'axios'

class Profil extends Component{

    componentDidMount(){
        console.log(this.props.datauser)
    }

    render(){
        return(
            <div>
                <div id="wrapper">
                <div id="content-wrapper" style={{marginTop: '80px'}}>
                <div class="container-fluid">
                    <div class="card mb-3 mx-5">
                        <div class="card-header">
                            <i class="far fa-address-card"></i>&nbsp;&nbsp;Profil Saya
                        </div>
                        <div class="card-body">
                            <div class='row my-5'>
                                <div class='col-4' style={{textAlign: 'center'}}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HFLw9fcwYyNkUls-_g8umpEqAZlp4WHViwoFqr9vq3wqhlmu" 
                                    class="rounded-circle"/>
                                </div>
                                <div class='col-8'>
                                    <h3>{this.props.datauser.nama}</h3>
                                    <p>{this.props.datauser.id}</p>
                                    <p>{this.props.datauser.dept}</p>
                                    <p>{this.props.datauser.password}</p>
                                    <p>{this.props.datauser.dibuat}</p>
                                    <p>{this.props.datauser.diupdate}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer small text-muted">
                            Update terakhir: {this.props.datauser.diupdate}
                        </div>
                    </div>
                </div>
                </div>
                </div>
           </div>
        )
    }
}

export default Profil