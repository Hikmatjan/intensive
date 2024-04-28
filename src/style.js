import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
Wrapper.NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #46a358;
`;
Wrapper.NavbarWrapper.Left = styled.div`
  display: flex;
  align-items: center;
  .img {
    cursor: pointer;
  }
`;
Wrapper.NavbarWrapper.Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h3 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
`;
Wrapper.NavbarWrapper.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .back {
    background-color: #46a358;
  }
  .icon {
    font-size: 20px;
  }
`;
Wrapper.CarouselWrapper = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 20px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
`;

export { Wrapper };
