import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { imageupload } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import plus from "./plus.png";
function Drop(props) {
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
        props.imageFunction(response.payload.filePath);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  return (
    <Dropzone
      onDrop={fileupload}
      accept="image/jpeg,image/png , image/bmp"
      minSize={0}
      maxSize={5242880}
      multiple
    >
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
          {Image ? (
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                border: "1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={`https://profile1234.herokuapp.com/${Image}`}
            />
          ) : (
            <div>
              <img
                src={plus}
                style={{
                  width: "100px",
                  height: "100px",
                  alignItems: "center",
                }}
              />
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
}

export default Drop;
