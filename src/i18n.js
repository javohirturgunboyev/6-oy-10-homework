import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            categories: "Categories",
            sales: "Sales",
            faq: "FAQ",
            about: "About",
            contact: "Contact",
            signIn: "Sign In",
            signUp: "Sign Up",
          },
          header: {
            title: "Let your groceries come to you",
            subtitle:
              "Get fresh groceries online without stepping out to make delicious food with the freshest ingredients",
            searchPlaceholder: "Search here",
            searchButton: "Search",
            features: {
              freshVegetables: "Fresh Vegetables",
              guarantee: "100% Guarantee",
              cashOnDelivery: "Cash on Delivery",
              fastDelivery: "Fast Delivery",
            },
          },
          categories: {
            dairyProducts: "Dairy Products",
            vegetablesFruits: "Vegetables & Fruits",
            spicesSeasonings: "Spices & Seasonings",
            honey: "Honey",
            flour: "Flour",
          },
        },
      },
      uz: {
        translation: {
          nav: {
            home: "Bosh sahifa",
            categories: "Kategoriyalar",
            sales: "Sotuvlar",
            faq: "FAQ",
            about: "Biz haqimizda",
            contact: "Aloqa",
            signIn: "Kirish",
            signUp: "Ro'yxatdan o'tish",
          },
          header: {
            title: "Mahsulotlaringizni uyga keltiring",
            subtitle:
              "Uyda o'tirib, yangi mahsulotlar bilan mazali taomlar tayyorlang",
            searchPlaceholder: "Bu yerda qidiring",
            searchButton: "Qidirish",
            features: {
              freshVegetables: "Yangi sabzavotlar",
              guarantee: "100% Kafolat",
              cashOnDelivery: "Yetkazib berishda to'lash",
              fastDelivery: "Tez yetkazib berish",
            },
          },
          categories: {
            dairyProducts: "Sut mahsulotlari",
            vegetablesFruits: "Sabzavotlar va mevalar",
            spicesSeasonings: "Ziravorlar va qo'shimchalar",
            honey: "Asal",
            flour: "Un",
          },
        },
      },
      ru: {
        translation: {
          nav: {
            home: "Главная",
            categories: "Категории",
            sales: "Скидки",
            faq: "FAQ",
            about: "О нас",
            contact: "Контакт",
            signIn: "Войти",
            signUp: "Регистрация",
          },
          header: {
            title: "Позвольте вашим продуктам прийти к вам",
            subtitle:
              "Получите свежие продукты онлайн, не выходя из дома, чтобы приготовить вкусную еду из самых свежих ингредиентов",
            searchPlaceholder: "Искать здесь",
            searchButton: "Поиск",
            features: {
              freshVegetables: "Свежие овощи",
              guarantee: "100% Гарантия",
              cashOnDelivery: "Оплата при доставке",
              fastDelivery: "Быстрая доставка",
            },
          },
          categories: {
            dairyProducts: "Молочные продукты",
            vegetablesFruits: "Овощи и фрукты",
            spicesSeasonings: "Специи и приправы",
            honey: "Мед",
            flour: "Мука",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
