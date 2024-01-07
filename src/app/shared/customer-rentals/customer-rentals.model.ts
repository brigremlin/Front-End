
export class CustomerRentals {
    constructor(
      public customer_id: Number,
      public first_name: String,
      public last_name: String,
      public rental_id: Number,
      public rental_date: Date,
      public return_date: Date,
      public staff_id: Number,
      public payment_id: Number,
      public amount: Number
    ) {}
  }