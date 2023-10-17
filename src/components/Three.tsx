import image1 from "../assets/cool.png";
import image2 from "../assets/ice.png";
import image3 from "../assets/fish.png";
import { useState } from "react";

function Three() {
  const images = [image1, image2, image3];

  const [name, setName] = useState("");

  const handleClick = (image: string) => setName(image + "was pressed");

  const imageTags = images.map((image) => (
    <img
      key={image}
      src={image}
      onClick={() => handleClick(image)}
      alt={image}
    />
  ));

  return (
    <>
      <div className="Flex_box">{imageTags}</div>
      <p>{name}</p>
    </>
  );
}

export default Three;
