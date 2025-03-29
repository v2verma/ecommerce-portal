import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }), // Replace with your API
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetUsersQuery } = apiSlice;

// Define TypeScript Interface for Users
interface User {
  id: number;
  name: string;
  email: string;
}
