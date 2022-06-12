const { ApolloServer, gql } = require('apollo-server');

// Data
const students = [
    {
        "id":1,
        "name": "MOIZ",
        "email": "amoizj16@gmail.com",
        "age": 21
    },
    {
        "id":2,
        "name": "Mustafa",
        "email": "mustafa@gmail.com",
        "age": 20
    },
    {
        "id":3,
        "name": "Ali",
        "email": "ali@gmail.com",
        "age": 22
    }
]



// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves students from the "students" array above.
const resolvers = {
    Query: {
      students: () => students,
    },
  };


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

 
  type Query {
    students: [Student]
  }
`;


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });