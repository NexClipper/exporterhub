import { css } from "styled-components";

export const theme = {
  pryColor: "#DF691A",
  sedColor: "#85DBC3",
  pryColorHover: "#CA5303",
  sedColorHover: "#66C3A9"
};

export const container = css`
  width: 1170px;
  margin: 0 auto;
`;

export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
