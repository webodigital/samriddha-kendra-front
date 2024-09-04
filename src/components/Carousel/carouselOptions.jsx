const options = {
  margin: 30,
  responsiveClass: true,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [
    '<img src="./Arrow left.png" alt="" />',
    '<img src="./Arrow right.png" alt="" />',
  ],
  responsive: {
    0: {
      items: 1,
    },
    570: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 2,
    },
    1500: {
      items: 2,
    },
  },
};

export default options;
