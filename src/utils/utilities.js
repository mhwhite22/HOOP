
export function getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  }

export function formatDate(D){
    let currDay = D.toString()
    currDay = currDay.slice(0,10)
    const currYear = currDay.slice(0,4).trim()
    const currMonth = currDay.slice(5,7).trim()
    const currDate = currDay.slice(8,11).trim()
    const currDateStr = new Date(currYear, (currMonth-1), currDate).toDateString()
    return currDateStr
}