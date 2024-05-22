// const CookieService = {
//     get: (key) => {
//       const cookie = document.cookie.split('; ').find(row => row.startsWith(key));
//       return cookie ? JSON.parse(decodeURIComponent(cookie.split('=')[1])) : null;
//     },
//     set: (key, value, options = {}) => {
//       if (options.expires instanceof Date) {
//         options.expires = options.expires.toUTCString();
//       }
//       let updatedCookie = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
//       for (let optionKey in options) {
//         updatedCookie += `; ${optionKey}`;
//         let optionValue = options[optionKey];
//         if (optionValue !== true) {
//           updatedCookie += `=${optionValue}`;
//         }
//       }
//       document.cookie = updatedCookie;
//     },
//     delete: (key) => {
//       document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
//     }
//   };
  
//   export default CookieService;
  