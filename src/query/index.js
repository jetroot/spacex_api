const { gql } = require("@apollo/client");

// Get space ships query
export const GET_SPACEX_SHIPS = gql`
    query {
        ships {
            name
            image
            year_built
        }
    }
`;

// Get space rockets query
export const GET_SPACEX_ROCKETS = gql`
    query {
        rockets {
            name
            description
            company
            cost_per_launch
            mass {
                kg
            }
        }
    }
`;