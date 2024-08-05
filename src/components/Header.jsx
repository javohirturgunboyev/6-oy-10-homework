import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Person from "../assets/img/person.png";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>{t("header.title")}</h1>
        <p>{t("header.subtitle")}</p>
        <SearchBar>
          <input type="text" placeholder={t("header.searchPlaceholder")} />
          <button>{t("header.searchButton")}</button>
        </SearchBar>
        <Features>
          <FeatureItem>{t("header.features.freshVegetables")}</FeatureItem>
          <FeatureItem>{t("header.features.guarantee")}</FeatureItem>
          <FeatureItem>{t("header.features.cashOnDelivery")}</FeatureItem>
          <FeatureItem>{t("header.features.fastDelivery")}</FeatureItem>
        </Features>
      </HeaderContent>
      <HeaderImage>
        <img src={Person} alt="Groceries" />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
`;

const HeaderContent = styled.div`
  max-width: 600px;
`;

const SearchBar = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 0 4px 4px 0;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const FeatureItem = styled.div`
  background-color: ${(props) => props.theme.featureBackground};
  color: ${(props) => props.theme.featureColor};
  padding: 10px;
  border-radius: 4px;
`;

const HeaderImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;
