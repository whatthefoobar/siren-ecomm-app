import { Carousel } from "react-bootstrap";

type Banner = {
  image: string;
};

interface BannerProps {
  banner: Banner;
}

const data: Banner[] = [
  {
    image: "/images/car1.jpg", // Replace with the actual path to your image
  },
  {
    image: "/images/car2.jpg", // Replace with the actual path to your image
  },
];

const Banner = ({ banner }: BannerProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={banner.image}
          alt={"fashion banner"}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            objectFit: "cover",
            objectPosition: " top center",
          }}
        />
      </div>
    </div>
  );
};

const BannerCarousel = () => {
  return (
    <Carousel>
      {data.map((banner, index) => (
        <Carousel.Item key={index}>
          <Banner banner={banner} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
