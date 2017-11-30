export class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  status: 'admin' | 'user' | 'seller' = 'user';
  created: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    console.log(values);
  }
}
