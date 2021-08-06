const {
  ApolloServer
} = require('apollo-server'); //requiring apollo server and graphql
const gql = require('graphql-tag');
const mongoose = require('mongoose'); //requiring mongoose for database

const Post = require('./models/Post');
const {
  MONGODB
} = require('./config.js'); //requiring sensitive mongo info from config

//setting up typedefs for app
const typeDefs = gql`
    type Post{
      id: ID!
      body: String!
      createdAt: String!
      username: String!
    }
  type Query{
    getPosts: [Post]
  }
`;
//setting up our resolvers
const resolvers = {
  Query: {
    async getPosts(){
      try{
        const posts = await Post.find();
        return posts;
      } catch(err){
        throw new Error(err);
      }
    }
  }
}
//setting up  apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});
//connect to database and run the server at port 5000
mongoose.connect(MONGODB, {
    useNewUrlParser: true
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
