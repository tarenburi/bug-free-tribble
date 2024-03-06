function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function generateRandomColor(format = 'hex') {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);

  switch (format.toLowerCase()) {
    case 'hex':
      return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
    case 'rgb':
      return `rgb(${red}, ${green}, ${blue})`;
    case 'hsl':
      const hue = getRandomInt(0, 360);
      const saturation = getRandomInt(0, 100);
      const lightness = getRandomInt(0, 100);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    default:
      throw new Error(`Invalid format: ${format}`);
  }
}

module.exports = {
  generateRandomColor,
};
