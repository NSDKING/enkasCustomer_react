// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Prospect, AffiliationContact, Affiliation, Order, OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User } = initSchema(schema);

export {
  Prospect,
  AffiliationContact,
  Affiliation,
  Order,
  OneYear,
  ThreeMonth,
  OneMonth,
  Cart,
  Product,
  Account,
  User
};