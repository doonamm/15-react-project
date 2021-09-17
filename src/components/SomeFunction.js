function convertHex(val){
    const hex = val.toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
}
export function rgbToHex(r, g, b){
    return '#' + convertHex(r) + convertHex(g) + convertHex(b);
}