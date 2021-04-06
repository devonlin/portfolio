// do not import Barba like this if you load the library through the browser
import barba from '@barba/core';

// basic default transition (with no rules and minimal hooks)
barba.init({
  transitions: [{
    leave({ current, next, trigger }) {
      // do something with `current.container` for your leave transition
      // then return a promise or use `this.async()`
    },
    enter({ current, next, trigger }) {
      // do something with `next.container` for your enter transition
      // then return a promise or use `this.async()`
    }
  }]
});

// dummy example to illustrate rules and hooks
barba.init({
  transitions: [{
    name: 'dummy-transition',

    // apply only when leaving `[data-barba-namespace="home"]`
    from: 'home',

    // apply only when transitioning to `[data-barba-namespace="products | contact"]`
    to: {
      namespace: [
        'products',
        'contact'
      ]
    },

    // apply only if clicked link contains `.cta`
    custom: ({ current, next, trigger })
      => trigger.classList && trigger.classList.contains('cta'),

    // do leave and enter concurrently
    sync: true,

    // available hooks…
    beforeOnce() {},
    once() {},
    afterOnce() {},
    beforeLeave() {},
    leave() {},
    afterLeave() {},
    beforeEnter() {},
    enter() {},
    afterEnter() {}
  }]
});

        function menuToggle() {
          var nav = document.getElementById("menu-overlay");
          nav.classList.toggle("active");
          var nav = document.getElementById("toggleIcon");
          nav.classList.toggle("active");
        }
        const counter = document.querySelector(".counter");
        console.log(counter);
        const speed = 200;

        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = target / speed;
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
        function cb(response) {
          counter.innerText = response.value;
        }

