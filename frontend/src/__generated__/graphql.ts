/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: any; output: any; }
};

export type PageType = {
  __typename?: 'PageType';
  image?: Maybe<Scalars['String']['output']>;
  index: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allZines?: Maybe<Array<Maybe<ZineType>>>;
  countZines?: Maybe<Scalars['BigInt']['output']>;
  hello?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum UploaderZineLayoutChoices {
  /** 4p Single fold vertical, one-side print, Portrait */
  T4 = 'T4',
  /** 8p Traditional inner-cut, single-side print, Landscape */
  Tc8 = 'TC8'
}

/** An enumeration. */
export enum UploaderZineSheetChoices {
  /** A4, Europe */
  A4 = 'A4',
  /** US Legal (8.5x14in) */
  Lg = 'LG',
  /** US Letter (8.5x11in) */
  Lt = 'LT',
  /** US Tabloid (11x17in) */
  Tb = 'TB'
}

export type ZineType = {
  __typename?: 'ZineType';
  id: Scalars['ID']['output'];
  layout: UploaderZineLayoutChoices;
  name: Scalars['String']['output'];
  pages: Array<PageType>;
  sheet: UploaderZineSheetChoices;
};
