import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { bordersave } from "../../_actions/post_actions";
import { Button, Modal, Form } from "react-bootstrap";

function BorderWrite(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [BorderTitle, setBorderTitle] = useState("");
  const [BorderText, setBorderText] = useState("");
  const TitleHandler = (event) => {
    console.log(event.currentTarget.value);
    setBorderTitle(event.currentTarget.value);
  };
  const TextHandler = (event) => {
    setBorderText(event.currentTarget.value);
  };

  const BoderSubmit = (event) => {
    event.preventDefault();

    const body = {
      writer: user.userData._id,
      title: BorderTitle,
      body: BorderText,
    };
    dispatch(bordersave(body)).then((response) => {
      if (response.payload.success) {
        setShow(false);
        props.history.push("/List");
      } else {
        console.log(response);
        alert("실패");
      }
    });
  };

  return (
    <Form>
      <Button variant="primary" onClick={handleShow}>
        글쓰기
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>제목</Form.Label>
            <Form.Control
              placeholder="제목"
              value={BorderTitle}
              onChange={TitleHandler}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>내용</Form.Label>
            <Form.Control
              placeholder="내용"
              value={BorderText}
              onChange={TextHandler}
              style={{ height: "500px" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={BoderSubmit}>
            등록
          </Button>
          <Button variant="primary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default withRouter(BorderWrite);
