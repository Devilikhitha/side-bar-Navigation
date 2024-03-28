// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navigation() {
//   return (
//     <div className='Nav d-flex flex-row'>
      
//        <p><font face="Comic sans MS" size="6">
//                             <b className="st">RoomSync</b>
//                          </font></p>
      
//       <Link to="/">Home</Link>
//       <Link to="/accommodation">Accommodation</Link>
     
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
     
//       <Link to="/bookform">Room</Link>
     

      
      
//     </div>
//   )
// }




















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navigation.css'; // Import CSS file for styling

// export default function Navigation() {
//   return (
//     <div className="sidebar">
//       <div className="brand">
//         <p>
//           <font face="Comic sans MS" size="6">
//             <b className="st">RoomSync</b>
//           </font>
//         </p>
//       </div>
//       <div className="links">
//         <Link to="/">Home</Link>
//         <Link to="/accommodation">Accommodation</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/bookform">Room</Link>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navigation.css'; // Import CSS file for styling

// export default function Navigation() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleMenu = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
//       <div className="brand">
//         <p>
//           <font face="Comic sans MS" size="6">
//             <b className="st">RoomSync</b>
//           </font>
//         </p>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <i className={`fas ${isExpanded ? 'fa-times' : 'fa-bars'}`}></i>
//       </div>
//       <div className="links">
//         <Link to="/" className="link" onClick={toggleMenu}>
//           Home
//         </Link>
//         <Link to="/accommodation" className="link" onClick={toggleMenu}>
//           Accommodation
//         </Link>
//         <Link to="/about" className="link" onClick={toggleMenu}>
//           About
//         </Link>
//         <Link to="/contact" className="link" onClick={toggleMenu}>
//           Contact
//         </Link>
//         <Link to="/bookform" className="link" onClick={toggleMenu}>
//           Room
//         </Link>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navigation.css'; // Import CSS file for styling

// export default function Navigation() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation(); // Hook to get the current location

//   const toggleMenu = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const closeMenu = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
//       <div className="brand">
//         <p>
//           <font face="Comic sans MS" size="6">
//             <b className="st">RoomSync</b>
//           </font>
//         </p>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <i className={`fas ${isExpanded ? 'fa-times' : 'fa-bars'}`}></i>
//       </div>
//       <div className={`links ${isExpanded ? 'expanded' : ''}`}>
//         <Link
//           to="/"
//           className={`link ${location.pathname === '/' ? 'active' : ''}`}
//           onClick={closeMenu}
//         >
//           Home
//         </Link>
//         <Link
//           to="/accommodation"
//           className={`link ${location.pathname === '/accommodation' ? 'active' : ''}`}
//           onClick={closeMenu}
//         >
//           Accommodation
//         </Link>
//         <Link
//           to="/about"
//           className={`link ${location.pathname === '/about' ? 'active' : ''}`}
//           onClick={closeMenu}
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className={`link ${location.pathname === '/contact' ? 'active' : ''}`}
//           onClick={closeMenu}
//         >
//           Contact
//         </Link>
//         <Link
//           to="/bookform"
//           className={`link ${location.pathname === '/bookform' ? 'active' : ''}`}
//           onClick={closeMenu}
//         >
//           Room
//         </Link>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const COLORS = {
//   primaryDark: "#115b4c",
//   primaryLight: "#B6EDC8",
// };

// const MenuLabel = styled.label`
//   background-color: ${COLORS.primaryLight};
//   position: fixed;
//   top: 6rem;
//   right: 6rem;
//   border-radius: 50%;
//   height: 7rem;
//   width: 7rem;
//   cursor: pointer;
//   z-index: 1000;
//   box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
//   text-align: center;
// `;

// const NavBackground = styled.div`
//   position: fixed;
//   top: 6.5rem;
//   right: 6.5rem;
//   background-image: radial-gradient(
//     ${COLORS.primaryDark},
//     ${COLORS.primaryLight}
//   );
//   height: 6rem;
//   width: 6rem;
//   border-radius: 50%;
//   z-index: 600;
//   transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
//   transition: transform 0.8s;
// `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//   width: 3rem;
//   height: 2px;
//   display: inline-block;
//   margin-top: 3.5rem;
//   transition: all 0.3s;

//   &::before,
//   &::after {
//     content: "";
//     background-color: black;
//     width: 3rem;
//     height: 2px;
//     display: inline-block;

