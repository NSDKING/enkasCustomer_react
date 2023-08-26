/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProspect = /* GraphQL */ `
  mutation CreateProspect(
    $input: CreateProspectInput!
    $condition: ModelProspectConditionInput
  ) {
    createProspect(input: $input, condition: $condition) {
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
export const updateProspect = /* GraphQL */ `
  mutation UpdateProspect(
    $input: UpdateProspectInput!
    $condition: ModelProspectConditionInput
  ) {
    updateProspect(input: $input, condition: $condition) {
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
export const deleteProspect = /* GraphQL */ `
  mutation DeleteProspect(
    $input: DeleteProspectInput!
    $condition: ModelProspectConditionInput
  ) {
    deleteProspect(input: $input, condition: $condition) {
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
export const createAffiliationContact = /* GraphQL */ `
  mutation CreateAffiliationContact(
    $input: CreateAffiliationContactInput!
    $condition: ModelAffiliationContactConditionInput
  ) {
    createAffiliationContact(input: $input, condition: $condition) {
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
export const updateAffiliationContact = /* GraphQL */ `
  mutation UpdateAffiliationContact(
    $input: UpdateAffiliationContactInput!
    $condition: ModelAffiliationContactConditionInput
  ) {
    updateAffiliationContact(input: $input, condition: $condition) {
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
export const deleteAffiliationContact = /* GraphQL */ `
  mutation DeleteAffiliationContact(
    $input: DeleteAffiliationContactInput!
    $condition: ModelAffiliationContactConditionInput
  ) {
    deleteAffiliationContact(input: $input, condition: $condition) {
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
export const createAffiliation = /* GraphQL */ `
  mutation CreateAffiliation(
    $input: CreateAffiliationInput!
    $condition: ModelAffiliationConditionInput
  ) {
    createAffiliation(input: $input, condition: $condition) {
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
export const updateAffiliation = /* GraphQL */ `
  mutation UpdateAffiliation(
    $input: UpdateAffiliationInput!
    $condition: ModelAffiliationConditionInput
  ) {
    updateAffiliation(input: $input, condition: $condition) {
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
export const deleteAffiliation = /* GraphQL */ `
  mutation DeleteAffiliation(
    $input: DeleteAffiliationInput!
    $condition: ModelAffiliationConditionInput
  ) {
    deleteAffiliation(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOneYear = /* GraphQL */ `
  mutation CreateOneYear(
    $input: CreateOneYearInput!
    $condition: ModelOneYearConditionInput
  ) {
    createOneYear(input: $input, condition: $condition) {
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
export const updateOneYear = /* GraphQL */ `
  mutation UpdateOneYear(
    $input: UpdateOneYearInput!
    $condition: ModelOneYearConditionInput
  ) {
    updateOneYear(input: $input, condition: $condition) {
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
export const deleteOneYear = /* GraphQL */ `
  mutation DeleteOneYear(
    $input: DeleteOneYearInput!
    $condition: ModelOneYearConditionInput
  ) {
    deleteOneYear(input: $input, condition: $condition) {
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
export const createThreeMonth = /* GraphQL */ `
  mutation CreateThreeMonth(
    $input: CreateThreeMonthInput!
    $condition: ModelThreeMonthConditionInput
  ) {
    createThreeMonth(input: $input, condition: $condition) {
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
export const updateThreeMonth = /* GraphQL */ `
  mutation UpdateThreeMonth(
    $input: UpdateThreeMonthInput!
    $condition: ModelThreeMonthConditionInput
  ) {
    updateThreeMonth(input: $input, condition: $condition) {
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
export const deleteThreeMonth = /* GraphQL */ `
  mutation DeleteThreeMonth(
    $input: DeleteThreeMonthInput!
    $condition: ModelThreeMonthConditionInput
  ) {
    deleteThreeMonth(input: $input, condition: $condition) {
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
export const createOneMonth = /* GraphQL */ `
  mutation CreateOneMonth(
    $input: CreateOneMonthInput!
    $condition: ModelOneMonthConditionInput
  ) {
    createOneMonth(input: $input, condition: $condition) {
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
export const updateOneMonth = /* GraphQL */ `
  mutation UpdateOneMonth(
    $input: UpdateOneMonthInput!
    $condition: ModelOneMonthConditionInput
  ) {
    updateOneMonth(input: $input, condition: $condition) {
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
export const deleteOneMonth = /* GraphQL */ `
  mutation DeleteOneMonth(
    $input: DeleteOneMonthInput!
    $condition: ModelOneMonthConditionInput
  ) {
    deleteOneMonth(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
