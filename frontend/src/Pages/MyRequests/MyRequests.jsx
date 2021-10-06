import { NavLink, Button, Table } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import requests from "../../data/requests";

const MyRequests = () => {
  return (
    <MainScreen title="Hello Kevin, Welcome Back!!">
      <NavLink to="createrequest">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create new request
        </Button>
        {requests.map((request) => (
          <Table striped bordered hover>
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
                <td>{request._id}</td>
                <td>{request.request_text}</td>
                <td>{request.department_names}</td>
                <td>{request.request_due_date}</td>
                <td>{request.expiration_data}</td>
                <td>{request.requester}</td>
                <td>
                  <Button>Edit</Button>
                  <Button variant="danger" className="mx-2">
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
