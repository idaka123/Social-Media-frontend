import Avatar from "../Avatar/Avatar";
import './UserItem.css'

const UserItem = (props) => {
    const { name, avatarUrl} = props

    return ( 
        <div className="home-users-item">
            <div className="home-users-item-info">
                <Avatar
                    classStyles="home-users-item-info-avatar" 
                    src={avatarUrl} 
                    width= '32px'
                    />
                <div className="home-users-item-info-name">{name}</div>
            </div>

        <div className="follow-btn"><strong>Follow</strong></div>

    </div>

     );
}
 
export default UserItem;