import React from "react";
import { HeaderArea } from "./HeaderArea";
import styled from "styled-components";
import "./nftstyle.css";

export const NftPage = () => {
  return (
    <div className="main-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <HeaderArea
            className="header-area-instance"
            divClassName="design-component-instance-node"
            iconlyBrokenChat="Chat.png"
          />
          <div className="group">
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  PLZ. 평생 망하지마
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-2">나만알고 싶은 로컬맛.zip</span>
              </p>
            </div>
            <div className="ellipse" />
          </div>
          <div className="div">
            <div className="overlap-group">
              <div className="text-wrapper-3">DAO 바로가기</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-4">입맛 테스트</div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-2">
              <img className="image" alt="Imag" src="/image/image7.png" />
              <img className="img" alt="Imag" src="/image/image7.png" />
              <img className="image-2" alt="Imag" src="/image/image7.png" />
            </div>
          </div>
          <div className="group-3">
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="text-wrapper-5">My NFT_CARDS</div>
                <div className="text-wrapper-5">My NFT_CARDS</div>
              </div>
              <div className="text-wrapper-6">1NFT</div>
              <img
                className="iconly-broken-ticket"
                alt="Iconly broken ticket"
                src="/image/Ticket.png"
              />
            </div>
          </div>
          <div className="frame">
            <img className="image-3" alt="Imag" src="/image/image6.png" />
            <div className="text-wrapper-7">by Taste Test</div>
            <div className="text-wrapper-8">#이게바로 #초딩입맛 #당폭발</div>
          </div>
        </div>
      </div>
    </div>
  );
};
