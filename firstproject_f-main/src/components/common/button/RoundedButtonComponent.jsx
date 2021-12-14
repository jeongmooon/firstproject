import styled from "styled-components";
import { Link } from "react-router-dom";

const RoundedButtonComponent = styled(Link)`
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  border: 1px solid black;
  padding: 0.6rem 1.1rem;
  line-height: 1.2rem;
  vertical-align: middle;
  text-align: center;
  display: flex;
  align-items: center;
  text-decoration: none;

  & + & {
    margin-left: 0.8rem;
  }
`;

export default RoundedButtonComponent;
