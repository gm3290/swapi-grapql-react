import Card from "../Card";
import SearchInput from "../SearchInput";
import Pagination from "../Pagination";

import { Table, TheadRow, Th, Tr, Td } from "./styled";

const DataGrid = ({
  headers,
  data,
  searchTerm,
  totalCount,
  pageSize,
  pageInfo,
  page,
  onSearch,
  onNext,
  onPrev,
}) => {
  const headerKeys = headers.map((h) => h.key);

  return (
    <Card padding="5px">
      <SearchInput value={searchTerm} onChange={onSearch} />
      <Table>
        <thead>
          <TheadRow>
            {headers.map((header) => (
              <Th key={header.key}>
                {header.render ? header.render(header) : header.label}
              </Th>
            ))}
          </TheadRow>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {headerKeys.map((k) => (
                <Td key={k}>
                  {row[k].render ? row[k].render(row[k]) : row[k].value}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageInfo={pageInfo}
        pageSize={pageSize}
        onNext={onNext}
        onPrev={onPrev}
      />
    </Card>
  );
};

export default DataGrid;
