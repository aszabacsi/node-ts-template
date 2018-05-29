import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

import { addUser } from '../resolvers/users';
import { userType, successType } from './types';

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addUser: {
      type: successType,
      args: { 
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, args) => {
        return addUser(args.firstName, args.lastName)
        .then(() => ({ success: true }))
        .catch(() => ({ success: false }))
      }
    }
  }
});

export default mutation;