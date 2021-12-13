import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

test('GameSavingLoader reject', async () => {
  const expected = new Error('Ошибка');
  read.mockRejectedValue(expected);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toBe(expected);
  }
});
