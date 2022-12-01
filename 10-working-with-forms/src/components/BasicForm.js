import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameInputChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !lastNameInputHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            type="text"
            id="name"
          />
          {nameInputHasError && <p>First name must not be blank</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="name"
          />
          {lastNameInputHasError && <p>Last name must not be blank</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="name"
        />
        {emailInputHasError && <p>Email must not be blank and contain a '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
