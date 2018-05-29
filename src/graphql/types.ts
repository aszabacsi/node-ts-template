import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean
} from 'graphql';

export const userType = new GraphQLObjectType({
  name: 'user',
  fields: {
    id: { 
      type: GraphQLInt
    },
    firstName: { 
      type: GraphQLString
    },
    lastName: { 
      type: GraphQLString 
    },
  }
});

export const successType = new GraphQLObjectType({
  name: 'success',
  fields: {
    success: { 
      type: GraphQLBoolean
    },
  }
});