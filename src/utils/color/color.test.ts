import { adjustColor, convertNumToColorHex, generateLinearGradient } from './color';

describe('adjustColor', () => {
    it('returns an adjusted color', () => {
        const mockColor = '#110022';
        const expected = '#116422';
        const result = adjustColor(mockColor);
        expect(result).toEqual(expected);
    });

    it('returns an adjusted color w/ at least two equal minimums', () => {
        const mockColor = '#110000';
        const expected = '#116400';
        const result = adjustColor(mockColor);
        expect(result).toEqual(expected);
    });
});

describe('convertNumToColorHex', () => {
    it('converts single digit decimal to double digit hex string', () => {
        const mockNum = 0;
        const expected = '00';
        const result = convertNumToColorHex(mockNum);
        expect(result).toEqual(expected);
    });

    it('converts 255 to hex string', () => {
        const mockNum = 255;
        const expected = 'ff';
        const result = convertNumToColorHex(mockNum);
        expect(result).toEqual(expected);
    });

    it('converts decimal between 9 and 255 to hex string', () => {
        const mockNum = 205;
        const expected = 'cd';
        const result = convertNumToColorHex(mockNum);
        expect(result).toEqual(expected);
    });
});

describe('generateLinearGradient', () => {
    it('returns 3 gradient long (default) linear gradient', () => {
        const mockBaseColor = '#334455';
        const mockBaseAngle = 25;
        const expected = 'linear-gradient(205deg, rgba(255,255,255,.8), rgba(255,0,0,0) 40.71%), linear-gradient(295deg, #334455, rgba(0,255,0,0) 70.71%), linear-gradient(115deg, #974455, rgba(0,0,255,0) 70.71%)';
        const result = generateLinearGradient(mockBaseColor, mockBaseAngle);
        expect(result).toEqual(expected);
    });

    it('returns 2 gradient long linear gradient', () => {
        const mockBaseColor = '#334455';
        const mockBaseAngle = 25;
        const mockMultiple = 2;
        const expected = 'linear-gradient(295deg, #334455, rgba(0,255,0,0) 70.71%), linear-gradient(115deg, #974455, rgba(0,0,255,0) 70.71%)';
        const result = generateLinearGradient(mockBaseColor, mockBaseAngle, mockMultiple);
        expect(result).toEqual(expected);
    });
});