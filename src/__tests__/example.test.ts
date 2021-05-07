import alt from 'alt-server';
import { someFunction } from '../example';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('someFunction', () => {
  test('should emit some event', () => {
    (alt.isInDebug as jest.Mock).mockReturnValue(true);

    someFunction();

    expect(alt.emit).toBeCalledWith('some event', true);
  });

  test('should set meta with some data', () => {
    (alt.isInDebug as jest.Mock).mockReturnValue(false);

    someFunction();

    expect(alt.setMeta).toBeCalledWith('key', false);
  });
});
