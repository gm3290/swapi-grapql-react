import ChervRight from "../../assets/Icons/ChervRight";
import ChervLeft from "../../assets/Icons/ChervLeft";

import {
  PaginationWrapper,
  PaginationControls,
  PaginationInfo,
  ControlButton,
  TotalItemCount,
} from "./styled";
import { useMemo } from "react";

const Pagination = ({
  totalCount,
  page,
  pageSize,
  pageInfo,
  onNext,
  onPrev,
}) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / pageSize);
  }, [totalCount, pageSize]);

  const handleNext = () => {
    if (page < totalPages) {
      onNext(pageInfo.endCursor);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      onPrev(pageInfo.startCursor);
    }
  };

  return (
    <PaginationWrapper data-testid="pagination-wrapper">
      <PaginationControls>
        <ControlButton
          data-testid="prev-button"
          disabled={!pageInfo?.hasPreviousPage && page <= 1}
          onClick={handlePrev}
        >
          <ChervLeft />
        </ControlButton>
        <PaginationInfo>
          <span>{page}</span>
          of
          <span>{totalPages}</span>
        </PaginationInfo>
        <ControlButton
          data-testid="next-button"
          disabled={!pageInfo?.hasNextPage && page >= totalPages}
          onClick={handleNext}
        >
          <ChervRight />
        </ControlButton>
      </PaginationControls>
      <TotalItemCount>
        <span>{totalCount}</span>fans
      </TotalItemCount>
    </PaginationWrapper>
  );
};

export default Pagination;
