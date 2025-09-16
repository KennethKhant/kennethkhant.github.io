export type Capability = {
  title: string;
  slug: string;
  img: string;
  copy: string;
  tags: string[];
  objectPosition?: string;
};

export const capabilities: Capability[] = [
  {
    title: "Hovermap Robot",
    slug: "hovermap-robot",
    img: "/placeholder/hovermap_robot.jpg",
    copy:
      "Compact inspection robot designed to navigate confined spaces like culverts and bridges, using cameras and sensors to map environments safely and efficiently.",
    tags: ["Mapping", "Robotics"],
    objectPosition: "center 50%",
  },
  {
    title: "Aether-Morpheus System",
    slug: "aether-morpheus",
    img: "/placeholder/nasa_mind.jpg",
    copy:
      "Two systems that enhance astronaut safety during post-EVA operations by combining environmental monitoring and health assessment capabilities.",
    tags: ["Post-EVA", "Safety"],
    objectPosition: "center 50%",
  },
  {
    title: "PID Line Follower",
    slug: "pid-line-follower",
    img: "/linefollow/win.jpg",
    copy:
      "A line-following robot using a PID controller for smooth, stable tracking at speed. It continuously adjusts motor speeds based on sensor feedback to reduce overshoot and oscillation.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Lil Minion",
    slug: "speaker",
    img: "/placeholder/speaker.jpg",
    copy:
      "\"Lil Minion\" is a simple audio amplifier built around the LM386 chip, designed to boost small input signals and drive an 8Ω speaker with clear output. The name \"Lil Minion\" comes from the playful inspiration of the Minion character, reflecting both its compact size and the fun, approachable nature of the build.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Triton Robotic",
    slug: "triton_robotic",
    img: "/placeholder/tritonrobotic.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Coin Flip",
    slug: "coinflip",
    img: "/placeholder/coinflippro.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 65%",
  },
  {
    title: "My Little Portfolio",
    slug: "lilportfolio",
    img: "/placeholder/lilportfolio.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Shoe Miner",
    slug: "gold_miner",
    img: "/placeholder/shoeminer.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Music By ME",
    slug: "musicByMe",
    img: "/placeholder/music.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },
  {
    title: "Graphic Design",
    slug: "design",
    img: "/placeholder/graphic.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
    objectPosition: "center 50%",
  },

];

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}
