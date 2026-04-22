// 简单随机标语/引言
const TAGLINES = [
  "搬砖虽苦，但我会把代码变成诗。",
  "Keep calm and commit often.",
  "「政府并非万能，但有时候也不错。」 —（随意引用美国历代领导人名言）",
  "加班是生产力的误导，还是职场的仪式？",
  "「The only thing we have to fear is fear itself.」 — F. D. Roosevelt",
  "『Ask not what your code can do for you…』 — 纪念性自嘲"
];

function pickTagline(){
  const el = document.getElementById('tagline');
  el.textContent = TAGLINES[Math.floor(Math.random()*TAGLINES.length)];
}

// 计算本年已过去天数和百分比
function updateProgress(){
  const now = new Date();
  const start = new Date(now.getFullYear(),0,1);
  const next = new Date(now.getFullYear()+1,0,1);
  const passed = Math.floor((now - start) / (1000*60*60*24)) + 1; // 第几天
  const total = Math.floor((next - start) / (1000*60*60*24));
  const pct = Math.min(100, Math.round(passed / total * 100));
  document.getElementById('dayText').textContent = `本年已过去 ${passed} 天 · 进度：`;
  document.getElementById('percentText').textContent = `${pct}%`;
  const fill = document.getElementById('progressFill');
  fill.style.width = pct + '%';
  const worker = document.getElementById('worker');
  // worker 的 left 使其"蠕动"感觉，加一点抖动
  worker.style.left = `calc(${pct}% )`;
  // 可做微小循环动画（使用 CSS transition）
}

// 从本地 news.json 加载新闻热词并滚动展示
async function loadNews(){
  try {
    const res = await fetch('news.json', {cache: "no-store"});
    if(!res.ok) throw new Error('无法加载 news.json');
    const arr = await res.json();
    if(!Array.isArray(arr) || arr.length===0) throw new Error('news.json 格式错误或空');
    const ticker = document.getElementById('newsTicker');
    // 制作重复两遍的滚动内容来实现无缝滚动
    const track = document.createElement('div');
    track.className = 'news-track';
    const items = arr.map(t => `<span class="news-item">${escapeHTML(t)}</span>`).join('');
    track.innerHTML = items + items;
    ticker.innerHTML = '';
    ticker.appendChild(track);
    // 若要控制滚动速度，可动态设置动画时长
    const duration = Math.max(12, Math.min(40, arr.length * 2)); // 自动根据关键词数量调整
    track.style.animationDuration = duration + 's';
  } catch (err) {
    console.warn(err);
    document.getElementById('newsTicker').textContent = '新闻热词加载失败，请查看 news.json';
  }
}

function escapeHTML(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

document.addEventListener('DOMContentLoaded', ()=>{
  pickTagline();
  updateProgress();
  loadNews();
  // 每分钟刷新一次进度（如果页面长时间打开）
  setInterval(updateProgress, 60_000);
});