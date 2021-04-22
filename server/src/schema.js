const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teach a specific topic."
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "the tracks main illustration to display in track card"
    thumbnail: String
    "the tracks approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile pic"
    photo: String
  }
`;

module.exports = typeDefs;
