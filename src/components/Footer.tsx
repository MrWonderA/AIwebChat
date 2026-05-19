export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 text-[10px] text-white font-bold">
              A
            </span>
            AI Chat 导航 &mdash; 国内外 AI 对话产品汇总
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <span>数据仅供参考 · 排名不分先后</span>
          </div>
        </div>
      </div>
    </footer>
  )
}