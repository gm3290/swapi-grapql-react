import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 11.5px 12px;
  background: ${({ theme }) => theme.fadeGray};
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 1px;
    background: ${({ theme }) => theme.border};
    position: absolute;
    left: 0px;
    top: 8px;
    bottom: 8px;
  }
  &:first-child {
    &::before {
      display: none;
    }
  }
`;

export const TheadRow = styled.tr`
  border-bottom: 8px solid white;
`;

export const Tr = styled.tr`
  &:hover {
    > td {
      background: ${({ theme }) => theme.background};
    }
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 11.5px 12px;
`;
