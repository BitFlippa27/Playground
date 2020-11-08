import { create as createPub } from "./publication.js";

function printDetails(pub, URL)
{
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL)
{
    var pub = createPub(title, author, pubDate);  //factory function

    var publicAPI = {
        print(){
            printDetails(pub, URL);
        }
    }
    return publicAPI;
}

var createPublication = createPub(
    "Hans",
    "Franz",
    "Gerd"
);

//createPublication.print();