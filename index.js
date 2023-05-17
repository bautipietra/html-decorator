/**
 * Select all elements with the attribute 'data-hd' and apply the required styles
 * @param {string|boolean} color - The color of the text
 * @param {string|boolean} type - The type of the text
 */
document.querySelectorAll('[data-hd]').forEach((el) => {
  const color = el.getAttribute('data-hd-color') || false;
  const type = el.getAttribute('data-hd-type') || false;
  console.log('el');

  switch (type) {

    case 'underline':
      typeUnderline(el, color);
      break;

    case 'fill':
      typeFill(el, color);
      break;

    case 'fill-underline':
      typeFill(el, color);
      typeUnderline(el, color);
      break;

    case 'shadow':
      typeShadow(el, color);
      break;

    case 'fill-shadow':
      typeFill(el, color);
      typeShadow(el, color);
      break;

    case 'light':
      typeLight(el, color);
      break;

    case 'shape':
      typeShape(el, color);
      break;

    case 'stroke':
      typeStroke(el, color);
      break;

    case 'italic':
      typeItalic(el, color);
      break;

    // If the type is not valid, log an error
    default:
      console.error('HTML-DECORATOR', { 'error': `invalid data-hd-type: ${type}` })
      break;
  }

  // If the element is not a <span> tag, log a warning
  if (el.tagName !== 'SPAN') {
    console.warn('HTML-DECORATOR', { 'warn': `invalid tag: ${el.tagName}` });
  }
});

/**
 * Underline the text
 * @param {HTMLElement} el - The element to be underlined
 * @param {string|boolean} color - The color of the underline\

*/
function typeUnderline(el, color) {
  el.style.textDecoration = `underline ${color}`;
}

/**
 * Fill the color of the text
 * @param {HTMLElement} el - The element to be filled
 * @param {string|boolean} color - The color of the text
 *  * @returns {void}
 */
function typeFill(el, color) {
  if (color) el.style.color = color;
}

/**
 * Lighten the text
 * @param {HTMLElement} el - The element to be lightened
 * @param {string|boolean} color - The color of the text
 * * @returns {void}
 */
function typeShadow(el, color) {
  el.style.textShadow = `0 0 5px ${color}`;
}

/**
 * Lighten the text
 * @param {HTMLElement} el - The element to be lightened
 * @param {string|boolean} color - The color of the text
 */
function typeLight(el, color) {
  const light = document.createElement('div')
  light.style.cssText = `
    left: 50%;  top: 50%; transform: translate(-50%, -50%); position: absolute; z-index: -1; 
    -webkit-box-shadow:0px 0px 105px 45px ${color};
    -moz-box-shadow: 0px 0px 105px 45px ${color};
    box-shadow: 0px 0px 105px 45px ${color};
  `
  el.style.position = 'relative';
  el.appendChild(light);
}

/**
 * Shape the background of the text
 * @param {HTMLElement} el - The element to be shaped
 * @param {string|boolean} color - The color of the text
 * * @returns {void}
 */
function typeShape(el, color) {
  const shapeHtml = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="left: 50%; top: 50%; transform: translate(-50%, -50%) scaleX(1.2); position: absolute; z-index: -1; width: 100%; opacity: 0.5;">
      <path fill="${color}" d="M20.4,-28.9C30.9,-29.3,46.9,-32.8,56.8,-28.5C66.7,-24.2,70.4,-12.1,73,1.5C75.6,15.1,77.1,30.3,68.2,36.2C59.3,42.1,39.9,38.9,26.8,41.6C13.7,44.2,6.9,52.8,-1.7,55.8C-10.3,58.8,-20.6,56.2,-31.6,52.3C-42.5,48.4,-54.1,43.2,-62.9,34.2C-71.6,25.3,-77.6,12.6,-77.5,0.1C-77.4,-12.5,-71.3,-25.1,-61.4,-32.1C-51.6,-39.2,-38,-40.7,-27.1,-40.1C-16.3,-39.4,-8.1,-36.5,-1.6,-33.8C5,-31,9.9,-28.4,20.4,-28.9Z" transform="translate(100 100)" />
    </svg>
  `;

  el.style.position = 'relative';
  el.innerHTML += shapeHtml;
}

/**
 * Stroke the text
 * @param {HTMLElement} el - The element to be stroked
 * @param {string|boolean} color - The color of the text
 * * @returns {void}
 */
function typeStroke(el, color) {
  el.style.cssText = `
    color: transparent;
    -webkit-text-stroke: 2px ${color};
		text-stroke: 2px black;
    text-shadow: none;
  `;
}

/**
 * Italicize the text
 * @param {HTMLElement} el - The element to be italicized
 * @param {string|boolean} color - The color of the text
 * * @returns {void}
 */
function typeItalic(el, color) {
  // Add the font to the head
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  document.head.appendChild(link);

  // Add the font to the element
  el.style.fontStyle = 'italic';
  el.style.fontFamily = 'Pacifico, cursive';
  if (color) el.style.color = color;
}