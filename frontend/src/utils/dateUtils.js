
export const formatDateToDisplay = (dateString) => {
  if (!dateString) return "";
  if (dateString.includes('/')) return dateString; 
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}/${year}`;
}

export const formatDateToInput = (dateString) => {
  if (!dateString) return "";
  if (dateString.includes('-')) return dateString; 
  const [month, day, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
}