const { GraphQLSchema, GraphQLObjectType, GraphQLID } = require('graphql');
const { BookType } = require('./book');
const { AuthorType } = require('./book');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { isbn: { type: GraphQLID } },
      resolve(parent, args){
        return { name: 'Cien anos de soledad', isbn: '123' }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});