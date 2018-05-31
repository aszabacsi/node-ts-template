import { GraphQLObjectType, GraphQLBoolean } from "graphql";

const successType: GraphQLObjectType = new GraphQLObjectType({
  name: 'success',
  fields: {
    success: { type: GraphQLBoolean }
  }
})

export default successType;