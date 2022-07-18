import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'Accept': ' */*',
    'X-CMC_PRO_API_KEY': 'f6d1d93c-6797-4493-83a1-d86caeac73e8',
    'X-Requested-With': 'XMLHttpRequest'
};

const baseUrl = "https://pro-api.coinmarketcap.com/v1";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoExchangesApi = createApi({
    reducerPath: "cryptoExchangesApi",
    baseQuery: fetchBaseQuery({ baseUrl, mode: "cors" }),
    endpoints: (builder) => ({

        getCryptoExchanges: builder.query({
            query: (count) => createRequest(`/exchange/map?limit=${count}`),
        }),
    }),

});

export const {
    useGetCryptoExchangesQuery,
} = cryptoExchangesApi;