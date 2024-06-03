function getQuote()
{
    var collection =
    [
        {
            quote:"“Be yourself; everyone else is already taken.”",
            author:"― Oscar Wilde"
        },
        {
            quote:"“So many books, so little time.”",
            author:"― Frank Zappa"
        },
        {
            quote:"“A room without books is like a body without a soul.”",
            author:"― Marcus Tullius Cicero"
        },
        {
            quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
            author:"― Robert Frost"
        },
        {
            quote:"“A friend is someone who knows all about you and still loves you.”",
            author:"― Elbert Hubbard"
        }
    ]

    var index = Math.floor(Math.random() * collection.length);

    document.getElementById("q").innerHTML = collection[index].quote;
    document.getElementById("auth").innerHTML = collection[index].author;

}