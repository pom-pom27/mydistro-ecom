import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from ".././cart-icon/cart-icon";
import CartDropdown from "../card-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <nav>
      <Link to="/" className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/shop">COLLECTION</Link>
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
        <li>
          <CartIcon className={styles.options} />
        </li>
      </ul>
      {hidden ? null : <CartDropdown />}
    </nav>
  );
};

const mapStateProps = ({ user, toggleDropdown }) => ({
  currentUser: user.currentUser,
  hidden: toggleDropdown.hidden,
});

export default connect(mapStateProps)(Header);