//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }

//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }

//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "0.8rem")};

//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }

//   ${MenuLabel}:hover &::before {
//     top: ${(props) => (props.clicked ? "0" : "-1rem")};
//   }
//   ${MenuLabel}:hover &::after {
//     top: ${(props) => (props.clicked ? "0" : "1rem")};
//   }
// `;

// const Navigation = styled.nav`
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 600;
//   width: ${(props) => (props.clicked ? "100%" : "0")};
//   opacity: ${(props) => (props.clicked ? "1" : "0")};

//   transition: width 0.8s, opacity 0.8s;
// `;

// const List = styled.ul`
//   position: absolute;
//   list-style: none;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   width: 100%;
// `;
// const ItemLink = styled(NavLink)`
//   display: inline-block;
//   font-size: 3rem;
//   font-weight: 300;
//   text-decoration: none;
//   color: ${COLORS.primaryLight};
//   padding: 1rem 2rem;

//   background-image: linear-gradient(
//     120deg,
//     transparent 0%,
//     transparent 50%,
//     #fff 50%
//   );
//   background-size: 240%;
//   transition: all 0.4s;

//   &:hover,
//   &:active {
//     background-position: 100%;
//     color: ${COLORS.primaryDark};
//     transform: translateX(1rem);
//   }
// `;

// function HamburgerMenu() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//         <Icon clicked={click}>&nbsp;</Icon>
//       </MenuLabel>
//       <NavBackground clicked={click}>&nbsp;</NavBackground>

//       <Navigation clicked={click}>
//         <List>
//           <li>
//             <ItemLink onClick={handleClick} to="/">
//               Home
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/accommodation">
//               About
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/contact">
//               Portfolio
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/bookform">
//               Blog
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/contact">
//               Contact Us
//             </ItemLink>
//           </li>
//         </List>
//       </Navigation>
//     </>
//   );
// }

// export default HamburgerMenu;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const COLORS = {
//   primaryDark: "#115b4c",
//   primaryLight: "#B6EDC8",
// };

// const MenuLabel = styled.label`
//   background-color: ${COLORS.primaryLight};
//   position: fixed;
//   top: 2rem; /* Adjusted top position for smaller screens */
//   right: 2rem; /* Adjusted right position for smaller screens */
//   border-radius: 50%;
//   height: 4rem; /* Adjusted height for smaller screens */
//   width: 4rem; /* Adjusted width for smaller screens */
//   cursor: pointer;
//   z-index: 1000;
//   box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
//   text-align: center;
// `;

// const NavBackground = styled.div`
//   position: fixed;
//   top: 2.5rem; /* Adjusted top position for smaller screens */
//   right: 2.5rem; /* Adjusted right position for smaller screens */
//   background-image: radial-gradient(
//     ${COLORS.primaryDark},
//     ${COLORS.primaryLight}
//   );
//   height: 4rem; /* Adjusted height for smaller screens */
//   width: 4rem; /* Adjusted width for smaller screens */
//   border-radius: 50%;
//   z-index: 600;
//   transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
//   transition: transform 0.8s;
// `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//   width: 2rem; /* Adjusted width for smaller screens */
//   height: 1px; /* Adjusted height for smaller screens */
//   display: inline-block;
//   margin-top: 2.5rem; /* Adjusted top margin for smaller screens */
//   transition: all 0.3s;

//   &::before,
//   &::after {
//     content: "";
//     background-color: black;
//     width: 2rem; /* Adjusted width for smaller screens */
//     height: 1px; /* Adjusted height for smaller screens */
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }

//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-0.6rem")}; /* Adjusted top position for smaller screens */
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }

//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "0.6rem")}; /* Adjusted top position for smaller screens */
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }

//   ${MenuLabel}:hover &::before {
//     top: ${(props) => (props.clicked ? "0" : "-1rem")}; /* Adjusted top position for smaller screens */
//   }

//   ${MenuLabel}:hover &::after {
//     top: ${(props) => (props.clicked ? "0" : "1rem")}; /* Adjusted top position for smaller screens */
//   }
// `;

// const Navigation = styled.nav`
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 600;
//   width: ${(props) => (props.clicked ? "100%" : "0")};
//   opacity: ${(props) => (props.clicked ? "1" : "0")};
//   transition: width 0.8s, opacity 0.8s;
// `;

// const List = styled.ul`
//   position: absolute;
//   list-style: none;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   width: 100%;
// `;

