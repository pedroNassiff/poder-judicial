import React from "react";
import InstagramEmbed from 'react-instagram-embed';

const CustomInstagramEmbed = () => {
  return (
    <div>
      <InstagramEmbed
        url="https://www.instagram.com/sugarshin/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default CustomInstagramEmbed;
