import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getItemFromLs } from "./localStorage";
import AddMemberModal from "./Modal/AddMemberModal";
import ModalPortal from "../elements/Portal/ModalPortal";
import axios from "axios";

import thunder from "../public/img/thunder.png";
import addMemberIcon from "../public/img/addMemberIcon.png";
import submitVector from "../public/img/submitVector.png";
import human01 from "../public/img/human01.png";
import human02 from "../public/img/human02.png";
import goldCrown from "../public/img/goldCrown.png";
import commentIcon from "../public/img/commentIcon.png";
import Ellipse103 from "../public/img/Ellipse103.png";
import Ellipse106 from "../public/img/Ellipse106.png";

const PrivateMain = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [newMember, setNewMember] = useState({
    workSpaceName: "",
    userEmail: "",
  });
  const [modalOn, setModalOn] = useState(false);

  const getWorkSpaceName = getItemFromLs("workspace");

  const handleAddMember = () => {
    setModalOn(!modalOn);
  };

  const handleChange = (e) => {
    setNewMember({ ...newMember, userEmail: e.target.value });
  };

  const closeModal = (e) => {
    setModalOn(!modalOn);
  };
  const getNewMember = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: "http://13.209.3.168:3001/api/workSpace/memberAdd/workSpaceName",
      data: newMember,
      headers: {
        Authorization: `Bearer ${getItemFromLs("myToken")}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setNewMember({
      ...newMember,
      workSpaceName: `${getItemFromLs("workspace")}`,
    });
  }, []);

  useEffect(() => {
    setWorkspaceName(getWorkSpaceName);
  }, [getWorkSpaceName]);

  console.log(getWorkSpaceName);

  return (
    <PrivateMainStyle>
      <MainHeader className="MainHeader">
        <div className="main-header-workspace-name">
          {workspaceName ? (
            workspaceName.split("+")[1]
          ) : (
            <h1>워크스페이스를 선택해주세요!</h1>
          )}
        </div>
        <button className="main-header-addBtn" onClick={handleAddMember}>
          <img src={addMemberIcon} alt="addMemberIcon" className="addBtn-img" />
          <span className="addBtn-name">멤버 추가하기</span>
        </button>
      </MainHeader>
      <PrivateMainContainer>
        <PrivateMainLeft>
          <LeftTop>
            <div className="notice-wrap">
              <div className="wrap-header">
                <img src={thunder} alt="thunder" className="thunder-icon" />
                <h3 className="main-wrap-title">Notice</h3>
              </div>
              <NoticeScreen>
                <div className="input-wrap">
                  <input type="text" className="notice-input" />
                  <img
                    src={submitVector}
                    alt="submitVector"
                    className="submitVector"
                  />
                </div>
              </NoticeScreen>
            </div>
            <div className="time_tasking-wrap">
              <div className="wrap-header">
                <img src={thunder} alt="thunder" className="thunder-icon" />
                <h3 className="main-wrap-title">Time Tasking</h3>
              </div>
              <NoticeScreenTime>
                <div className="time-ranking-card">
                  <div className="time-ranking-profile">
                    <img src={goldCrown} alt="goldCrown" className="crown" />
                    <img src={human01} alt="human01" className="human01" />
                    <div className="time-ranking_name">김하연</div>
                  </div>
                  <div className="time-ranking-text">
                    일주일 동안 24:53 : 45 시간만큼 접속했어요!
                  </div>
                </div>
              </NoticeScreenTime>
              <NoticeScreenTime>
                <div className="time-ranking-card">
                  <div className="time-ranking-profile">
                    <img src={goldCrown} alt="goldCrown" className="crown" />
                    <img src={human01} alt="human01" className="human01" />
                    <div className="time-ranking_name">김하연</div>
                  </div>
                  <div className="time-ranking-text">
                    일주일 동안 24:53 : 45 시간만큼 접속했어요!
                  </div>
                </div>
              </NoticeScreenTime>
              <NoticeScreenTime>
                <div className="time-ranking-card">
                  <div className="time-ranking-profile">
                    <img src={goldCrown} alt="goldCrown" className="crown" />
                    <img src={human01} alt="human01" className="human01" />
                    <div className="time-ranking_name">김하연</div>
                  </div>
                  <div className="time-ranking-text">
                    일주일 동안 24:53 : 45 시간만큼 접속했어요!
                  </div>
                </div>
              </NoticeScreenTime>
            </div>
          </LeftTop>
        </PrivateMainLeft>
        <PrivateMainRight>
          <ContactWrap>
            <div className="contact-title">Contact</div>
            <div className="contact-screen">
              <div className="contact-card">
                <div className="contact-card_profile">
                  <div className="profile">
                    <img src={human02} alt="human02" className="human02" />
                    <img src={Ellipse106} alt="Ellipse106" className="online" />
                  </div>
                  <div className="contact-card_name">이형섭</div>
                </div>

                <div className="contact-card-toDirect">
                  다이렉트 채팅하기
                  <img
                    src={commentIcon}
                    alt="commentIcon"
                    className="commentIcon"
                  />
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card_profile">
                  <div className="profile">
                    <img src={human02} alt="human02" className="human02" />
                    <img src={Ellipse106} alt="Ellipse106" className="online" />
                  </div>
                  <div className="contact-card_name">이형섭</div>
                </div>

                <div className="contact-card-toDirect">
                  다이렉트 채팅하기
                  <img
                    src={commentIcon}
                    alt="commentIcon"
                    className="commentIcon"
                  />
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card_profile">
                  <div className="profile">
                    <img src={human02} alt="human02" className="human02" />
                    <img src={Ellipse106} alt="Ellipse106" className="online" />
                  </div>
                  <div className="contact-card_name">이형섭</div>
                </div>
                <div className="contact-card-toDirect">
                  다이렉트 채팅하기
                  <img
                    src={commentIcon}
                    alt="commentIcon"
                    className="commentIcon"
                  />
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card_profile">
                  <div className="profile">
                    <img src={human02} alt="human02" className="human02" />
                    <img src={Ellipse106} alt="Ellipse106" className="online" />
                  </div>
                  <div className="contact-card_name">이형섭</div>
                </div>
                <div className="contact-card-toDirect">
                  다이렉트 채팅하기
                  <img
                    src={commentIcon}
                    alt="commentIcon"
                    className="commentIcon"
                  />
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card_profile">
                  <div className="profile">
                    <img src={human02} alt="human02" className="human02" />
                    <img src={Ellipse106} alt="Ellipse106" className="online" />
                  </div>
                  <div className="contact-card_name">이형섭</div>
                </div>
                <div className="contact-card-toDirect">
                  다이렉트 채팅하기
                  <img
                    src={commentIcon}
                    alt="commentIcon"
                    className="commentIcon"
                  />
                </div>
              </div>
            </div>
          </ContactWrap>
        </PrivateMainRight>
      </PrivateMainContainer>
      <ModalPortal>
        {modalOn && (
          <AddMemberModal
            handleChange={handleChange}
            onClose={closeModal}
            getNewMember={getNewMember}
          />
        )}
      </ModalPortal>
    </PrivateMainStyle>
  );
};

const PrivateMainStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const PrivateMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: Flex;
  gap: 20px;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  .main-header-workspace-name {
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #353841;
  }

  .main-header-addBtn {
    all: unset;
    background: #7d8bdb;
    min-width: 252px;
    height: 57px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .addBtn-img {
    width: 25px;
    height: 20px;
    margin-right: 15px;
  }

  .addBtn-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
  }
`;

const NoticeScreenTime = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #ecedf1;
  border-radius: 5px;
  padding: 9px 24px;
  margin-bottom: 10px;
  height: 137px;
  .time-ranking-card {
    display: flex;
    align-items: center;
  }

  .time-ranking-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
  }

  .crown {
    width: 30px;
    margin-bottom: 4px;
    height: 25px;
  }

  .human01 {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .time-ranking_name {
    margin-top: 6px;
  }
`;

const PrivateMainLeft = styled.div`
  max-width: 820px;
  height: 100%;
  background-color: steelblue;
`;

const LeftTop = styled.div`
  display: Flex;
  gap: 20px;

  .notice-wrap {
    width: 300px;
    height: 476px;
    background-color: red;
  }

  .wrap-header {
    display: Flex;
    align-items: center;
    margin-bottom: 15px;
    height: 6%;
  }

  .thunder-icon {
    width: 20px;
  }

  .main-wrap-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #353841;
    margin-left: 9px;
  }

  .time_tasking-wrap {
    width: 500px;
    height: 476px;
  }
