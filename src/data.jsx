import weatherimage from './assets/weather.jpeg';
import techblogimage from './assets/techblog.jpeg';
import expensesimage from './assets/expenses.jpeg';

export const projects = [
    {
        title: "Tech Blog",
        description: "This tech blog app allows users to sign up, create posts and comment on others posts.",
        image: techblogimage,
        link: "https://github.com/aleahwhite/12-techblog"
    },
    {
        title: "Expenses Tracker",
        description: "This expenses app keeps track of your expenses and shows charts based on spending habits.",
        image: expensesimage,
        link: "https://github.com/salidamaharjan/expenses-tracker"
    },
    {
        title: "Weather Watcher",
        description: "This is a 6 day weather app that keeps track of your search and tells you the temp and humidity.",
        image: weatherimage,
        link: "https://aleahwhite.github.io/06-weatherdashboard/"
    }
];


export const skills = [
    {
        category: "Front-end Development",
        list: ["HTML", "CSS",  "React", "Handlebars", "Bootstrap"]
    },
    {
        category: "Back-end Development",
        list: ["Node.js", "MySQL","JavaScript", "Typescript","Express", "MongoDB", "GraphQL"]
    },
    {
        category: "Other Skills",
        list: ["Git", "REST APIs", "Organization", "ORM", "VCS", "MVC"]
    }
];