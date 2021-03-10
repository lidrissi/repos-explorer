import axios from 'axios';

export const fetchStarredRepositories = () => {
    const requestUrl: string = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
    return axios.get(requestUrl, {
        params: {

        },
    });
}