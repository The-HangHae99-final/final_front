import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getItemFromLs,
  removeItemFromLs,
  setItemToLs,
} from "../../utils/localStorage";

// module
import UserAvatar from "../../elements/UserAvatar";
import vector from "../../public/img/Vector1.png";
import sunIcon from "../../public/img/sun.png";
import bellIcon from "../../public/img/bell.png";
import ModalPortal from "../../elements/Portal/ModalPortal";
import WorkspaceModal from "../Modal/WorkspaceModal";
import { getWorkSpaceList, userLogout } from "../../redux/userReducer";

const Header = ({
  workSpaceList,
  addNewWorkSpace,
  workspaceName,
  setWorkspaceName,
  handleWorkSpaceName,
  modalOn,
  setModalOn,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const username = getItemFromLs("userName");
  const userEmail = getItemFromLs("userEmail");

  const dispatch = useDispatch();

  const handleModal = (e) => {
    setModalOn(!modalOn);
    setOpenDropdown(false);
  };

  const navigate = useNavigate();

  const logout = () => {
    removeItemFromLs("myToken");
    removeItemFromLs("userName");
    removeItemFromLs("userEmail");
    removeItemFromLs("workspace");
    dispatch(userLogout());
    alert("로그아웃 되었습니다");
    navigate("/login");
  };

  const getWorkspaceList = () => {
    setOpenDropdown(!openDropdown);
  };

  // const handleChange = (e) => {
  //   if (workspaceName.length >= 10) {
  //     setWorkSpaceNameMessage("10글자 이내로 지어주세요!");
  //   }
  //   setWorkSpaceNameMessage("");
  //   setWorkspaceName(e.target.value);
  // };
  return (
    <>
      <HeaderStyle>
        <div className="menuItems">
          <div className="menuBtns">
            <button className="menuBtn">
              <img src={sunIcon} alt="sun icon" />
            </button>
            <button className="menuBtn">
              <img src={bellIcon} alt="sun icon" />
            </button>
          </div>
          <AboutUser>
            <UserAvatar size="big" width={50} height={50} />
            <div className="userMetaInfo">
              <span className="greeting">Hi!</span>

              {/* show dropdown */}
              <UsernameWrap className="usernameWrap">
                <div className="username">{username}님</div>
                <div
                  className={`vector-img-wrap ${
                    openDropdown ? "toBottom" : "toTop"
                  }`}
                  onClick={getWorkspaceList}
                >
                  <img src={vector} alt="vector" className="vector-img"></img>
                </div>
              </UsernameWrap>
            </div>
          </AboutUser>
        </div>
        <nav
          ref={dropdownRef}
          className={`menu ${openDropdown ? "active" : "inactive"}`}
        >
          <ul>
            <li className="nav-item">
              <div className="li-header">
                <h3 className="li-header-title">내 계정</h3>
                <span className="edit_account">| 편집하기</span>
              </div>
              <div className="nav_email">{userEmail}</div>
            </li>
            <li className="nav-item">
              <div className="li-header">
                <h3 className="li-header-title">내 워크스페이스</h3>
                <span className="edit_account">| 편집하기</span>
              </div>
              <WorkspaceList>
                {workSpaceList &&
                  workSpaceList.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="workspace-item"
                        onClick={() => {
                          setItemToLs("workspace", item);
                          navigate(`/main/${idx}`);
                          setOpenDropdown(false);
                        }}
                      >
                        <div className="workspace_avatar">
                          {item.split("+")[1][0]}
                        </div>
                        <div className="workspace_name">
                          {item.split("+")[1]}
                        </div>
                      </li>
                    );
                  })}
              </WorkspaceList>
            </li>
            <li className="nav-item">
              <div className="li-header li-header_grey" onClick={handleModal}>
                워크스페이스 추가
              </div>
            </li>
            <li className="nav-item">
              <div className="li-header li-header_grey" onClick={logout}>
                로그아웃
              </div>
            </li>
          </ul>
        </nav>
        <ModalPortal>
          {modalOn && (
            <WorkspaceModal
              onClose={handleModal}
              addNewWorkSpace={addNewWorkSpace}
              workspaceName={workspaceName}
              setWorkspaceName={setWorkspaceName}
              handleWorkSpaceName={handleWorkSpaceName}
              modalOn={modalOn}
              setModalOn={setModalOn}
            />
          )}
        </ModalPortal>
      </HeaderStyle>
    </>
  );
};

const HeaderStyle = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  position: relative;

  .menuBtns {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .menuBtn {
    all: unset;
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .menuItems {
    display: flex;
    align-items: center;
    margin-left: 205px;
  }

  .menu {
    width: 271px;
    background-color: #ffffff;
    position: absolute;
    top: 80px;
    right: 0px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    border: 1px solid #ecedf1;
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    padding: 20px 25px 15px 25px;
    border: 1px solid #ecedf1;
  }

  .li-header {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .li-header_grey {
    color: #7a858e;
    cursor: pointer;
  }

  .li-header-title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2%;
  }

  .edit_account {
    line-height: 24px;
    letter-spacing: -2%;
    color: #cbcbd7;
    margin-left: 4px;
    cursor: pointer;
  }

  .nav_email {
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    color: #7a858e;
    font-weight: 400;
  }
`;

const WorkspaceList = styled.ul`
  display: Flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  .workspace-item {
    display: Flex;
    align-items: center;
  }

  .workspace_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    background: #f8f8f9;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: #7d8bdb;
  }

  .workspace_name {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #353841;
  }
`;

const AboutUser = styled.div`
  width: 160px;
  margin-left: 42px;
  display: flex;
  align-items: center;

  & > .userMetaInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 11px;
  }

  & > .userMetaInfo .greeting {
    font-size: 24px;
    font-weight: 600;
    color: #7d8bdb;
    line-height: 36px;
  }
`;

const UsernameWrap = styled.div`
  display: flex;
  justify-content: center;

  .vector-img-wrap {
    padding: 4px;
    display: Flex;
    align-items: center;
  }

  .username {
    margin-right: 6px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -2%;
    line-height: 21px;
  }

  .vector-img-wrap .vector-img {
    width: 15px;
    height: 10px;
    cursor: pointer;
    padding: 2px 2px;
  }

  .toTop {
    transform: rotate(180deg);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .toBottom {
    transform: rotate(0deg);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }
`;

export default Header;
