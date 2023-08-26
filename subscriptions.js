/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProspect = /* GraphQL */ `
  subscription OnCreateProspect($filter: ModelSubscriptionProspectFilterInput) {
    onCreateProspect(filter: $filter) {
      id
      contrat
      valeur
      statut
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProspect = /* GraphQL */ `
  subscription OnUpdateProspect($filter: ModelSubscriptionProspectFilterInput) {
    onUpdateProspect(filter: $filter) {
      id
      contrat
      valeur
      statut
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProspect = /* GraphQL */ `
  subscription OnDeleteProspect($filter: ModelSubscriptionProspectFilterInput) {
    onDeleteProspect(filter: $filter) {
      id
      contrat
      valeur
      statut
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAffiliationContact = /* GraphQL */ `
  subscription OnCreateAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onCreateAffiliationContact(filter: $filter) {
      id
      affiliationID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAffiliationContact = /* GraphQL */ `
  subscription OnUpdateAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onUpdateAffiliationContact(filter: $filter) {
      id
      affiliationID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAffiliationContact = /* GraphQL */ `
  subscription OnDeleteAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onDeleteAffiliationContact(filter: $filter) {
      id
      affiliationID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAffiliation = /* GraphQL */ `
  subscription OnCreateAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onCreateAffiliation(filter: $filter) {
      id
      ca
      code
      utilisations
      AffiliationContacts {
        nextToken
        startedAt
      }
      userID
      statut
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAffiliation = /* GraphQL */ `
  subscription OnUpdateAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onUpdateAffiliation(filter: $filter) {
      id
      ca
      code
      utilisations
      AffiliationContacts {
        nextToken
        startedAt
      }
      userID
      statut
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAffiliation = /* GraphQL */ `
  subscription OnDeleteAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onDeleteAffiliation(filter: $filter) {
      id
      ca
      code
      utilisations
      AffiliationContacts {
        nextToken
        startedAt
      }
      userID
      statut
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOneYear = /* GraphQL */ `
  subscription OnCreateOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onCreateOneYear(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOneYear = /* GraphQL */ `
  subscription OnUpdateOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onUpdateOneYear(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOneYear = /* GraphQL */ `
  subscription OnDeleteOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onDeleteOneYear(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateThreeMonth = /* GraphQL */ `
  subscription OnCreateThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onCreateThreeMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateThreeMonth = /* GraphQL */ `
  subscription OnUpdateThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onUpdateThreeMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteThreeMonth = /* GraphQL */ `
  subscription OnDeleteThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onDeleteThreeMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOneMonth = /* GraphQL */ `
  subscription OnCreateOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onCreateOneMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOneMonth = /* GraphQL */ `
  subscription OnUpdateOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onUpdateOneMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOneMonth = /* GraphQL */ `
  subscription OnDeleteOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onDeleteOneMonth(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
      id
      number
      productID
      userID
      price
      nb_month
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
      id
      number
      productID
      userID
      price
      nb_month
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
      id
      number
      productID
      userID
      price
      nb_month
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      image
      type
      buycount
      cartCount
      Carts {
        nextToken
        startedAt
      }
      OneMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ThreeMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OneYear {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      slug
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productOneMonthId
      productThreeMonthId
      productOneYearId
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      image
      type
      buycount
      cartCount
      Carts {
        nextToken
        startedAt
      }
      OneMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ThreeMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OneYear {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      slug
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productOneMonthId
      productThreeMonthId
      productOneYearId
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      image
      type
      buycount
      cartCount
      Carts {
        nextToken
        startedAt
      }
      OneMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ThreeMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OneYear {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      slug
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productOneMonthId
      productThreeMonthId
      productOneYearId
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
      id
      mail
      passe
      profil
      endDateAccount
      endDateProfil
      pin
      free
      service
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
      id
      mail
      passe
      profil
      endDateAccount
      endDateProfil
      pin
      free
      service
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
      id
      mail
      passe
      profil
      endDateAccount
      endDateProfil
      pin
      free
      service
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      FamilyName
      LastName
      city
      mail
      birthdate
      staff
      phoneNumber
      Carts {
        nextToken
        startedAt
      }
      Account {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
      Affiliations {
        nextToken
        startedAt
      }
      AffiliationContacts {
        nextToken
        startedAt
      }
      statut
      Prospects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      FamilyName
      LastName
      city
      mail
      birthdate
      staff
      phoneNumber
      Carts {
        nextToken
        startedAt
      }
      Account {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
      Affiliations {
        nextToken
        startedAt
      }
      AffiliationContacts {
        nextToken
        startedAt
      }
      statut
      Prospects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      FamilyName
      LastName
      city
      mail
      birthdate
      staff
      phoneNumber
      Carts {
        nextToken
        startedAt
      }
      Account {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
      Affiliations {
        nextToken
        startedAt
      }
      AffiliationContacts {
        nextToken
        startedAt
      }
      statut
      Prospects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
