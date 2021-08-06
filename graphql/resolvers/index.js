const postsResolvers = require('./posts');
const usersResolvers = require('./users');
//manage all resolvers
module.exports = {
  Query: {
    ...postsResolvers.Query
  }
}
