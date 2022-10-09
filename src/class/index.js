// class, getter, setter, modifiers, inheritance, encapsulation, polymorphism, abstraction
// this is a syntactic sugar/easier way to do a make prototype & prototypal inheritance

class Movies {
  #title = `Good movies`;
  rating = "good";
  leads = new Map();
  isSubscribale = true;

  constructor (rating) {
    this.rating = rating;
  }

  set movieTitle(title) {
    this.#title = title;
  }

  static movieTitle() {
    return this.#title;
  }

}

const movies = new Movies();
movies.movieTitle = "Great Movie";

class Genre extends Movies {
  #earning = "unknown";
  constructor(rating = "nice", earning) {
    // super method here calls the parent constructor function, so if parent constructor function has argument
    // then must provide here either hard-code or via subclass constructor's parameter
    super(rating); 
    this.earning = earning;
  }
}
