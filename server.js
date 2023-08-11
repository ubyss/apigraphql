const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/typedefs');
const resolvers = require('./src/resolvers');

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

// A diferença chave é aqui: você precisa iniciar o servidor antes de aplicar o middleware.
server.start().then(() => {
    server.applyMiddleware({ app, path: '/graphql' });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
