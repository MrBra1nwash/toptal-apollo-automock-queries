import { buildClientSchema, printSchema } from "graphql";
import React, { FC } from "react";
import schemaJSON from "../schema.json";
import { addMocksToSchema, IMocks } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { schemaString } from "../schema-string";

interface Props {
  mockResolvers?: IMocks;
}

const AutoMockedProvider: FC<Props> = ({ children, mockResolvers }) => {
  // 1) Convert JSON schema into Schema Definition Language
  const schemaSDL = printSchema(
    buildClientSchema({ __schema: schemaJSON.__schema as any })
  );

  // 2) Make schema "executable"
  const schema = makeExecutableSchema({
    typeDefs: schemaString,
    // typeDefs: schemaSDL,
  });

  // 3) Apply mock resolvers to executable schema
  addMocksToSchema({ schema, mocks: mockResolvers });

  // 4) Define ApolloClient (client variable used below)
  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AutoMockedProvider;
