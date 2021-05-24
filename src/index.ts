import './main.scss';

import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', '😀😀'], ' ');

  return element;
}

document.body.appendChild(component());
