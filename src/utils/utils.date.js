//// handle date
export const printDate = (dateString) => {
  if (!dateString) return 'Date not specified'
  try {
    const date = createDate(dateString)
    return date.toUTCString()
  } catch (err) {
    console.log(err.name)
    return 'Invalid Date'
  }
}

export const createDate = (dateString) => {
  const [dateValues, timeValues] = dateString.split(' ')
  const [day, month, year] = dateValues.split('/')
  const [hours, minutes, seconds] = timeValues.split(':')

  const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds)

  return date
}

export const subtractDates = (item) => {
  let [dateA, dateB] = [item.created_at, item.completed_at]
  if (!dateA) return 'something happened'
  if (!dateB) dateB = new Date().toLocaleString('pt-br')
  try {
    const elapsedTime = createDate(dateB) - createDate(dateA)

    return elapsedTime
  } catch (err) {
    console.log(err.name)
    return 'something happened in error'
  }
}

export const elapsedTime = (item) => {
  if (item.id === null) return ' '
  const seconds = subtractDates(item)
  // console.log(`${parseInt(seconds / 86400000)} days`)

  if (seconds >= 86400000) return `${parseInt(seconds / 86400000)} days`
  if (seconds >= 3600000) return `${parseInt(seconds / 3600000)} hours`
  if (seconds >= 60000) return `${parseInt(seconds / 60000)} minutes`
  if (seconds >= 1000) return `< 1 minute`

  return 'no time registred'
}
