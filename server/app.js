const PORT = process.env.PORT || 3000;

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');
const app = express();


app.get('/', graphqlHTTP({schema}));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})