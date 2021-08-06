const {
  ApolloServer
} = require('apollo-server'); //requiring apollo server and graphql
const gql = require('graphql-tag');
const mongoose = require('mongoose'); //requiring mongoose for database

//setting up typedefs for app
const typeDefs = gql`
  type Query{
    sayHi: String!
  }
`
//setting up our resolvers
const resolvers = {
  Query: {
    sayHi: () => 'Hello Satvik'
  }
}
//setting up  apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect()

server.listen({port:5000})
  .then(res => {
    console.log(`Server running at ${res.url}`)
  })
