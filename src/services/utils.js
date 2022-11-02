export const generateId = () => `${Math.random() * Date.now()}`;

export const getFormattedDate = () =>
  new Date().toLocaleDateString('en-us', {day: '2-digit', month: '2-digit', year: 'numeric'});
