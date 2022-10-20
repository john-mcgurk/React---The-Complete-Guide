import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css';
import { useState } from "react";

const AddUser = (props) => {

  const [inputUsername, setUsername] = useState('');
  const [inputAge, setAge] = useState('');
  const [error, flagError] = useState();

  const usernameHandler = (event) =>
  {
    setUsername(event.target.value);
  }
  
  const ageHandler = (event) =>
  {
    setAge(event.target.value);
  }

  const clearError = () =>
  {
    flagError(null);
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();

    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      console.log("ERROR");
      flagError({
        title: "Invalid Input",
        message: "Please ensure valid data is input to both fields"
      });
      return;
    }

    if (+inputAge < 1) {
      flagError({
        title: "Invalid Age",
        message: "Age must be greater than 1"
      });
      return;
    }

    const userData = {
      username: inputUsername,
      age: inputAge.toString()
    }

    props.onAddUser(userData);
    setUsername('');
    setAge('');
  };

  return (
    <div>
    { error && <ErrorModal title={error.title} text={error.message} hideMethod={clearError}></ErrorModal> }
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input value={inputUsername} id="username" type="text" onChange={usernameHandler}/>
        <label htmlFor="age">Age</label>
        <input value={inputAge} id="age" type="number" onChange={ageHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
