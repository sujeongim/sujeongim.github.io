const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        author:"Dalai Lama",
    },
    {
        quote: "When life gives you lemons, make lemonade.",
        author:"Elbert Hubbard",
    },
    {
        quote: "Do one thing everyday tha scares you.",
        author:"Eleanor Roosevelt",
    },
    {
        quote: "Being happy never goes out of style.",
        author:"Lilly Pulitzer",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author:"Helen Keller",
    },
    {
        quote: "Love what you have. ",
        author:"Anonymous",
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author:"Washington Irving",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author:"Oprah Gail Winfrey",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author:"Kamal Ravikant",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        auothor:"Nelson Mandela",
    },

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;