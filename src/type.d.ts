type Repository = {
    name: string,
    description: string,
    issues: number,
    stars: number
    owner?: Owner
}

type Owner = {
    username: string,
    avatar: string
}

type RepositoryState = {
    starred: Repository[]
}