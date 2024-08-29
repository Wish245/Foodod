import Muffins from './Muffins.jpg'
import paellaPhaidon from './paella-phaidon.jpg'
import pizza from './pizza.jpg'
import curd from './curd.jpg'
import burger from './burger.jpg'
import header from './header.jpg'
import search from './search.png'
import shoppingBasket from './shopping-basket.png'
import logo from './logo.png'
import chocolateCake from './chocolate cake.jpg'
import chickenKurma from './chicken kurma.jpg'
import rolls from './rolls.jpg'
import fruitSalad from './Fruit-Salad.jpg'
import CucumberSalad from './cucumber salad.jpg'
import Corndogs from './Corndogs.jpg'
import kottu from './kottu.jpg'
import friedRice from './fried rice.jpg'
import RatingStar from './rating_star.png'
import Add from './add.png'
import Remove from './cancel.png'
import AddGreen from './add_green.png'
import All from './All.png'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'
import GooglePlay from './Googlrplay.png'
import AppStore from './AppStore.png'

export const assets = {
    Muffins,
    paellaPhaidon,
    pizza,
    curd,
    burger,
    header,
    search,
    logo,
    shoppingBasket,
    chocolateCake,
    chickenKurma,
    rolls,
    fruitSalad,
    CucumberSalad,
    Corndogs,
    kottu,
    friedRice,
    RatingStar,
    Add,
    Remove,
    AddGreen,
    All,
    Facebook,
    Instagram,
    Twitter,
    GooglePlay,
    AppStore
}

export const menu_list =[
    {
        menu_name: "All",
        menu_img: All
    },
    {
        menu_name: "Muffins",
        menu_img : Muffins
    },
    {
        menu_name:"spanish",
        menu_img: paellaPhaidon
    },
    {
        menu_name:"hotMeal",
        menu_img: burger
    },
    {
        menu_name:"desert",
        menu_img: chocolateCake
    },
    {
        menu_name:"bigPortion",
        menu_img: kottu
    } ,
    {
        menu_name:"pizza",
        menu_img: pizza
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Strawberry Muffins",
        image: Muffins,
        price: 10,
        description: "Freshly baked muffins with a burst of strawberry flavor",
        category: "Muffins"
    },
    {
        _id: "2",
        name: "Paella",
        image: paellaPhaidon,
        price: 2000,
        description: "A traditional Spanish dish made with a variety of seafood and saffron rice",
        category: "spanish"
    },
    {
        _id: "3",
        name: "Pepperoni Pizza",
        image: pizza,
        price: 1000,
        description: "A classic pizza topped with pepperoni and mozzarella cheese",
        category: "pizza"
    },
    {
        _id: "4",
        name: "Curd Rice",
        image: curd,
        price: 500,
        description: "A South Indian dish made with rice and yogurt, tempered with mustard seeds and curry leaves",
        category: "hotMeal"
    },
    {
        _id: "5",
        name: "Burger",
        image: burger,
        price: 300,
        description: "A juicy beef patty topped with cheese, lettuce, and tomato, served in a toasted bun",
        category: "hotMeal"
    },
    {
        _id: "6",
        name: "Chocolate Cake",
        image: chocolateCake,
        price: 500,
        description: "A decadent chocolate cake with layers of rich chocolate ganache",
        category: "desert"
    },
    {
        _id: "7",
        name: "Chicken Kurma",
        image: chickenKurma,
        price: 800,
        description: "A creamy chicken curry made with a blend of aromatic spices and coconut milk",
        category: "hotMeal"
    },
    {
        _id: "8",
        name: "Rolls",
        image: rolls,
        price: 150,
        description: "A popular street food made with a flaky pastry filled with spiced vegetables or meat",
        category: "hotMeal"
    },
    {
        _id: "9",
        name: "Fruit Salad",
        image: fruitSalad,
        price: 200,
        description: "A refreshing salad made with a mix of seasonal fruits, served with a drizzle of honey",
        category: "salad"
    },
    {
        _id: "10",
        name: "Cucumber Salad",
        image: CucumberSalad,
        price: 100,
        description: "A light and refreshing salad made with cucumbers, tomatoes, and onions, tossed in a tangy dressing",
        category: "salad"
    },
    {
        _id: "11",
        name: "Corndogs",
        image: Corndogs,
        price: 250,
        description: "A classic fair food made with a hot dog on a stick, coated in a cornmeal batter and deep-fried to golden perfection",
        category: "hotMeal"
    },
    {
        _id: "12",
        name: "Kottu",
        image: kottu,
        price: 400,
        description: "A popular Sri Lankan street food made with chopped roti, vegetables, and meat, stir-fried with a blend of spices",
        category: "bigPortion"
    },
    {
        _id: "13",
        name: "Fried Rice",
        image: friedRice,
        price: 300,
        description: "A flavorful rice dish made with cooked rice, vegetables, and a variety of seasonings",
        category: "bigPortion"
    }
]