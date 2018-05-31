import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';

import { getCompany } from '../../resolvers/company';
import { companyType } from '.';

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

export default userType;