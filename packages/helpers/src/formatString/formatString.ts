export const formatString = (str: string, ...args: any[]) => {
  console.log('formatString');
  return str.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== 'undefined' ? args[index] : match;
  });
}