const addCommas = require('./addCommas');

describe('#addCommas', () => {
  test('it is a function', () => {
    expect(typeof addCommas).toBe('function');
  });

  test('should convert 1000000 correctly', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
  });

  test('should convert 1234 correctly', () => {
    expect(addCommas(1234)).toBe('1,234');
  });

  test('should convert 9876543210 correctly', () => {
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('should convert 6 correctly', () => {
    expect(addCommas(6)).toBe('6');
  });

  test('should convert -10 correctly', () => {
    expect(addCommas(-10)).toBe('-10');
  });

  test('should convert -5678 correctly', () => {
    expect(addCommas(-5678)).toBe('-5,678');
  });

  test('should convert 12345.768 correctly', () => {
    expect(addCommas(12345.768)).toBe('12,345.768');
  });

  test('should convert -3141592.65 correctly', () => {
    expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
  });
});
