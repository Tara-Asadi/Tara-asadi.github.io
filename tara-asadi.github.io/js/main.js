(function(){
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let lang='fa';
try{ const s=localStorage.getItem('ta-lang'); if(s==='en'||s==='fa') lang=s; }catch(e){}
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]).replace(/\./g,'٫');
const num=n=>lang==='fa'?fa(n):String(n);

const {T,FLOW,JOBS,COLS,CATS,MX,UC,ACT,SKILLS,EDU,LANGS}=window.SITE;

/* ---------------- render ---------------- */
let selSkill=null, selCat='all', ucSel=0, flowI=0;

function renderStatic(){
  const t=T[lang];
  document.documentElement.lang=lang; document.documentElement.dir=lang==='fa'?'rtl':'ltr';
  $$('[data-i]').forEach(el=>{const k=el.dataset.i; if(t[k]!=null) el.innerHTML=t[k];});
  $$('.stat b').forEach(b=>b.textContent=num(b.dataset.n));
  $('#langBtn').textContent=lang==='fa'?'EN':'فا';
  $('#cmdIn').placeholder=t.cmdPh;
  $('#f-type').innerHTML=t.types.map((x,i)=>`<option value="${i}">${x}</option>`).join('');
  document.title=lang==='fa'?'تارا اسدی · تحلیل‌گر سیستم':'Tara Asadi · System Analyst';
}
function renderFlow(){
  const ol=$('#flowList'); ol.querySelectorAll('li').forEach(l=>l.remove());
  FLOW[lang].forEach((f,i)=>{const li=document.createElement('li');li.innerHTML=`<div class="node">${num(String(i+1).padStart(2,'0'))}</div><span class="lbl">${f[0]}</span><span class="sub">${f[1]}</span>`;ol.appendChild(li)});
  paintFlow();
}
function paintFlow(){
  const lis=$$('#flowList li'); lis.forEach((l,i)=>{l.classList.toggle('on',i===flowI);l.classList.toggle('done',i<flowI)});
  $('#rail').style.width=(flowI/(lis.length-1)*100)+'%';
  $('#flowStep').textContent=`${String(flowI+1).padStart(2,'0')} / 06`;
}
function renderJobs(){
  const t=T[lang];
  $('#lanes').innerHTML=JOBS.map(j=>`<article class="job"><div class="job-meta"><div class="when">${j.when[lang]}</div><h3>${j.title[lang]}</h3><div class="co">${j.co[lang]}</div><span class="pill ${j.now?'now':''}">${j.now?t.current:t.past}</span></div>
  <ul class="reqs">${j.items.map((it,i)=>`<li data-tags="${it[0]}"><span class="id">${j.id}-${String(i+1).padStart(2,'0')}</span><span>${it[1][lang]}</span></li>`).join('')}</ul></article>`).join('');
  paintJobs();
}
function paintJobs(){
  $('#lanes').classList.toggle('filtering',!!selSkill);
  $$('.reqs li').forEach(li=>li.classList.toggle('hl',!!selSkill&&li.dataset.tags.split(' ').includes(selSkill)));
}
function renderMatrix(){
  const t=T[lang], cats=CATS[lang];
  $('#mtools').innerHTML=`<button class="chip" type="button" data-cat="all" aria-pressed="${selCat==='all'}">${t.all}</button>`+Object.keys(cats).map(c=>`<button class="chip" type="button" data-cat="${c}" aria-pressed="${selCat===c}">${cats[c]}</button>`).join('');
  const head=`<thead><tr><th style="text-align:start">REQ / SKILL</th>${COLS[lang].map(c=>`<th>${c}</th>`).join('')}</tr></thead>`;
  const body=MX.map((r,i)=>`<tr data-k="${r[0]}" class="${selCat!=='all'&&r[1]!==selCat?'dim':''} ${selSkill===r[0]?'sel':''}" tabindex="0"><th><span class="mono">SK-${String(i+1).padStart(2,'0')}</span>${r[2]}</th>${r[3].map(v=>`<td>${v===2?'<i class="dot" aria-label="work"></i>':v===1?'<i class="dot half" aria-label="training"></i>':''}</td>`).join('')}</tr>`).join('');
  $('#matrix').innerHTML=head+'<tbody>'+body+'</tbody>';
}
function pickSkill(k){
  selSkill = selSkill===k?null:k; renderMatrix(); paintJobs();
  if(selSkill){ const first=$('.reqs li.hl'); if(first) first.closest('.job').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'}); }
}
function renderUC(){
  const W=560,H=420, a=ACT[lang];
  const actors=[{x:60,y:160},{x:500,y:120},{x:500,y:300}];
  let s=`<svg viewBox="0 0 ${W} ${H}" direction="ltr" role="img" aria-label="Use case diagram"><rect class="boundary" x="135" y="28" width="290" height="372" rx="10"/><text x="280" y="20" text-anchor="middle" class="mono" style="font-size:11px;fill:var(--muted)">«system» TARA ASADI</text>`;
  UC.forEach((u,i)=>u.actors.forEach(ai=>{const A=actors[ai];s+=`<line class="assoc ${i===ucSel?'on':''}" x1="${A.x+(A.x<280?16:-16)}" y1="${A.y+18}" x2="${280+(A.x<280?-112:112)}" y2="${u.y}"/>`}));
  actors.forEach((A,i)=>{s+=`<g class="actor"><circle cx="${A.x}" cy="${A.y-14}" r="10"/><line x1="${A.x}" y1="${A.y-4}" x2="${A.x}" y2="${A.y+24}"/><line x1="${A.x-15}" y1="${A.y+6}" x2="${A.x+15}" y2="${A.y+6}"/><line x1="${A.x}" y1="${A.y+24}" x2="${A.x-12}" y2="${A.y+44}"/><line x1="${A.x}" y1="${A.y+24}" x2="${A.x+12}" y2="${A.y+44}"/></g><text x="${A.x}" y="${A.y+64}" text-anchor="middle">${a[i]}</text>`});
  UC.forEach((u,i)=>{s+=`<g class="oval ${i===ucSel?'on':''}" tabindex="0" role="button" data-uc="${i}" aria-label="${u[lang]}"><ellipse cx="${u.x+30}" cy="${u.y}" rx="112" ry="26"/><text x="${u.x+30}" y="${u.y+4}" text-anchor="middle">${u[lang]}</text></g>`});
  s+='</svg>';
  $('#ucSvg').innerHTML=s;
  const u=UC[ucSel], sp=u.spec[lang], L=lang==='fa'?{a:'Actor · بازیگر',p:'Precondition · پیش‌شرط',f:'Main flow · جریان اصلی',o:'Postcondition · پس‌شرط'}:{a:'Actor',p:'Precondition',f:'Main flow',o:'Postcondition'};
  $('#ucSpec').innerHTML=`<div class="spec-h"><h3>${u[lang]}</h3><span class="mono">UC-${String(ucSel+1).padStart(2,'0')}</span></div><dl><dt>${L.a}</dt><dd>${sp.actor}</dd><dt>${L.p}</dt><dd>${sp.pre}</dd><dt>${L.f}</dt><dd><ol>${sp.flow.map(x=>`<li>${x}</li>`).join('')}</ol></dd><dt>${L.o}</dt><dd>${sp.post}</dd></dl>`;
}
function renderGloss(){
  $('#gloss').innerHTML=SKILLS.map((g,i)=>`<div class="g-card"><h3><span>${g[lang]}</span><span class="mono">A.${num(i+1)}</span></h3><div class="tags">${g.t.map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('');
}
function renderEdu(){
  $('#tl').innerHTML=EDU.map(e=>`<div class="tl-item ${e.deg?'deg':''}"><div class="tl-when">${e.w[lang]}<br><span style="color:var(--firouzeh)">${e.v}</span></div><div class="tl-axis"><i></i></div><div class="tl-body"><h3>${e.h[lang]}</h3>${e.p[lang]?`<p>${e.p[lang]}</p>`:''}</div></div>`).join('');
  $('#langs').innerHTML=LANGS.map(l=>`<div class="lb"><span>${l[lang]}</span><span class="track"><i style="width:${l.w}%"></i></span><span class="mono">${l.lv[lang]}</span></div>`).join('');
}
function renderAll(){renderStatic();renderFlow();renderJobs();renderMatrix();renderUC();renderGloss();renderEdu();buildCmds();}

/* ---------------- interactions ---------------- */
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-cat]'); if(c){selCat=c.dataset.cat;renderMatrix();return;}
  const r=e.target.closest('#matrix tbody tr'); if(r){pickSkill(r.dataset.k);return;}
  const o=e.target.closest('[data-uc]'); if(o){ucSel=+o.dataset.uc;renderUC();return;}
  const cp=e.target.closest('[data-copy]'); if(cp){copy(cp.dataset.copy);return;}
});
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('#matrix tbody tr')){e.preventDefault();pickSkill(e.target.dataset.k);}
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-uc]')){e.preventDefault();ucSel=+e.target.dataset.uc;renderUC();const n=$(`[data-uc="${ucSel}"]`);n&&n.focus();}
});
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast._);toast._=setTimeout(()=>t.classList.remove('show'),1800);}
async function copy(txt){try{await navigator.clipboard.writeText(txt);toast(T[lang].copied+' ✓');}catch(e){toast(txt);}}

$('#langBtn').onclick=()=>setLang(lang==='fa'?'en':'fa');
function setLang(l){lang=l;try{localStorage.setItem('ta-lang',l)}catch(e){}renderAll();}
$('#themeBtn').onclick=()=>{const r=document.documentElement;const dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;r.dataset.theme=dark?'light':'dark';};

/* flow autoplay */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce) setInterval(()=>{flowI=(flowI+1)%6;paintFlow();},1900); else {flowI=5;}

/* active nav */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){$$('.nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+en.target.id));}}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(s=>io.observe(s));

/* change request form */
let crN=1; $('#crNo').textContent='0001';
$('#crf').addEventListener('submit',e=>{
  e.preventDefault(); const t=T[lang];
  const name=$('#f-name').value.trim(), org=$('#f-org').value.trim(), type=t.types[+$('#f-type').value], msg=$('#f-msg').value.trim();
  if(!name||!msg){toast(t.need);(!name?$('#f-name'):$('#f-msg')).focus();return;}
  const id='CR-'+String(crN).padStart(4,'0');
  const subj=`${id} · ${type}${org?' · '+org:''}`;
  const body=(lang==='fa'?`سلام تارا،\n\n${msg}\n\n${name}${org?'\n'+org:''}`:`Hi Tara,\n\n${msg}\n\n${name}${org?'\n'+org:''}`);
  $('#outPre').textContent=`To: Taraasadi2001@yahoo.com\nSubject: ${subj}\n\n${body}`;
  $('#mailLink').href=`mailto:Taraasadi2001@yahoo.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  $('#out').classList.add('show');
  $('#copyMsg').onclick=()=>copy($('#outPre').textContent);
  crN++; $('#crNo').textContent=String(crN).padStart(4,'0');
});

/* command palette */
let cmds=[],cmdI=0;
function buildCmds(){
  const t=T[lang];
  cmds=[...$$('.nav a').map((a,i)=>({l:a.textContent,m:'§'+(i+1),f:()=>{location.hash='';document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:reduce?'auto':'smooth'})}})),
    {l:t.cmdLang,m:'L',f:()=>setLang(lang==='fa'?'en':'fa')},{l:t.cmdTheme,m:'T',f:()=>$('#themeBtn').click()},{l:t.cmdEmail,m:'@',f:()=>copy('Taraasadi2001@yahoo.com')}];
}
function openCmd(){ $('#cmdk').classList.add('open'); $('#cmdIn').value=''; cmdI=0; drawCmd(); $('#cmdIn').focus(); }
function closeCmd(){ $('#cmdk').classList.remove('open'); }
function filtered(){const q=$('#cmdIn').value.trim().toLowerCase();return cmds.filter(c=>c.l.toLowerCase().includes(q));}
function drawCmd(){const f=filtered();cmdI=Math.min(cmdI,Math.max(0,f.length-1));$('#cmdList').innerHTML=f.map((c,i)=>`<li class="${i===cmdI?'act':''}" data-ci="${i}"><span>${c.l}</span><span class="mono">${c.m}</span></li>`).join('');}
$('#cmdBtn').onclick=openCmd;
$('#cmdIn').addEventListener('input',()=>{cmdI=0;drawCmd()});
$('#cmdList').addEventListener('click',e=>{const li=e.target.closest('li');if(li){const c=filtered()[+li.dataset.ci];closeCmd();c&&c.f();}});
$('#cmdk').addEventListener('click',e=>{if(e.target.id==='cmdk')closeCmd();});
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#cmdk').classList.contains('open')?closeCmd():openCmd();return;}
  if(!$('#cmdk').classList.contains('open'))return;
  const f=filtered();
  if(e.key==='Escape')closeCmd();
  else if(e.key==='ArrowDown'){e.preventDefault();cmdI=(cmdI+1)%Math.max(1,f.length);drawCmd();}
  else if(e.key==='ArrowUp'){e.preventDefault();cmdI=(cmdI-1+f.length)%Math.max(1,f.length);drawCmd();}
  else if(e.key==='Enter'){e.preventDefault();const c=f[cmdI];closeCmd();c&&c.f();}
});

