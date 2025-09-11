import { Variants } from "motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const cardVariant: Variants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

const parentVariant: Variants = {
  normal: {},
  hover: {
    transition: {
      staggerChildren: STAGGER,
      when: "beforeChildren",
    },
  },
};

const childVariant: Variants = {
  normal: { y: 0 },
  hover: {
    y: "-100", 
    transition: {
      duration: DURATION,
      ease: "easeInOut",
    },
  },
};

const sudoParentVariant: Variants = {
  normal: {},
  hover: {
    transition: {
      staggerChildren: 0.025,
      when: "beforeChildren",
    },
  },
};

const sudoChildVariant: Variants = {
  normal: { y: "-100%" },
  hover: { y: 0 },
};

const descriptionVariant: Variants = {
  normal: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: 1,
    scale: 1.01,
  },
};

const imageVariant: Variants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.12,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export {
  DURATION,
  STAGGER,
  cardVariant,
  childVariant,
  parentVariant,
  descriptionVariant,
  imageVariant,
  sudoChildVariant,
  sudoParentVariant,
};

// const descriptionVariant: Variants = {
//   normal: {
//     filter: "blur(0px)",
//     opacity: 1,
//   },
//   hover: {
//     filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
//     opacity: [1, 0.8, 1],
//     transition: {
//       duration: 0.3,
//       times: [0, 0.5, 1],
//       ease: "easeInOut",
//     },
//   },
// };



