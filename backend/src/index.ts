require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
import resolvers from "./resolvers";
import typeDefs from "./TypeDefs/schema.graphql";

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT }, () => {
    console.log(`SERVER IS RUNNING ON ${process.env.PORT} 🚀 `);
  });
}

module.exports = startServer();
