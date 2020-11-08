function Publication(title, author, released)
{
    var publicAPI = {
        print(){
            console.log(`
            Title: ${title}
            By: ${author}
            ${released}
            `);
            
        }
    };
    return publicAPI;
}

function Book(bookDetails)
{
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print(){
            pub.print();
            console.log(`
            Published By: ${bookDetails.publisher}
            ISBN: ${bookDetails.ISBN}
            `);
            
        }
    };
    return publicAPI;
}

function BlogPost(title,author,pubDate,URL) {
    var pub = Publication(title,author,pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
}

var YDKJSY = 