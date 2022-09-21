export default function TweetCard() {
  return (
    <div className="max-w-2xl rounded-2xl bg-gradient-to-br from-yellow-300 to-red-500 py-16 px-20">
      <div className="rounded-xl bg-white/50 px-8 py-7 backdrop-blur-md">
        <div className="flex items-center gap-x-5">
          <img
            className="h-14 w-14 rounded-full"
            src="https://pbs.twimg.com/profile_images/1510928172686225411/bTCh20YN_400x400.jpg"
            alt="Andrej's pic"
          />
          <div>
            <h2 className="text-zinc-900">Andrej</h2>
            <p className="text-xs text-zinc-900">@reactive_dude</p>
          </div>
        </div>
        <div className="mt-2 text-zinc-900">
          <p>It&apos;s not possible to learn everything.</p>
          <p className="mt-3">
            Great software engineers are not those who know everything but those
            who can solve problems and adapt.
          </p>
        </div>
      </div>
    </div>
  );
}
