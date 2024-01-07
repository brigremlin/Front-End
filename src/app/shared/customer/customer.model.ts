export class Customer {
    constructor(
      public customer_id: Number,
      public store_id: Number,
      public first_name: String,
      public last_name: String,
      public email: String,
      public address_id: Number,
      public activebool: Boolean,
      public active: Number
    ) {}
  }