import { useReducer } from "react";
import styles from "./signUp.module.css";
const Actions = {
  setName: "set_Name",
  setEmail: "set_Email",
  setGender: "set_Gender",
};
const previousState = {
  name: { firstName: "", lastName: "" },
  email: { emailAddress: "", password: "" },
  gender: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.setName:
      return { ...state, name: action.payload };
    case Actions.setEmail:
      return { ...state, email: action.payload };
    case Actions.setGender:
      return { ...state, gender: action.payload };
  }
};

export default function SignUp({ onBack }) {
  const [state, dispatch] = useReducer(reducer, previousState);

  const handleGenderChange = (selectedGender) => {
    dispatch({ type: Actions.setGender, payload: selectedGender });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.signUp}>
        <div className={styles.heading}>
          <div>
            <h2>Sign Up</h2>
            <p>It's quick and easy.</p>
          </div>
          <div>
            <button className={styles.closeBtn} onClick={onBack} type="button">
              ✖
            </button>
          </div>
        </div>

        <hr />
        <div className={styles.form}>
          <form className={styles.Name}>
            <input
              className={styles.firstName}
              onChange={(e) =>
                dispatch({
                  type: Actions.setName,
                  payload: { ...state.name, firstName: e.target.value },
                })
              }
              value={state.name.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              className={styles.surname}
              onChange={(e) =>
                dispatch({
                  type: Actions.setName,
                  payload: { ...state.name, lastName: e.target.value },
                })
              }
              type="text"
              value={state.name.lastName}
              id=""
              placeholder="Surname"
            />
          </form>
          <form>
            <input
              className={styles.email}
              onChange={(e) =>
                dispatch({
                  type: Actions.setEmail,
                  payload: { ...state.email, emailAddress: e.target.value },
                })
              }
              type="text"
              value={state.email.emailAddress}
              placeholder="Mobile number or Email address"
            />
          </form>
          <form>
            <input
              className={styles.password}
              onChange={(e) =>
                dispatch({
                  type: Actions.setEmail,
                  payload: { ...state.email, emailAddress: e.target.value },
                })
              }
              type="password"
              value={state.email.password}
              placeholder="New Password"
            />
            <form>
              <p className={styles.dob}>Date of birth </p>
              <label htmlFor="dob"></label>
              <input type="date" />
            </form>

            <p className={styles.gender}>Gender</p>
            <div className={styles.sex}>
              <label>
                Female{" "}
                <input
                  onChange={() => handleGenderChange("Female")}
                  type="radio"
                  name="gender"
                  checked={state.gender === "Female"}
                />
              </label>
              <label>
                Male
                <input
                  onChange={() => handleGenderChange("Male")}
                  type="radio"
                  name="gender"
                  checked={state.gender === "Male"}
                />
              </label>
              <label>
                Custom
                <input
                  onChange={() => handleGenderChange("Custom")}
                  type="radio"
                  name="gender"
                  checked={state.gender === "Custom"}
                />
              </label>
            </div>
            {state.gender === "Custom" && (
              <div>
                <form>
                  <input
                    className={styles.customGender}
                    type="text"
                    placeholder="Gender(optional)"
                  />
                </form>
                <div>
                  <select name="" id="">
                    <option value="">Select an option</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Genderqueer">Genderqueer</option>
                    <option value="Agender">Agender</option>
                    <option value="Hermphrodite">Hermaphrodite</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}
          </form>
          <p>
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <a
              target="blank"
              href="https://web.facebook.com/help/637205020878504"
            >
              Learn more.
            </a>
          </p>
          <p>
            By clicking Sign Up, you agree to our{" "}
            <a
              target="blank"
              href="https://web.facebook.com/legal/terms/update"
            >
              Terms
            </a>
            ,{" "}
            <a target="blank" href="https://free.facebook.com/privacy/policy/#">
              {" "}
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              target="blank"
              href="https://web.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0
          "
            >
              Cookies Policy
            </a>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
        </div>
        <div>
          <form>
            <button type="submit" className={styles.signUpBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
