import React from "react";
import "./User.css";

const User = (props) => {
//   console.log(props.buttonClick);
  const { image, first_name, company, email, price } = props.user;
  const buttonClick =props.buttonClick;
  return (
    <div className="user-class">
      <div>
        <img src={image} alt="" srcset="" />
      </div>
      <br />
      <div>
        <h3>Name:{first_name}</h3>
        <h4>Company Name:{company}</h4>
        <p>Email:{email}</p>
        <h5 style={{ color: "red" }}>Salary: ${price}</h5>
        <button onClick={() =>buttonClick(props.user)}>Add user</button>
      </div>
    </div>
  );
};

export default User;
