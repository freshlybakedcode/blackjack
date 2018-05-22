import assert from 'assert';
import AIHelper from '../../src/js/modules/AIHelper';

describe('AIHelper.js tests', () => {
  describe('`AIHelper` object', () => {
    it('should exist', () => {
      assert.notStrictEqual(AIHelper, undefined);
    });
    describe('currentScoreSetter() function', () => {
      it('should exist', () => {
        assert.notStrictEqual(AIHelper.currentScoreSetter, undefined);
      });
    });
    describe('isGameOver() function', () => {
      it('should exist', () => {
        assert.notStrictEqual(AIHelper.isGameOver, undefined);
      });
    });
  });
});
