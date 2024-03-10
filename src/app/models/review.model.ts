export class Review {
    profileName: string;
    _id: number;
    book_id: number;
    title: string;
    score: number;
    text: string;
    time: number;

    constructor(obj?: any) {
        this.profileName = obj && obj.profileName || '';
        this._id = obj && obj._id || 0;
        this.book_id = obj && obj.book_id || 0;
        this.title = obj && obj.title || '';
        this.score = obj && obj.score || 0;
        this.text = obj && obj.text || '';
        this.time = obj && obj.time || 0;
    }
}