import { use } from "react";

export default function Users({ fetchUser }) {


  const users = use(fetchUser);
  console.log(users);


  const userStyle = {
    border: "2px solid green",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px",
  };

  return (
    <div style={userStyle}>
      <h2>Users : {users}</h2>
    </div>
  );
}
