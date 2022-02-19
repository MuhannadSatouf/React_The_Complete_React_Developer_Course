//Higher Order Component (HOC)
//A component that render another component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1> INFORMATION </h1>
    <p>The information is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && (
        <p>This is private information. PLease do not share it!</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login first</p>
      )}
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("App")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Please Login First" />,
  document.getElementById("App")
);
