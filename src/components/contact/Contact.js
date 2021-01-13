import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import Modal_signup from '../user/Modal_signup'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <hr/>
                <div className="container my-3 min">
                    <div className="row">
<div className="col-lg-12 text-center">
<p className="display-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab quisquam? Quisquam provident earum in, impedit consequatur dolore reprehenderit laboriosam illo autem eaque. Repudiandae perferendis vero laudantium. Minus porro laborum tenetur, architecto asperiores maiores fugit, numquam ipsum voluptatibus iste, eveniet debitis similique! Doloremque numquam nam laudantium excepturi doloribus inventore porro culpa itaque ipsum sint maiores quibusdam eius neque, magni ratione nisi et, veniam aliquid odit quia fugiat exercitationem adipisci? Repellat fugit ut inventore sed voluptatibus beatae, quos cumque ullam! Recusandae corporis nobis voluptates nulla. Officia sint nam expedita praesentium accusantium ut quia repellendus perferendis, nisi vel, consequuntur eaque nostrum itaque.
</p>
</div>
 <div className="col-lg-3 mx-auto my-2 col-md-6">
     <div className="card">
     <div className="card-header text-center">
         <h5>Phone</h5>
         <i className="fa fa-phone text-info fa-4x"></i>
         <p>+251910565994</p>
         <p>+251955989183</p>
         </div>
 </div>>
           </div>
           
 <div className="col-lg-3 mx-auto my-2 col-md-6">
     <div className="card">
     <div className="card-header text-center">
         <h5>Facebook</h5>
         <i className="fab fa-facebook text-primary fa-4x"></i>
         <a href='http://www.facebook.com//Shihomes'>
         <p className='text-dark'>
             http://www.facebook.com/Shihomes
             </p>
             </a>
         </div>
 </div>
 </div>
 <div className="col-lg-3 mx-auto my-2 col-md-6">
     <div className="card">
     <div className="card-header text-center">
         <h5>Telegram</h5>
         <i className="fab fa-telegram text-info fa-4x"></i>
         <a href='http://telegram.me/shihomes'>
         <p className='text-dark'>
             http://telegram.me/Shihomes
             </p>
             </a>
         </div>
 </div>
 </div>
 <div className="col-lg-3 mx-auto my-2 col-md-6">
     <div className="card">
     <div className="card-header text-center">
         <h5>whatsapp</h5>
         <i class="fab fa-whatsapp fa-4x text-success" ></i>
         <a href='http://whatsapp/shihomes'>
         <p className='text-dark'>
             http://whatsapp.me/Shihomes
             </p>
             </a>
         </div>
 </div>
 </div>
 <div className="col-lg-3 mx-auto my-2 col-md-6">
     <div className="card">
     <div className="card-header text-center">
         <h5>Email</h5>
         <i class="fab fa-google fa-4x text-danger" ></i>
         <a href='http://dagi.zewdu.dz@gmail.com'>
         <p className='text-dark'>
             http://dagi.zewdu.dz@gmail.com
             </p>
             </a>
         </div>
 </div>
 </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    }
}
