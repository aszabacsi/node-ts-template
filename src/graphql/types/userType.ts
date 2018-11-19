import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const userType: GraphQLObjectType = new GraphQLObjectType({
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
    }
  }
});

export default userType;