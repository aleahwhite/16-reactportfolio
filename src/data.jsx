import weatherimage from './assets/weather.jpeg';
import pantryimage from './assets/pantry.jpeg';
import expensesimage from './assets/expenses.jpeg';

export const projects = [
    {
        title: "Expenses Tracker",
        description: "This full-stack application keeps track of your expenses and shows charts based on spending habits.",
        image: expensesimage,
        link: "https://github.com/salidamaharjan/expenses-tracker"
    },
    {
        title: "Weather Watcher",
        description: "This is a 6 day weather app that keeps track of your search and tells you the temp and humidity.",
        image: weatherimage,
        link: "https://aleahwhite.github.io/06-weatherdashboard/"
    },
    {
        title: "Pantry Meals & Music",
        description: "This website takes what you search for and pulls up several recipes for it, along with a fitting song to cook your food to.",
        image: pantryimage,
        link: "https://zallen16.github.io/recipe-generator/"
    },
];


export const skills = [
    {
        category: "Front-end Development",
        list: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Handlebars"]
    },
    {
        category: "Back-end Development",
        list: ["Node.js", "Express", "MongoDB", "MySQL", "GraphQL"]
    },
    {
        category: "Other Tools",
        list: ["Git", "REST APIs", "ORM", "MVC"]
    }
];