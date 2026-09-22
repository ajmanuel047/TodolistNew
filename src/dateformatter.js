import { add, format } from "date-fns";

function formatDate (calenderValues) {
  // 
  let currentYear;
  let currentDay;
  let currentMonth;

  let dueYear;
  let dueMonth;
  // let dueWeek;
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

    const result = add(new Date(formattedDate1), {
          years: dueYear - currentYear,
          months: dueMonth - currentMonth,
          // weeks: dueWeek,
          days: dueDay - currentDay,
        })
    const getDate = () => formattedDate1
    const dueDate = () => result.toDateString()
      console.log(dueDate)

    return { getDate, dueDate }
}


// const startDate = new Date(2023, 6, 15); 

// const fiveDaysLater = addDays(startDate, 5).toLocaleDateString();

export { formatDate }