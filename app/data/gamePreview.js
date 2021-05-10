export class GamePreview {
    game;
    description; 
    author;
    rating;

    constructor(game, description, author, rating) {
        this.author = author;
        this.game = game;
        this.description = description;
        this.rating = rating;
    }
}