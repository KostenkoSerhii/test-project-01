import AOS from 'aos';

import { DOM, BREAKPOINTS, IS_TOUCH } from './helpers/_consts';

const checkIsTouch = () => {
  if (IS_TOUCH) {
    DOM.$body.addClass('is-touch');
  } else {
    DOM.$body.addClass('no-touch');
  }
};

const handleWinReady = () => {
  checkIsTouch();

  AOS.init({
    easing: 'ease-out',
    duration: 700,
    once: true,
    disable: window.innerWidth <= BREAKPOINTS.tablet
  });
};

DOM.$win.ready(handleWinReady);

