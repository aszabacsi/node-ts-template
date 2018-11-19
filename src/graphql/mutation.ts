import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

import { addUser, deleteUser, modifyUser } from '../resolvers/users';
import { userType, successType } from './types';

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addUser: {
      type: userType,
      args: { 
        user: {
          type: new GraphQLNonNull(userType),
        },
      },
      resolve: (parentValue, { user }) => {
        return addUser(user)
        .then(() => ({ success: true }))
        .catch(() => ({ success: false }))
      }
    },
    deleteUser: {
      type: userType,
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
        user: {
          type: new GraphQLNonNull(userType),
        }
      },
      resolve: (parentValue, { user }) => {
        return modifyUser(user)
        .then(resp => resp.data)
      }
    },
  }
});

export default mutation;