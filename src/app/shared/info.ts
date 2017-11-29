export interface IInfo {
  message: string;
  important: string;
  type: 'info' | 'error' | 'warning' | 'success';
  delay: number;
}
