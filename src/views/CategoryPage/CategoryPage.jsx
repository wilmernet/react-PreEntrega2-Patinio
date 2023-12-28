import {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CardProducto from '../../components/CardProduct/CardProduct';

const CategoryPage = () => {
 
  let { categoryId } = useParams();
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setChars(res.data)
    );
  }, []);

  console.log(chars);
  

  let filterProducts= chars.filter((char)=>{
    return char.category==categoryId;
  });

  console.log(filterProducts);
  return (
    <div className="Cards-List">
      {filterProducts.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Link to={`/detail/${char.id}`} style={{ textDecoration: "none" }}>
              <CardProducto char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryPage;