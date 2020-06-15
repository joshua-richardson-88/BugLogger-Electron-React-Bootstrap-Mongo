import React from "react";
import Moment from "react-moment";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const logItem = ({
  deleteItem,
  log: { _id, priority, user, text, created },
}) => {
  const setVariant = () => {
    return priority === "high"
      ? "danger"
      : priority === "moderate"
      ? "warning"
      : "success";
  };
  const toProperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className="p-2">
          {toProperCase(priority)}
        </Badge>
      </td>
      <td>{text}</td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{new Date(created)}</Moment>
      </td>
      <td>{user}</td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteItem(_id)}>
          X
        </Button>
      </td>
    </tr>
  );
};

export default logItem;
