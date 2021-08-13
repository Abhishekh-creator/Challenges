export const startCountdown = (n) => {
  const stopCounting = setInterval(() => {
    let i = 0;
    if (i < n) {
      console.log(n);
      n--;
    } else {
      console.log('GO!');
      clearInterval(stopCounting)
    }
  }, 100)
}