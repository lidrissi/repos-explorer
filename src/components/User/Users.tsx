import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../store/User/thunks';
import UserItem from './UserItem';

const Users = (props: any) => {

    useEffect(() => {
        props.fetchUsers()
    })

    return (
        <div className="grid grid-cols-4">
            {
                props.users.map((user: User) => <UserItem {...user} />)
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.users.items
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchUsers: () => dispatch(fetchUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(Users);