`;

const NoticeScreen = styled.div`
  border: 1px solid #ecedf1;
  border-radius: 5px;
  height: 91%;
  padding: 45px 10px;
  display: Flex;
  flex-direction: column;

  .notice-input {
    background: rgba(247, 247, 247, 0.5);
    border: 1px solid #ecedf1;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding-left: 22px;
  }

  .input-wrap {
    width: 280px;
    height: 52px;
    position: absolute;
  }

  .submitVector {
    position: absolute;
    right: 11px;
    top: 11px;
    cursor: pointer;
  }
`;

const PrivateMainRight = styled.div`
  width: 480px;
  background-color: teal;
`;

const ContactWrap = styled.div`
  padding: 20px 30px;
  height: 314px;
  background: #ffffff;
  border: 1px solid #ecedf1;
  border-radius: 5px;

  .contact-title {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #7d8bdb;
    margin-bottom: 20px;
  }

  .contact-screen {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 221px;
    gap: 13px;
    overflow: scroll;
  }

  .contact-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .human02 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .contact-card-toDirect {
    display: Flex;
    align-items: center;
    gap: 15px;
    margin-right: 27px;
    cursor: pointer;
  }

  .contact-card_profile {
    display: flex;
    align-items: center;
  }

  .profile {
    position: relative;
  }

  .online {
    position: absolute;
    bottom: 5px;
    right: -10px;
  }

  .contact-card_name {
    margin-left: 30px;
  }
`;

// const PrivateMainStyle = styled.div`
// `;
// const PrivateMainStyle = styled.div`
// `;
// const PrivateMainStyle = styled.div`
// `;

export default PrivateMain;
