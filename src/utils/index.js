const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'
    ? true
    : false;

export { isBrowser };
