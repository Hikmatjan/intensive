import styled from "styled-components";
export const CarouselWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
`;
CarouselWrapper.Right = styled.div`
  width: 60%;
  height: 100%;
  .text {
    margin-top: 68px;
    margin-left: 40px;
  }
  h3 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
    margin-bottom: 10px;
  }
  h1 {
    font-family: Inter;
    font-size: 70px;
    font-weight: 900;
    line-height: 70px;
    text-align: left;
  }
  p {
    margin-top: 5px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
  .button {
    margin-top: 55px;
  }
  span {
    color: #46a358;
  }
`;
CarouselWrapper.Left = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .flowers_1 {
    position: absolute;
    left: 60px;
    bottom: 5px;
  }
  .flowers_small {
    width: 135px;
    height: 135px;
    bottom: 0;
    z-index: 10;
    position: absolute;
    left: 100px;
  }
`;
