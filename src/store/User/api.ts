import axios from 'axios';

export const fetchUsers = () => {
    const requestUrl: string = "https://api.github.com/search/users?q=created:>2017-10-22&sort=followers&order=desc";
    return axios.get(requestUrl, {
        'headers': {
            'Authorization': `token a0a7c8da4bbb1606667f21bbc68c61ffba6e2bd8`
        },
        params: {
            per_page: 10
        },
    });
}