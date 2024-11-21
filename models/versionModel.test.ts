import { versionModel } from './versionModel'; // Ajuste o caminho conforme necessário

describe('versionModel', () => {
  describe('getVersion', () => {
    it('deve retornar o objeto com a versão correta', () => {
      const expectedVersion = { version: '1.0.1' };
      const result = versionModel.getVersion();
      expect(result).toEqual(expectedVersion);
    });

    it('deve retornar um objeto que contém a chave "version"', () => {
      const result = versionModel.getVersion();
      expect(result).toHaveProperty('version');
    });

    it('deve retornar uma string para o valor de "version"', () => {
      const result = versionModel.getVersion();
      expect(typeof result.version).toBe('string');
    });
  });
});
