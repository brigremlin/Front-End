export class Rental {
    constructor(
      public rental_id: Number,
      public rental_date: Date,
      public inventory_id: Number,
      public customer_id: Number,
      public return_date: Date,
      public staff_id: Number
    ) {}
  }
