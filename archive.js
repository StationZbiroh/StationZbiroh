(function(){
  const pages={
    overview:[['stanice-zbiroh.html','Stanice Zbiroh timeline'],['why-this-site.html','Why is this site here?']],
    station:[['stanice-zbiroh.html','Master station timeline'],['stanice-zbiroh-cs.html','Historie stanice · česky'],['stanice-zbiroh-de.html','Bahnhofsgeschichte · Deutsch'],['hotel-borek.html','Hotel Borek'],['hotel-borek-interior-postcard.html','Hotel interior postcard'],['hotel-borek-postcard-text.html','Postcard text and dating'],['oak-tree.html','The oak tree']],
    industry:[['factory-catalogue.html','Factory catalogue'],['brandeis-eisenschimmel-factory-images.html','Factory images'],['borek-silo-documents.html','Silo documents'],['borek-aurich-silo-research.html','Aurich and the silo question'],['strousberg.html','Strousberg overview'],['strousberg-zbirow-report.html','1875 industrial report'],['strousberg-memoir-summary.html','Memoir summary'],['strousberg-reputation.html','Reputation and evidence'],['economist-strousberg-1875.html','The Economist, 1875'],['property-rights.html','Property-rights research']],
    people:[['emil-brandeis.html','Emil Brandeis'],['franz-eisenschimmel.html','Franz Eisenschimmel — engineer'],['valtr-eisenschimmel.html','Dr Valtr Eisenschimmel — chemist'],['people.html','Josef Švejkovský — Kařez tool manufacturer'],['emil-goldschmied.html','Emil and Ludwig Goldschmied'],['goldschmied-borek-1879.html','Goldschmied and Borek, 1879'],['strousberg.html','Bethel Henry Strousberg']],
    sources:[['connected-timeline.html','Connected historical timeline'],['discovery-trail.html','Discovery trail'],['source-catalogue.html','Source catalogue'],['research-register.html','Page-by-page research register'],['people-and-organisations.html','People and organisations'],['archive-guide.html','Archive guide'],['research-index.json','Machine-readable research index'],['METHODOLOGY.md','Research methodology'],['research/TIMELINE.md','Working timeline'],['research/BOREK_INDUSTRIAL_HISTORY.md','Industrial research notes'],['research/HOTEL-BOREK.md','Hotel Borek notes']]
  };
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const pageMeta={
    'why-this-site.html':['Why is this site here?','Archive purpose and scope'],
    'archive-guide.html':['Archive orientation','Method and scope'],
    'source-catalogue.html':['Finding aid','Cataloguing in progress'],
    'research-register.html':['Research control','Page-by-page assessment'],
    'connected-timeline.html':['Historical synthesis','Documented and reported chronology'],
    'people-and-organisations.html':['Research directory','Names, variants and evidence status'],
    'people.html':['People','Josef Švejkovský · documented 7 June 1945'],
    'valtr-eisenschimmel.html':['People','Documented biography · family connection'],
    'franz-eisenschimmel.html':['People','Engineer · industrial founder'],
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
  const connections={
    'index.html':[
      ['Central question','stanice-zbiroh.html','The station chronology provides the documentary framework for the archive’s central question: why a station of this scale was built here.'],
      ['Industrial context','factory-catalogue.html','The factory catalogue shows the later scale and range of Borek industry, but it should not by itself be used to explain a station built earlier.'],
      ['Long chronology','strousberg.html','The Strousberg material pushes the industrial history back into the nineteenth century and helps frame the longer transport and property context.']
    ],
    'stanice-zbiroh.html':[
      ['Documented context','hotel-borek.html','Hotel Borek belongs to the station settlement and helps show that this was more than an isolated passenger building.'],
      ['Possible explanation','factory-catalogue.html','The Borek factory’s logistical reference to Zbiroh station may help explain the station’s continuing importance; the date of the catalogue is later than the station’s construction, so causation remains unproven.'],
      ['Earlier landscape','strousberg.html','Strousberg’s integrated Zbirow project provides nineteenth-century industrial and railway context preceding the station building of about 1910.'],
      ['Physical setting','oak-tree.html','The protected oak records connect the architectural history of the station with the survival and management of its surrounding landscape.']
    ],
    'stanice-zbiroh-cs.html':[
      ['Související výzkum','hotel-borek.html','Hotel Borek pomáhá zasadit nádraží do širšího sídelního a průmyslového prostředí.'],
      ['Možná souvislost','factory-catalogue.html','Tovární katalog dokládá logistickou vazbu na stanici Zbiroh, ale sám o sobě nedokazuje, proč byla nádražní budova kolem roku 1910 postavena v tomto rozsahu.'],
      ['Starší kontext','strousberg.html','Strousbergův průmyslový systém rozšiřuje časový rámec výzkumu do 19. století.']
    ],
    'stanice-zbiroh-de.html':[
      ['Verwandte Forschung','hotel-borek.html','Das Hotel Borek ordnet den Bahnhof in eine größere Siedlungs- und Industrielandschaft ein.'],
      ['Möglicher Zusammenhang','factory-catalogue.html','Der Fabrikkatalog belegt eine logistische Verbindung zum Bahnhof Zbiroh, erklärt aber allein nicht den Umfang des um 1910 errichteten Bahnhofsgebäudes.'],
      ['Früherer Kontext','strousberg.html','Strousbergs Industriesystem erweitert den zeitlichen Rahmen der Untersuchung bis ins 19. Jahrhundert.']
    ],
    'hotel-borek.html':[
      ['Place connection','stanice-zbiroh.html','The hotel and station form part of the same transport landscape; their relationship should be tested through maps, timetables, ownership records and dated images.'],
      ['Industrial context','factory-catalogue.html','References to a factory hotel and worker infrastructure in the Borek industrial material may illuminate the hotel’s function, but identity between institutions must be demonstrated rather than assumed.'],
      ['Property question','property-rights.html','The hotel’s title history is one branch of the wider fragmentation of the Strousberg-era estate and industrial properties.']
    ],
    'hotel-borek-interior-postcard.html':[
      ['Same object group','hotel-borek-postcard-text.html','The reverse side supplies postal, printing and address evidence that can refine the dating of the interior image.'],
      ['Wider setting','hotel-borek.html','The Hotel Borek overview places this room image within the building’s chronology and unresolved questions about use and ownership.'],
      ['Comparative evidence','factory-catalogue.html','Factory material referring to social infrastructure may provide context for the hotel, although it does not by itself identify the photographed interior.']
    ],
    'hotel-borek-postcard-text.html':[
      ['Object connection','hotel-borek-interior-postcard.html','The image and reverse must be read together: architectural content and postal evidence answer different dating questions.'],
      ['Historical context','hotel-borek.html','Names, addresses and capacity claims from the card can be compared with the hotel chronology and future business or land-register evidence.']
    ],
    'oak-tree.html':[
      ['Landscape connection','stanice-zbiroh.html','The oak is part of the surviving station environment and provides a separate administrative chronology within the same physical site.'],
      ['Property context','property-rights.html','Changes in ownership and land division may matter to the tree’s setting, but legal protection and historical title are distinct questions.']
    ],
    'factory-catalogue.html':[
      ['Transport connection','stanice-zbiroh.html','The catalogue’s references to Kařez and Zbiroh station are central to the transport question, but the precise catalogue date must be established before chronological conclusions are drawn.'],
      ['Company history','emil-brandeis.html','The Brandeis name links the catalogue to biographical research; a shared name is not sufficient to identify a particular Emil Brandeis without company and family records.'],
      ['Built environment','hotel-borek.html','References to worker housing and a factory hotel may help reconstruct the industrial settlement around Borek.'],
      ['Technical branch','borek-silo-documents.html','The silo sheets provide a focused example of the agricultural and storage technology represented within the wider company history.']
    ],
    'brandeis-eisenschimmel-factory-images.html':[
      ['Company context','factory-catalogue.html','The images and catalogue document different aspects of the same industrial enterprise: physical scale and commercial/technical range.'],
      ['Identity caution','emil-brandeis.html','Factory association and the Brandeis surname should be kept separate from identification of the documented Holocaust victim until linking records are found.'],
      ['Site chronology','property-rights.html','Dated images may help test phases of expansion, demolition or reuse against parcel and ownership records.']
    ],
    'borek-silo-documents.html':[
      ['Interpretive companion','borek-aurich-silo-research.html','The research page tests what the name Aurich and the patent language might mean while preserving the documents as the primary evidence.'],
      ['Industrial range','factory-catalogue.html','The silo material is consistent with an agricultural-machinery concern, but the exact relationship between the sheets and a particular catalogue issue remains to be established.'],
      ['Factory setting','brandeis-eisenschimmel-factory-images.html','Factory images provide physical context for the enterprise that issued or used the printed silo material.']
    ],
    'borek-aurich-silo-research.html':[
      ['Primary evidence','borek-silo-documents.html','The photographed Borek sheets are the evidential starting point; all claims about date, inventor or patent ownership must return to those documents and external registers.'],
      ['Broader production','factory-catalogue.html','The catalogue places silo technology within a wider agricultural and engineering product range.'],
      ['Later site use','property-rights.html','Any connection between the technology and later use of the Borek site must be tested against property and operational records, not inferred from technical similarity.']
    ],
    'strousberg.html':[
      ['Contemporary evidence','strousberg-zbirow-report.html','The 1875 report documents how the Zbirow industrial project was presented near the point of financial collapse.'],
      ['Self-representation','strousberg-memoir-summary.html','The 1876 memoir supplies Strousberg’s own defence and explanation of the integrated system.'],
      ['External reporting','economist-strousberg-1875.html','The Economist provides a contemporary financial perspective independent of Strousberg’s later memoir.'],
      ['Aftermath','property-rights.html','The property page follows the fragmentation of the estate and industrial system after the collapse.']
    ],
    'strousberg-zbirow-report.html':[
      ['Contemporary comparison','economist-strousberg-1875.html','Both sources belong to 1875, but they have different authors, audiences and purposes; agreement and disagreement should be compared page by page.'],
      ['Retrospective account','strousberg-memoir-summary.html','Strousberg’s 1876 memoir can be read against the report, remembering that it was written after collapse as a defence.'],
      ['Parcel evidence','goldschmied-borek-1879.html','The 1879 cadastral evidence shows later named property relationships and should not be projected backwards into the 1875 report without a documented chain.']
    ],
    'economist-strousberg-1875.html':[
      ['Parallel source','strousberg-zbirow-report.html','A second contemporary 1875 report allows comparison of financial claims, industrial descriptions and viewpoint.'],
      ['Interested response','strousberg-memoir-summary.html','The memoir shows how Strousberg later answered the kind of criticism and financial narrative represented in contemporary reporting.'],
      ['Long-term interpretation','strousberg-reputation.html','Later accounts transformed contemporary controversy into a durable reputation; the reputation page tests when particular claims entered the record.']
    ],
    'strousberg-memoir-summary.html':[
      ['External check','economist-strousberg-1875.html','Contemporary external reporting provides a necessary check on a memoir written in self-defence.'],
      ['Project evidence','strousberg-zbirow-report.html','The 1875 industrial report can be compared with Strousberg’s retrospective description of what he intended to build.'],
      ['Reputation','strousberg-reputation.html','The memoir belongs to the history of Strousberg’s reputation as well as to the history of his enterprises.']
    ],
    'strousberg-reputation.html':[
      ['Primary testimony','strousberg-memoir-summary.html','The memoir is indispensable evidence of Strousberg’s defence but cannot independently settle accusations against him.'],
      ['Contemporary finance','economist-strousberg-1875.html','The 1875 report anchors reputational discussion in reporting produced during the crisis rather than only in later biographies.'],
      ['Material aftermath','property-rights.html','The dispersal of assets offers a documentary route for testing financial and ownership claims apart from moral labels.']
    ],
    'property-rights.html':[
      ['Before collapse','strousberg-zbirow-report.html','The 1875 report describes the industrial system near collapse; the property research asks what happened to its separate components afterwards.'],
      ['1879 evidence','goldschmied-borek-1879.html','Cadastral names and parcels provide one fixed point in the later chain, while relationships to earlier creditors remain unproven.'],
      ['Hotel branch','hotel-borek.html','Hotel Borek requires its own title chain rather than being assumed to have followed the castle estate or factory.'],
      ['Railway branch','stanice-zbiroh.html','Railway property and the later station building form another distinct chain that should not be collapsed into industrial ownership.']
    ],
    'emil-brandeis.html':[
      ['Company name','factory-catalogue.html','The catalogue documents a Brandeis-associated company, while this page asks whether records identify which individual or generation stood behind particular business activity.'],
      ['Visual record','brandeis-eisenschimmel-factory-images.html','Factory images preserve the industrial setting connected with the family name but do not establish personal identity.'],
      ['Property chronology','property-rights.html','Company and property records may provide the strongest route for distinguishing family members and their roles over time.']
    ],
    'emil-goldschmied.html':[
      ['Dated anchor','goldschmied-borek-1879.html','The 1879 material provides a chronological and cadastral point against which individual identities can be tested.'],
      ['Name distinction','property-rights.html','The similar Goldschmied and Goldschmidt names must remain separate unless a relationship is demonstrated by records.'],
      ['Industrial setting','strousberg.html','The earlier Strousberg system explains why later property names matter, but it does not itself prove continuity of control.']
    ],
    'goldschmied-borek-1879.html':[
      ['Identity research','emil-goldschmied.html','The personal source group may help distinguish Emil and Ludwig Goldschmied and connect names to occupations, residences and dates.'],
      ['Ownership chain','property-rights.html','The cadastral evidence belongs within the larger post-1875 reconstruction of separate estate and industrial properties.'],
      ['Chronological boundary','strousberg-zbirow-report.html','The four-year interval between the 1875 report and 1879 cadastral evidence is historically significant; continuity across it requires documents.']
    ],
    'archive-guide.html':[
      ['Apply the method','source-catalogue.html','The source catalogue shows how evidential status and provenance are applied to actual document groups.'],
      ['Visible gaps','research-register.html','The research register turns the method into a page-by-page list of strengths and documentary priorities.']
    ],
    'source-catalogue.html':[
      ['Editorial control','research-register.html','The research register maps each source group to the public page using it and records the next work required.'],
      ['Method','archive-guide.html','The archive guide explains how to interpret labels such as documented, working interpretation and unresolved.']
    ],
    'research-register.html':[
      ['Source control','source-catalogue.html','The source catalogue records the principal items and collections to which the page-level priorities refer.'],
      ['Reading rules','archive-guide.html','The archive guide explains the evidential language used throughout this register.']
    ],
    'connected-timeline.html':[
      ['Source control','source-catalogue.html','The source catalogue identifies the documents behind this synthesis and records missing provenance.'],
      ['Unfinished work','research-register.html','The research register shows which chronological links still depend on deeds, company files, railway records or identity evidence.']
    ]
  };
  const label={overview:'Overview',station:'Station & landscape',industry:'Industry & property',people:'People',sources:'Sources & method'};
  const menu=(key)=>`<details><summary>${label[key]}</summary><div class="archive-menu">${pages[key].map(([href,text])=>`<a href="${href}"${current===href.toLowerCase()?' aria-current="page"':''}>${text}</a>`).join('')}</div></details>`;
  const old=document.querySelector('.entitybar,.bar');
  const nav=document.createElement('nav');nav.className='archive-nav';nav.setAttribute('aria-label','Archive navigation');
  nav.innerHTML=`<div class="archive-nav__inner"><a class="archive-brand" href="stanice-zbiroh.html">Stanice Zbiroh Archive</a><div class="archive-nav__groups">${menu('overview')}${menu('station')}${menu('industry')}${menu('people')}${menu('sources')}</div></div>`;
  if(old) old.replaceWith(nav); else {const anchor=document.querySelector('.site-language-bar');(anchor||document.body.firstChild).after(nav)}
  const main=document.querySelector('main');if(main){main.id='main-content';main.tabIndex=-1}
  const skip=document.createElement('a');skip.className='archive-skip';skip.href='#main-content';skip.textContent='Skip to main content';document.body.prepend(skip);
  const header=document.querySelector('header');
  if(header){const meta=pageMeta[current]||['Research page','Research in progress'];const context=document.createElement('div');context.className='archive-context';context.innerHTML=`<span class="archive-chip">${meta[0]}</span> <span class="archive-chip archive-chip--working">${meta[1]}</span><br>Part of the <a href="index.html">Stanice Zbiroh Historical Research Archive</a> · <a href="archive-guide.html">How to use this archive</a> · <a href="source-catalogue.html">Source catalogue</a>`;header.after(context)}
  document.querySelectorAll('.archive-nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.archive-nav details').forEach(x=>{if(x!==d)x.open=false})}));
  document.addEventListener('click',e=>{if(!e.target.closest('.archive-nav'))document.querySelectorAll('.archive-nav details').forEach(d=>d.open=false)});
  const footer=document.querySelector('footer');if(footer){footer.className='archive-site-footer';footer.innerHTML='<nav aria-label="Archive information"><a href="archive-guide.html">Archive guide</a><a href="source-catalogue.html">Source catalogue</a><a href="METHODOLOGY.md">Methodology</a><a href="https://github.com/stationzbiroh/StationZbiroh">Version history</a></nav><div><strong>Stanice Zbiroh Historical Research Archive</strong><br>Independent public research maintained at the former Zbiroh station. Evidence, corrections and contradictory findings are retained as the archive develops.</div>'}
  if(main&&connections[current]){const section=document.createElement('section');section.className='archive-connections';section.setAttribute('aria-labelledby','connections-heading');section.innerHTML=`<h2 id="connections-heading">Connections within the archive</h2><p class="archive-connections__intro">These notes show where this page meets other parts of the research. “Possible” connections remain questions until supported by the necessary records.</p>${connections[current].map(([type,href,copy])=>`<div class="archive-connection"><div class="archive-connection__type">${type}</div><p>${copy} <a href="${href}">Follow this connection →</a></p></div>`).join('')}`;const contribute=main.querySelector('section.contribute');if(contribute)main.insertBefore(section,contribute);else main.appendChild(section)}
  if(current==='stanice-zbiroh.html'){
    const timelineLinks={
      '1862':[['connected-timeline.html','Connected timeline']],
      'After the mid-19th century · documented by 1869–1881 map':[['source-catalogue.html','Source catalogue']],
      '1868–1875':[['strousberg.html','Strousberg and Zbirow'],['strousberg-zbirow-report.html','1875 industrial report']],
      '1 March 1875':[['strousberg-zbirow-report.html','Goldschmidt report'],['strousberg-memoir-summary.html','Memoir context'],['emil-goldschmied.html','Goldschmidt / Goldschmied distinction']],
      '1875':[['strousberg.html','Strousberg overview'],['economist-strousberg-1875.html','The Economist, 1875'],['property-rights.html','Property aftermath']],
      '1879':[['hotel-borek.html','Hotel Borek chronology'],['goldschmied-borek-1879.html','1879 cadastral evidence']],
      'Before the new station':[['hotel-borek.html','Hotel Borek'],['hotel-borek-interior-postcard.html','Hotel interior evidence']],
      'After Strousberg · exact dates not yet established':[['hotel-borek.html','Tichý and Brandeis ownership account'],['property-rights.html','Property research']],
      '1881':[['emil-brandeis.html','Brandeis family and factory timeline'],['property-rights.html','Factory ownership questions']],
      '1887':[['emil-brandeis.html','Brandeis factory chronology'],['factory-catalogue.html','Later factory evidence']],
      '1907':[['emil-brandeis.html','Father-and-son identity hypothesis']],
      'By 1908 · continuing into the early Czechoslovak period':[['emil-brandeis.html','1908 Brandeis evidence'],['brandeis-eisenschimmel-factory-images.html','Factory images']],
      'October 1911':[['emil-brandeis.html','Factory and station chronology'],['source-catalogue.html','Station source group']],
      '1911–1912 · another source gives 1912–1913':[['connected-timeline.html','Compare the full chronology']],
      '1913':[['hotel-borek.html','Station settlement context']],
      'Early 20th century · exact postcard date under research':[['hotel-borek.html','Hotel and station'],['hotel-borek-postcard-text.html','Postcard dating evidence']],
      '1918 onward':[['factory-catalogue.html','Factory in the Czechoslovak period']],
      '1919':[['factory-catalogue.html','1919 company source'],['emil-brandeis.html','Brandeis timeline']],
      'c. 1920':[['factory-catalogue.html','Corporate combination evidence'],['emil-brandeis.html','Company chronology']],
      '1920s–1930s · exact catalogue date unresolved':[['factory-catalogue.html','Factory catalogue'],['brandeis-eisenschimmel-factory-images.html','Factory images'],['borek-silo-documents.html','Silo documents']],
      '20th century':[['research-register.html','Outstanding station research']],
      '1932':[['emil-brandeis.html','Factory after 1932'],['property-rights.html','Corporate and property questions']],
      'Late 1930s':[['brandeis-eisenschimmel-factory-images.html','Factory image evidence'],['emil-brandeis.html','Later factory chronology']],
      '1939–1945':[['emil-brandeis.html','Brandeis, persecution and wartime questions']],
      '1952?':[['emil-brandeis.html','Factory-fire research question']],
      '1953 and 1969':[['hotel-borek.html','Post-war hotel chronology']],
      'October 1992':[['oak-tree.html','Changing station landscape']],
      '26 October 1995':[['oak-tree.html','Landscape and protection history']],
      'By 2012':[['property-rights.html','Separate railway-property chain']],
      'Night of 27–28 April 2012':[['connected-timeline.html','Closure in the master chronology']],
      '2012':[['property-rights.html','Railway property research']],
      'After 2012':[['archive-guide.html','Present stewardship and editorial position']],
      '2020':[['factory-catalogue.html','Catalogue and analysis'],['source-catalogue.html','Catalogue source record']],
      'Present':[['connected-timeline.html','Connected historical timeline'],['research-register.html','Research priorities']]
    };
    main.querySelectorAll('.timeline article').forEach(article=>{const date=article.querySelector('.date')?.textContent.trim();const links=timelineLinks[date];if(!links)return;const p=document.createElement('p');p.className='timeline-links';p.innerHTML='<strong>Related archive branches:</strong> '+links.map(([href,label])=>`<a href="${href}">${label}</a>`).join(' · ');article.appendChild(p)});
  }
})();
