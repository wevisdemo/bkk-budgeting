import Vue from "vue";

interface HTMLElementProps extends HTMLElement {
  clickOutsideEvent: (e: MouseEvent) => void;
}

Vue.directive("click-outside", {
  bind: (el: HTMLElementProps, binding) => {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target as HTMLElement))) {
        // eslint-disable-next-line no-console
        console.log(event);
        binding.value(event, el);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: (el: HTMLElementProps) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
});
