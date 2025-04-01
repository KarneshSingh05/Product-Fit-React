export const Card = ({ products }) => {
  // console.log(products);
  const { title, images, description, price, rating, availabilityStatus } =
    products;
  return (
    <>
      <div className="cards">
        <p className="stock">{availabilityStatus}</p>

        <img className="product-img" src={images[0]}></img>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        <h3>Price-{price}$</h3>
        <h4>Rating-{rating}⭐</h4>
      </div>
    </>
  );
};

export const Instock = (Card) => {
  return (props) => {
    console.log(props);
    return (
      <>
        {/* <p className="stock">{props.products.availabilityStatus}</p> */}
        <Card {...props}></Card>
      </>
    );
  };
};
