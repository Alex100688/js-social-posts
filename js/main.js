//Lista array contenente degli oggetti con informazioni(id del post, contenuto del posto, media, autore(nome dell'autore e foto dell'autore)).//
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "foto-1.jpg",
        "author": {
            "name": "Phil Mangione",
            "image": "foto-autore.jpg"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "foto-2.jpg",
        "author": {
            "name": "Sofia Perlari",
            "image": "foto-autore-1.jpg"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "foto-3.jpg",
        "author": {
            "name": "Chiara Passaro",
            "image": "foto-autore-2.jpg"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "foto-4.jpg",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "foto-5.jpg",
        "author": {
            "name": "Alessandro Sainato",
            "image": "foto-autore-4.jpg"
        },
        "likes": 95,
        "created": "2021-03-05"
    }    
];
//Salva in una constante(post) e seleziona salvando all'interno della classe("post").
const post=document.querySelector(".post")
//Ciclo for per ciclare il numero degli array.
for (let i = 0; i < posts.length; i++) {
    const listPost = posts[i];
    
}
