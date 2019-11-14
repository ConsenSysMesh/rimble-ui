const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'
    ? true
    : false;

const truncateAddress = (address, firstSegLength = 5, lastSegLength = 4) => {
  if (!address) return '';
  return address
    ? address.slice(0, firstSegLength) +
        '...' +
        address.slice(address.length - lastSegLength)
    : '...';
};

export { isBrowser, truncateAddress };
