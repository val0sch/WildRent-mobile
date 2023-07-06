import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Cart = {
  __typename?: 'Cart';
  creation_date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CartRegister = {
  creation_date: Scalars['String']['input'];
  state: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type CategoryRegister = {
  label: Scalars['String']['input'];
};

export type DetailsUser = {
  __typename?: 'DetailsUser';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
};

export type DetailsUserRegister = {
  address: Scalars['String']['input'];
  birthday: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
};

export type Image = {
  __typename?: 'Image';
  id?: Maybe<Scalars['String']['output']>;
  isMain?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
};

export type ImageRegister = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  product: Scalars['String']['input'];
};

export type Item = {
  __typename?: 'Item';
  cart?: Maybe<Cart>;
  due_rent_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
  start_rent_date?: Maybe<Scalars['Date']['output']>;
};

export type ItemRegister = {
  cart?: InputMaybe<Scalars['String']['input']>;
  due_rent_date?: InputMaybe<Scalars['Date']['input']>;
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  start_rent_date?: InputMaybe<Scalars['Date']['input']>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  email?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCart?: Maybe<Cart>;
  addCategory?: Maybe<Category>;
  addImage?: Maybe<Image>;
  addItem?: Maybe<Item>;
  addProduct?: Maybe<Product>;
  addUser?: Maybe<User>;
  deleteCart?: Maybe<Cart>;
  deleteCategory?: Maybe<Category>;
  deleteImage?: Maybe<Image>;
  deleteItem?: Maybe<Item>;
  deleteProduct?: Maybe<Product>;
  deleteUser?: Maybe<User>;
  updateCart?: Maybe<Cart>;
  updateCategory?: Maybe<Category>;
  updateDetailsUser?: Maybe<DetailsUser>;
  updateItem?: Maybe<Item>;
  updateProduct?: Maybe<Product>;
  updateUser?: Maybe<User>;
};


export type MutationAddCartArgs = {
  infos: CartRegister;
};


export type MutationAddCategoryArgs = {
  infos: CategoryRegister;
};


export type MutationAddImageArgs = {
  infos: ImageRegister;
};


export type MutationAddItemArgs = {
  infos: ItemRegister;
};


export type MutationAddProductArgs = {
  infos: ProductRegister;
};


export type MutationAddUserArgs = {
  infos: UserRegister;
};


export type MutationDeleteCartArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCartArgs = {
  id: Scalars['String']['input'];
  infos: CartRegister;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String']['input'];
  infos: CategoryRegister;
};


export type MutationUpdateDetailsUserArgs = {
  id: Scalars['String']['input'];
  infos: DetailsUserRegister;
};


export type MutationUpdateItemArgs = {
  id: Scalars['String']['input'];
  infos: ItemRegister;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String']['input'];
  infos: ProductRegister;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  infos: UserRegister;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
};

export type ProductRegister = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['String']['input'];
  size: Scalars['String']['input'];
  stock: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  carts?: Maybe<Array<Maybe<Cart>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  checkAdmin?: Maybe<Scalars['Boolean']['output']>;
  checkToken?: Maybe<Scalars['Boolean']['output']>;
  detailsUsers?: Maybe<Array<Maybe<DetailsUser>>>;
  images?: Maybe<Array<Maybe<Image>>>;
  items?: Maybe<Array<Maybe<Item>>>;
  login?: Maybe<LoginInfo>;
  products?: Maybe<Array<Maybe<Product>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryLoginArgs = {
  infos: UserLogin;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  detailsUser?: Maybe<DetailsUser>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type UserLogin = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegister = {
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
};

export type LoginQueryVariables = Exact<{
  infos: UserLogin;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginInfo', token?: string | null, email?: string | null } | null };

export type CheckTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckTokenQuery = { __typename?: 'Query', checkToken?: boolean | null };

export type CheckAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAdminQuery = { __typename?: 'Query', checkAdmin?: boolean | null };

export type AddCategoryMutationVariables = Exact<{
  infos: CategoryRegister;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory?: { __typename?: 'Category', id?: string | null, label?: string | null } | null };

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['String']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory?: { __typename?: 'Category', id?: string | null } | null };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id?: string | null, label?: string | null } | null> | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', email?: string | null, isAdmin?: boolean | null, detailsUser?: { __typename?: 'DetailsUser', firstname?: string | null, lastname?: string | null, address?: string | null, birthday?: string | null } | null } | null> | null };

export type AddUserMutationVariables = Exact<{
  infos: UserRegister;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', id?: string | null, email?: string | null, password?: string | null, isAdmin?: boolean | null } | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', detailsUser?: { __typename?: 'DetailsUser', id?: string | null } | null } | null };

export type UpdateUserDetailsMutationVariables = Exact<{
  updateDetailsUserId: Scalars['String']['input'];
  infos: DetailsUserRegister;
}>;


