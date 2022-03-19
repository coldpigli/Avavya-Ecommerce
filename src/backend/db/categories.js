import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    icon: "set_meal",
    name: "Fish" 
},
{
    _id: uuid(),
    icon: "egg",
    name: "Poultry" 
},
{
    _id: uuid(),
    icon: "medical_services",
    name: "Medicine" 
},
{
    _id: uuid(),
    icon: "child_friendly",
    name: "Baby" 
},
{
    _id: uuid(),
    icon: "liquor",
    name: "Alcohol" 
},
{
    _id: uuid(),
    icon: "emoji_food_beverage",
    name: "Coffee" 
},
];
