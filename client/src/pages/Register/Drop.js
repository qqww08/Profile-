import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { imageupload } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import plus from "./plus.png";
import { Image } from "react-bootstrap";
function Drop(props) {
  const dispatch = useDispatch();
  const [ImageDrop, setImageDrop] = useState("");

  const fileupload = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    dispatch(imageupload(formData, config)).then((response) => {
      if (response.payload.success) {
        // console.log(response);
        setImageDrop(response.payload.filePath);
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
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {ImageDrop ? (
            <Image
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={`https://profile1234.herokuapp.com/${ImageDrop}`}
              roundedCircle
            />
          ) : (
            <div>
              <img
                src={plus}
                style={{
                  width: "200px",
                  height: "200px",
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
