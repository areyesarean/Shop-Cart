import { useQuery } from "react-query";

async function fetchProd() {
  const res = await fetch("http://localhost:4000/prod");
  return await res.json();
}

const useProducts = () => {
  const query = useQuery("PORDUCTS", fetchProd);
  return query;
};

export default useProducts;
