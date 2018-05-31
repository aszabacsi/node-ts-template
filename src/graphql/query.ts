import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import { getUser } from '../resolvers/users';
import { userType, companyType } from './types';
import { parseConstValue } from 'graphql/language/parser';
import { getCompany } from '../resolvers/company';

const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    user: {
      type: userType,
      args: { id: { type: GraphQLInt }},
      resolve: (parentValue, args) => {
        return getUser(args.id)
        .then(res => res.data)
      }
    },
    company: {
      type: companyType,
      args: { id: { type: GraphQLInt }},
      resolve: (parentValue, args) => {
        return getCompany(args.id)
        .then(res => res.data)
      }
    }
  }
});

export default query;