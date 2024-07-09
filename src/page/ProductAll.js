import React, { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productList,setProductList]=useState([]);
  let [query, setQuery] = useSearchParams();

  const getProducts=async()=>{
    const searchQuery=query.get("q") || "";
    console.log(searchQuery)
    let url=`http://localhost:3004/products?q=${searchQuery}`;
    // 🌟 비동기적으로 움직이기 때문에 await(기다려)를 쓰고, async로 묶어 오류를 없앤다.
    let response=await fetch(url);
    // 🌟 data가 객체의 형식으로 되어있어 json의 형식으로 바꾸는 명령어이다.
    let data=await response.json();
    // console.log(data)
    // setProductList(productList의 값을 넣는다.)
    setProductList(data)
  }
  // [배열]이 비어있으면, component가 실행될때 한번만 실행된다.
  // [변수]가 있으면 component가 한번 실행되고 변수 값이 바뀔때마다 함수가 실행된다.
  useEffect(()=>{
    getProducts();
  },[query]);
  
  return <div>
    <div className="cards">
      {productList.map((menu)=>{
        return (
          <ProductCard key={menu.id} item={menu}/>
        );
      })}
    </div>
    </div>;
}

export default ProductAll
