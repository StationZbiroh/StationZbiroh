(function(){
  const pages={
    station:[['stanice-zbiroh.html','Station history'],['stanice-zbiroh-cs.html','Historie stanice · česky'],['stanice-zbiroh-de.html','Bahnhofsgeschichte · Deutsch'],['hotel-borek.html','Hotel Borek'],['hotel-borek-interior-postcard.html','Hotel interior postcard'],['hotel-borek-postcard-text.html','Postcard text and dating'],['oak-tree.html','The oak tree']],
    industry:[['factory-catalogue.html','Factory catalogue'],['brandeis-eisenschimmel-factory-images.html','Factory images'],['borek-silo-documents.html','Silo documents'],['borek-aurich-silo-research.html','Aurich and the silo question'],['strousberg.html','Strousberg overview'],['strousberg-zbirow-report.html','1875 industrial report'],['strousberg-memoir-summary.html','Memoir summary'],['strousberg-reputation.html','Reputation and evidence'],['economist-strousberg-1875.html','The Economist, 1875'],['property-rights.html','Property-rights research']],
    people:[['emil-brandeis.html','Emil Brandeis'],['emil-goldschmied.html','Emil and Ludwig Goldschmied'],['goldschmied-borek-1879.html','Goldschmied and Borek, 1879'],['strousberg.html','Bethel Henry Strousberg']],
    sources:[['source-catalogue.html','Source catalogue'],['research-register.html','Page-by-page research register'],['archive-guide.html','Archive guide'],['METHODOLOGY.md','Research methodology'],['research/TIMELINE.md','Working timeline'],['research/BOREK_INDUSTRIAL_HISTORY.md','Industrial research notes'],['research/HOTEL-BOREK.md','Hotel Borek notes']]
  };
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const pageMeta={
    'index.html':['Archive overview','Mixed evidence'],
    'archive-guide.html':['Archive orientation','Method and scope'],
    'source-catalogue.html':['Finding aid','Cataloguing in progress'],
    'research-register.html':['Research control','Page-by-page assessment'],
    'stanice-zbiroh.html':['Station & landscape','Evidence-led chronology'],
    'stanice-zbiroh-cs.html':['Station & landscape','Evidence-led chronology · Czech'],
    'stanice-zbiroh-de.html':['Station & landscape','Evidence-led chronology · German'],
    'hotel-borek.html':['Station & landscape','Evidence inventory'],
    'hotel-borek-interior-postcard.html':['Station & landscape','Primary-object analysis'],
    'hotel-borek-postcard-text.html':['Station & landscape','Transcription and dating'],
    'oak-tree.html':['Station & landscape','Administrative and field evidence'],
    'factory-catalogue.html':['Industry & property','Primary source with working analysis'],
    'brandeis-eisenschimmel-factory-images.html':['Industry & property','Primary-image group'],
    'borek-silo-documents.html':['Industry & property','Primary-document group'],
    'borek-aurich-silo-research.html':['Industry & property','Working interpretation'],
    'strousberg.html':['Industry & property','Evidence inventory'],
    'strousberg-zbirow-report.html':['Industry & property','Transcription and translation'],
    'strousberg-memoir-summary.html':['Industry & property','Interested testimony · summary'],
    'strousberg-reputation.html':['Industry & property','Historiographical assessment'],
    'economist-strousberg-1875.html':['Industry & property','Contemporary press transcription'],
    'property-rights.html':['Industry & property','Research hypothesis'],
    'emil-brandeis.html':['People','Identity research'],
    'emil-goldschmied.html':['People','Identity research in progress'],
    'goldschmied-borek-1879.html':['People','Cadastral and identity evidence']
  };
  const label={station:'Station & landscape',industry:'Industry & property',people:'People',sources:'Sources & method'};
  const menu=(key)=>`<details><summary>${label[key]}</summary><div class="archive-menu">${pages[key].map(([href,text])=>`<a href="${href}"${current===href.toLowerCase()?' aria-current="page"':''}>${text}</a>`).join('')}</div></details>`;
  const old=document.querySelector('.entitybar,.bar');
  const nav=document.createElement('nav');nav.className='archive-nav';nav.setAttribute('aria-label','Archive navigation');
  nav.innerHTML=`<div class="archive-nav__inner"><a class="archive-brand" href="index.html">Stanice Zbiroh Archive</a><div class="archive-nav__groups"><a class="archive-direct" href="index.html"${current==='index.html'?' aria-current="page"':''}>Overview</a>${menu('station')}${menu('industry')}${menu('people')}${menu('sources')}</div></div>`;
  if(old) old.replaceWith(nav); else {const anchor=document.querySelector('.site-language-bar');(anchor||document.body.firstChild).after(nav)}
  const main=document.querySelector('main');if(main){main.id='main-content';main.tabIndex=-1}
  const skip=document.createElement('a');skip.className='archive-skip';skip.href='#main-content';skip.textContent='Skip to main content';document.body.prepend(skip);
  const header=document.querySelector('header');
  if(header){const meta=pageMeta[current]||['Research page','Research in progress'];const context=document.createElement('div');context.className='archive-context';context.innerHTML=`<span class="archive-chip">${meta[0]}</span> <span class="archive-chip archive-chip--working">${meta[1]}</span><br>Part of the <a href="index.html">Stanice Zbiroh Historical Research Archive</a> · <a href="archive-guide.html">How to use this archive</a> · <a href="source-catalogue.html">Source catalogue</a>`;header.after(context)}
  document.querySelectorAll('.archive-nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.archive-nav details').forEach(x=>{if(x!==d)x.open=false})}));
  document.addEventListener('click',e=>{if(!e.target.closest('.archive-nav'))document.querySelectorAll('.archive-nav details').forEach(d=>d.open=false)});
  const footer=document.querySelector('footer');if(footer){footer.className='archive-site-footer';footer.innerHTML='<nav aria-label="Archive information"><a href="archive-guide.html">Archive guide</a><a href="source-catalogue.html">Source catalogue</a><a href="METHODOLOGY.md">Methodology</a><a href="https://github.com/stationzbiroh/StationZbiroh">Version history</a></nav><div><strong>Stanice Zbiroh Historical Research Archive</strong><br>Independent public research maintained at the former Zbiroh station. Evidence, corrections and contradictory findings are retained as the archive develops.</div>'}
})();
