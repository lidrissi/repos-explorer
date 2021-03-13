import axios from 'axios';

export const fetchRepositories = () => {
    const requestUrl: string = "https://api.github.com/search/repositories?q=created:>2020-10-22&sort=stars&order=desc";
    return axios.get(requestUrl, {
        'headers': {
            'Authorization': `token a0a7c8da4bbb1606667f21bbc68c61ffba6e2bd8`
        },
        params: {
            per_page: 10
        }
    });
}