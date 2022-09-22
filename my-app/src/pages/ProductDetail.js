import { useParams } from "react-router-dom";

function ProductDetail() {
    const params = useParams();

  return (
    <div>
      <h1>product detail page</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default ProductDetail;
