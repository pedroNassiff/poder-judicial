import React from "react";
import "./WhatsApp.scss";

const WhatsApp = () => {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=543624643147"
      className="whatsapp"
      target="_blank"
    >
      {" "}
      <i class="fa fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatsApp;
