import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 10px;
  padding: ${({ padding }) => padding || "15px 12px"};
  background: ${({ theme }) => theme.white};
`;
