export const passwordStrength = (_pass: string): number => {
  return Math.floor(Math.random() * 100) + 100;
}

export const validateUser = (username: string, password: string): boolean => {
  if (username === 'good' && password === 'good_password') {
    return true;
  } else {
    return false;
  }
}
