import React, { Component } from 'react'

class welcome extends Component{
    render(){
        return(
            <center>
                <div id="wrapper">
                <div id="content-wrapper" style={{marginTop: '30px'}}>
                <div class="container-fluid">
                    
                    <div style={{width:'80%', marginTop:'80px'}} 
                    class="alert alert-danger" role="alert">
                    </div>
                    
                    <img style={{width:'80%', marginTop:'5px'}} class="img-fluid rounded" alt="ptdci"
                    src="http://www.delacemaraindah.co.id/sites/default/files/SlideShow1.jpg?1340872533"/>
                    
                    <div style={{width:'80%', marginTop:'20px'}} 
                    class="alert alert-primary" role="alert">
                    </div>

                </div>
                </div>
                </div> 
            </center>
        )
    }
}

export default welcome