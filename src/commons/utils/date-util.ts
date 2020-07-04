
export default class DateUtil {
  static getDate(date: Date): string {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    return `${day}/${month}`;
  }
}
