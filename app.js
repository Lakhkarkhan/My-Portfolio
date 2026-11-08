/* Original vanilla-JS portfolio template. No build tools or dependencies. */
(() => {
  'use strict';
  const c=window.PORTFOLIO;if(!c)return;
  const $=id=>document.getElementById(id),make=(tag,text,cls)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el};
  const safeUrl=(value,images=false)=>{if(!value||typeof value!=='string')return '';if(images&&/^data:image\/(png|jpe?g|webp);base64,/i.test(value))return value;try{const u=new URL(value,location.href);return ['http:','https:','mailto:','file:'].includes(u.protocol)?value:''}catch{return ''}};
  const link=(text,href,cls='button glass')=>{const a=make('a',text,cls);a.href=safeUrl(href)||'#';if(/^https?:/.test(a.href)){a.target='_blank';a.rel='noopener noreferrer'}return a};
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer: fine)').matches;
  if(/^#[0-9a-f]{6}$/i.test(c.accent||''))document.documentElement.style.setProperty('--accent',c.accent);
  document.title=c.name+' | Portfolio';document.querySelector('meta[name="description"]').content=c.intro||'';
  const alternate=new URLSearchParams(location.search).get('portrait')==='2';const portrait=safeUrl(alternate?c.alternatePortrait:c.portrait,true)||'assets/portrait.svg';
  ['hero-photo','about-photo'].forEach(id=>{$(id).src=portrait;$(id).alt='Portrait of '+c.name});
  document.querySelector('#opening img').src=portrait;document.querySelector('#opening img').alt='Portrait of '+c.name;
  document.querySelector('.opening-title h1').textContent=c.firstName||c.name;
  $('hero-name').textContent=c.firstName||c.name;$('hero-role').textContent=c.role;$('floating-role').textContent=c.role;$('hero-location').textContent=c.location;$('hero-intro').textContent=c.intro;$('about-copy').textContent=c.about;$('contact-name').textContent=c.name+' · '+c.role;
  $('portrait-switch').href='?portrait='+(alternate?'1':'2');$('portrait-switch').hidden=true;
  $('copyright').textContent='© '+new Date().getFullYear()+' '+c.name;
  if(safeUrl(c.resume)){$('resume-link').hidden=false;$('resume-link').href=c.resume;$('resume-link').target='_blank';$('resume-link').rel='noopener noreferrer'}
  (c.skills||[]).forEach(s=>$('skills').append(make('span',s)));
  (c.services||[]).forEach((s,i)=>{const a=make('article',undefined,'service-card tilt');a.append(make('span',String(i+1).padStart(2,'0'),'number'),make('h3',s.title),make('p',s.detail));$('service-grid').append(a)});

  $('resume-name').textContent=c.name;
  (c.education||[]).forEach(e=>{const article=make('article');article.append(make('h5',e.school),make('p',[e.degree,e.period].filter(Boolean).join(' · ')));$('education-list').append(article)});
  if(!(c.education||[]).length)$('education-list').append(make('p','Add your school, college or university in the customizer.'));
  (c.projects||[]).forEach(p=>{const article=make('article');article.append(make('h5',p.title),make('p',(p.stack||[]).join(', ')));$('resume-projects').append(article)});
  (c.skills||[]).forEach(skill=>{const chip=make('span',skill);$('resume-skills').append(chip);const card=make('article',undefined,'service-card');card.append(make('span','TECHNICAL TOOLKIT','eyebrow'),make('h3',skill));$('toolkit-grid').append(card)});

  const pd=$('project-dialog');
  function openProject(p){$('project-category').textContent=p.category;$('project-title').textContent=p.title;$('project-description').textContent=p.description;['project-stack','project-features','project-links'].forEach(id=>$(id).replaceChildren());(p.stack||[]).forEach(s=>$('project-stack').append(make('span',s)));(p.features||[]).forEach(f=>$('project-features').append(make('li',f)));if(safeUrl(p.demo))$('project-links').append(link('Launch Demo ↗',p.demo,'button primary'));if(safeUrl(p.github))$('project-links').append(link('Source ↗',p.github));if(!safeUrl(p.demo)&&!safeUrl(p.github)&&c.email)$('project-links').append(link('Inquire About This Solution ↗','mailto:'+c.email,'button primary'));pd.showModal()}
  (c.projects||[]).forEach(p=>{const b=make('button',undefined,'project-card tilt');b.type='button';b.setAttribute('aria-label','Open '+p.title);b.style.setProperty('--card-accent',/^#[0-9a-f]{6}$/i.test(p.accent)?p.accent:'#ed2444');b.append(make('span',p.category),make('h3',p.title),make('p',p.description),make('small','▶ Explore project'));b.onclick=()=>openProject(p);$('project-rail').append(b)});
  document.querySelectorAll('[data-rail]').forEach(b=>b.onclick=()=>$('project-rail').scrollBy({left:Number(b.dataset.rail)*$('project-rail').clientWidth*.75,behavior:reduced?'instant':'smooth'}));
  function season(i){const s=c.journey[i];if(!s)return;document.querySelectorAll('#journey-tabs button').forEach((b,n)=>{b.setAttribute('aria-selected',String(i===n));b.tabIndex=i===n?0:-1});$('journey-panel').replaceChildren(make('span',s.period,'eyebrow'),make('h3',s.title),make('p',s.detail));$('journey-panel').setAttribute('aria-labelledby','season-'+i)}
  (c.journey||[]).forEach((s,i)=>{const b=make('button','S'+String(i+1).padStart(2,'0')+' · '+s.title);b.id='season-'+i;b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-controls','journey-panel');b.onclick=()=>season(i);b.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=(i+(e.key==='ArrowRight'?1:-1)+c.journey.length)%c.journey.length;season(next);$('season-'+next).focus()}};$('journey-tabs').append(b)});season(0);
  (c.milestones||[]).forEach(m=>{const a=make('article',undefined,'service-card');a.append(make('span',m.organization,'eyebrow'),make('h3',m.title),make('p',m.detail));$('milestone-grid').append(a)});
  (c.credentials||[]).forEach(m=>{if(safeUrl(m.url))$('credential-list').append(link(m.title+' ↗',m.url,''))});
  if(!(c.milestones||[]).length&&!(c.credentials||[]).length)$('moments').hidden=true;
  const contacts=[['WhatsApp',c.links?.whatsapp],['Email',c.email?'mailto:'+c.email:''],['Instagram',c.links?.instagram],['LinkedIn',c.links?.linkedin],['GitHub',c.links?.github]];contacts.forEach(([name,url])=>{if(safeUrl(url))$('contact-links').append(link(name+' ↗',url))});
  const chapters=[['about','The Pilot'],['services','Services'],['work','Projects'],['journey','How I Work'],['moments','Community'],['contact','Connect']];chapters.filter(([id])=>!$(id).hidden).forEach(([id,name],i)=>{const a=make('a');a.href='#'+id;a.dataset.section=id;a.append(make('span','EPISODE '+String(i+1).padStart(2,'0')),make('b',name));$('chapter-links').append(a)});
  const open=$('opening'),profiles=$('profiles');let opener,gsapReady=false;
  function initGSAP(){
    if(gsapReady||typeof gsap==='undefined'||reduced)return;
    gsapReady=true;
    if(typeof ScrollTrigger!=='undefined')gsap.registerPlugin(ScrollTrigger);
    const heroTl=gsap.timeline({defaults:{ease:'power3.out'}});
    heroTl.fromTo('.hero-copy .eyebrow',{opacity:0,y:-20},{opacity:1,y:0,duration:0.7})
      .fromTo('#hero-name',{opacity:0,y:30,scale:0.96},{opacity:1,y:0,scale:1,duration:0.9},'-=0.4')
      .fromTo('.series-label',{opacity:0,letterSpacing:'20px'},{opacity:1,letterSpacing:'12px',duration:0.8},'-=0.6')
      .fromTo('.hero-copy .meta',{opacity:0,y:15},{opacity:1,y:0,duration:0.6},'-=0.5')
      .fromTo('#hero-intro',{opacity:0,y:20},{opacity:1,y:0,duration:0.7},'-=0.4')
      .fromTo('.hero-copy .actions',{opacity:0,y:15},{opacity:1,y:0,duration:0.6},'-=0.4')
      .fromTo('#hero-photo',{opacity:0,scale:1.08,filter:'blur(8px)'},{opacity:1,scale:1,filter:'blur(0px)',duration:1.2},0)
      .fromTo('.floating-chip',{opacity:0,x:30,scale:0.9},{opacity:1,x:0,scale:1,duration:0.8,ease:'back.out(1.4)'},'-=0.6');
    if(typeof ScrollTrigger!=='undefined'){
      gsap.to('#hero-photo',{yPercent:18,ease:'none',scrollTrigger:{trigger:'#top',start:'top top',end:'bottom top',scrub:true}});
      gsap.to('.hero-copy',{y:-35,opacity:0.15,ease:'none',scrollTrigger:{trigger:'#top',start:'center top',end:'bottom top',scrub:true}});
      gsap.from('#chapter-links a',{opacity:0,y:25,stagger:0.08,duration:0.6,ease:'power2.out',scrollTrigger:{trigger:'.continue',start:'top 85%'}});
      gsap.from('.portrait-frame',{opacity:0,x:-30,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:'#about',start:'top 75%'}});
      gsap.from('#about-copy',{opacity:0,y:25,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:'#about',start:'top 75%'}});
      gsap.from('#skills span',{opacity:0,scale:0.8,stagger:0.03,duration:0.5,ease:'back.out(1.5)',scrollTrigger:{trigger:'#skills',start:'top 90%'}});
      gsap.from('#service-grid .service-card',{opacity:0,y:35,stagger:0.12,duration:0.75,ease:'power3.out',scrollTrigger:{trigger:'#services',start:'top 75%'}});
      gsap.from('#project-rail .project-card',{opacity:0,y:45,scale:0.96,stagger:0.1,duration:0.85,ease:'power3.out',scrollTrigger:{trigger:'#work',start:'top 75%'}});
      gsap.from('#toolkit-grid .service-card',{opacity:0,y:25,stagger:0.05,duration:0.6,ease:'power2.out',scrollTrigger:{trigger:'#skills-section',start:'top 75%'}});
      gsap.from('.contact h2',{opacity:0,y:30,scale:0.9,duration:0.9,ease:'power4.out',scrollTrigger:{trigger:'#contact',start:'top 80%'}});
      gsap.from('#contact-links a',{opacity:0,y:20,stagger:0.08,duration:0.6,ease:'power2.out',scrollTrigger:{trigger:'#contact',start:'top 85%'}});
    }
  }
  function stage(which){document.querySelectorAll('header,main,footer').forEach(el=>el.inert=which!=='home');open.hidden=which!=='opening';profiles.hidden=which!=='profiles';document.body.style.overflow=which==='home'?'':'hidden';if(which==='profiles')profiles.querySelector('button').focus();if(which==='home'){setTimeout(()=>{initGSAP();if(typeof ScrollTrigger!=='undefined')ScrollTrigger.refresh()},80)}}
  document.querySelector('.skip-intro').onclick=()=>stage('profiles');document.querySelector('.play-start').onclick=()=>stage('profiles');
  $('replay').onclick=()=>{opener=document.activeElement;stage('opening');open.querySelector('.skip-intro').focus()};
  const orders={main:['about','services','work','journey','moments'],recruiter:['work','about','journey','services','moments'],developer:['work','services','about','journey','moments'],creative:['journey','work','about','moments','services']};
  document.querySelectorAll('[data-profile]').forEach(b=>b.onclick=()=>{stage('home');const target={main:'top',developer:'work',creative:'services',recruiter:'profile'}[b.dataset.profile];document.getElementById(target).scrollIntoView({behavior:reduced?'instant':'smooth'});$('play-intro').focus({preventScroll:true})});stage('opening');
  document.addEventListener('keydown',e=>{if(!open.hidden&&(e.key==='Enter'||e.key==='Escape')){e.preventDefault();stage('profiles')}else if(!profiles.hidden&&e.key==='Escape'){stage('home');$('play-intro').focus()}});
  $('menu-toggle').onclick=()=>{const n=document.querySelector('nav');const expanded=n.classList.toggle('open');$('menu-toggle').setAttribute('aria-expanded',String(expanded))};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{document.querySelector('nav').classList.remove('open');$('menu-toggle').setAttribute('aria-expanded','false')});
  document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()})});
  const slides=[{title:c.name,text:c.intro},...(c.projects||[]).map(p=>({title:p.title,text:p.category+' · '+p.description})),{title:'Let’s connect',text:c.role+' · '+c.location}];let slide=0,paused=false,timer;
  function showSlide(){const s=slides[slide];$('slide-count').textContent=String(slide+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');$('slide-title').textContent=s.title;$('slide-text').textContent=s.text}
  function startTimer(){clearInterval(timer);if(!reduced&&!paused)timer=setInterval(()=>{slide=(slide+1)%slides.length;showSlide()},5000)}
  $('play-intro').onclick=()=>{slide=0;paused=reduced;$('slide-pause').textContent=paused?'Play':'Pause';showSlide();$('intro-dialog').showModal();startTimer()};$('intro-dialog').addEventListener('close',()=>clearInterval(timer));
  $('slide-next').onclick=()=>{slide=(slide+1)%slides.length;showSlide();startTimer()};$('slide-prev').onclick=()=>{slide=(slide-1+slides.length)%slides.length;showSlide();startTimer()};$('slide-pause').onclick=()=>{paused=!paused;$('slide-pause').textContent=paused?'Play':'Pause';startTimer()};$('intro-dialog').onkeydown=e=>{if(e.key==='ArrowRight'){$('slide-next').click();e.preventDefault()}if(e.key==='ArrowLeft'){$('slide-prev').click();e.preventDefault()}if(e.code==='Space'&&e.target.tagName!=='BUTTON'){$('slide-pause').click();e.preventDefault()}};
  if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const a=document.querySelector(`[data-section="${e.target.id}"]`);a?.classList.add('seen')}}),{threshold:.12});document.querySelectorAll('.chapter').forEach(e=>{if(!reduced)e.classList.add('reveal-ready');io.observe(e)})}
  if(fine&&!reduced){const cursor=$('cursor');document.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.classList.toggle('active',Boolean(e.target.closest('button,a')))});document.querySelector('.hero').addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$('hero-photo').style.transform=`perspective(1200px) rotateY(${x*6}deg) rotateX(${-y*4}deg) translateX(${x*12}px)`});document.querySelectorAll('.tilt').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(1200px) rotateY(${x*9}deg) rotateX(${-y*9}deg)`});el.addEventListener('pointerleave',()=>el.style.transform='')})}
})();
