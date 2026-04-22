export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16">
      <main className="w-full max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-zinc-900">
          Snake River League
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-700">
          Welcome to the Snake River League! The league gives players an
          opportunity to play competitive, organized and fun games here in
          South East Idaho. Together, with the affiliates, IYSA, District II
          Commissioner and IFFC we offer a pathway for teams and players to
          compete locally.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-700"
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
