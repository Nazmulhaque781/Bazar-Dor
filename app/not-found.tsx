import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f1f6f2] px-4">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#e4f3e8] text-5xl shadow-sm">
          🔎
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-[#2f6b3c]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-[#202b24] sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        {/* Message */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না। লিংকটি ভুল হতে
          পারে অথবা পেজটি সরিয়ে ফেলা হয়েছে।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2f6b3c] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#25572f] hover:shadow-md"
        >
          <span>←</span>
          হোম পেজে ফিরে যান
        </Link>

        {/* Small text */}
        <p className="mt-5 text-xs text-gray-400">
          Bazar Dor — প্রয়োজনীয় পণ্যের দাম এক নজরে
        </p>
      </div>
    </main>
  );
}
