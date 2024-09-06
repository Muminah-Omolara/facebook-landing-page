import { useState } from "react";
import styles from "./signUp.module.css";

export default function SignUp({ onBack }) {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState({ emailAddress: "", password: "" });
  const [gender, setGender] = useState("");
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
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
            <button className={styles.closeBtn} onClick={onBack} type="submit">
              ✖
            </button>
          </div>
        </div>

        <hr />
        <div className={styles.form}>
          <form className={styles.Name}>
            <input
              className={styles.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
              value={name.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              className={styles.surname}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
              type="text"
              value={name.lastName}
              id=""
              placeholder="Surname"
            />
          </form>
          <form>
            <input
              className={styles.email}
              onChange={(e) =>
                setEmail({ ...email, emailAddress: e.target.value })
              }
              type="text"
              value={email.emailAddress}
              placeholder="Mobile number or Email address"
            />
          </form>
          <form>
            <input
              className={styles.password}
              onChange={(e) => setEmail({ ...email, password: e.target.value })}
              type="password"
              value={email.password}
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
                  name="options"
                />
              </label>
              <label>
                Male
                <input
                  onChange={() => handleGenderChange("Male")}
                  type="radio"
                  name="options"
                />
              </label>
              <label>
                Custom
                <input
                  onChange={() => handleGenderChange("Custom")}
                  type="radio"
                  name="options"
                />
              </label>
            </div>
            {gender === "Custom" && (
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
