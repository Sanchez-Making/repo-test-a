/* eslint-disable consistent-return */
/**
 * Common methods to make AJAX calls
 */
import axios from 'axios';

function getCommonHeader() {
    return {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Accept: 'application/json',
        },
    };
}

export default {
    /**
     * Makes a GET request to the API.
    */
    get: async (url) => {
        try {
            const response = await axios.get(
                url,
                getCommonHeader(),
            );

            return response.data;
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    },

    /**
     * Makes a POST request to the API.
    */
    post: async (url, data) => {
        try {
            const response = await axios.post(
                url,
                { ...data },
                getCommonHeader(),
            );

            return response.data;
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    },

    /**
     * Makes a PUT request to the API.
    */
    put: async (url, data) => {
        try {
            const response = await axios.put(
                url,
                { ...data },
                getCommonHeader(),
            );

            return response.data;
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    },
    /**
     * Makes a DELETE request to the API.
    */
    delete: async (url) => {
        try {
            const response = await axios.delete(
                url,
                getCommonHeader(),
            );

            return response.data;
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    },
};
