class Publication
{
    constructor(title, author, pubDate)
    {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print()
    {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            Released: ${this.pubDate}
        `);
    }
}

class Book extends Publication
{
    constructor(bookDetails)
    {
        super(bookDetails.title, bookDetails.author, bookDetails.released);
        
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print()
    {
        super.print();
        console.log(`
            Published by : ${this.publisher} 
            ISBN: ${this.ISBN}
        `);
        
    }
}

class BlogPost extends Publication 
{
    constructor(title,author,pubDate,URL) 
    {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() 
    {
        super.print();
        console.log(this.URL);
        //process.stdout.write(this.URL);
    }
}

var YDKJSY = new Book({
    title : "You dont know JavaScript yet",
    author: "Kyle Simpson",
    released : "27.07.2017",
    publisher: "O' Reilly",
    ISBN : "27036935791Y"
});

var scopesAndClosures = new BlogPost(
    "Scopes and Closures",
    "Kyle Simpson",
    "27.08.2017",
    "https://www.ydkjsy.com"
);

YDKJSY.print();
scopesAndClosures.print();

