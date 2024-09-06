import styles from "./right.module.css";
import { useState } from "react";
import SignUp from "./SignUp";

export default function Right() {
  const [email, setEmail] = useState({ emailAddress: "", password: "" });
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCreateAccount = () => {
    setShowSignUp(true);
  };

  const handleBackClick = () => {
    setShowSignUp(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {!showSignUp ? (
          <div>
            <form className={styles.right}>
              <input
                className={styles.email}
                onChange={(e) =>
                  setEmail({ ...email, emailAddress: e.target.value })
                }
                type="text"
                value={email.emailAddress}
                placeholder="Email address or phone number"
              />
              <input
                className={styles.password}
                onChange={(e) =>
                  setEmail({ ...email, password: e.target.value })
                }
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
              <hr />
              <button
                type="button"
                className={styles.createAcct}
                onClick={handleCreateAccount}
              >
                Create New Account
              </button>
            </form>
            <div className={styles.page}>
              <p>
                <span>
                  <a
                    target="blank"
                    href="https://web.facebook.com/pages/create/?ref_type=registration_form"
                  >
                    Create a Page{" "}
                  </a>
                </span>
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <SignUp onBack={handleBackClick} />
          </div>
        )}
      </div>
    </div>
  );
}
