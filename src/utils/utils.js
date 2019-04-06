import moment from 'moment';
import 'moment/locale/ru';

/*
 * Формат даты
 */
export const formatDate = (date) => {
    moment.locale('ru');
    return moment(date, 'DD-MM-YY').format('ll');
};

/*
 * Функция для склонения слов
 */
export const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return `${number} ${titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]}`;
};