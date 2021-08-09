import isTouch from './_detectTouch';

export const DOM = {
  $win: $(window),
  $body: $('body'),
  $doc: $('document'),
};  

export const BREAKPOINTS = {
  tablet: 1023,
};

export const IS_TOUCH = isTouch();
