export interface Site {
  name: string
  desc: string
  url: string
  cat: "cn" | "en"
}

export const sites: Site[] = [
  { name: "DeepSeek",        desc: "深度求索出品，免费使用，支持超长上下文",                  url: "https://chat.deepseek.com",     cat: "cn" },
  { name: "豆包",            desc: "字节跳动出品，支持多轮对话与插件",                        url: "https://www.doubao.com/chat",   cat: "cn" },
  { name: "通义千问",        desc: "阿里巴巴出品，支持文档理解、代码生成",                    url: "https://tongyi.aliyun.com",     cat: "cn" },
  { name: "文心一言",        desc: "百度出品，支持联网搜索与多模态",                          url: "https://yiyan.baidu.com",       cat: "cn" },
  { name: "智谱清言 (ChatGLM)",desc: "智谱AI / 清华大学，支持多轮对话",                     url: "https://chatglm.cn",            cat: "cn" },
  { name: "Kimi",            desc: "月之暗面出品，支持超长文本（20万字+）",                   url: "https://kimi.moonshot.cn",      cat: "cn" },
  { name: "讯飞星火",        desc: "科大讯飞出品，支持语音、文档等",                          url: "https://xinghuo.xfyun.cn",      cat: "cn" },
  { name: "百川智能",        desc: "百川出品，支持长上下文对话",                              url: "https://www.baichuan-ai.com/chat", cat: "cn" },
  { name: "腾讯混元",        desc: "腾讯出品，支持多轮对话与工具调用",                        url: "https://hunyuan.tencent.com",   cat: "cn" },
  { name: "天工AI",          desc: "昆仑万维出品，AI搜索+对话",                               url: "https://www.tiangong.cn",       cat: "cn" },
  { name: "商量 (SenseChat)",desc: "商汤科技出品，多模态对话",                                url: "https://chat.sensetime.com",    cat: "cn" },
  { name: "海螺AI (MiniMax)",desc: "MiniMax 出品，语音+文字对话",                             url: "https://hailuoai.com",          cat: "cn" },
  { name: "零一万物 (Yi)",   desc: "李开复创办，支持长上下文",                                url: "https://www.lingyiwanwu.com",   cat: "cn" },
  { name: "面壁智能 (CPM)",  desc: "面壁智能出品，开源模型对话",                              url: "https://chat.lmflow.com",       cat: "cn" },
  { name: "元象 XVERSE",     desc: "元象科技出品，支持多轮对话",                              url: "https://chat.xverse.cn",        cat: "cn" },
  { name: "360 智脑",        desc: "360 出品，支持联网搜索",                                  url: "https://ai.360.cn",             cat: "cn" },
  { name: "有道子曰",        desc: "网易有道出品，支持学习辅助",                              url: "https://ai.youdao.com",         cat: "cn" },
  { name: "华为盘古",        desc: "华为云出品，企业级对话",                                  url: "https://pangu.huawei.com",      cat: "cn" },
  { name: "ChatGPT",         desc: "OpenAI 出品，最流行的 AI 对话产品",                       url: "https://chatgpt.com",           cat: "en" },
  { name: "Claude",          desc: "Anthropic 出品，擅长长文与安全对话",                      url: "https://claude.ai",             cat: "en" },
  { name: "Gemini",          desc: "Google 出品，多模态能力强大",                             url: "https://gemini.google.com",     cat: "en" },
  { name: "Grok",            desc: "xAI (马斯克) 出品，实时联网",                             url: "https://grok.com",              cat: "en" },
  { name: "Perplexity",      desc: "AI 搜索引擎+对话，引用来源",                              url: "https://www.perplexity.ai",     cat: "en" },
  { name: "Mistral Le Chat", desc: "法国 Mistral AI 出品",                                    url: "https://chat.mistral.ai",       cat: "en" },
  { name: "Cohere Coral",    desc: "Cohere 出品，企业级对话",                                 url: "https://coral.cohere.com",      cat: "en" },
  { name: "Pi (Inflection)", desc: "Inflection AI，主打情感陪伴",                              url: "https://pi.ai",                 cat: "en" },
  { name: "Poe",             desc: "Quora 出品，聚合 GPT-4 / Claude 等多个模型",             url: "https://poe.com",               cat: "en" },
  { name: "Character.AI",    desc: "角色扮演对话，自定义 AI 角色",                            url: "https://character.ai",          cat: "en" },
  { name: "HuggingChat",     desc: "Hugging Face 出品，开源模型对话",                         url: "https://huggingface.co/chat",   cat: "en" },
  { name: "You.com",         desc: "AI 搜索引擎 + 对话",                                      url: "https://you.com",               cat: "en" },
  { name: "Jasper Chat",     desc: "Jasper 出品，偏向营销文案",                               url: "https://www.jasper.ai/chat",    cat: "en" },
  { name: "DeepAI Chat",     desc: "DeepAI 出品，免费对话",                                   url: "https://deepai.org/chat",       cat: "en" },
  { name: "LMSYS Chat",      desc: "开源模型竞技场，可对比多个模型",                          url: "https://chat.lmsys.org",        cat: "en" },
  { name: "Phind",           desc: "面向开发者的 AI 搜索+对话",                               url: "https://www.phind.com",         cat: "en" },
  { name: "Meta AI",         desc: "Meta 出品（部分地区可用）",                               url: "https://www.meta.ai",           cat: "en" },
  { name: "GitHub Copilot",  desc: "GitHub 出品，代码对话助手",                               url: "https://github.com/features/copilot", cat: "en" },
  { name: "Anthropic Console",desc: "Anthropic API 测试对话界面",                             url: "https://console.anthropic.com", cat: "en" },
  { name: "xAI",             desc: "xAI 官网，早期 Grok",                                     url: "https://x.ai",                  cat: "en" },
]