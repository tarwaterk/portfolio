export const adjustColor = (origColor: string, step: number = 100) => {
    /*
    takes in a hex string starting with '#', breaks the main part of the color into R, G, and B sections,
    determines which section is smallest, add ~100 to that value, then return the new hex color value
    */
   const MOD_BASE = 256;
   let red = parseInt(origColor.slice(1, 3), 16);
   let green = parseInt(origColor.slice(3, 5), 16);
   let blue = parseInt(origColor.slice(5, 7), 16);
   let smallestValue = Math.min(red, Math.min(green, blue));
   
   switch (smallestValue) {
    case red:
        red = (red + step) % MOD_BASE;
        break;
    case green:
        green = (green + step) % MOD_BASE;
        break;
    case blue:
        blue = (blue + step) % MOD_BASE;
        break;
    default:
        break;
   }

   return `#${convertNumToColorHex(red)}${convertNumToColorHex(green)}${convertNumToColorHex(blue)}`;
};

export const convertNumToColorHex = (num: number) => {
    let hexString = num.toString(16);
    if (hexString.length < 2) {
        hexString = `${hexString}${hexString}`;
    }
    return hexString;
};

export const generateLinearGradient = (baseColor: string, baseAngle: number, multiple: number = 3) => {
    const firstLg = `linear-gradient(${(180 + baseAngle) % 360}deg, rgba(255,255,255,.8), rgba(255,0,0,0) 40.71%)`;
    const secondLg = `linear-gradient(${(270 + baseAngle) % 360}deg, ${baseColor}, rgba(0,255,0,0) 70.71%)`;
    const thirdLg = `linear-gradient(${(90 + baseAngle) % 360}deg, ${adjustColor(baseColor)}, rgba(0,0,255,0) 70.71%)`;
    return multiple === 2 ? `${secondLg}, ${thirdLg}` : `${firstLg}, ${secondLg}, ${thirdLg}`;
};
