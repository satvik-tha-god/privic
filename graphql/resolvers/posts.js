const Post = require('../../models/Post');
//setting up post resolvers
module.exports = {
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
