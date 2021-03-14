
const UserItem = (user: User) => {

    return (
        <div className="shadow-md m-4 p-2 flex flex-col items-center hover:bg-gray-100">
            <img src={user.avatar} className="w-32 rounded-full" />
            <span>{user.username}</span>
        </div>
    )
}

export default UserItem;