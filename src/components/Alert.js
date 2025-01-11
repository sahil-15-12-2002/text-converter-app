import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert ${props.alert.type} alert-success`} role="alert">
        <strong>{props.alert.type}</strong> :- {props.alert.msg}
      </div>
    )
  );
}
