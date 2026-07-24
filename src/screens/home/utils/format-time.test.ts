import {formatSpentTime} from './format-time';

describe('formatSpentTime', () => {
  it('convertit les minutes en heures et minutes', () => {
    expect(formatSpentTime(210)).toBe('3 h 30');
  });

  it('complète les minutes sur deux chiffres', () => {
    expect(formatSpentTime(125)).toBe('2 h 05');
  });

  it('gère une durée pile sur l’heure', () => {
    expect(formatSpentTime(120)).toBe('2 h 00');
  });

  it('gère une durée inférieure à une heure', () => {
    expect(formatSpentTime(45)).toBe('0 h 45');
  });

  it('gère une durée nulle', () => {
    expect(formatSpentTime(0)).toBe('0 h 00');
  });
});
