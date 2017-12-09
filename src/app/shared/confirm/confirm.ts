export class Confirm {
  title: string;
  body: any;
  validator: string = 'Delete';
  type: 'info' | 'danger' | 'warning' | 'success' = 'danger';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
