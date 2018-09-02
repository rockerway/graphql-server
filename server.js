const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');

const port = 80;

const typeDefs = fs.readFileSync('./schema.graphql', {encoding: 'utf-8'});
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({typeDefs, resolvers});

const app = express();
// app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(port, () => console.info(`Server started on port ${port}`));
