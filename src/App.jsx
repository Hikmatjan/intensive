import React from "react";
import { Wrapper } from "./style";
import {
  SearchOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Carousel } from "antd";
import CarouselItem from "./CarouselItem";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper.NavbarWrapper>
          <Wrapper.NavbarWrapper.Left>
            <img
              className="img"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
              alt="logo"
            />
          </Wrapper.NavbarWrapper.Left>
          <Wrapper.NavbarWrapper.Middle>
            <h3>Home</h3>
            <h3>Plant</h3>
            <h3>Blogs</h3>
          </Wrapper.NavbarWrapper.Middle>
          <Wrapper.NavbarWrapper.Right>
            <SearchOutlined className="icon" />
            <LoginOutlined className="icon" />
            <ShoppingCartOutlined className="icon" />
            <Button className="back" type="primary">
              Login
            </Button>
          </Wrapper.NavbarWrapper.Right>
        </Wrapper.NavbarWrapper>
        <Wrapper.CarouselWrapper>
          <Carousel autoplay>
            <CarouselItem title="LET'S LIVE IN A BETTER" />
            <CarouselItem title="LET'S MAKE A BETTER" />
            <CarouselItem title="LET'S OBSERVE A BETTER " />
          </Carousel>
        </Wrapper.CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default App;
