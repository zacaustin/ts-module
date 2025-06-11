import { add } from './addition';

test('add adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});