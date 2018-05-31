import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
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
        .then(resp => resp.data)
      }
    }
  }
});

export default query;