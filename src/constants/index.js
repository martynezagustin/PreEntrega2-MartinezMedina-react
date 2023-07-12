export const BASE_URL = 'https://6499986379fbe9bcf83f9216.mockapi.io'

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/products`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }

        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }

        }
    }
}