import {
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';

import { getUser } from '../resolvers/users';
import { userType } from './types';

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
  }
});

export default query;