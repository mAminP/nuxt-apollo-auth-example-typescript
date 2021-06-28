import { gql } from 'graphql-tag';
export abstract class Query {
    public static users = gql`
    query users{
     accounts{
       id
       name
       email
       password
     }
   }
   `
    public static me = gql`
   query me {
     me{
       user{
         id
         name
         roles
       }
     }
   }
    `

}

export abstract class Mutation {
    public static login = gql`
     mutation login($data:LoginInput!) {
       login(data:$data){
         token
       }
     }
      `
}