/* ---------------- girih / system-graph canvas ----------------
   A khatam lattice (8-point stars). Its vertices act as nodes: packets travel the edges like
   messages between services, and nodes near the pointer link to it like a live dependency graph. */
const cv=$('#girih'), ctx=cv.getContext('2d');
let W=0,H=0,dpr=1,edges=[],nodes=[],packets=[],mouse={x:-999,y:-999};
function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim();}
function build(){
  dpr=Math.min(2,window.devicePixelRatio||1); const r=cv.getBoundingClientRect(); W=r.width;H=r.height;
  cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  edges=[];nodes=[];const map=new Map();
  const S=Math.max(84,Math.min(120,W/10)), R=S*.36;
  const key=(x,y)=>Math.round(x)+','+Math.round(y);
  const node=(x,y)=>{const k=key(x,y);if(!map.has(k)){map.set(k,nodes.length);nodes.push({x,y,p:Math.random()*6.28})}return map.get(k);};
  for(let gy=-1;gy*S<H+S;gy++)for(let gx=-1;gx*S<W+S;gx++){
    const cx=gx*S+S/2, cy=gy*S+S/2, pts=[];
    for(let k=0;k<16;k++){const a=k*Math.PI/8-Math.PI/2, rr=k%2?R*.62:R; pts.push(node(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr));}
    for(let k=0;k<16;k++) edges.push([pts[k],pts[(k+1)%16]]);
    // connect star tips to neighbours (tile lattice)
    edges.push([pts[4],node(cx+S/2,cy)]); edges.push([pts[8],node(cx,cy+S/2)]);
    edges.push([pts[12],node(cx-S/2,cy)]); edges.push([pts[0],node(cx,cy-S/2)]);
  }
  packets=[];for(let i=0;i<Math.round(W/60);i++)packets.push(newPacket());
}
function newPacket(){return{e:Math.floor(Math.random()*edges.length),t:0,s:.006+Math.random()*.01};}
function frame(ts){
  ctx.clearRect(0,0,W,H);
  const line=css('--line'), fir=css('--firouzeh'), saf=css('--saffron');
  // fade toward the text side so copy stays legible
  const rtl=document.documentElement.dir==='rtl';
    ctx.lineWidth=1;ctx.strokeStyle=line;ctx.globalAlpha=.75;ctx.beginPath();
  for(const [a,b] of edges){const A=nodes[a],B=nodes[b];ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);}
  ctx.stroke();
  // pointer graph
  ctx.globalAlpha=1;
  for(const n of nodes){const d=Math.hypot(n.x-mouse.x,n.y-mouse.y);
    if(d<160){const k=1-d/160;ctx.strokeStyle=fir;ctx.globalAlpha=k*.55;ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();
      ctx.globalAlpha=k;ctx.fillStyle=fir;ctx.beginPath();ctx.arc(n.x,n.y,1.5+k*2.5,0,6.28);ctx.fill();}}
  // packets
  for(const p of packets){p.t+=p.s; if(p.t>=1){const b=edges[p.e][1];const nx=edges.map((e,i)=>e[0]===b||e[1]===b?i:-1).filter(i=>i>=0&&i!==p.e);
      if(nx.length){const ne=nx[Math.floor(Math.random()*nx.length)];if(edges[ne][1]===b)edges[ne]=[edges[ne][1],edges[ne][0]];p.e=ne;p.t=0;}else Object.assign(p,newPacket());}
    const [a,b]=edges[p.e],A=nodes[a],B=nodes[b],x=A.x+(B.x-A.x)*p.t,y=A.y+(B.y-A.y)*p.t;
    ctx.globalAlpha=.9;ctx.fillStyle=saf;ctx.beginPath();ctx.arc(x,y,2.2,0,6.28);ctx.fill();}
  ctx.globalAlpha=1;
  // soft veil over the text column
  const veil=ctx.createLinearGradient(rtl?W:0,0,rtl?0:W,0);
  const bg=css('--bg');
  veil.addColorStop(0,bg);veil.addColorStop(.45,bg+'d9');veil.addColorStop(.75,bg+'66');veil.addColorStop(1,bg+'22');
  ctx.fillStyle=veil;ctx.fillRect(0,0,W,H);
  if(!reduce) requestAnimationFrame(frame);
}
const hero=$('.hero');
hero.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;if(reduce)frame();});
hero.addEventListener('pointerleave',()=>{mouse.x=mouse.y=-999;if(reduce)frame();});
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{build();if(reduce)frame();},150)});

renderAll(); build(); requestAnimationFrame(frame);
})();
