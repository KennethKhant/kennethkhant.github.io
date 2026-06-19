// app/capabilities/pid-line-robot/page.tsx
import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function RC_Car_Page() {
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
        <h1 className="text-4xl font-bold tracking-tight">Autonomous RC Car</h1>
        <p className="text-zinc-300 max-w-2xl">
          Built an autonomous RC car using the DonkeyCar platform, Raspberry Pi,
          OAK-D Lite camera, VESC motor controller, GPS module, and RadioMaster
          controller. Developed both vision-based autonomous driving and GPS
          waypoint-following capabilities by integrating cameras, navigation
          sensors, motor control systems, and machine learning models. Configured
          software pipelines for data collection, model training, and real-time
          vehicle control. Performed hardware-software integration, testing, and
          troubleshooting to improve system reliability and performance.
        </p>
      </header>

      {/* Big hero image */}
      <div className="mt-8 relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/donkeycar/title.jpg"
          alt="Autonomous RC Vehicle"
          fill
          className="object-cover object-[50%_60%]"
          priority
        />
      </div>

      {/* Overview */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            This project focused on designing and developing an autonomous RC
            vehicle using the DonkeyCar framework. The work included assembling
            and modifying the vehicle chassis, designing and 3D-printing custom
            mounts for sensors and electronic components, and completing the
            electrical wiring and system integration. VESC motor controllers were
            configured to control both the drive motor and steering servo, while
            a Raspberry Pi served as the onboard computer for autonomous
            operation.
          </p>
          <p>
            The vehicle was trained using manually collected driving data and
            machine learning models within the DonkeyCar framework, enabling it
            to complete multiple autonomous laps on a closed track. In addition
            to vision-based autonomy, a GPS navigation system was integrated and
            configured to record routes and perform waypoint-following
            navigation.
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-xl font-medium">Hardware & Components</h3>
          <ul className="mt-2 list-disc list-inside text-m text-zinc-300 space-y-1">
            <li>Traxxas Chassis</li>
            <li>Logitech Controller</li>
            <li>RadioMaster Controller</li>
            <li>XeRun 3660 G2 Sensored Motor</li>
            <li>OAK-D Lite Fixed-Focus Camera</li>
            <li>SparkFun Artemis IMU GPS</li>
            <li>VESC Motor Controller</li>
            <li>Anti-Spark Switch with Power Switch</li>
            <li>DC-DC Converter</li>
            <li>4-Cell LiPo Battery</li>
            <li>3D-Printed Mounts and Enclosures</li>
            <li>Laser-Cut Base Plate</li>
          </ul>
        </aside>
      </section>

      {/* Initial Design */}
      <div className="mt-16">
        <DetailSection
          title="Initial Design"
          imgSrc="/donkeycar/v1.jpg"
          imgAlt="Initial autonomous RC car design"
          imgClassName="object-[50%_60%]"
          mediaAspectClass="aspect-[1/1]"
          copy={
            <>
              <p>
                During the initial phase of the project, work focused on setting
                up and testing the core hardware and software components while
                waiting for the custom 3D-printed and laser-cut parts to be
                manufactured. This included configuring the Raspberry Pi as the
                onboard computer, installing and setting up the DonkeyCar
                framework, configuring the VESC motor controller for vehicle
                control, and integrating the OAK-D Lite camera for vision-based
                operation.
              </p>
              <p>
                Early testing was performed to verify communication between
                components, validate motor and steering control, and ensure that
                the camera and software systems were functioning properly before
                the full vehicle assembly began.
              </p>
            </>
          }
        />
      </div>

      {/* Three Autonomous Laps */}
      <section className="mt-16 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Three Autonomous Laps</h2>
          <p>
              After completing the hardware assembly and system integration, the
              vehicle was manually driven around the track to collect training data
              for the autonomous driving model. Images from the OAK-D Lite camera
              and steering commands were recorded using the DonkeyCar framework.
              The collected dataset was then used to train a machine learning
              model capable of predicting steering inputs based on the vehicle&apos;s
              camera view.
          </p>
          <p>
              After several rounds of training and testing, the model was deployed
              to the vehicle, enabling it to successfully complete three
              consecutive autonomous laps around the track without manual
              intervention.
          </p>
         </article>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-none border border-white/10">
            <iframe
              className="w-full aspect-[9/16]"
              src="https://drive.google.com/file/d/1rduymM17vBfYWXYT4f8Io8JxETGuJLq9/preview"
              title="Three Autonomous Laps"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Complete Setup & Final Design */}
      <div className="mt-16">
        <DetailSection
          title="Complete Setup & Final Design"
          imgSrc="/donkeycar/v2.jpg"
          imgAlt="Final autonomous RC car design"
          imgClassName="object-[50%_68%]"
          mediaAspectClass="aspect-[1/1]"
          copy={
            <>
              <p>
                Following the successful completion of the autonomous lap
                testing, the vehicle was further developed to support GPS
                waypoint-following navigation. The final design included several
                mechanical improvements, such as redesigning and installing a
                custom base plate, creating protective enclosures for electronic
                components, and refining component placement for better
                organization and reliability.
              </p>
              <p>
                These modifications improved the overall durability,
                functionality, and appearance of the vehicle while supporting
                both vision-based autonomous driving and GPS-guided navigation.
              </p>
            </>
          }
        />
      </div>

      {/* GPS Waypoint Following */}
      <section className="mt-16 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">GPS Waypoint Following</h2>
          <p>
            The GPS waypoint-following system was developed using location data
            collected through the SparkFun Artemis Global Tracker, which combines
            GPS and IMU sensors. During training, the vehicle was manually driven
            along a desired route while GPS coordinates and motion data were
            recorded. The collected satellite-based positioning data was then
            used to generate a series of waypoints for autonomous navigation.
          </p>
          <p>
            A PID controller was implemented to continuously calculate the
            steering correction needed to minimize the error between the
            vehicle&apos;s current heading and the target waypoint. After
            configuration and testing, the vehicle was able to autonomously
            follow the recorded route using GPS guidance and PID-based steering
            control.
          </p>
        </article>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-none border border-white/10">
            <iframe
              className="w-full aspect-[9/16]"
              src="https://drive.google.com/file/d/1lMW2JXqRYK_Nowa1HuokjOUVCdv5JcgT/preview"
              title="GPS Waypoint Following"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
