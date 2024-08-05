import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories>
        <CategoryItem>
          <CategoryIcon>🧀</CategoryIcon>
          <CategoryText>Dairy Products</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon>🥕</CategoryIcon>
          <CategoryText>Vegetables & Fruits</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon>🌶️</CategoryIcon>
          <CategoryText>Spices & Seasonings</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon>🍯</CategoryIcon>
          <CategoryText>Honey</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon>🌾</CategoryIcon>
          <CategoryText>Flour</CategoryText>
        </CategoryItem>
      </Categories>
    </div>
  );
};

export default Home;

const Categories = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const CategoryText = styled.div`
  font-size: 18px;
`;
