const {
  ApolloServer
} = require('apollo-server'); //requiring apollo server and graphql
const mongoose = require('mongoose'); //requiring mongoose for database
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const {
  MONGODB
} = require('./config.js'); //requiring sensitive mongo info from config


//setting up our resolvers

//setting up  apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});
//connect to database and run the server at port 5000
mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
    return server.listen({
      port: 5000
    });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`)
  });
