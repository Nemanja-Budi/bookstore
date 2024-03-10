
import { Book } from "./book.model"

export class BookList {
    count: number;
    results: Book[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map((book: any) => new Book(book)) || [];
    }
}
