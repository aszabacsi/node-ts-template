import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { getCompany } from '../../resolvers/company';
import { userType } from '.';

const companyType: GraphQLObjectType = new GraphQLObjectType({
  name: 'company',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    users : {
      type: new GraphQLList(userType),
      resolve: () => {
      }
    }
  }
});

export default companyType;