export const compareDate = (date1, date2) => {
    return date1.toJSON().slice(0, 10) === date2.toJSON().slice(0, 10);
}