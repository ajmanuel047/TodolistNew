import { add, format } from "date-fns";
import { addDays } from "date-fns";
import { parse } from "date-fns";
import { dateController } from "./projectController";

function formatDate (calenderValues) {
  // console.log(calenderValues)
  let currentYear;
  let currentDay;
  let currentMonth;

  let dueYear;
  let dueMonth;
  let dueWeek;
  let dueDay;

  if(calenderValues){
    dueYear = Number(calenderValues.slice(0, 4))
    dueMonth = Number(calenderValues.slice(5, 7))
    dueDay = Number(calenderValues.slice(8, 10))
  }
    const today = new Date();
    const formattedDate1 = format(today, 'MMM dd yyyy');
    currentMonth = today.getMonth() + 1
    currentYear = today.getFullYear()
    currentDay = today.getDate()

    // console.log(currentYear)
    // console.log(currentDay)
    // console.log(currentMonth)

    // console.log(dueYear)
    // console.log(dueMonth)
    // console.log(dueDay)
    const result = add(new Date(formattedDate1), {
          years: dueYear - currentYear,
          months: dueMonth - currentMonth,
          weeks: dueWeek,
          days: dueDay - currentDay,
          // hours: 5,
          // minutes: 9,
          // seconds: 30,
        })

    const getDate = () => formattedDate1
    const dueDate = () => result.toDateString()
    
    return { getDate, dueDate }
}

// console.log(formatDate().getDate())
// console.log(formatDate().dueDate())
// let value = formatDate().dueDate()

// console.log(value.slice(4))

const startDate = new Date(2023, 6, 15); // July 15, 2023 

const fiveDaysLater = addDays(startDate, 5).toLocaleDateString();
// console.log(parse(fiveDaysLater, 'dd MMMM yyyy', new Date()))


// const dateString = '2023-07-15';
// const parsedDate = parse(dateString, 'MMM dd yyyy', new Date()).toLocaleDateString();
// console.log(parsedDate);
// let currentDate = formatDate().dueDate().getDay()
// let currentMonth = formatDate().dueDate().getMonth()
// let currentYear = formatDate().dueDate().getFullYear()

// console.log(`${currentDate}th ${currentMonth} ${currentYear}`)



// function futureDate(){
//     const result = add(new Date(2024, 0, 0, 0), {
//         years: 1,
//         months: 2 - 2,
//         weeks: 1,
//         days: 4,
//         // hours: 5,
//         // minutes: 9,
//         // seconds: 30,
//       })
//     //   console.log(result)
//     //   console.log(result.getDay())
//     //   console.log(result.getDate())
//     //   console.log(result.getMonth())
//     //   console.log(format(new Date, result))
// }
// futureDate()
// let val = 'me'
// console.log('its ' + val )
export { formatDate }