import React, { Fragment } from 'react';

// class Footer extends React.Component{
//     render(){
//         const customStyle ={
//             backgroundColor : "red",
//             padding: 10,
//             fontFamily: "Arial",
//             color:"white"
//         }
//         return(
//             <div style={customStyle}>Hola soy el footer</div>
//         );
//     }
// }

const Footer = () => {
    const customStyle ={
        backgroundColor : "red",
        padding: "10px",
        fontFamily: "Arial",
        color:"white"
    }
    return(
            <Fragment>
            <div style={customStyle}>Hola soy el footer</div>
            </Fragment>
    )
}

 
export default Footer;