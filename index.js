/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
'use strict';

const leftPad = (str, len, ch) => {
  if (ch === false) {
    ch = ' ';
  }
  if (typeof str != 'string') {
    str = str.toString();
  }
  return str.padStart(len, ch);
}

module.exports = leftPad;
