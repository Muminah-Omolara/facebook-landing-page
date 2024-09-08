import fblogo from "../assets/fblogo.jpeg";
import styles from "./mobile.module.css";
import { useState } from "react";
import SignUp from "./SignUp";

export default function Mobile() {
  const [email, setEmail] = useState({ emailAddress: "", password: "" });
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCreateAccount = () => {
    setShowSignUp(true);
  };
  const handleBackClick = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <div>
        <img className={styles.fblogo} src={fblogo} alt="" />
      </div>
      <div>
        <form className={styles.right}>
          <input
            className={styles.email}
            onChange={(e) =>
              setEmail({ ...email, emailAddress: e.target.value })
            }
            type="text"
            value={email.emailAddress}
            placeholder="Mobile number or email address"
          />
          <input
            className={styles.password}
            onChange={(e) => setEmail({ ...email, password: e.target.value })}
            type="password"
            value={email.password}
            placeholder="Password"
          />
          <button type="submit" className={styles.logIn}>
            Log In
          </button>
          <div className={styles.forgotten}>
            <a href="https://web.facebook.com/?_rdc=1&_rdr">
              Forgotten Password?
            </a>
          </div>

          <button
            type="button"
            className={styles.createAcct}
            onClick={handleCreateAccount}
          >
            Create New Account
          </button>
        </form>
      </div>
      {showSignUp && <SignUp onBack={handleBackClick} />}
    </div>
  );
}
