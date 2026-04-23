const LEAGUE_END = new Date("2026-06-19T00:00:00-06:00");

export default function Home() {
  const isOffSeason = new Date() >= LEAGUE_END;

  return (
    <div className="relative flex flex-1 items-center justify-center px-6 py-16">
      <main className="w-full max-w-3xl rounded-[28px] border border-white/15 bg-[var(--panel)] p-8 text-center shadow-[0_24px_80px_rgba(3,8,30,0.3)] backdrop-blur-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-[0.08em] text-[var(--accent)] sm:text-4xl">
          Snake River League
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--copy)]">
          The Snake River League is a competitive soccer league serving club
          teams and players across southern and south-east Idaho. Clubs from
          across the region come together to compete in organized, meaningful
          games — providing a local pathway for development and competition.
          The league is administered by IFFC in partnership with IYSA and the
          District II Commissioner.
        </p>
        {isOffSeason && (
          <p className="mt-3 text-base leading-7 text-[var(--copy)]/75">
            The current season has concluded. The league is expected to return
            in Fall 2026 — check back for schedule updates.
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!isOffSeason && (
          <a
            className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[#18224a] shadow-[0_12px_30px_rgba(215,187,111,0.3)] transition-colors hover:bg-[var(--accent-strong)] hover:text-[#10183a]"
            href="https://system.gotsport.com/org_event/events/50506"
            target="_blank"
            rel="noopener noreferrer"
          >
            Current Schedule
          </a>
          )}
          <a
            className="inline-flex rounded-full border border-[var(--accent)] px-6 py-3 font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#18224a]"
            href="https://2hg2avs4i0pxg1ls.public.blob.vercel-storage.com/srl-rules.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            League Rules
          </a>
          <a
            className="inline-flex rounded-full border border-[var(--accent)] px-6 py-3 font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#18224a]"
            href="https://www.idahoyouthsoccer.org/wp-content/uploads/sites/171/2024/07/zero_tolerance_referee_abuse_addendum_-_jun_2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Referee Abuse Policy
          </a>
          <a
            className="inline-flex rounded-full border border-[var(--accent)] px-6 py-3 font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#18224a]"
            href="https://www.idahoyouthsoccer.org/governing-documents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IYSA Policies
          </a>
        </div>
      </main>
      <p className="pointer-events-none absolute inset-x-0 bottom-5 text-center text-sm text-[var(--copy)]/85">
        <span className="pointer-events-auto">
          Built by{" "}
          <a
            className="font-medium text-[var(--accent)] underline underline-offset-4 transition-colors hover:text-[var(--accent-strong)]"
            href="https://knighton.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Knighton Dev LLC
          </a>
        </span>
      </p>
    </div>
  );
}
