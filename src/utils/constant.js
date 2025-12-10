export const LOGO_URL = "https://d14zm0hu08yytt.cloudfront.net/wp-content/uploads/2025/01/ventura-logo.svg"
export const DOWNLOAD_BTN = "https://d10b7kv2y188ox.cloudfront.net/react/document-download.svg"

export const isFutureDate = (date) => {
  if(date == '-') return true;
  const [day, month, year] = date.split("/").map(Number);
  const ipoDate = new Date(year, month - 1, day); 
  const currentDate = new Date();
  return ipoDate > currentDate;
}

