import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const { push } = useHistory();
  return (
    <Div>
      <img
        onClick={() => {
          push("/");
          window.location.reload();
        }}
        src="https://exporterhub.io/assets/img/exporterhub_logo.png"
        alt="exporterhub logo"
      />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px;
    object-fit: contain;
  }
`;
export default Logo;
