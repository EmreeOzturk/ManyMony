// rules
// 1. email must be a valid email
// 2. password must be at least 6 characters long
// 3. password must contain at least one number
// 4. password must contain at least one uppercase letter
// 5. password must contain at least one lowercase letter
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
