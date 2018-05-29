import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

import { addUser, deleteUser, modifyUser } from '../resolvers/users';
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
    },
    deleteUser: {
      type: successType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLInt) } 
      },
      resolve: (parentValue, args) => {
        return deleteUser(args.id)
        .then(() => ({ success: true }))
        .catch(() => ({ success: false }))
      }
    },
    modifyUser: {
      type: userType,
      args: { 
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        id: { type: new GraphQLNonNull(GraphQLInt) } 
      },
      resolve: (parentValue, args) => {
        return modifyUser(args.id, args.firstName, args.lastName)
        .then(resp => resp.data)
      }
    },
  }
});

export default mutation;