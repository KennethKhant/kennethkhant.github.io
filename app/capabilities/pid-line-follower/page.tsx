// app/capabilities/pid-line-robot/page.tsx
import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function PID_Line_Robot_Page() {
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
        <h1 className="text-4xl font-bold tracking-tight">PID Line Robot</h1>
        <p className="text-zinc-300 max-w-2xl">
          A line-following robot using a PID controller for smooth, stable tracking at speed. 
          It continuously adjusts motor speeds based on sensor feedback to reduce overshoot and oscillation.
        </p>
      </header>

      {/* Big hero image */}
      {/*}
      <div className="mt-8 relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/linefollow/win.jpg"
          alt="PID line follow Robot"
          fill
          className="object-cover object-[50%_60%]"
          priority
        />
      </div>
      */}
      
     {/* Split hero: 1/4 (robot) + 3/4 (prototype) */}
{/* Split hero: robot (40%) + prototype (60%) */}
{/* Split hero: robot (40%) + prototype (60%) */}
<div className="mt-8 grid grid-cols-5 gap-4">
  {/* LEFT: robot */}
  <div className="relative col-span-2 h-[23rem] overflow-hidden rounded-none border border-white/10">
    <Image
      src="/linefollow/win.jpg"
      alt="PID Line Robot"
      fill
      className="object-cover object-[50%_65%]"
      sizes="(max-width: 768px) 100vw, 40vw"
      priority
    />
  </div>

  {/* RIGHT: prototype poster */}
  <div className="relative col-span-3 h-[23rem] overflow-hidden rounded-none border border-white/10">
    <Image
      src="/linefollow/prototype.jpg"
      alt="Prototype poster"
      fill
      className="object-cover object-[58%_45%]"  // ← fills width, slight right/up shift
      sizes="(max-width: 768px) 100vw, 60vw"
      priority
    />
  </div>
</div>






      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            The PID Line Follower Robot tracks a floor line and steers by correcting the error between the sensed line
            position and the robot’s center. PID (Proportional–Integral–Derivative) control combines fast proportional
            response, long-term integral correction, and derivative damping for sharp turns.
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-xl font-medium">Hardware</h3>
          <ul className="mt-2 list-disc list-inside text-m text-zinc-300 space-y-1">
            <li>Microcontroller: Arduino</li>
            <li>Motor Driver: L298N</li>
            <li>Motors: DC gear motors</li>
            <li>Sensor & Control: Photoresistor, Potentiometer</li>
            <li>Battery: Li-ion AA , 9V</li>
          </ul>
        </aside>
      </section>

      {/* ✅ Block 1 — image LEFT, text RIGHT */}
      <div className="mt-16">
        <DetailSection
          title="How PID Steers the Robot"
          imgSrc="/linefollow/potentialmeter.jpg"
          imgAlt="PID robot close-up"
          imgClassName="object-[50%_63%]"
          copy={
            <>
              <p>
                The controller computes <em>error</em> from the sensor array and outputs a steering correction by using
                <code className="mx-1">Kp·e + Ki·∑e + Kd·Δe</code>. That correction offsets left/right motor PWM to
                rotate the robot back toward the line.
              </p>
              <p>
                Tuning tip: raise <strong>Kp</strong> until you see slight oscillation, add a little <strong>Kd</strong> to
                damp it, then use <strong>Ki</strong> to remove slow bias on long straights.
              </p>
            </>
          }
        />
      </div>

      {/* ✅ Block 2 — image RIGHT, text LEFT */}
      <div className="mt-8">
        <DetailSection
          reverse
          title="Motor Driving"
          imgSrc="/linefollow/testmotor.jpg"
          imgAlt="Chassis and sensor placement"
          imgClassName="object-[50%_50%]"
          copy={
                <>
      <p>
        The motors are connected to an <strong>L298N motor driver</strong> through the Arduino. Since the Arduino alone cannot supply the required current for the motors, the driver provides the necessary interface for reliable operation.
      </p>
      <p>
        An external pack of AA batteries delivers stable voltage to the motor driver, while the Arduino supplies the control signals. This separation ensures consistent motor performance without overloading the microcontroller.
      </p>
    </>
        }
        />
      </div>

{/* ✅ Block 3 — image LEFT, text RIGHT */}
      <div className="mt-16">
        <DetailSection
          title="Full Setup"
          imgSrc="/linefollow/beforeassemble.jpg"
          imgAlt="PID robot close-up"
          imgClassName="object-[50%_68%]"
          copy={
           <>
                <p>
                    The complete system integrates an Arduino, line sensors, an L298N motor driver, and DC gear
                    motors powered by AA batteries. Sensor data is processed with a PID algorithm to adjust
                    motor PWM signals, keeping the robot aligned with the track. Proper tuning of Kp, Ki, and Kd
                    ensures smooth and stable performance.
                </p>
                </>
          }
        />
      </div>

      {/* ✅ Block 4 — image RIGHT, text LEFT */}
      <div className="mt-8">
        <DetailSection
          reverse
          title="Initial Assembly"
          imgSrc="/linefollow/initialassemble.jpg"
          imgAlt="Chassis and sensor placement"
          imgClassName="object-[50%_0%]"
          copy={
               <>
                <p>
                    The initial assembly stage brought together the core components of the robot.
                    The electronics were mounted on the chassis using a prototype breadboard for flexible wiring
                    and quick adjustments.
                </p>
                <p>
                    At this stage, the focus was on establishing reliable motor connections and ensuring that the
                    power system could deliver stable voltage without overloading the controller. 
                </p>
                <p>
                    This stage also help us the deeper understanding of the PID control system.
                </p>
                </>
        }
        />
      </div>

     
{/* Demo split: video left, images right */}
<section className="mt-12 grid gap-6 md:grid-cols-2">
  {/* LEFT: video (same size as before) */}
  <div className="flex justify-center">
    <div className="relative w-full max-w-sm overflow-hidden rounded-none border border-white/10">
      <iframe
        className="w-full aspect-[9/16]"
        src="https://www.youtube.com/embed/T0vcUonHkV0?rel=0"
        title="PID Line Robot Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>

  {/* RIGHT: images stretch to match video height */}
  <div className="grid grid-rows-3 gap-3 h-full">
    <div className="relative w-full overflow-hidden rounded-none border border-white/10">
      <Image src="/linefollow/fixingwheel.jpg" alt="Demo 1" fill className="object-cover object-[50%_70%]" />
    </div>
    <div className="relative w-full overflow-hidden rounded-none border border-white/10">
      <Image src="/linefollow/photoresistor.jpg" alt="Demo 2" fill className="object-cover object-[50%_20%]" />
    </div>
    <div className="relative w-full overflow-hidden rounded-none border border-white/10">
      <Image src="/linefollow/teamwinning.jpg" alt="Demo 3" fill className="object-cover object-[50%_60%]" />
    </div>
  </div>
</section>


    
    </main>
  );
}
