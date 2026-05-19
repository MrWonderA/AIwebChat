"use client"

import { useState, useMemo } from "react"
import { sites } from "@/data/sites"
import SiteCard from "@/components/SiteCard"

type Filter = "all" | "cn" | "en"

export default function Home() {
  const [filter, setFilter] = useState<Filter>("all")
  const [keyword, setKeyword] = useState("")
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const filtered = useMemo(() => {
    const kw = keyword.toLowerCase().trim()
    return sites.filter((s) => {
      if (filter !== "all" && s.cat !== filter) return false
      if (kw && !s.name.toLowerCase().includes(kw) && !s.desc.toLowerCase().includes(kw)) return false
      return true
    })
  }, [filter, keyword])

  const toggleSite = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const clearSelected = () => setSelected(new Set())

  const openSelected = () => {
    selected.forEach((name) => {
      const site = sites.find((s) => s.name === name)
      if (site) window.open(site.url, "_blank")
    })
  }

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "cn", label: "🇨🇳 国内" },
    { key: "en", label: "🌍 国外" },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          AI <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">对话</span> 导航
        </h1>
        <p className="mt-3 text-base text-zinc-500">
          收录国内外可直接在网页上对话的 AI 产品，点击卡片可选择
        </p>
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] text-green-700">✓</span>
            {sites.length} 个站点
          </span>
          <span className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] text-green-700">✓</span>
            {sites.filter((s) => s.cat === "cn").length} 个国内
          </span>
          <span className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] text-green-700">✓</span>
            {sites.filter((s) => s.cat === "en").length} 个国外
          </span>
        </div>
      </section>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-indigo-600 text-white"
                  : "border border-zinc-300 bg-white text-zinc-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="relative ml-auto">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400">🔍</span>
          <input
            type="text"
            placeholder="搜索名称或描述..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-52 rounded-full border border-zinc-300 bg-white py-1.5 pl-8 pr-4 text-sm outline-none transition-colors focus:border-indigo-400"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex min-h-[200px] items-center justify-center text-sm text-zinc-400">
          没有匹配的站点
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((site) => (
            <SiteCard
              key={site.name}
              site={site}
              selected={selected.has(site.name)}
              onToggle={() => toggleSite(site.name)}
            />
          ))}
        </div>
      )}

      {/* Selection bar */}
      {selected.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white shadow-lg">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
            <span className="whitespace-nowrap text-sm text-zinc-600">
              已选 <strong className="text-indigo-600">{selected.size}</strong> 个
            </span>
            <div className="flex flex-1 flex-wrap gap-1.5">
              {[...selected].map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-700"
                >
                  {name}
                  <button
                    onClick={() => toggleSite(name)}
                    className="ml-0.5 font-bold leading-none text-indigo-400 hover:text-indigo-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={clearSelected}
              className="whitespace-nowrap rounded-lg border border-zinc-300 px-3 py-1.5 text-xs text-zinc-500 transition-colors hover:border-red-300 hover:text-red-500"
            >
              清空
            </button>
            <button
              onClick={openSelected}
              className="whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
            >
              打开全部 ↗
            </button>
          </div>
        </div>
      )}
    </div>
  )
}