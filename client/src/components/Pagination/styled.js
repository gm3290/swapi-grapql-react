import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.fadeGray1};
  padding: 16px 15px;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
`;

export const ControlButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.lightGray : theme.primary};
  }
`;

export const PaginationInfo = styled.div`
  min-width: 128px;
  text-align: center;
  position: relative;
  user-select: none;

  > span {
    padding: 4px;
    font-weight: bold;
    font-family: "InterTabular-Bold";
  }

  &::after,
  &::before {
    width: 1px;
    content: "";
    display: block;
    position: absolute;
    height: 24px;
    top: -4px;
    background: ${({ theme }) => theme.border};
  }

  &::after {
    right: 0px;
  }

  &::before {
    left: 0px;
  }
`;

export const TotalItemCount = styled.div`
  > span {
    margin-right: 4px;
    font-weight: bold;
    font-family: "InterTabular-Bold";
  }
`;
