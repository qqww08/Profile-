import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Image } from "react-bootstrap";
import { imageupload } from "../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import plus from "../Register/plus.png";
import { BACK_SERVER_URL } from "../../Config";
function ProfileDrop(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const img = user.userData.image;
  const [ImageDrop, setImage] = useState(img);
  const fileupload1 = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    dispatch(imageupload(formData, config)).then((response) => {
      if (response.payload.success) {
        // console.log(response.payload.filePath);
        setImage(response.payload.filePath);
        props.imageFunction(response.payload.filePath);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  return (
    <Dropzone
      onDrop={fileupload1}
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
                cursor: "pointer",
              }}
              src={`${BACK_SERVER_URL}/${ImageDrop}`}
              roundedCircle
            />
          ) : (
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={plus}
            />
          )}
        </div>
      )}
    </Dropzone>
  );
}

export default ProfileDrop;
