import styled from "styled-components";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import Product from "../component/Product";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
import { mobile } from "./responsive";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setfilters } from "../redux/SortSlice";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {

    let [filter,setfilter]=useState({})
    let [sort,setsort]=useState("deafault")
    let location = useLocation();
    let path=location.pathname.split("/")[2]
    const dispatch=useDispatch()

    const handlefiters=(e)=>{
        const value = e.target.value
         setfilter({
            ...filter,
            [e.target.name]:value
         })
         dispatch(setfilters({
          ...filter,
          [e.target.name]:value
       }))

    }
   
    
  return (
    <Container>
      <Navbar />
      <Topbar />
      <Title>{path.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handlefiters} name="color" >
            <Option  >
              Color
            </Option>
            <Option name="white" value="white">White</Option>
            <Option name="black" value="black">Black</Option>
            <Option name="red" value="red">Red</Option>
            <Option name="blue" value="blue">Blue</Option>
            <Option name="yellow" value="yellow">Yellow</Option>
            <Option name="grenn" value="green">Green</Option>
          </Select>
          <Select name="size" onChange={handlefiters} >
            <Option   >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>{setsort(e.target.value)}}>
            <Option value="deafault" selected>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="des">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product cat={path} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;