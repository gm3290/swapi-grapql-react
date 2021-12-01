import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query allPeople($first: Int, $after: String, $last: Int, $before: String) {
    allPeople(first: $first, after: $after, last: $last, before: $before) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          birthYear
          gender
          homeworld {
            name
          }
          species {
            name
          }
        }
      }
    }
  }
`;
