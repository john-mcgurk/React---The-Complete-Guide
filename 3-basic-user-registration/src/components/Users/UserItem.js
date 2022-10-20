import styles from "./UserItem.module.css";

const UserItem = props => {
    const deleteHandler = () => {
        console.log("Deleting..." + props.id);
        props.onDelete(props.id);
    }
    return (
        <li className={styles["user-item"]} onClick={deleteHandler}>
            {props.username}, {props.age}
        </li>
    );
}

export default UserItem;