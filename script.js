import { Popover } from 'flowbite';
// function changeTheme(theme) {
//     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark')
//         console.log(localStorage.theme);
//     } else {
//         document.documentElement.classList.remove('dark')
//     }

// }

// set the popover content element
const $targetEl = document.getElementById('popoverContent');

// set the element that trigger the popover using hover or click
const $triggerEl = document.getElementById('popoverButton');

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'hover',
  offset: 10,
  onHide: () => {
      console.log('popover is shown');
  },
  onShow: () => {
      console.log('popover is hidden');
  },
  onToggle: () => {
      console.log('popover is toggled');
  }
};
const popover = new Popover($targetEl, $triggerEl, options);

popover.show()