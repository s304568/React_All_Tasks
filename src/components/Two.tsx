import image1 from "../assets/fish.png";
import image2 from "../assets/ice.png";
import image3 from "../assets/cool.png";

const images = [image1, image2, image3];
const items = ["one", "two", "three"];

function Two() {
  return (
    <>
      {images.map((image) => (
        <img>{image}</img>
      ))}
      {items.map((item) => (
        <button>{item}</button>
      ))}
    </>
  );
}

export default Two;
