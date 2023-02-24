// import axios from "axios";
// import { useEffect, useState } from "react";
// const [productDetail, setProductDetail] = useState([]);
// const [fetching, setFetching] = useState(false);

// export const fetchData = () => {
//   setFetching(true);
//   axios.get("http://localhost:3050/api/product")
//     .then((res) => {
//       setProductDetail(res.data);
//       setFetching(false);
//     });
// };

// useEffect(() => {
//   fetchData();
// }, []);

// export const removeProduct = (id) => {
//   const newProductDetail = productDetail.filter((product) => product.id != id);
//   setProductDetail(newProductDetail);
// }

