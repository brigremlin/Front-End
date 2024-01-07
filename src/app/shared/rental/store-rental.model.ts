
export class StoreRental {
    constructor(
      public inventory_id: Number,
      public film_id: Number,
      public title: String,
      public description: String,
      public release_year: Number,
      public rental_duration: Number,
      public rental_rate: Number,
      public replacement_cost: Number,
      public rating: String,
      public store_id: Number
    ) {}
  }
