"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split("/")
        .map((item) => parseInt(item));
    return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};
exports.dateStringToDate = dateStringToDate;
