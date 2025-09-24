import Link from "next/link";
import DetailSection from "@/app/components/DetailSection";

export const metadata = {
  title: "Hovermap Robot — Capabilities",
  description:
    "Compact inspection robot designed to navigate confined spaces with multi-sensor mapping that fulfill the CalTran requirement.",
};

const TAGS = ["Mapping", "Robotics", "Inspection"];

export default function HovermapDetailPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Back */}
      <Link href="/capabilities" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Back to Capabilities
      </Link>

      {/* Header */}
<header className="mt-6 space-y-6">
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
    Hovermap Robot
  </h1>

  <p className="max-w-3xl text-zinc-300 leading-relaxed">
    The Hovermap project is a Caltrans-funded initiative aimed at creating a
    compact robotic platform capable of carrying a Hovermap LiDAR unit into
    hazardous or confined environments such as culverts, small pipes, and
    areas beneath bridges. Unlike Boston Dynamics’ Spot robot, which is
    expensive and too large to operate in such narrow conditions, this design
    focuses on delivering a smaller, water-resistant, and highly maneuverable
    alternative.
  </p>

  <p className="max-w-3xl text-zinc-300 leading-relaxed">
    To meet the requirements, the robot needed to stay under 20 inches in
    height, support a payload of around 10 pounds for the Hovermap and its
    battery, and traverse shallow water up to two inches deep. It also had to
    travel at least 200 feet with a minimum runtime of thirty minutes. The
    system would be operated by a human driver, using live camera feedback
    provided by the Hovermap’s GoPro 360 integration.
  </p>

  <p className="max-w-3xl text-zinc-300 leading-relaxed">
    The development process began with exploring different mobility options,
    including a hexapod with six or eight legs, a four-wheel design, and
    eventually a six-wheel design. While a hexapod would have worked well in
    uneven terrain, it posed balancing issues under load. A four-wheel model
    was considered insufficient for carrying the Hovermap, so the team
    ultimately selected a six-wheel design for stability and strength. The
    initial CAD model, which was rectangular and straightforward, had to be
    redesigned after realizing it could not handle slopes or rough terrain
    effectively. To address this, the team introduced leg extensions to
    improve mobility without sacrificing water resistance.
  </p>

  <p className="max-w-3xl text-zinc-300 leading-relaxed">
    Fabrication of the robot relied heavily on 3D printing as the initial
    model. Due to limitations in the size of the available printer, the body
    had to be divided into multiple parts, including separate sections for
    the main chassis, motor mounts, and wheel brackets, which were later
    assembled. On the electronics side, the system incorporated a Raspberry
    Pi 5 with a camera, motor drivers, servos, and an FPV communication
    system, powered by a dedicated battery. One major challenge was managing
    wireless connections: the Hovermap generated its own Wi-Fi, as did the
    GoPro and the robot itself, creating interference. The solution was to
    unify these connections through a router, ensuring that only a single
    Wi-Fi signal was emitted for smoother operation.
  </p>

  <p className="max-w-3xl text-zinc-300 leading-relaxed">
    Throughout the project, the team faced several challenges, including
    balancing stability against water resistance, working around 3D printing
    constraints, and adapting to Caltrans’ policy restrictions on hardware
    acquisition, which limited access to certain compatible tablets. Despite
    these obstacles, the project advanced with creative problem-solving,
    pushing the team to design a functional and cost-conscious robotic system
    capable of supporting Caltrans in inspecting environments too dangerous
    or inaccessible for humans.
  </p>

  <h4 className="text-6xl font-bold text-red-500 text-center mt-8">
        The Project is still going on! Coming Soon!!!!!
      </h4>   
</header>
    </main>
  );
}
