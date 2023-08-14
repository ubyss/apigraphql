const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
  id: ID!
  image: String!
  name: String!
  listPrice: Float!
  price: Float!
  installments: Int!
}

type Store {
  name: String!
  address: String!
  neighborhood: String!
  city: String!
  state: String!
  postalCode: String!
  hour: String!
  products: [Product!]!
}

type User {
  email: String!
  id: ID!
}

type AuthData {
  token: String!
  user: User!
}

type Query {
  storeRegionalization(input: SendRegionalizationInput!): Store!
}

type Mutation {
  addItem(input: AddItemInput!): Product!
  login(email: String!, password: String!): AuthData!
}

input SendRegionalizationInput {
  dummyField: String # Temporary field
}

input AddItemInput {
  image: String!
  name: String!
  listPrice: Float!
  price: Float!
  installments: Int!
}

`;

module.exports = typeDefs;
