// import React from 'react'
// import {Link} from 'react-router-dom'
// import './Accomodations.css'


// function Accommodation() {
//   return (
//     <div className='bg'>
//        <div class="background1">
//        <br/>
//         <br/>
//         <section id="home">

      
//       <div class="card-container1">
//       <h1 class="caption">Empowering Students with Hassle-Free Accommodation Management</h1>
//      <section id="accommodations">
//     <h2>Accommodations</h2>
//     <p>Our accommodations offer a comfortable and safe living environment for students. We provide various types of rooms, including single rooms, shared rooms, and dormitories. Each accommodation is equipped with essential facilities such as Wi-Fi, study areas, and common spaces.</p>
//      <p>Contact us for more information or to make a reservation.</p>
//    </section>
//      </div>
//    </section>
//  </div>
//  <section id="accommodations">
//     <h2>Accommodations</h2>
    
//     <div class="accommodation-card d-flex flex-row justify-content-center" >
      
//       <img className="img-zoom" src="https://images.squarespace-cdn.com/content/v1/5a93e8beee1759706cf3d62b/1519995382624-JJ0JRYO77NV5H6YU0O4Z/ebh-web-1-2.jpg?format=1000w" alt="Single Room"/>
      
//       <div className='Rooms d-flex flex-column '>
//         <h1>Single Rooms</h1>
//       <p>Our single rooms provide a private and peaceful living space for individual students.
//          Each room is furnished with a comfortable bed, study desk, chair, and storage facilities.
//           Single rooms are ideal for students who prefer their own space.</p>
//           <ul>
//         <li>Private and quiet living space</li>
//         <li>Furnished with a bed, desk, chair, and wardrobe</li>
//         <li>Private bathroom</li>
//         <li>High-speed Wi-Fi access</li>
//       </ul>
//       <p>Price: Rs 999 per month</p>
//       <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
//     </div></div>
    
//     <div class="accommodation-card d-flex flex-row justify-content-center">
//       <img className="img-zoom" src="https://th.bing.com/th/id/R.5132abbe808d4c22d49c329f72e43628?rik=bT0Gq3xphCGpMw&riu=http%3a%2f%2fwww.novenahall.com.sg%2fwp-content%2fuploads%2f2015%2f06%2fRoomsRates04-Standard-twin-sharing-room-with-common-bathroom.jpg&ehk=k9obpfUHA%2bCdLQyFj6%2fpn%2b18DYN4Ef3rvYWccGp8bOo%3d&risl=&pid=ImgRaw&r=0" alt="Shared Room"/>
//       <div className='Rooms d-flex flex-column '>
//       <h1>Shared Rooms</h1>
//       <p>Shared rooms are perfect for students who enjoy a communal living experience.
//          These rooms are shared by two or more students and are equipped with separate beds,
//           desks, and storage for each occupant. Shared rooms encourage interaction and collaboration
//            among residents.</p>
//            <ul>
//         <li>Communal living experience</li>
//         <li>Furnished with separate beds, desks, chairs, and wardrobes</li>
//         <li>Shared bathroom</li>
//         <li>High-speed Wi-Fi access</li>
//       </ul>
//       <p>Price: Rs 1999 per month</p>
     
//               <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
//     </div></div>
    
//     <div class="accommodation-card d-flex flex-row justify-content-center">
//       <img className="img-zoom" src="https://d3sdr36o18yw4x.cloudfront.net/w1400/cheapsleep.www/uploads/16_bed_mixed.jpg" alt="Dormitory"/>
//       <div className='Rooms d-flex flex-column '>
//       <h1>Dormitories</h1>
//       <p>Our dormitories provide an affordable and social accommodation option for students.
//          Dormitories feature multiple beds in a shared space, along with common facilities such as 
//          bathrooms, kitchens, and lounges. Living in a dormitory offers a vibrant community atmosphere.
//          </p>
//          <ul>
//         <li>Affordable and social living option</li>
//         <li>Multiple rooms in each dormitory</li>
//         <li>Shared bathrooms and communal kitchens</li>
//         <li>Study areas and recreational spaces</li>
//       </ul>
//       <p>Price: Rs 2999 per month</p>
//       <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
//     </div></div>
    
   
//   </section>
  
  
//     </div>
//   )
// }
// export default Accommodation    






