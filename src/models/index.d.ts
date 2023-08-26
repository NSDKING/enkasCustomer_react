import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProspect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prospect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contrat?: string | null;
  readonly valeur?: number | null;
  readonly statut?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProspect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prospect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contrat?: string | null;
  readonly valeur?: number | null;
  readonly statut?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prospect = LazyLoading extends LazyLoadingDisabled ? EagerProspect : LazyProspect

export declare const Prospect: (new (init: ModelInit<Prospect>) => Prospect) & {
  copyOf(source: Prospect, mutator: (draft: MutableModel<Prospect>) => MutableModel<Prospect> | void): Prospect;
}

type EagerAffiliationContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AffiliationContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly affiliationID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAffiliationContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AffiliationContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly affiliationID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AffiliationContact = LazyLoading extends LazyLoadingDisabled ? EagerAffiliationContact : LazyAffiliationContact

export declare const AffiliationContact: (new (init: ModelInit<AffiliationContact>) => AffiliationContact) & {
  copyOf(source: AffiliationContact, mutator: (draft: MutableModel<AffiliationContact>) => MutableModel<AffiliationContact> | void): AffiliationContact;
}

type EagerAffiliation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ca?: number | null;
  readonly code?: string | null;
  readonly utilisations?: number | null;
  readonly AffiliationContacts?: (AffiliationContact | null)[] | null;
  readonly userID: string;
  readonly statut?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAffiliation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ca?: number | null;
  readonly code?: string | null;
  readonly utilisations?: number | null;
  readonly AffiliationContacts: AsyncCollection<AffiliationContact>;
  readonly userID: string;
  readonly statut?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Affiliation = LazyLoading extends LazyLoadingDisabled ? EagerAffiliation : LazyAffiliation

export declare const Affiliation: (new (init: ModelInit<Affiliation>) => Affiliation) & {
  copyOf(source: Affiliation, mutator: (draft: MutableModel<Affiliation>) => MutableModel<Affiliation> | void): Affiliation;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: string | null;
  readonly userID: string;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: string | null;
  readonly userID: string;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerOneYear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OneYear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOneYear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OneYear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OneYear = LazyLoading extends LazyLoadingDisabled ? EagerOneYear : LazyOneYear

export declare const OneYear: (new (init: ModelInit<OneYear>) => OneYear) & {
  copyOf(source: OneYear, mutator: (draft: MutableModel<OneYear>) => MutableModel<OneYear> | void): OneYear;
}

type EagerThreeMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThreeMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThreeMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThreeMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ThreeMonth = LazyLoading extends LazyLoadingDisabled ? EagerThreeMonth : LazyThreeMonth

export declare const ThreeMonth: (new (init: ModelInit<ThreeMonth>) => ThreeMonth) & {
  copyOf(source: ThreeMonth, mutator: (draft: MutableModel<ThreeMonth>) => MutableModel<ThreeMonth> | void): ThreeMonth;
}

type EagerOneMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OneMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOneMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OneMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OneMonth = LazyLoading extends LazyLoadingDisabled ? EagerOneMonth : LazyOneMonth

export declare const OneMonth: (new (init: ModelInit<OneMonth>) => OneMonth) & {
  copyOf(source: OneMonth, mutator: (draft: MutableModel<OneMonth>) => MutableModel<OneMonth> | void): OneMonth;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: number | null;
  readonly productID: string;
  readonly userID?: string | null;
  readonly price?: number | null;
  readonly nb_month?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: number | null;
  readonly productID: string;
  readonly userID?: string | null;
  readonly price?: number | null;
  readonly nb_month?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly buycount?: number | null;
  readonly cartCount?: number | null;
  readonly Carts?: (Cart | null)[] | null;
  readonly OneMonth?: OneMonth | null;
  readonly ThreeMonth?: ThreeMonth | null;
  readonly OneYear?: OneYear | null;
  readonly slug?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productOneMonthId?: string | null;
  readonly productThreeMonthId?: string | null;
  readonly productOneYearId?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly buycount?: number | null;
  readonly cartCount?: number | null;
  readonly Carts: AsyncCollection<Cart>;
  readonly OneMonth: AsyncItem<OneMonth | undefined>;
  readonly ThreeMonth: AsyncItem<ThreeMonth | undefined>;
  readonly OneYear: AsyncItem<OneYear | undefined>;
  readonly slug?: string | null;
  readonly Orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productOneMonthId?: string | null;
  readonly productThreeMonthId?: string | null;
  readonly productOneYearId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly passe?: string | null;
  readonly profil?: string | null;
  readonly endDateAccount?: string | null;
  readonly endDateProfil?: string | null;
  readonly pin?: string | null;
  readonly free?: boolean | null;
  readonly service?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly passe?: string | null;
  readonly profil?: string | null;
  readonly endDateAccount?: string | null;
  readonly endDateProfil?: string | null;
  readonly pin?: string | null;
  readonly free?: boolean | null;
  readonly service?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FamilyName?: string | null;
  readonly LastName?: string | null;
  readonly city?: string | null;
  readonly mail?: string | null;
  readonly birthdate?: string | null;
  readonly staff?: boolean | null;
  readonly phoneNumber?: string | null;
  readonly Carts?: (Cart | null)[] | null;
  readonly Account?: (Account | null)[] | null;
  readonly Orders?: (Order | null)[] | null;
  readonly Affiliations?: (Affiliation | null)[] | null;
  readonly AffiliationContacts?: (AffiliationContact | null)[] | null;
  readonly statut?: string | null;
  readonly Prospects?: (Prospect | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FamilyName?: string | null;
  readonly LastName?: string | null;
  readonly city?: string | null;
  readonly mail?: string | null;
  readonly birthdate?: string | null;
  readonly staff?: boolean | null;
  readonly phoneNumber?: string | null;
  readonly Carts: AsyncCollection<Cart>;
  readonly Account: AsyncCollection<Account>;
  readonly Orders: AsyncCollection<Order>;
  readonly Affiliations: AsyncCollection<Affiliation>;
  readonly AffiliationContacts: AsyncCollection<AffiliationContact>;
  readonly statut?: string | null;
  readonly Prospects: AsyncCollection<Prospect>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}