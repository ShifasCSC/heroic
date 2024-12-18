
//chat gpt code

// function isValidDate(dateString) {
   
//     const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d\d$/;

//     if (!regex.test(dateString)) {
//         return false;
//     }

//     const [day, month, year] = dateString.split('-').map(Number);

//     const daysInMonth = [31, 28 + (isLeapYear(year) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return day <= daysInMonth[month - 1];
// }

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }


// const dateString = '29-02-2024'; 
// console.log(isValidDate(dateString)); 

// console.log(isValidDate("07-08-2024"));


//my
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
     dateRegex.test();
     console.log( dateRegex.test("01-08-2024"));
     console.log( dateRegex.test("00-08-2024"));
     console.log( dateRegex.test("01-00-2024"));
     console.log( dateRegex.test("00-08-0000"));
