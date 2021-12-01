import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 11px 6px;

  svg {
    margin-right: 6px;
    margin-left: 6px;
    fill: ${({ theme }) => theme.gray};
  }
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 16px;
  font-family: "Inter-Regular";
  width: 100%;
  padding: 4px;
  border: none;
  color: ${({ theme }) => theme.gray};

  &:focus {
    outline: none;
  }
`;
