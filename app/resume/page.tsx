import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resume",
  description: "My resume as an image with a downloadable copy.",
};

const RESUME_PDF = "/resume/resume2/resume1.pdf"; // keep your PDF here
const RESUME_IMG = "/resume/resume2/resume1.png"; // your image file

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl md:text-xl font-semibold">Kaung Khant – Resume</h1>
        <div className="flex items-center gap-2">
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:border-white/30 hover:bg-white/10"
          >
            <DownloadIcon />
            Download PDF
          </a>
          <a
            href={RESUME_IMG}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:border-white/30 hover:bg-white/10"
          >
            <DownloadIcon />
            Download Image
          </a>
          <Link
            href="/"
            className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Resume as image */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <Image
          src={RESUME_IMG}
          alt="Kaung Khant Resume"
          width={1408}   // match your image width
          height={1820}  // match your image height
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M12 3v10m0 0 3.5-3.5M12 13 8.5 9.5M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
