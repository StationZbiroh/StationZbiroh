/* Short editorial summaries for the listening feature. Revise alongside the pages. */
(() => {
  const narratives = {
    'archive-guide': 'This guide explains how to use the archive and read its evidence labels. It introduces the station and the wider Borek landscape, then sets out the limits of the material gathered so far. Where a source is missing or a connection remains uncertain, the archive aims to show that uncertainty.',
    'archive-history': 'This record follows how the public archive has changed over time. Its dates describe website updates, which may concern events from much earlier periods. The entries offer a route back to the research as it developed, including questions that may later be revised.',
    'borek-airfield': 'This page gathers the available evidence for military aviation at Borek and places it beside maps, aerial views and local history. The location and later use of the airfield still invite closer checking. Suggested links with nearby industrial activity remain questions until documents can establish them.',
    'borek-aurich-silo-research': 'Borek factory literature points toward silo equipment and the Richard Aurich system for preserving fodder. This page explores what those printed sources may tell us about a change in production. Patent rights, manufacturing arrangements and the fate of the equipment remain subjects for further research.',
    'borek-factory': 'This chronology brings scattered evidence about the Borek industrial site into one sequence. It connects the factory with people, products and the neighbouring station while pointing to more detailed source pages. Changes of company name or branding do not, on their own, settle questions about ownership or production.',
    'borek-silo-documents': 'These photographed documents are a starting point for investigating Borek silo technology and its commercial setting. The page records their stated provenance and lets readers examine the source images. Dating, authorship and the precise relationship to manufacture at Borek require further corroboration.',
    'brandeis-eisenschimmel-factory-images': 'Historical views of the factory help locate buildings and trace how the site was represented. This gallery keeps original source images distinguishable from enhanced versions. A photograph may reveal a visible change, while its date, cause and ownership often require separate documentary evidence.',
    'connected-timeline': 'This is the shared timeline for the station, factory, hotel, airfield and people of the Zbiroh landscape. It brings their overlapping histories into one reading path and links outward to detailed records. Labels distinguish documented events from interpretations and open questions.',
    'd5-motorway-1995': 'This page examines the D5 motorway and its effect on the setting of the former station and nearby places. Historical images offer points of comparison with the changed landscape. The dates and causes of particular changes should be checked against planning and construction records.',
    'd5-motorway-pictures-archive': 'This image archive places an older view of the station and Hotel Borek beside a clearer digital presentation. The photographed source remains available so readers can compare them. The publisher, photographer and exact date of the original view are still being researched.',
    'discovery-trail': 'Research can begin with a clue that later proves incomplete or mistaken. This trail records how leads were followed and tested, including suggestions from digital tools. The account distinguishes a useful question from evidence that can support a historical claim.',
    'economist-strousberg-1875': 'A contemporary Economist report offers another perspective on Strousberg’s industrial and financial crisis. This page explains why the article matters and places its claims beside other surviving records. A report from the period is valuable evidence, though its account still needs to be read in context.',
    'emil-brandeis': 'This page traces references to the Brandeis family and the Borek works, while investigating which Emil Brandeis appears in each record. A Holocaust victim record identifies a man of that name, but a connection to the factory has not been established. Company, family and residence records may help resolve the identities.',
    'emil-goldschmied': 'The Goldschmied names appear near the story of Borek after Strousberg’s collapse. This page compares records and possible roles in finance, ownership and industry. Similar names do not establish that every reference concerns the same person or family.',
    'factory-catalogue': 'The surviving factory catalogue gives a direct view of the products and commercial language of the Brandeis–Eisenschimmel enterprise. This page presents the document and considers what it can show about the company. Its exact date and the location of every advertised activity still merit checking.',
    'franz-eisenschimmel': 'Franz Eisenschimmel’s engineering and machinery business forms part of the later Borek company story. This profile gathers the available family and industrial references. It follows what the documents indicate while leaving uncertain the precise timing and terms of each business connection.',
    'goldschmied-borek-1879': 'An 1879 land record may help bridge the gap between Strousberg’s collapse and the later Borek factory story. This page explains what the record appears to establish and where the interpretation begins. More property and company records may clarify the transfer of control.',
    'hotel-borek-interior-postcard': 'A postcard offers a rare view of Hotel Borek’s large interior hall and gives a printed measurement. This page preserves the source view alongside a clearer presentation. The image supports study of the room, while its precise date and wider history remain open to investigation.',
    'hotel-borek-postcard-text': 'The reverse of a Hotel Borek postcard carries printed wording, handwriting and postal details. This close reading separates legible marks from tentative readings and considers how they might help date the object. The postcard can suggest connections that other sources may confirm or challenge.',
    'hotel-borek': 'This page follows Hotel Borek as part of the station’s wider social and industrial landscape. Photographs, postcards and written references provide fragments of its history. Its ownership, uses and later fate are being assembled from sources whose limits are kept visible.',
    'index': 'The archive explores the railway station, Borek works, Hotel Borek and the people who moved through this landscape. Its pages bring documents and images together so readers can follow both the history and the research behind it. Some links between places and people remain hypotheses awaiting further evidence.',
    'oak-tree': 'A mature oak near the former station has a story within the changing railway landscape. This page brings together photographs and records that may help establish its age and significance. It also follows the effort to understand and protect the tree without claiming more than the evidence can show.',
    'object-timelines': 'These timelines give the station, factory, hotel and other places their own chronological paths. They help readers move between connected events without losing track of the underlying sources. A shared event may appear in several places, with its evidence linked back to the relevant record.',
    'people-and-organisations': 'This directory helps readers find the people, companies and institutions named across the archive. Variant spellings and unresolved identities are retained where they matter. Each entry is a route into the evidence, rather than a claim that every relationship has been settled.',
    'people': 'A postwar envelope points to Josef Švejkovský and possible industrial activity around Kařez. This page presents the object and explores what it might mean for the transition after the Brandeis period. The exact nature of his role requires further records.',
    'property-rights': 'This investigation asks who owned, financed or controlled particular parts of the Zbiroh and Borek landscape. It follows property questions after Strousberg’s collapse and examines the documents behind each possible transfer. Use, management and ownership are treated as separate questions.',
    'research-register': 'The register shows what each archive page contains, how its evidence stands and which records would improve it. It is a practical map of ongoing research. Its assessments can change as documents emerge or earlier interpretations are corrected.',
    'source-catalogue': 'This catalogue identifies the archive’s main documents and source groups. It records provenance and describes what each source may establish. Some entries still need fuller dating, attribution or verification, and those gaps are part of the catalogue.',
    'stanice-zbiroh': 'This chronology follows the former Zbiroh station from its industrial setting through passenger use, closure and survival. Images and documents help connect changes to the wider landscape. Questions about design, ownership and particular dates remain marked where the available sources differ.',
    'stanice-zbiroh-cs': 'Tato stránka sleduje historii bývalé stanice Zbiroh od jejího průmyslového zázemí přes osobní dopravu až po uzavření a další osud. Fotografie a dokumenty ji zasazují do okolní krajiny. Tam, kde se prameny rozcházejí nebo chybějí, zůstávají závěry otevřené dalšímu výzkumu.',
    'stanice-zbiroh-de': 'Diese Chronologie verfolgt die Geschichte des ehemaligen Bahnhofs Zbiroh von seinem industriellen Umfeld über den Personenverkehr bis zur Schließung und späteren Nutzung. Bilder und Dokumente verbinden den Bahnhof mit der Landschaft. Wo Quellen fehlen oder voneinander abweichen, bleiben die Schlussfolgerungen offen.',
    'strousberg-memoir-summary': 'This page condenses Strousberg’s own account of his life and industrial system. His memoir helps explain how he presented the Zbirow enterprise and its collapse. Because it is his retrospective account, its claims are best considered alongside independent records.',
    'strousberg-reputation': 'After his business collapse, Strousberg’s reputation became a subject of argument. This page traces accusations and responses through available sources rather than offering a final verdict. The timing, motives and evidence behind each account matter to that assessment.',
    'strousberg-zbiroh-purchase': 'The acquisition of the Zbiroh estate involved an intermediate sale before it passed to Strousberg. This page follows the documented transactions and asks how the price and financing should be understood. Further legal and financial records may refine the account.',
    'strousberg-zbirow-report': 'A nineteenth-century report examines the engineering and finances of the Zbirow industrial project. This page introduces its source and offers context for reading its claims. Its figures and judgments are historical evidence to assess alongside other contemporary material.',
    'strousberg': 'This profile brings together the Zbiroh works, products, railway plans and financing associated with Bethel Henry Strousberg. It follows contemporary accounts of the system and its collapse. The archive distinguishes what was planned, built and delivered where sources permit.',
    'valtr-eisenschimmel': 'Valtr Eisenschimmel’s scientific career and persecution connect a family history with the wider industrial story. This profile presents records about his work and deportation. It aims to preserve the individual life behind the archive references while making the limits of each source clear.',
    'why-this-site': 'This page explains how a question about the former station grew into research on the factory, hotel, people and surrounding landscape. It describes the archive’s purpose and its commitment to showing sources and unresolved questions. The project can change as new evidence comes to light.',
    'working-hypotheses': 'These working ideas offer possible explanations for gaps in the Zbiroh and Borek record. Each is a question to test against documents, photographs and the physical landscape. A plausible interpretation can be revised or set aside when stronger evidence appears.'
  };

  const path = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  const narrative = narratives[path];
  if (!narrative || document.querySelector('.audio-narrative')) return;
  const language = path.endsWith('-cs') ? 'cs-CZ' : path.endsWith('-de') ? 'de-DE' : 'en-GB';
  const labels = language.startsWith('cs')
    ? {listen:'Poslechnout shrnutí stránky', pause:'Pozastavit', resume:'Pokračovat', stop:'Zastavit', title:'Shrnutí k poslechu', unavailable:'Přehrávání řeči není v tomto prohlížeči dostupné.'}
    : language.startsWith('de')
    ? {listen:'Zusammenfassung anhören', pause:'Pause', resume:'Fortsetzen', stop:'Stopp', title:'Zusammenfassung zum Anhören', unavailable:'Die Sprachausgabe ist in diesem Browser nicht verfügbar.'}
    : {listen:'Listen to this page summary', pause:'Pause', resume:'Resume', stop:'Stop', title:'Page summary for listening', unavailable:'Audio playback is unavailable in this browser.'};
  const style = document.createElement('style');
  style.textContent = '.audio-narrative{max-width:960px;margin:42px auto;padding:24px;border-top:2px solid #4169e1;background:#f1f2ee;color:#17202a;font:16px/1.65 Georgia,serif}.audio-narrative h2{font:500 1.5rem/1.25 Georgia,serif;margin:0 0 12px}.audio-narrative p{margin:0}.audio-controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 22px}.audio-controls button{padding:10px 14px;border:1px solid #4169e1;background:#4169e1;color:#fff;border-radius:4px;font:600 14px/1.3 system-ui,sans-serif;cursor:pointer}.audio-controls button.secondary{background:transparent;color:#244bb5}.audio-controls button:disabled{opacity:.5;cursor:not-allowed}.audio-controls button:focus-visible{outline:3px solid #17202a;outline-offset:3px}.audio-controls .audio-status{font:14px/1.4 system-ui,sans-serif;color:#39434a}@media(max-width:600px){.audio-narrative{padding:20px 18px}}';
  document.head.appendChild(style);
  const section = document.createElement('section');
  section.className = 'audio-narrative';
  section.setAttribute('aria-label', labels.title);
  const heading = document.createElement('h2'); heading.textContent = labels.title;
  const paragraph = document.createElement('p'); paragraph.textContent = narrative; paragraph.lang = language;
  section.append(heading, paragraph);
  const main = document.querySelector('main');
  if (main) main.appendChild(section);
  else (document.querySelector('footer') || document.body.lastElementChild)?.before(section);
  const h1 = document.querySelector('h1');
  if (!h1) return;
  const controls = document.createElement('div'); controls.className = 'audio-controls';
  const listen = document.createElement('button'); listen.type = 'button'; listen.textContent = '▶ ' + labels.listen;
  const pause = document.createElement('button'); pause.type = 'button'; pause.className = 'secondary'; pause.textContent = labels.pause; pause.hidden = true;
  const stop = document.createElement('button'); stop.type = 'button'; stop.className = 'secondary'; stop.textContent = labels.stop; stop.hidden = true;
  const status = document.createElement('span'); status.className = 'audio-status'; status.setAttribute('role','status');
  controls.append(listen, pause, stop, status);
  const lede = h1.parentElement.querySelector('.lede');
  (lede || h1).after(controls);
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    listen.disabled = true; status.textContent = labels.unavailable; return;
  }
  const synth = window.speechSynthesis;
  let utterance = null;
  function reset() { utterance = null; pause.hidden = true; stop.hidden = true; pause.textContent = labels.pause; }
  listen.addEventListener('click', () => {
    synth.cancel();
    utterance = new SpeechSynthesisUtterance(narrative);
    utterance.lang = language; utterance.rate = .95;
    const voices = synth.getVoices();
    const voice = voices.find(v => v.lang.toLowerCase() === language.toLowerCase()) || voices.find(v => v.lang.slice(0,2) === language.slice(0,2));
    if (voice) utterance.voice = voice;
    utterance.onend = reset; utterance.onerror = reset;
    pause.hidden = false; stop.hidden = false;
    synth.speak(utterance);
  });
  pause.addEventListener('click', () => {
    if (!utterance) return;
    if (synth.paused) { synth.resume(); pause.textContent = labels.pause; }
    else { synth.pause(); pause.textContent = labels.resume; }
  });
  stop.addEventListener('click', () => { synth.cancel(); reset(); });
  window.addEventListener('pagehide', () => synth.cancel());
})();
