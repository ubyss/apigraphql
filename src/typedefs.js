const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    id: ID!
    price: Float!
    quantity: Int!
    image: String!
  }

  type Query {
    getMinicart: [Item!]!
  }

  type Mutation {
    addItemToMinicart(id: ID!, price: Float!, quantity: Int!, image: String!): Item!
    removeItemFromMinicart(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