// const ItemLink = styled(NavLink)`
//   display: inline-block;
//   font-size: 2rem; /* Adjusted font size for smaller screens */
//   font-weight: 300;
//   text-decoration: none;
//   color: ${COLORS.primaryLight};
//   padding: 1rem 2rem;

//   background-image: linear-gradient(
//     120deg,
//     transparent 0%,
//     transparent 50%,
//     #fff 50%
//   );
//   background-size: 240%;
//   transition: all 0.4s;

//   &:hover,
//   &:active {
//     background-position: 100%;
//     color: ${COLORS.primaryDark};
//     transform: translateX(1rem);
//   }
// `;

// function HamburgerMenu() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//         <Icon clicked={click}>&nbsp;</Icon>
//       </MenuLabel>
//       <NavBackground clicked={click}>&nbsp;</NavBackground>

//       <Navigation clicked={click}>
//         <List>
//           <li>
//             <ItemLink onClick={handleClick} to="/">
//               Home
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/accommodation">
//               Accommodations
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/about">
//               About us
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/bookform">
//               RoomBooking
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/contact">
//               Contact Us
//             </ItemLink>
//           </li>
//         </List>
//       </Navigation>
//     </>
//   );
// }

// export default HamburgerMenu;






// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// /* Styled Components */
// const COLORS = {
//   primaryDark: "#115b4c",
//   primaryLight: "#B6EDC8",
// };

// const MenuLabel = styled.label`
//   display: none; /* Initially hide the hamburger menu icon */
//   @media only screen and (max-width: 768px) {
//     display: block; /* Display the hamburger menu icon on small screens */
//     background-color: ${COLORS.primaryLight};
//     position: fixed;
//     top: 2rem;
//     right: 2rem;
//     border-radius: 50%;
//     height: 4rem;
//     width: 4rem;
//     cursor: pointer;
//     z-index: 1000;
//     box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
//     text-align: center;
//   }
// `;

// const NavBackground = styled.div`
//   display: none; /* Initially hide the background overlay */
//   @media only screen and (max-width: 768px) {
//     display: block; /* Display the background overlay on small screens */
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 900;
//   }
// `;

// const Navigation = styled.nav`
//   width: 250px; /* Sidebar width for large screens */
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background: ${COLORS.primaryDark};
//   z-index: 800;
//   transition: transform 0.3s ease-in-out;
//   transform: translateX(0); /* Initially show the sidebar */
//   @media only screen and (max-width: 768px) {
//     width: 70%; /* Adjusted width for hamburger menu on small screens */
//     transform: translateX(-100%); /* Initially hide the sidebar on small screens */
//   }
// `;

// /* Add the rest of the styled components as in the previous code */







// // const COLORS = {
// //   primaryDark: "#115b4c",
// //   primaryLight: "#B6EDC8",
// // };

// // const MenuLabel = styled.label`
// //   background-color: ${COLORS.primaryLight};
// //   position: fixed;
// //   top: 2rem; /* Adjusted top position for smaller screens */
// //   right: 2rem; /* Adjusted right position for smaller screens */
// //   border-radius: 50%;
// //   height: 4rem; /* Adjusted height for smaller screens */
// //   width: 4rem; /* Adjusted width for smaller screens */
// //   cursor: pointer;
// //   z-index: 1000;
// //   box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
// //   text-align: center;
// // `;

// // const NavBackground = styled.div`
// //   position: fixed;
// //   top: 2.5rem; /* Adjusted top position for smaller screens */
// //   right: 2.5rem; /* Adjusted right position for smaller screens */
// //   background-image: radial-gradient(
// //     ${COLORS.primaryDark},
// //     ${COLORS.primaryLight}
// //   );
// //   height: 4rem; /* Adjusted height for smaller screens */
// //   width: 4rem; /* Adjusted width for smaller screens */
// //   border-radius: 50%;
// //   z-index: 600;
// //   transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
// //   transition: transform 0.8s;
// // `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//   width: 2rem; /* Adjusted width for smaller screens */
//   height: 1px; /* Adjusted height for smaller screens */
//   display: inline-block;
//   margin-top: 2.5rem; /* Adjusted top margin for smaller screens */
//   transition: all 0.3s;

//   &::before,
//   &::after {
//     content: "";
//     background-color: black;
//     width: 2rem; /* Adjusted width for smaller screens */
//     height: 1px; /* Adjusted height for smaller screens */
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }

