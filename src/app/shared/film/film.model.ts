export class Film {
    constructor(
        public film_id: number,
        public title: String,
        public description: String,
        public release_year: number,
        public language_id: number,
        public rental_duration: number,
        public rental_rate: number,
        public length: number,
        public replacement_cost: number,
        public rating: String
    ) {}
  }
