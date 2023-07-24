import { backstageKclPlugin } from './plugin';

describe('backstage-kcl', () => {
  it('should export plugin', () => {
    expect(backstageKclPlugin).toBeDefined();
  });
});
