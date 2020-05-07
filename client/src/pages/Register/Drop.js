import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { imageupload } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Drop() {
  const dispatch = useDispatch();
  const [Image, setImage] = useState("");

  const fileupload = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    dispatch(imageupload(formData, config)).then((response) => {
      if (response.payload.success) {
        console.log(response);
        setImage(response.payload.filePath);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  return (
    <Dropzone onDrop={fileupload}>
      {({ getRootProps, getInputProps }) => (
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {Image && (
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`https://profile1234.herokuapp.com/${Image}`}
            />
          )}
        </div>
      )}
    </Dropzone>
  );
}

export default Drop;
