import {removeDashFromNumber} from '../PhoneNumberParser';

describe('PhoneNumberParser', () => {
  it('removeDashFromNumber', () => {
    expect(removeDashFromNumber('')).toBe('');
    expect(removeDashFromNumber(null)).toBe(null);
    expect(removeDashFromNumber('ab-1s234-')).toBe('ab-1s234-');
    expect(removeDashFromNumber('ab1s234')).toBe('ab1s234');

    expect(removeDashFromNumber('010-1234-5678')).toBe('01012345678');
    expect(removeDashFromNumber('010-1234-')).toBe('0101234');
    expect(removeDashFromNumber('0--')).toBe('0');
    expect(removeDashFromNumber('---')).toBe('---');
  });
});