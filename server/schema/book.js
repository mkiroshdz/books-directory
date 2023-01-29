const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    isbn: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

module.exports = { BookType }

