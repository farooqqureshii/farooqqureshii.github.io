export interface ProjectLink {
  label: string;
  url: string;
  isInternal?: boolean;
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  lightSurface?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  writeup?: string[];
  href?: string;
  links: ProjectLink[];
  media?: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "cmos-rf-receiver",
    title: "2.4 GHz Inductorless CMOS RF Receiver Front-End",
    description:
      "Shunt-feedback cascode LNA and Gilbert-cell mixer in 180 nm CMOS using ngspice.",
    writeup: [
      "A 2.4 GHz RF receiver front-end in 180 nm CMOS with a shunt-feedback cascode LNA and Gilbert-cell mixer, simulated in ngspice without on-chip inductors. I also laid out a discrete 1–50 MHz PCB version to test the circuit on the bench.",
    ],
    links: [
      { label: "Report", url: "/reports/cmos-rf-rx-report.pdf" },
      { label: "Schematic", url: "/reports/cmos-rf-rx-schematic.svg" },
      { label: "Code", url: "https://github.com/farooqqureshii/cmos-rf-rx" },
    ],
    media: [
      {
        type: "image",
        src: "/reports/cmos-rf-rx-schematic.svg",
        alt: "2.4 GHz Inductorless CMOS RF Receiver Front-End Schematic",
        caption: "Shunt-feedback cascode LNA and Gilbert-cell mixer schematic",
        lightSurface: true,
      },
      {
        type: "image",
        src: "/static/cmos-rf-rx-pcb.jpg",
        alt: "RF RX Front-End v1.0 1-50 MHz discrete PCB layout",
        caption: "Discrete 1–50 MHz RF receiver front-end PCB layout (v1.0)",
      },
    ],
  },
  {
    slug: "adaptive-switch-controller",
    title: "One-Handed Adaptive Switch Controller",
    description:
      "3D-printed clip-on attachment for playing the Nintendo Switch Pro Controller one-handed.",
    writeup: [
      "A 3D-printed clip-on attachment for the Nintendo Switch Pro Controller that reroutes the shoulder triggers so you can play one-handed without modifying the controller.",
    ],
    links: [
      {
        label: "MakerRepo",
        url: "https://makerepo.com/farooqqureshi/2841.ctrl-syncs-one-handed-switch-controller-",
      },
    ],
    media: [
      {
        type: "image",
        src: "/static/adaptive-controller-cad.jpg",
        alt: "CAD assembly of the one-handed Switch Pro Controller attachment",
        caption: "CAD assembly fitted to the Switch Pro Controller",
      },
      {
        type: "image",
        src: "/static/adaptive-controller-exploded.jpg",
        alt: "Exploded CAD view of the clip-on shell and trigger linkage",
        caption: "Exploded CAD view of the two-piece clip and linkage",
      },
      {
        type: "image",
        src: "/static/adaptive-controller-print.jpg",
        alt: "3D-printed one-handed Switch controller attachment",
        caption: "3D-printed prototype with trigger linkage",
      },
    ],
  },
  {
    slug: "antenna-servo-pid",
    title: "PID Position Controller for Antenna Servo",
    description:
      "Position controller tuning and disturbance rejection in MATLAB and Simulink.",
    writeup: [
      "A PID controller for an antenna positioner in MATLAB and Simulink, tuned to hit a target angle quickly and stay steady under wind disturbances.",
    ],
    links: [
      { label: "Report", url: "/reports/antenna-positioner-pid-report.pdf" },
      {
        label: "Code",
        url: "https://github.com/farooqqureshii/pid-antenna-positioner",
      },
    ],
    media: [
      {
        type: "image",
        src: "/static/antenna_pid_simulink.png",
        alt: "Simulink block diagram of PID antenna position controller",
        caption: "Simulink model",
      },
      {
        type: "image",
        src: "/static/antenna_pid_plots.png",
        alt: "Step response and disturbance rejection plots for antenna servo",
        caption: "Step response and disturbance rejection",
      },
    ],
  },
  {
    slug: "dsp-filter-design",
    title: "Digital Filter Design for Interference Rejection",
    description:
      "Filter design for interference rejection using Python and SciPy.",
    writeup: [
      "Digital filters designed in Python and SciPy to clean up a signal buried in out-of-band interference.",
    ],
    links: [
      { label: "Report", url: "/reports/dsp-filter-design-report.pdf" },
      { label: "Code", url: "https://github.com/farooqqureshii/dsp-filter" },
    ],
    media: [
      {
        type: "image",
        src: "/static/dsp_filter_response.png",
        alt: "Digital filter frequency response",
        caption: "Filter frequency response",
      },
      {
        type: "image",
        src: "/static/dsp_filter_spectrum.png",
        alt: "Signal spectrum before and after interference rejection filtering",
        caption: "Signal spectrum before and after filtering",
      },
    ],
  },
  {
    slug: "uottahack",
    title: "uOttaHack",
    description:
      "Director leading the team behind Ottawa's largest tech event.",
    writeup: [
      "Led an organizing team of 40+ to put on uOttaHack, one of the largest hackathons in Canada for 1,000+ students. Worked across product, design, and development for the event.",
    ],
    links: [
      { label: "Website", url: "https://www.uottahack.ca/" },
      { label: "Recap", url: "https://www.youtube.com/watch?v=RCi04EDupSw" },
    ],
    media: [
      {
        type: "image",
        src: "/static/uottahack.jpg",
        alt: "uOttaHack hackathon event",
        caption: "uOttaHack weekend in Ottawa",
      },
    ],
  },
  {
    slug: "uoee-rocks",
    title: "uoee.rocks",
    description: "Course visualizer and search for uOttawa EE students.",
    writeup: [
      "A course search and prerequisite visualizer for uOttawa EE students, built so you don't have to dig through static PDF flowcharts.",
    ],
    links: [
      { label: "Website", url: "https://uoee-rocks.vercel.app/" },
      { label: "Code", url: "https://github.com/farooqqureshii/uoee.rocks" },
    ],
    media: [
      {
        type: "image",
        src: "/static/uoee-rocks.png",
        alt: "uoee.rocks course timeline and prerequisite visualizer",
        caption: "Course timeline and prerequisite visualizer",
      },
    ],
  },
  {
    slug: "why-serifs-look-like-that-on-screens",
    title: "What's Up with Serifs on Screens?",
    description:
      "Physics, mathematics, and rasterization engines of digital type.",
    href: "/projects/why-serifs-look-like-that-on-screens",
    links: [
      {
        label: "Essay",
        url: "/projects/why-serifs-look-like-that-on-screens",
        isInternal: true,
      },
    ],
  },
];
