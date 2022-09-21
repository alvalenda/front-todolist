export const motionItem = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      x: { duration: 0.5, easing: 'easeOutQuart' },
      y: { duration: 0.5, easing: 'easeOutQuart' },
      opacity: { duration: 0.5, easing: 'easeOutQuart' },
      delay: 0.2,
      default: { ease: 'linear' },
    },
  },
  completed: {
    x: 0,
    y: 0,
    opacity: 0.4,
    transition: {
      type: 'spring',
      stiffness: 100,
      x: { duration: 0.5, easing: 'easeOutQuart' },
      y: { duration: 0.5, easing: 'ease' },
      opacity: { duration: 0.5, easing: 'easeOutQuart' },
      delay: 0.3,
      default: { ease: 'linear' },
    },
  },
}

// delay in visible 0.2 and completed 0.3 workds fine. maybe 0.4 in completed
export const motionExit = {
  x: 90,
  opacity: 0,
  transition: {
    x: { duration: 0.5, easing: 'ease' },
    opacity: { duration: 0.5, easing: 'easeOutQuart' },
  },
}
