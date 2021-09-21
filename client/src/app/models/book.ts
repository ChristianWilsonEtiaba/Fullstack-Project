export class Book {
    _id?: number;
    name: string;
    isbn: string;
    author: string;

    constructor(name: string, isbn: string, author: string){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
    }
}