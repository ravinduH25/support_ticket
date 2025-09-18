import React from "react";

function Button(props) {
  return (
    <div>
      <a href={props.url} class={props.style}>
        {props.name}
      </a>
    </div>
  );
}

export default Button;
