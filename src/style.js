import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #46a358;

  .img {
    cursor: pointer;
  }
`;
Wrapper.Left = styled.div``;
Wrapper.Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
Wrapper.Middle.Item = styled.h3`
  margin: 0, 10px;
  cursor: pointer;
  font-family: Cora Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: none;
    width: 100%;
    height: 1px;
    background-color: #46a358;
    border-bottom: 2px solid #46a358;
    bottom: -29px;
  }
  &:hover::before {
    display: block;
  }
`;
Wrapper.Right = styled.div`
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

export { Wrapper };
