import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import FansReport from "../../components/FansReport";
import AppLayout from "../../components/Layout";
import DataGrid from "../../components/DataGrid";
import HeartIcon from "../../assets/Icons/HeartIcon";
import HeartOutlineIcon from "../../assets/Icons/HeartOutlineIcon";
import useFavorite from "../../hooks/useFavorite";
import { GET_USERS } from "./queries";

import {
  FranchiseReportWrapper,
  FansTableWrapper,
  TableHeader,
  ActionWrapper,
} from "./styled";

const Franchise = () => {
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, fetchMore } = useQuery(GET_USERS, {
    variables: { first: pageSize },
  });
  const [favorites, setFavorite] = useFavorite();

  const addRemoveFavorite = useCallback(
    (personId) => () => {
      setFavorite(personId);
    },
    [setFavorite]
  );

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleNextPage = (cursor) => {
    fetchMore({
      variables: { first: pageSize, after: cursor, before: "", last: null },
      updateQuery: (_, { fetchMoreResult }) => {
        setCurrentPage(currentPage + 1);
        return fetchMoreResult;
      },
    });
  };

  const handlePrevPage = (cursor) => {
    fetchMore({
      variables: { last: pageSize, before: cursor, after: "", first: null },
      updateQuery: (_, { fetchMoreResult }) => {
        setCurrentPage(currentPage - 1);
        return fetchMoreResult;
      },
    });
  };

  const headers = useMemo(
    () => [
      {
        key: "action",
        render: () => (
          <TableHeader>
            <HeartIcon />
          </TableHeader>
        ),
      },
      {
        key: "name",
        label: "Name",
        render: ({ label }) => <TableHeader>{label}</TableHeader>,
      },
      {
        key: "birthYear",
        label: "Birth year",
        render: ({ label }) => <TableHeader>{label}</TableHeader>,
      },
      {
        key: "gender",
        label: "Gender",
        render: ({ label }) => <TableHeader>{label}</TableHeader>,
      },
      {
        key: "homeworld",
        label: "Home world",
        render: ({ label }) => <TableHeader>{label}</TableHeader>,
      },
      {
        key: "species",
        label: "Species",
        render: ({ label }) => <TableHeader>{label}</TableHeader>,
      },
    ],
    []
  );

  const [rows, totalCount, pageInfo] = useMemo(() => {
    if (loading || !data) {
      return [[], 0, {}];
    }

    const tRows = data.allPeople.edges
      .map((edge) => {
        if (
          searchTerm &&
          !(edge.node.name || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          return false;
        }
        return {
          action: {
            render: () => (
              <ActionWrapper onClick={addRemoveFavorite(edge.node.id)}>
                {favorites.includes(edge.node.id) ? (
                  <HeartIcon />
                ) : (
                  <HeartOutlineIcon />
                )}
              </ActionWrapper>
            ),
          },
          rowId: {
            value: edge.node.id,
          },
          cursor: edge.cursor,
          name: {
            value: edge.node.name,
          },
          birthYear: {
            value: edge.node.birthYear,
          },
          gender: {
            value: edge.node.gender,
          },
          homeworld: {
            value: edge.node.homeworld ? edge.node.homeworld.name : "--",
          },
          species: {
            value: edge.node.species ? edge.node.species.name : "--",
          },
        };
      })
      .filter((x) => x)
      .sort((a, b) => {
        if (a.name.value < b.name.value) {
          return -1;
        }
        if (a.name.value > b.name.value) {
          return 1;
        }
        return 0;
      });

    return [tRows, data.allPeople.totalCount, data.allPeople.pageInfo];
  }, [loading, data, searchTerm, favorites, addRemoveFavorite]);

  if (loading || !data) {
    return null;
  }

  return (
    <AppLayout title="Fans">
      <FranchiseReportWrapper>
        <FansReport count="0,000" label="Female fans" />
        <FansReport count="0,000" label="Male fans" />
      </FranchiseReportWrapper>
      <FansTableWrapper>
        <DataGrid
          data={rows}
          headers={headers}
          searchTerm={searchTerm}
          totalCount={totalCount}
          pageInfo={pageInfo}
          pageSize={pageSize}
          page={currentPage}
          onSearch={handleSearch}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </FansTableWrapper>
    </AppLayout>
  );
};

export default Franchise;
