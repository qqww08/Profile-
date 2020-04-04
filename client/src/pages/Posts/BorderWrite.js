import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { bordersave } from "../../_actions/post_actions";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
function BorderWrite(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [BorderTitle, setBorderTitle] = useState("");
  const [BorderText, setBorderText] = useState("");
  const TitleHandler = (event) => {
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
        props.history.push("/Main");
      } else {
        alert("실패");
      }
    });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        글쓰기
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body value={BorderTitle} onChange={TitleHandler}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">제목</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Body value={BorderText} onChange={TextHandler}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">제목</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onSubmit={BoderSubmit}>
            등록
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={BoderSubmit}>
        <input value={BorderTitle} onChange={TitleHandler}></input>
        <textarea value={BorderText} onChange={TextHandler}></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default withRouter(BorderWrite);
