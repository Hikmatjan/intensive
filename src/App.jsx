import React from "react";
import { Wrapper } from "./style";
import {
  SearchOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button } from "antd";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper.Left>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            className="img"
          />
        </Wrapper.Left>
        <Wrapper.Middle>
          <Wrapper.Middle.Item>Home</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Shop</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Plant Care</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Blogs</Wrapper.Middle.Item>
        </Wrapper.Middle>
        <Wrapper.Right>
          <SearchOutlined className="icon" />
          <Badge dot>
            <ShoppingCartOutlined className="icon" />
          </Badge>
          <Button type="primary" className="back">
            <LoginOutlined /> Login
          </Button>
        </Wrapper.Right>
      </Wrapper>
    </div>
  );
};

export default App;