import React from 'react';
import { Link } from 'react-router-dom';
import './Accomodations.css';

function Accommodation() {
  return (
    <div className='bg'>
      <div class="background1">
        <br />
        <br />
        <section id="home">
          <div class="card-container1">
            <h1 class="caption">Empowering Students with Hassle-Free Accommodation Management</h1>
            <section id="accommodations">
              <h2>Accommodations</h2>
              <p>Our accommodations offer a comfortable and safe living environment for students. We provide various types of rooms, including single rooms, shared rooms, and dormitories. Each accommodation is equipped with essential facilities such as Wi-Fi, study areas, and common spaces.</p>
              <p>Contact us for more information or to make a reservation.</p>
            </section>
          </div>
        </section>
      </div>
      <div className="accommodations-container">
        <section id="accommodations">
          <h2>Accommodations</h2>
          <div class="accommodation-card d-flex flex-row justify-content-center">
            <img className="img-zoom" src="https://images.squarespace-cdn.com/content/v1/5a93e8beee1759706cf3d62b/1519995382624-JJ0JRYO77NV5H6YU0O4Z/ebh-web-1-2.jpg?format=1000w" alt="Single Room" />
            <div className='Rooms d-flex flex-column '>
              <h1>Single Rooms</h1>
              <p>Our single rooms provide a private and peaceful living space for individual students. Each room is furnished with a comfortable bed, study desk, chair, and storage facilities. Single rooms are ideal for students who prefer their own space.</p>
              <ul>
                <li>Private and quiet living space</li>
                <li>Furnished with a bed, desk, chair, and wardrobe</li>
                <li>Private bathroom</li>
                <li>High-speed Wi-Fi access</li>
              </ul>
              <p>Price: Rs 999 per month</p>
              <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
            </div>
          </div>

          <div class="accommodation-card d-flex flex-row justify-content-center">
            <img className="img-zoom" src="https://th.bing.com/th/id/R.5132abbe808d4c22d49c329f72e43628?rik=bT0Gq3xphCGpMw&riu=http%3a%2f%2fwww.novenahall.com.sg%2fwp-content%2fuploads%2f2015%2f06%2fRoomsRates04-Standard-twin-sharing-room-with-common-bathroom.jpg&ehk=k9obpfUHA%2bCdLQyFj6%2fpn%2b18DYN4Ef3rvYWccGp8bOo%3d&risl=&pid=ImgRaw&r=0" alt="Shared Room" />
            <div className='Rooms d-flex flex-column '>
              <h1>Shared Rooms</h1>
              <p>Shared rooms are perfect for students who enjoy a communal living experience. These rooms are shared by two or more students and are equipped with separate beds, desks, and storage for each occupant. Shared rooms encourage interaction and collaboration among residents.</p>
              <ul>
                <li>Communal living experience</li>
                <li>Furnished with separate beds, desks, chairs, and wardrobes</li>
                <li>Shared bathroom</li>
                <li>High-speed Wi-Fi access</li>
              </ul>
              <p>Price: Rs 1999 per month</p>
              <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
            </div>
          </div>

          <div class="accommodation-card d-flex flex-row justify-content-center">
            <img className="img-zoom" src="https://d3sdr36o18yw4x.cloudfront.net/w1400/cheapsleep.www/uploads/16_bed_mixed.jpg" alt="Dormitory" />
            <div className='Rooms d-flex flex-column '>
              <h1>Dormitories</h1>
              <p>Our dormitories provide an affordable and social accommodation option for students. Dormitories feature multiple beds in a shared space, along with common facilities such as bathrooms, kitchens, and lounges. Living in a dormitory offers a vibrant community atmosphere.</p>
              <ul>
                <li>Affordable and social living option</li>
                <li>Multiple rooms in each dormitory</li>
                <li>Shared bathrooms and communal kitchens</li>
                <li>Study areas and recreational spaces</li>
              </ul>
              <p>Price: Rs 2999 per month</p>
              <Link to="/bookform"><button class="room-btn">BOOK ROOM</button></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Accommodation;
