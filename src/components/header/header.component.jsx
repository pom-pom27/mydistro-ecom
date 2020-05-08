import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <nav>
      <Link to="/" className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/shop">SHOP</Link>
        </li>
        <li className={styles.option}>
          <Link to="/contact">CONTACT</Link>
        </li>
        {currentUser ? (
          <div className={styles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to="/signin">
            SIGN IN
          </Link>
        )}
      </ul>
    </nav>
  );
};

const mapStateProps = (rootReducer) => ({
  currentUser: rootReducer.user.currentUser,
});

export default connect(mapStateProps)(Header);
