import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// avec les imports gql et graphql, on lie notre requete du component à notre schèma (server)
const getOctocatQuery = gql`
  {
    octocats {
      id
      prenom
      nom
      gitHub
      linkedIn
    }
  }
`;

class OctocatList extends Component {
  render() {
    console.log(this.props);
    return (
      <Query query={getOctocatQuery}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return (
            <div>
              <ul id="octocat-list">
                {data.octocats &&
                  data.octocats.map(octocat => (
                    <li key={octocat.id}>
                      {octocat.id} : {octocat.prenom} {octocat.nom}
                      <a href={octocat.linkedIn}>linkedin</a>
                    </li>
                  ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}
// faire attention d'exporter le component
export default OctocatList;
