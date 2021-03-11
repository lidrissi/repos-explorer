
const UserItem = (user: User) => {

    return (
        <div>
            <img src={user.avatar} className="w-32" />
            <span>{user.username}</span>
        </div>
    )
}

export default UserItem;