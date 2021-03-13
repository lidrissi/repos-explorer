type Repository = {
    id: int,
    name: string,
    description: string,
    issues: number,
    stars: number
    pushedAt: string,
    owner?: User
}

type User = {
    username: string,
    avatar: string
}

type RepositoryState = {
    list: Repository[],
    fetching: boolean,
    page: number,
    pageSize: number
}

type UserState = {
    items: User[],
    fetching: boolean
}