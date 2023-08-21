function createLogo(data) {
    // Your SVG generation logic here, using the collected data
    // For example:
    const svgContent = `<svg width="300" height="200"><${data.shape} cx="50" cy="50" r="40" /></svg>`;
    return svgContent;
  }

  module.exports = createLogo