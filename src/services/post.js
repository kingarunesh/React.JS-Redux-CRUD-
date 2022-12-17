import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),

    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: "posts",
                method: "GET",
            }),
        }),

        getPost: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: "GET",
            }),
        }),

        getPostsByLimit: builder.query({
            query: (number) => {
                console.log(number);
                return {
                    url: `posts?_limit=${number}`,
                    method: "GET",
                };
            },
        }),

        deletePost: builder.mutation({
            query: (id) => {
                console.log(id);

                return {
                    url: `posts/${id}`,
                    method: "DELETE",
                };
            },
        }),
    }),
});

export const { useGetAllPostQuery, useGetPostQuery, useGetPostsByLimitQuery, useDeletePostMutation } = postApi;
