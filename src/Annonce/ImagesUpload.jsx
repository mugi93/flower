// upload d'une photo

import React from "react";
import { Button } from "@material-ui/core";


export default function ImagesUpload() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "300px",
            height: "200px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            marginLeft: 9,
          }}
        />
        <Button style={{}}>Ajouter une photo</Button>
      </div>


    </div>
  );
}


