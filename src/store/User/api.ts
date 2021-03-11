import axios from 'axios';

export const fetchUsers = () => {
    const requestUrl: string = "https://api.github.com/search/users?q=created:>2017-10-22&sort=followers&order=desc";
    return axios.get(requestUrl, {
        params: {

        },
    });
}