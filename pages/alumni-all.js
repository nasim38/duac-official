import React from "react";
import { Table } from "react-bootstrap";
import useFetch from "./../hooks/useFetch";

const AlumniAll = () => {
  // fetching all alumni data from database -----------------
  const { data, error, loading } = useFetch("http://localhost:1337/api/alumni");

  if (loading)
    return (
      <div className="px-4 py-2 border">
        <h4>loading...</h4>
      </div>
    );
  if (error)
    return (
      <div className="px-4 py-2 border">
        <h4>Fetch Error!!!</h4>
      </div>
    );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Blood Group</th>
          <th>DU Session</th>
          <th>DU Department</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((alumnus) => (
          <tr key={alumnus.id}>
            <td>{alumnus.id}</td>
            <td>{alumnus.attributes.fullName}</td>
            <td>{alumnus.attributes.phoneNumber}</td>
            <td>{alumnus.attributes.email}</td>
            <td>{alumnus.attributes.bloodGroup}</td>
            <td>{alumnus.attributes.duSession}</td>
            <td>{alumnus.attributes.duDepartment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AlumniAll;
