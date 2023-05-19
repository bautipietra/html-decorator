/**
 * Select all elements with the attribute 'data-hd' and apply the required styles
 * @param {string|boolean} color - The color of the text
 * @param {string|boolean} type - The type of the text
 */
document.querySelectorAll('[data-hd]').forEach((el) => {
  const color = el.getAttribute('data-hd-color') || false;
  const type = el.getAttribute('data-hd-type') || false;

  switch (type) {

    case 'underline':
      typeUnderline(el, color);
      break;

    case 'fill':
      typeFill(el, color);
      break;

    case 'fillUnderline':
      typeFill(el, color);
      typeUnderline(el, color);
      break;

    case 'shadow':
      typeShadow(el, color);
      break;

    case 'fillShadow':
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

    case 'mark':
      typeMark(el, color);
      break;

    case 'fancyUnderline':
      typeFancyUnderline(el, color);
      break;

    case 'waves':
      typeWaves(el, color);
      break;

    case 'arrowToRight':
      typeArrowToRight(el, color);
      break;

    case 'arrowToTop':
      typeArrowToTop(el, color);
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
    left: 50%;  top: 50%; transform: translate(-50%, -50%); position: absolute; 
    -webkit-box-shadow:0px 0px 105px 45px ${color};
    -moz-box-shadow: 0px 0px 105px 45px ${color};
    box-shadow: 0px 0px 105px 45px ${color};
  `
  el.style.position = 'relative';
  el.innerHTML = `<span style="z-index: 1;">${el.innerHTML}</span>`
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
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="left: 50%; top: 50%; transform: translate(-50%, -50%) scaleX(1.2); position: absolute; width: 100%; opacity: 0.5;">
      <path fill="${color}" d="M20.4,-28.9C30.9,-29.3,46.9,-32.8,56.8,-28.5C66.7,-24.2,70.4,-12.1,73,1.5C75.6,15.1,77.1,30.3,68.2,36.2C59.3,42.1,39.9,38.9,26.8,41.6C13.7,44.2,6.9,52.8,-1.7,55.8C-10.3,58.8,-20.6,56.2,-31.6,52.3C-42.5,48.4,-54.1,43.2,-62.9,34.2C-71.6,25.3,-77.6,12.6,-77.5,0.1C-77.4,-12.5,-71.3,-25.1,-61.4,-32.1C-51.6,-39.2,-38,-40.7,-27.1,-40.1C-16.3,-39.4,-8.1,-36.5,-1.6,-33.8C5,-31,9.9,-28.4,20.4,-28.9Z" transform="translate(100 100)" />
    </svg>
  `;

  el.style.position = 'relative';
  el.innerHTML = `<span style="z-index: 1;">${el.innerHTML}</span>` + shapeHtml;
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

/**
 * Mark the text
 * @param {HTMLElement} el - The element to be marked
 * @param {string|boolean} color - The color of the mark
 * * @returns {void}
 */
function typeMark(el, color) {
  const mark = document.createElement('div')
  mark.style.cssText = `left: 0;  top: 50%; transform: translate(-120%, -50%); position: absolute; width: 50%; height: 3px; background-color: ${color};`
  el.style.cssText += 'position: relative; width: fit-content; transform: translateX(60%);';
  el.appendChild(mark);
}

function typeFancyUnderline(el, color) {
  const svg = `
    <svg width="386" height="134" viewBox="0 0 386 134" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; height: 100%; top: 80%; left: 0; opacity: 50%">
      <path d="M296.63 7.91459C200.574 34.597 97.6242 19.0322 58.1565 7.91459C-1.8788 7.91459 -30.2288 89.6294 58.1565 122.982C128.865 149.665 299.966 111.865 376.677 89.6294C390.019 51.2735 392.687 -18.7678 296.63 7.91459Z" fill="${color}" stroke="${color}" stroke-width="3.3353"/>
    </svg>
  `
  appendSvg(svg, el);
}

/**
 * Underline the text with waves
 * @param {HTMLElement} el - The element to be underlined
 * @param {string|boolean} color - The color of the waves
 * * @returns {void}
 */
function typeWaves(el, color) {
  const svg = `
                    <svg class="w-10 h-10" viewBox="0 0 211 59" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; transform: scaleY(0.5) translateY(-50%); top: 100%; left: 0">
                      <path d="M0 1.41553C11.7222 1.41553 11.7223 14.1355 23.4445 14.1355C35.1667 14.1355 35.1666 1.41553 46.8888 1.41553C58.6111 1.41553 58.6111 14.1355 70.3333 14.1355C82.0555 14.1355 82.0556 1.41553 93.7778 1.41553C105.5 1.41553 105.5 14.1355 117.222 14.1355C128.944 14.1355 128.944 1.41553 140.667 1.41553C152.389 1.41553 152.389 14.1355 164.111 14.1355C175.833 14.1355 175.833 1.41553 187.555 1.41553C199.278 1.41553 199.278 14.1355 211 14.1355" stroke="${color}" stroke-width="2.49409" stroke-miterlimit="10"></path>
                      <path d="M0 1.41553C11.7222 1.41553 11.7223 14.1355 23.4445 14.1355C35.1667 14.1355 35.1666 1.41553 46.8888 1.41553C58.6111 1.41553 58.6111 14.1355 70.3333 14.1355C82.0555 14.1355 82.0556 1.41553 93.7778 1.41553C105.5 1.41553 105.5 14.1355 117.222 14.1355C128.944 14.1355 128.944 1.41553 140.667 1.41553C152.389 1.41553 152.389 14.1355 164.111 14.1355C175.833 14.1355 175.833 1.41553 187.555 1.41553C199.278 1.41553 199.278 14.1355 211 14.1355" stroke="${color}" stroke-opacity="0.2" stroke-width="2.49409" stroke-miterlimit="10"></path>
                      <path d="M0 22.8652C11.7222 22.8652 11.7223 35.585 23.4445 35.585C35.1667 35.585 35.1666 22.8652 46.8888 22.8652C58.6111 22.8652 58.6111 35.585 70.3333 35.585C82.0555 35.585 82.0556 22.8652 93.7778 22.8652C105.5 22.8652 105.5 35.585 117.222 35.585C128.944 35.585 128.944 22.8652 140.667 22.8652C152.389 22.8652 152.389 35.585 164.111 35.585C175.833 35.585 175.833 22.8652 187.555 22.8652C199.278 22.8652 199.278 35.585 211 35.585" stroke="${color}" stroke-width="2.49409" stroke-miterlimit="10"></path>
                      <path d="M0 22.8652C11.7222 22.8652 11.7223 35.585 23.4445 35.585C35.1667 35.585 35.1666 22.8652 46.8888 22.8652C58.6111 22.8652 58.6111 35.585 70.3333 35.585C82.0555 35.585 82.0556 22.8652 93.7778 22.8652C105.5 22.8652 105.5 35.585 117.222 35.585C128.944 35.585 128.944 22.8652 140.667 22.8652C152.389 22.8652 152.389 35.585 164.111 35.585C175.833 35.585 175.833 22.8652 187.555 22.8652C199.278 22.8652 199.278 35.585 211 35.585" stroke="${color}" stroke-opacity="0.2" stroke-width="2.49409" stroke-miterlimit="10"></path>
                      <path d="M0 44.0649C11.7222 44.0649 11.7223 56.7847 23.4445 56.7847C35.1667 56.7847 35.1666 44.0649 46.8888 44.0649C58.6111 44.0649 58.6111 56.7847 70.3333 56.7847C82.0555 56.7847 82.0556 44.0649 93.7778 44.0649C105.5 44.0649 105.5 56.7847 117.222 56.7847C128.944 56.7847 128.944 44.0649 140.667 44.0649C152.389 44.0649 152.389 56.7847 164.111 56.7847C175.833 56.7847 175.833 44.0649 187.555 44.0649C199.278 44.0649 199.278 56.7847 211 56.7847" stroke="${color}" stroke-width="2.49409" stroke-miterlimit="10"></path>
                      <path d="M0 44.0649C11.7222 44.0649 11.7223 56.7847 23.4445 56.7847C35.1667 56.7847 35.1666 44.0649 46.8888 44.0649C58.6111 44.0649 58.6111 56.7847 70.3333 56.7847C82.0555 56.7847 82.0556 44.0649 93.7778 44.0649C105.5 44.0649 105.5 56.7847 117.222 56.7847C128.944 56.7847 128.944 44.0649 140.667 44.0649C152.389 44.0649 152.389 56.7847 164.111 56.7847C175.833 56.7847 175.833 44.0649 187.555 44.0649C199.278 44.0649 199.278 56.7847 211 56.7847" stroke="${color}" stroke-opacity="0.2" stroke-width="2.49409" stroke-miterlimit="10"></path>
                    </svg>
  `
  appendSvg(svg, el);
}

/**
 * Add an arrow to the left of the text
 * @param {HTMLElement} el - The element to be decorated
 * @param {string|boolean} color - The color of the svg
 * * @returns {void}
 */
function typeArrowToRight(el, color) {
  const svg = `
                    <svg class="w-10 h-10" viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 40%; top: 50%; left: -50%; transform: scale(1.5);">
                    <svg class="w-10 h-10" viewBox="0 0 110 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.734436 32.0433C28.1185 20.8631 58.321 14.4162 87.6991 11.2271C93.6909 10.5767 99.7856 10.1329 105.681 8.82643C106.565 8.6305 107.666 8.45126 108.257 7.71167" stroke="${color}" stroke-width="2" stroke-linecap="round"></path>
                      <path d="M105.295 7.55369C103.251 6.41332 98.0697 4.73081 97.3989 2.01718C97.3762 1.92544 97.3095 1.31771 97.3374 1.37859C98.1737 3.20315 97.6004 7.32036 97.4208 9.32238C97.3735 9.84973 96.396 15.3811 96.8612 15.1485C101.235 12.9619 105.361 8.83254 109.442 6.05271" stroke="${color}" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                  `
  appendSvg(svg, el);
}

/**
 * Add an arrow to the bottom of the text
 * @param {HTMLElement} el - The element to be decorated
 * @param {string|boolean} color - The color of the svg
 * * @returns {void}
 */
function typeArrowToTop(el, color) {
  const svg = `
                    <svg class="w-10 h-10" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; height: ${el.offsetHeight}; width: ${el.offsetHeight}; top: 110%; left: 0">
                      <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="${color}" stroke-width="2" stroke-linecap="round"></path>
                    </svg> 
                  `
  appendSvg(svg, el);
}

/**
 * Append a element to the text
 * @param {HTMLElement} el - The element to be decorated
 * @param {string|boolean} color - The color of the svg
 * * @returns {void}
 */
function appendSvg(svg, el) {
  el.style.position = 'relative';
  el.innerHTML += svg;
}