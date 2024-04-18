import React from 'react';


import "./style.scss";
//import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import {  AiTwotoneHome, AiTwotonePhone,AiTwotoneMail  } from 'react-icons/ai';
const CONTACTPAGE = () => {
  return (
    <div className="contact-page">
      <div className="addresses">
        <h2>Liên hệ</h2>
    
        <AddressBlock />

      </div>
      <div className="contact-forms">
        <h2>Gửi phản hồi về cho chúng tôi</h2>
        <ContactFormBlock />
      </div>
      
    </div>
  );
};

const AddressBlock = () => {
  return (
    <div className="address-block">
        <div className="address_container">
        <AiTwotoneHome/>
      <h5>
        Địa chỉ của chúng tôi 
      </h5>
      
      </div>
      <p>
        361 Võ Thị Sáu, phường Long Toàn, tỉnh Bà Rịa-Vũng Tàu
      </p>
      <div className="address_container">
      <AiTwotoneMail  />
      <h5>
        Email của chúng tôi 
      </h5>
      
      </div>
      <p>
        nguyenquochuy3102@gmail.com
      </p>
      <div className="address_container">
      <AiTwotonePhone/>
      <h5>
      Điện thoại
      </h5>
      </div>
      <p>
        0797744819
      </p>
</div>
      

  );
};

const ContactFormBlock = () => {
  return (
   

    <div className="contact-form-block">
        
      <div className="container_form">
        <div className="text_title_form">
            <p> Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi,
                 chúng tôi sẽ đọc và liên lạc với bạn nhanh nhất có thể </p>
            <div className="form_contact">
                <input type="text" 
                placeholder="Tên của bạn"></input>

                <input  type="text"  
                placeholder="Email của bạn"></input>
                <input  type="text" 
                placeholder="Số điện thoại của bạn"></input>
       
                
                <textarea type="text" 
                placeholder="Nột dung"></textarea>

                <button className="btn third">Gửi cho chúng tôi</button>
            </div>
           

        </div>
      </div>
    </div>
  );
};

// const GoogleMapComponent = withScriptjs(withGoogleMap(() => {
//   return (
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//   );
// }));

// const addresse = [
//     "361 Võ Thị Sáu, phường Long Toàn, tỉnh Bà Rịa - Vũng Tàu", 
//     "0797448819", 
//     "nguyenquochuy3102@gmail.com",
//     "thứ 2 - thứ 7, từ 6am đến 22pm",
// ];
// <div className="contact-page">
//       <div className="addresses">
//         <h2>Địa chỉ</h2>
//         {addresse.map((address, index) => (
//           <p key={index}>{address}</p>
//         ))}
//       </div>
//       {/* Các phần khác của trang */}
//     </div>


export default (CONTACTPAGE);
