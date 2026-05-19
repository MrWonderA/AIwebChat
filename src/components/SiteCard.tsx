import type { Site } from "@/data/sites"

export default function SiteCard({
  site,
  selected,
  onToggle,
}: {
  site: Site
  selected: boolean
  onToggle: () => void
}) {
  return (
    <div
      onClick={onToggle}
      className={`group block cursor-pointer rounded-xl border p-5 transition-all ${
        selected
          ? "border-indigo-400 bg-indigo-50 shadow-sm"
          : "border-zinc-200 bg-white hover:border-indigo-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${
            selected
              ? "bg-indigo-600"
              : "bg-gradient-to-br from-indigo-400 to-purple-400"
          }`}
        >
          <span className={`flex h-5 w-5 items-center justify-center ${selected ? "" : ""}`}>
            {selected ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              site.name.charAt(0)
            )}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`truncate text-base font-semibold ${selected ? "text-indigo-700" : "text-zinc-900"}`}>
              {site.name}
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-zinc-500">{site.cat === "cn" ? "🇨🇳 国内" : "🌍 国外"}</p>
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">
        {site.desc}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
          site.cat === "cn"
            ? "bg-red-50 text-red-600"
            : "bg-blue-50 text-blue-600"
        }`}>
          {site.cat === "cn" ? "国内" : "国外"}
        </span>
      </div>

      <div className="mt-3">
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            selected
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
        >
          打开 ↗
        </a>
      </div>
    </div>
  )
}