import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "My resume as an embedded PDF with a downloadable copy.",
};

// Put your PDF at public/resume/ (e.g., public/resume/myat-khant-resume.pdf)
const RESUME_URL = "/resume/myat-khant-resume.pdf"; // <- change filename if needed

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-xl font-semibold">Kaung Khant – Resume</h1>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">PDF</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:border-white/30 hover:bg-white/10"
          >
            <DownloadIcon />
            Download PDF
          </a>
          <Link
            href="/"
            className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* PDF container */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        {/* Inline PDF preview */}
        <object
          data={`${RESUME_URL}#view=FitH`}
          type="application/pdf"
          className="h-[calc(100vh-220px)] w-full"
        >
          {/* Fallback if browser can't render PDFs inline */}
          <div className="p-6 text-sm text-zinc-300">
            <p className="mb-2">Your browser can&amp;apos;t display the PDF inline.</p>
            <p>
              <a href={RESUME_URL} className="underline">Open the PDF</a> or use the
              <span className="mx-1 rounded bg-white/5 px-1.5 py-0.5">Download</span> button above.
            </p>
          </div>
        </object>
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
