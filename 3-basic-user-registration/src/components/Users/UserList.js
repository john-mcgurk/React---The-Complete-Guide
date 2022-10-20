import Card from "../UI/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles['users']}>
      <ul>
        {props.Users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
            onDelete={props.onDeleteUser}
          >
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
