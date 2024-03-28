import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='Home-container'>
      <div class="background">
        <br/>
        <br/>
         <section id="home">

      {/* <h1 class="caption">Empowering Students with Hassle-Free Accommodation Management</h1> */}
      <div class="card-container">
    <h1>Welcome to the Student Accommodation Management System</h1>
    <br></br>
     <p>This system helps manage student accommodations and room assignments<br/>
     effectively. It provides an easy-to-use interface for administrators and<br/>
      students to handle all aspects of accommodation management.</p>
      <Link to="/accommodation">
        <button class="bt justify-content-center" >Explore Accommodations</button>
        </Link>
     </div>
   </section>
 </div>
    </div>
  )
}































// import React, { Component } from 'react'
// import App from '../App'

// export default class Main extends Component {
//   render() {
//     return (
//       <div>
//                <div class="home">
        
//         <ul>
//          <font face="Comic sans MS" size="5">
//                             <b class="st">RoomSync</b>
//                          </font>

//             <a href="/" >HOME</a>
//             <a href="/Accommodate">ACCOMMODATION</a>
//             <a href="rooms.html">ROOM ASSIGNMENTS</a>
//             <a href="about.html">ABOUT</a>
//             <a href="#accounts">LOGIN</a>
//             <a href="#accounts">ADMIN-LOGIN</a>
//             <a href="#contact">CONTACT</a>

//         </ul>
//     </div>  
//     <div class="background">
//        <br/>
//         <br/>
//         <section id="home">

//      <h1 class="caption">Empowering Students with Hassle-Free Accommodation Management</h1>
//      <div class="card-container">
//     <h1>Welcome to the Student Accommodation Management System</h1>
//     <p>This system helps manage student accommodations and room assignments<br/>
//     effectively. It provides an easy-to-use interface for administrators and<br/>
//      students to handle all aspects of accommodation management.</p>
//      <button class="btn justify-content-center" >
//     <p><a href="accommodations.html">Explore Accommodations</a></p></button>
//     </div>
//   </section>
// </div>
  
// </div>
  
    
//     )
//   }
// }
