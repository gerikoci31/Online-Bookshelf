const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
     
      return await User.findById(id);
    },
    getUsers: async () => {
      
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { username, email }) => {
      
      const newUser = new User({ username, email });
      return await newUser.save();
    },
  },
};

module.exports = { typeDefs, resolvers };