//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-0.6rem")}; /* Adjusted top position for smaller screens */
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }

//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "0.6rem")}; /* Adjusted top position for smaller screens */
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }

//   ${MenuLabel}:hover &::before {
//     top: ${(props) => (props.clicked ? "0" : "-1rem")}; /* Adjusted top position for smaller screens */
//   }

//   ${MenuLabel}:hover &::after {
//     top: ${(props) => (props.clicked ? "0" : "1rem")}; /* Adjusted top position for smaller screens */
//   }
// `;

// // const Navigation = styled.nav`
// //   height: 100vh;
// //   position: fixed;
// //   top: 0;
// //   right: 0;
// //   z-index: 600;
// //   width: ${(props) => (props.clicked ? "100%" : "0")};
// //   opacity: ${(props) => (props.clicked ? "1" : "0")};
// //   transition: width 0.8s, opacity 0.8s;
// // `;

// const List = styled.ul`
//   position: absolute;
//   list-style: none;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   width: 100%;
// `;

// const ItemLink = styled(NavLink)`
//   display: inline-block;
//   font-size: 2rem; /* Adjusted font size for smaller screens */
//   font-weight: 300;
//   text-decoration: none;
//   color: ${COLORS.primaryLight};
//   padding: 1rem 2rem;

//   background-image: linear-gradient(
//     120deg,
//     transparent 0%,
//     transparent 50%,
//     #fff 50%
//   );
//   background-size: 240%;
//   transition: all 0.4s;

//   &:hover,
//   &:active {
//     background-position: 100%;
//     color: ${COLORS.primaryDark};
//     transform: translateX(1rem);
//   }
// `;

// function HamburgerMenu() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//         <Icon clicked={click}>&nbsp;</Icon>
//       </MenuLabel>
//       <NavBackground clicked={click}>&nbsp;</NavBackground>

//       <Navigation clicked={click}>
//         <List>
//           <li>
//             <ItemLink onClick={handleClick} to="/">
//               Home
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/accommodation">
//               Accommodations
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/about">
//               About us
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/bookform">
//               RoomBooking
//             </ItemLink>
//           </li>
//           <li>
//             <ItemLink onClick={handleClick} to="/contact">
//               Contact Us
//             </ItemLink>
//           </li>
//         </List>
//       </Navigation>
//     </>
//   );
// }

// export default HamburgerMenu;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* Styled Components */
const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  display: none; /* Initially hide the hamburger menu icon */
  @media only screen and (max-width: 768px) {
    display: block; /* Display the hamburger menu icon on small screens */
    background-color: ${COLORS.primaryLight};
    position: fixed;
    top: 2rem;
    right: 2rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
    text-align: center;
  }
`;

const Navigation = styled.nav`
  width: 250px; /* Sidebar width for large screens */
  height: 100vh;
  text-agin:left;
  position: fixed;
  top: 0;
  left: 0;
  background: ${COLORS.primaryDark};
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0); /* Initially show the sidebar */
  @media only screen and (max-width: 768px) {
    width: 100%; /* Full width for small screens */
    transform: translateX(${(props) => (props.clicked ? "0" : "-100%")}); /* Toggle sidebar for small screens */
  }
`;

const List = styled.ul`
  position: relative;
  list-style: none;
  top: 30%;
  left: 37%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  
  padding: 0;
  margin: 0;
`;




const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.8rem; 
  font-weight: 300;
  text-align:left;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 1.9rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
border-radius:8px;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;


const Logo = styled.div`
  font-family: "Comic sans MS"; 
  font-size: 2rem; 
  font-weight: bold; 
  color: white;
  margin:0; 
  margin-top: 2rem; 
  margin-left:2rem;
  
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      
      <Navigation clicked={click}>
      <Logo>RoomSync</Logo>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/accommodation">
              Accommodations
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About us
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/bookform">
              RoomBooking
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact Us
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem; /* Adjusted width for smaller screens */
  height: 1px; /* Adjusted height for smaller screens */
  display: inline-block;
  margin-top: 2.5rem; /* Adjusted top margin for smaller screens */
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem; /* Adjusted width for smaller screens */
    height: 1px; /* Adjusted height for smaller screens */
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6rem")}; /* Adjusted top position for smaller screens */
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6rem")}; /* Adjusted top position for smaller screens */
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export default HamburgerMenu;
