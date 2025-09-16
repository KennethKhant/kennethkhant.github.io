import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function Triton_Robotic() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Top nav */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/capabilities" className="text-m text-zinc-400 hover:text-zinc-200">
          ← Back to Capabilities
        </Link>
        <Link href="/" className="text-m text-zinc-400 hover:text-zinc-200">
          Home
        </Link>
      </div>

      {/* Title & subhead */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Triton Robotic</h1>
        <p className="text-zinc-300 max-w-4xl leading-relaxed">
        <strong>Triton Robotics</strong> is a student-led engineering team at 
         UC San Diego that competes in the international 
        <strong> RoboMaster robotics competition</strong>. Each year, we design and build 
        advanced robots that integrate <strong>mechanical engineering</strong>, 
        <strong> electronics</strong>, and <strong>embedded vision</strong> to take on 
        fast-paced technical challenges.  

        Being part of the team has given me the opportunity to apply classroom theory to 
        <strong> real-world design</strong> from <strong>PCB development</strong> to 
        <strong> autonomous control systems</strong> while collaborating with peers to 
        push the boundaries of <strong>cutting-edge robotics</strong>.
        </p>

      </header>

      {/* Big hero image */}
      <div className="mt-8 relative w-full aspect-[2/1] overflow-hidden rounded-none border border-white/10">
        <Image
          src="/tritonrobotic/mainrobot.jpg"
          alt="Triton Robot"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />
      </div>

      {/* Full-width explanation */}
        <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        <div className="text-zinc-300 max-w-5xl leading-relaxed space-y-6">
            <p>
            As an electrical member of Triton Robotics, I focus on designing and integrating the electronic systems that power our RoboMaster competition robots. 
            My work includes PCB design, breakout boards, and sensor wiring, ensuring reliable power delivery and responsive control. 
            </p>

            <p>
            Being part of this team has pushed me to apply concepts from my electrical engineering coursework to real-world challenges such as debugging circuits, optimizing layouts, and testing hardware under high-pressure timelines.
            Beyond coursework, I have also expanded my hands-on skills, gaining experience with different types of soldering techniques and developing proficiency in PCB design tools.
            </p>
        </div>
        </section>



      {/* Two images LEFT (no gap), text RIGHT */}
      <section className="mt-8 grid items-center gap-8 md:gap-12 md:grid-cols-2">
        {/* Left column: two stacked images, SAME SIZE as DetailSection media */}
        <div className="flex flex-col">
          {/* Top card: keep only outer-top rounding; remove bottom border so cards touch */}
          <div className="relative w-full overflow-hidden rounded-none border border-white/10 border-b-0 bg-white/[0.02] aspect-[16/14]">
            <Image
              src="/tritonrobotic/usbschematic.jpg"          
              alt="USB Breakout Board"
              fill
              className="object-cover object-[50%_50%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Bottom card: only outer-bottom rounding; remove top border to eliminate visual gap */}
          <div className="relative w-full overflow-hidden rounded-none border border-white/10 border-t-0 bg-white/[0.02] aspect-[16/16]">
            <Image
              src="/tritonrobotic/usbpcb.jpg"        
              alt="USB Breakout Board PCB"
              fill
              className="object-cover object-[50%_50%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right column: text */}
        <div className="px-1 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-6">USB Breakout Board</h3> 

        <div className="text-zinc-300 leading-relaxed space-y-6">
            <p>
            I designed a <strong>USB breakout board</strong> to provide a stable 5V output and reliable data connections 
            for our robotics projects. By powering the board from a <strong>wall charger</strong>, the laptop no longer has 
            to supply current for the robot, preventing battery drain while still allowing seamless data transmission. 
            This setup creates a safer and more robust connection, ensuring steady power delivery alongside uninterrupted communication.
            </p>

            <p>
            The board is built around the <strong>LM2596 step-down regulator</strong> with supporting components 
            (inductor, capacitors, and diode) to efficiently convert the input voltage into a regulated 5V supply. 
            Two USB ports are broken out, making it simple to connect and test multiple devices simultaneously.
            </p>

            <p>
            The result is a versatile tool that supports both <strong>reliable power delivery</strong> and <strong>data communication</strong> between the laptop and the robot.
            </p>
            <p>
            Through this project, I strengthened my skills in <strong>schematic design</strong>, <strong>PCB layout</strong>, 
            and <strong>power regulation</strong>, while also applying practical considerations such as 
            trace routing, grounding, and component placement. 
            </p>
        </div>
        </div>

      </section>

      {/* Two images Right (no gap), text Left */}
      <section className="mt-8 grid items-center gap-8 md:gap-12 md:grid-cols-2">
        {/* Left column: text */}
        <div className="px-1 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-6">Buck Converter Breakout Board</h3>

        <div className="text-zinc-300 leading-relaxed space-y-6">
            <p>
            The <strong>Buck Converter breakout board</strong> is created using the <strong>LM367 chip</strong> 
            to efficiently step down a higher input voltage into a stable <strong>1.8V output</strong>. 
            </p>

            <p>
            The design incorporates an inductor, capacitors, and other supporting 
            components to ensure smooth regulation and minimize voltage ripple. With its compact layout, the board 
            is optimized for both efficiency and stability.
            </p>

            <p>
            Through this project, I gained hands-on experience in power electronics design, 
            schematic capture, and PCB layout optimization, with a focus on 
            trace routing, grounding, and component placement to achieve clean power delivery.
            </p>
        </div>
        </div>

        
        {/* Right column: two stacked images, SAME SIZE as DetailSection media */}
        <div className="flex flex-col">
          {/* Top card: keep only outer-top rounding; remove bottom border so cards touch */}
          <div className="relative w-full overflow-hidden rounded-none border border-white/10 border-b-0 bg-white/[0.02] aspect-[16/12]">
            <Image
              src="/tritonrobotic/LM367schematic.jpg"           
              alt="LM367"
              fill
              className="object-cover object-[60%_50%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Bottom card: only outer-bottom rounding; remove top border to eliminate visual gap */}
          <div className="relative w-full overflow-hidden rounded-none border border-white/10 border-t-0 bg-white/[0.02] aspect-[16/17]">
            <Image
              src="/tritonrobotic/LM367pcb.jpg"        
              alt="PID Robot Circuit Bottom"
              fill
              className="object-cover object-[50%_50%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ==== Bottom Gallery: two images side-by-side ==== */}
        <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">PCB 3D</h2>

        <div className="grid gap-3 md:grid-cols-2">
            {/* Left image */}
            <div className="relative w-full overflow-hidden rounded-none border border-white/10 bg-white/[0.02] aspect-[16/13]">
            <Image
                src="/tritonrobotic/usbpcb3D.jpg"   
                alt="Project photo 1"
                fill
                className="object-cover object-[50%_50%]"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            </div>

            {/* Right image */}
            <div className="relative w-full overflow-hidden rounded-none border border-white/10 bg-white/[0.02] aspect-[16/13]">
            <Image
                src="/tritonrobotic/LM367pcb3D.jpg"   
                alt="Project photo 2"
                fill
                className="object-cover object-[50%_50%]"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            </div>
        </div>
        </section>

    </main>
  );
}
