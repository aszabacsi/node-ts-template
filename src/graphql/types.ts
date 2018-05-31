import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean
} from 'graphql';

import { getCompany } from '../resolvers/company';

export const companyType = new GraphQLObjectType({
  name: 'company',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }
});

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
    company: {
      type: companyType,
      resolve: (parentValue, args) => {
        return getCompany(parentValue.companyId)
        .then(res => res.data)
      }
    }
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