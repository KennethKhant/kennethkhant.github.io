export type Capability = {
  title: string;
  slug: string;
  img: string;
  copy: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Hovermap Robot",
    slug: "hovermap-robot",
    img: "/placeholder/hovermap_robot.jpg",
    copy:
      "Compact inspection robot designed to navigate confined spaces like culverts and bridges, using cameras and sensors to map environments safely and efficiently.",
    tags: ["Mapping", "Robotics"],
  },
  {
    title: "Aether-Morpheus System",
    slug: "aether-morpheus",
    img: "/placeholder/nasa_mind.jpg",
    copy:
      "Two systems that enhance astronaut safety during post-EVA operations by combining environmental monitoring and health assessment capabilities.",
    tags: ["Post-EVA", "Safety"],
  },
  {
    title: "PID Line Follower",
    slug: "pid-line-follower",
    img: "/placeholder/linefollow.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Lil Minion",
    slug: "speaker",
    img: "/placeholder/speaker.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Triton Robotic",
    slug: "triton_robotic",
    img: "/placeholder/tritonrobotic.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Coin Flip",
    slug: "coinflip",
    img: "/placeholder/speaker.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "My Little Portfolio",
    slug: "lilportfolio",
    img: "/placeholder/lilportfolio.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Shoe Miner",
    slug: "gold_miner",
    img: "/placeholder/shoeminer.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Music By ME",
    slug: "musicByMe",
    img: "/placeholder/music.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Graphic Design",
    slug: "design",
    img: "/placeholder/graphic.jpg",
    copy:
      "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
    tags: ["Control", "Embedded"],
  },

];

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}
