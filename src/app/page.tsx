export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <main className="w-full max-w-3xl rounded-[28px] border border-white/15 bg-[var(--panel)] p-8 text-center shadow-[0_24px_80px_rgba(3,8,30,0.3)] backdrop-blur-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-[0.08em] text-[var(--accent)] sm:text-4xl">
          Snake River League
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--copy)]">
          Welcome to the Snake River League! The league gives players an
          opportunity to play competitive, organized and fun games here in
          South East Idaho. Together, with the affiliates, IYSA, District II
          Commissioner and IFFC we offer a pathway for teams and players to
          compete locally.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[#18224a] shadow-[0_12px_30px_rgba(215,187,111,0.3)] transition-colors hover:bg-[var(--accent-strong)] hover:text-[#10183a]"
          href="https://system.gotsport.com/org_event/events/50506"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Current Schedule
        </a>
      </main>
    </div>
  );
}
