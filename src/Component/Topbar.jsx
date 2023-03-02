import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import "./Food.css";

function Topbar() {
  return (
    <div className="pt-2 px-2 text-light topbar">
   <div className="d-flex mb-3">
  <div className="me-auto p-2 fs-3">Dishes</div>
  <div className="p-2">
  <i className="bi bi-bell fs-3"></i>
  </div>
  <div className="p-2">
  <i className="bi bi-cart2 fs-3"></i>
  </div>
</div>

</div>
      
   
  )
}

export default Topbar

