import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:5432/graphql')
export default client
