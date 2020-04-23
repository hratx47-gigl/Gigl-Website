import React from 'react';

const GiglImage = ({ image }) => {

  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', image, false);
  xhr.send();

  image = (xhr.status !== "404") ? image : "https://i.imgur.com/KCeSIDy.png";

  return (
    <img src={image}/>
  )
}

export default GiglImage;