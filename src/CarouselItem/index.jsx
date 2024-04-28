import { CarouselWrapper } from "./style";
import { Button } from "antd";
const CarouselItem = (props) => {
  const { title } = props;
  return (
    <CarouselWrapper>
      <CarouselWrapper.Right>
        <div className="text">
          {" "}
          <h3>WELCOME TO GREENSHOP</h3>
          <h1>
            {title} <span>PLANET</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Button className="button" type="primary">
            SHOP NOW
          </Button>
        </div>
      </CarouselWrapper.Right>
      <CarouselWrapper.Left>
        <img
          className="flowers_1"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="img"
        />
        <img
          className="flowers_small"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="img"
        />
      </CarouselWrapper.Left>
    </CarouselWrapper>
  );
};

export default CarouselItem;
