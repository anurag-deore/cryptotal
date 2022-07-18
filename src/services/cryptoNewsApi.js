import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '624acb9560mshb7f70daacc0548ep1cb7d0jsnb05e0307f9c3',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;