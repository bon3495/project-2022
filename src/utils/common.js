export const getCurrentDomain = () => {
  const parts = window.location.hostname.replace(/:\d*/g, '').split('.');
  parts.shift();
  return parts.join('.');
};
