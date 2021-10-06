import { useEffect, useState } from "react";
import { NavLink, Button, Table } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";

import { listRequests } from "../../actions/requestActions";

const MyRequests = () => {
  // handle data with state

  const dispatch = useDispatch();

  const requestList = useSelector((state) => state.requestList);

  const { loading, requests, error } = requestList;

  // Delete handler for button
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
  };

  console.log(requests);
  useEffect(() => {
    dispatch(listRequests());
  }, [dispatch]);

  return (
    <MainScreen title="Hello Kevin, Welcome Back!!">
      <NavLink to="createrequest">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create new request
        </Button>
        {requests.map((request) => (
          <Table key={request._id} striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Text</th>
                <th>Dept. Name</th>
                <th>Request Date</th>
                <th>Expiration Date</th>
                <th>Requester</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "20%" }}>{request._id} </td>
                <td style={{ width: "20%" }}>{request.request_text}</td>
                <td style={{ width: "20%" }}>{request.department_names}</td>
                <td style={{ width: "20%" }}>{request.request_due_date}</td>
                <td style={{ width: "20%" }}>{request.expiration_data}</td>
                <td style={{ width: "20%" }}>{request.requester}</td>
                <td>
                  <Button href={`/request/${request._id}`} size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    size="sm"
                    onClick={() => deleteHandler(request._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </NavLink>
    </MainScreen>
  );
};

export default MyRequests;
