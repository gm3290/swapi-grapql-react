import styled from "styled-components";

export const FranchiseReportWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

export const FansTableWrapper = styled.div`
  margin-top: 24px;
`;

export const TableHeader = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter-SemiBold";
  line-height: 16px;
  color: ${({ theme }) => theme.gray};

  svg {
    fill: ${({ theme }) => theme.gray};
    vertical-align: middle;
  }
`;

export const ActionWrapper = styled.div`
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.primary};
    vertical-align: middle;
  }
`;
