import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Nav>
      <Logo>FinestMart</Logo>
      <NavLinks>
        <li>
          <a href="/">{t("nav.home")}</a>
        </li>
        <li>
          <a href="/">{t("nav.categories")}</a>
        </li>
        <li>
          <a href="/">{t("nav.sales")}</a>
        </li>
        <li>
          <a href="/">{t("nav.faq")}</a>
        </li>
        <li>
          <a href="/">{t("nav.about")}</a>
        </li>
        <li>
          <a href="/">{t("nav.contact")}</a>
        </li>
      </NavLinks>
      <AuthButtons>
        <Button primary>{t("nav.signIn")}</Button>
        <Button>{t("nav.signUp")}</Button>
      </AuthButtons>
      <LangButtons>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </LangButtons>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  li {
    margin: 0 10px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
      font-size: 16px;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: none;
  padding: 8px 15px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

const LangButtons = styled.div`
  button {
    margin-left: 10px;
    background: none;
    border: none;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    font-size: 16px;
  }
`;
