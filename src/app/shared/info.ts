export class Info {
  message: string;
  important: string;
  type: 'info' | 'error' | 'warning' | 'success' = 'error';
  delay: number = 4000;
  inline: boolean = true;
  dismissable: boolean = true;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
