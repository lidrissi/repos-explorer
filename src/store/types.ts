export type Repository = {
    name: string,
    description: string,
    issues: number,
    stars: number
    owner?: Owner
}

export type Owner = {
    username: string,
    avatar: string
}