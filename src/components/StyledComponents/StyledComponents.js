import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
    type: 'button'
}))`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 2rem;
  border: 1px solid transparent;
  font-size: 18px;
  font-weight: 600;
`;
export default StyledButton;
