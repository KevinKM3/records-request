import { useEffect, useState } from "react";
import { NavLink, Button, Table } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";

import axios from "axios";

const MyRequests = () => {
  // handle dat with state
  const [requests, setRequests] = useState([]);

  // Delete handler for button
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
  };

  const fetchRequests = async () => {
    const { data } = await axios.get("/api/requests");
    setRequests(data);
  };
  console.log(requests);
  useEffect(() => {
    fetchRequests();
  }, []);

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{request._id} </td>
                <td>{request.request_text}</td>
                <td>{request.department_names}</td>
                <td>{request.request_due_date}</td>
                <td>{request.expiration_data}</td>
                <td>{request.requester}</td>
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
