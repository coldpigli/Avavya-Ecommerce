import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    icon: "fastfood",
    name: "Essentials", 
    active: false
},
{
    _id: uuid(),
    icon: "egg",
    name: "Organic", 
    active: false
},
{
    _id: uuid(),
    icon: "medical_services",
    name: "Hygiene", 
    active: false
},
{
    _id: uuid(),
    icon: "child_friendly",
    name: "Baby", 
    active: false
},
{
    _id: uuid(),
    icon: "liquor",
    name: "Beverages", 
    active: false
},
{
    _id: uuid(),
    icon: "tapas",
    name: "Snacks", 
    active: false
},
];
