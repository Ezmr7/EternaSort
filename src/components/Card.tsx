import React from "react";
interface Props {
  image: string
}
const Card = (props: Props) => {
  const { image } = props;
  
  return (
    <div className="Card">
      <img src={image}></img>
    </div>
  )
}

export default Card