export type UpdateUserDetailsMutation = { __typename?: 'Mutation', updateDetailsUser?: { __typename?: 'DetailsUser', id?: string | null, birthday?: string | null, address?: string | null, firstname?: string | null, lastname?: string | null } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartRegister: CartRegister;
  Category: ResolverTypeWrapper<Category>;
  CategoryRegister: CategoryRegister;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DetailsUser: ResolverTypeWrapper<DetailsUser>;
  DetailsUserRegister: DetailsUserRegister;
  Image: ResolverTypeWrapper<Image>;
  ImageRegister: ImageRegister;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  ItemRegister: ItemRegister;
  LoginInfo: ResolverTypeWrapper<LoginInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductRegister: ProductRegister;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserLogin: UserLogin;
  UserRegister: UserRegister;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Cart: Cart;
  CartRegister: CartRegister;
  Category: Category;
  CategoryRegister: CategoryRegister;
  Date: Scalars['Date']['output'];
  DetailsUser: DetailsUser;
  DetailsUserRegister: DetailsUserRegister;
  Image: Image;
  ImageRegister: ImageRegister;
  Int: Scalars['Int']['output'];
  Item: Item;
  ItemRegister: ItemRegister;
  LoginInfo: LoginInfo;
  Mutation: {};
  Product: Product;
  ProductRegister: ProductRegister;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
  UserLogin: UserLogin;
  UserRegister: UserRegister;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  creation_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DetailsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetailsUser'] = ResolversParentTypes['DetailsUser']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  due_rent_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFavorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_rent_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginInfo'] = ResolversParentTypes['LoginInfo']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationAddCartArgs, 'infos'>>;
  addCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationAddCategoryArgs, 'infos'>>;
  addImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationAddImageArgs, 'infos'>>;
  addItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'infos'>>;
  addProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationAddProductArgs, 'infos'>>;
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'infos'>>;
  deleteCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDeleteCartArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationDeleteImageArgs, 'id'>>;
  deleteItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationUpdateCartArgs, 'id' | 'infos'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'infos'>>;
  updateDetailsUser?: Resolver<Maybe<ResolversTypes['DetailsUser']>, ParentType, ContextType, RequireFields<MutationUpdateDetailsUserArgs, 'id' | 'infos'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'id' | 'infos'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'infos'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'infos'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  carts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  checkAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  detailsUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DetailsUser']>>>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['LoginInfo']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'infos'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  detailsUser?: Resolver<Maybe<ResolversTypes['DetailsUser']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DetailsUser?: DetailsUserResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  LoginInfo?: LoginInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};



export const LoginDocument = gql`
    query Login($infos: UserLogin!) {
  login(infos: $infos) {
    token
    email
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      infos: // value for 'infos'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const CheckTokenDocument = gql`
    query CheckToken {
  checkToken
}
    `;

/**
 * __useCheckTokenQuery__
 *
 * To run a query within a React component, call `useCheckTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckTokenQuery(baseOptions?: Apollo.QueryHookOptions<CheckTokenQuery, CheckTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckTokenQuery, CheckTokenQueryVariables>(CheckTokenDocument, options);
      }
export function useCheckTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckTokenQuery, CheckTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckTokenQuery, CheckTokenQueryVariables>(CheckTokenDocument, options);
        }
export type CheckTokenQueryHookResult = ReturnType<typeof useCheckTokenQuery>;
export type CheckTokenLazyQueryHookResult = ReturnType<typeof useCheckTokenLazyQuery>;
export type CheckTokenQueryResult = Apollo.QueryResult<CheckTokenQuery, CheckTokenQueryVariables>;
export const CheckAdminDocument = gql`
    query CheckAdmin {
  checkAdmin
}
    `;

/**
 * __useCheckAdminQuery__
 *
 * To run a query within a React component, call `useCheckAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckAdminQuery(baseOptions?: Apollo.QueryHookOptions<CheckAdminQuery, CheckAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckAdminQuery, CheckAdminQueryVariables>(CheckAdminDocument, options);
      }
export function useCheckAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAdminQuery, CheckAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckAdminQuery, CheckAdminQueryVariables>(CheckAdminDocument, options);
        }
export type CheckAdminQueryHookResult = ReturnType<typeof useCheckAdminQuery>;
export type CheckAdminLazyQueryHookResult = ReturnType<typeof useCheckAdminLazyQuery>;
export type CheckAdminQueryResult = Apollo.QueryResult<CheckAdminQuery, CheckAdminQueryVariables>;
export const AddCategoryDocument = gql`
    mutation addCategory($infos: CategoryRegister!) {
  addCategory(infos: $infos) {
    id
    label
  }
}
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      infos: // value for 'infos'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation deleteCategory($deleteCategoryId: String!) {
  deleteCategory(id: $deleteCategoryId) {
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      deleteCategoryId: // value for 'deleteCategoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const ListCategoriesDocument = gql`
    query listCategories {
  categories {
    id
    label
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    email
    isAdmin
    detailsUser {
      firstname
      lastname
      address
      birthday
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($infos: UserRegister!) {
  addUser(infos: $infos) {
    id
    email
    password
    isAdmin
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      infos: // value for 'infos'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const UserDocument = gql`
    query User($userId: String!) {
  user(id: $userId) {
    detailsUser {
      id
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UpdateUserDetailsDocument = gql`
    mutation UpdateUserDetails($updateDetailsUserId: String!, $infos: DetailsUserRegister!) {
  updateDetailsUser(id: $updateDetailsUserId, infos: $infos) {
    id
    birthday
    address
    firstname
    lastname
  }
}
    `;
export type UpdateUserDetailsMutationFn = Apollo.MutationFunction<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;

/**
 * __useUpdateUserDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserDetailsMutation, { data, loading, error }] = useUpdateUserDetailsMutation({
 *   variables: {
 *      updateDetailsUserId: // value for 'updateDetailsUserId'
 *      infos: // value for 'infos'
 *   },
 * });
 */
export function useUpdateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>(UpdateUserDetailsDocument, options);
      }
export type UpdateUserDetailsMutationHookResult = ReturnType<typeof useUpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationResult = Apollo.MutationResult<UpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;