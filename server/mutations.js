// mutations.js
import { gql } from '@apollo/client';

// Mutation for logging in a user
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          _id
          title
          authors
          description
          link
          image
        }
      }
    }
  }
`;

// Mutation for adding a new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          _id
          title
          authors
          description
          link
          image
        }
      }
    }
  }
`;

// Mutation for saving a book to a user's savedBooks
export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      username
      email
      savedBooks {
        _id
        title
        authors
        description
        link
        image
      }
    }
  }
`;

// Mutation for removing a book from a user's savedBooks
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        _id
        title
        authors
        description
        link
        image
      }
    }
  }
`;
