import { TiLocationArrow } from "react-icons/ti";
import Button from "../Button";


const ProductsButton = () => {
  return (
    <Button
      title="Products"
      containerClass="bg-blue-50 flex items-center justify-center gap-1"
      rightIcon={<TiLocationArrow />}
    />
  );
};

export default ProductsButton;