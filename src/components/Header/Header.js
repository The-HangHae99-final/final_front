import React, { useState } from "react";
import UserAvatar from "../../elements/UserAvatar";
import styles from "../../pages/Main/Main.module.css";
import { useDispatch } from "react-redux";
import ModalPortal from "../../elements/Portal/Portal";
import Modal from "../Modal";

const Header = ({ isLoggedIn, handleLogin, handleSignup }) => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <header className={styles.header}>
        <form className={styles.inputWrap}>
          <input
            type="text"
            placeholder="search"
            className={styles.searchInput}
          />
          <div className={styles.searchIcon}></div>
        </form>
        <div className={styles.menuItems}>
          <div className={styles.menuBtns}>
            <button className={styles.menuBtn}></button>
            <button className={styles.menuBtn}></button>
            <div>
              <button onClick={handleModal}>로그인</button>
              <button onClick={handleModal}>회원가입</button>
              <ModalPortal>
                {modalOn && <Modal text="login" onClose={handleModal} />}
              </ModalPortal>
              {!modalOn ? (
                <>
                  <button onClick={handleModal}>로그인</button>
                  <button onClick={handleModal}>회원가입</button>
                </>
              ) : (
                <button onClick={() => console.log("로그아웃")}>
                  로그아웃
                </button>
              )}
            </div>
          </div>
          <div className={styles.aboutUser}>
            <div className={styles.userAvatar}>
              <UserAvatar size="big" />
            </div>
            <div className={styles.userMetaInfo}>
              <span className={styles.greeting}>Hi!</span>
              <div className={styles.userName}>김규림님!</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;