import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import ReactMarkdown from "react-markdown";
import axios from "axios";
import {
  //   createRequestAction,
  updateRequestAction,
} from "../../actions/requestActions";

const CreateRequest = ({ match, history }) => {
  const [request_text, setRequest_text] = useState();
  const [request_due_date, setRequest_due_date] = useState();
  const [expiration_date, setExpiration_date] = useState();
  const [department_names, setDepartment_names] = useState("");
  const [requester, setRequester] = useState("");

  //  PARAMS
  //    request_text,
  //         request_due_date,
  //         expiration_date,
  //         department_names,
  //         requester,

  const dispatch = useDispatch();

  const requestUpdate = useSelector((state) => state.requestUpdate);
  requestUpdate();

  const requestDelete = useSelector((state) => state.requestDelete);
  requestDelete();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(updateRequestAction(id));
    }
    history.push("/myrequests");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/requests/${match.params.id}`);

      setRequest_text(data.updateRequestAction);
      setRequest_due_date(data.request_due_date);
      setExpiration_date(data.expiration_date);
      setDepartment_names(data.department_names);
      setRequester(data.requester);
    };

    fetching();
  }, [match.params.id, department_names]);

  const resetHandler = () => {
    setRequest_text("");
    setExpiration_date("");
    setRequest_due_date("");
    setDepartment_names("");
    setRequester("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateRequestAction(
        match.params.id,
        request_text,
        request_due_date,
        expiration_date,
        department_names,
        requester
      )
    );
    if (
      !request_text ||
      !request_due_date ||
      !expiration_date ||
      !department_names ||
      !requester
    )
      return;

    resetHandler();
    history.push("/myrequests");
  };
  return (
    <MainScreen request_text="Edit Request">
      <Card>
        <Card.Header>Edit your Request</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            <Form.Group controlId="request_text">
              <Form.Label>Request</Form.Label>
              <Form.Control
                type="request_text"
                placeholder="Enter the request_text"
                value={request_text}
                onChange={(e) => setRequest_text(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="request_due_date">
              <Form.Label>request_due_date</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the request_due_date"
                rows={4}
                value={request_due_date}
                onChange={(e) => setRequest_due_date(e.target.value)}
              />
            </Form.Group>
            {request_due_date && (
              <Card>
                <Card.Header>Request Preview</Card.Header>
                <Card.Body>{request_due_date}</Card.Body>
              </Card>
            )}

            <Form.Group controlId="request_due_date">
              <Form.Label>Expiration_date</Form.Label>
              <Form.Control
                type="request_due_date"
                placeholder="Enter the Expiration_date"
                value={expiration_date}
                onChange={(e) => setExpiration_date(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="department_names">
              <Form.Label>Department_names</Form.Label>
              <Form.Control
                type="request_due_date"
                placeholder="Enter the department_names"
                value={department_names}
                onChange={(e) => setDepartment_names(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="requester">
              <Form.Label>Requester</Form.Label>
              <Form.Control
                type="requester"
                placeholder="Enter the requester"
                value={department_names}
                onChange={(e) => setRequester(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Request
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Request
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
};

export default CreateRequest;
