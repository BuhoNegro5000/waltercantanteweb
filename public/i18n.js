(() => {
  const translations = {
    "Iniciando Experiencia...": "Starting experience...",
    "Listo para comenzar": "Ready to begin",
    "Cargando Arte y Sonido...": "Loading art and sound...",
    "Abrir Menú": "Open menu",
    "Inicio": "Home",
    "La Historia": "The Story",
    "Música": "Music",
    "Trayectoria": "Tour",
    "Videos": "Videos",
    "Galería": "Gallery",
    "Fotos": "Photos",
    "Contrataciones": "Bookings",
    "Sitio Oficial": "Official Website",
    "DE ARGENTINA PARA EL MUNDO": "FROM ARGENTINA TO THE WORLD",
    "El embajador del ritmo y el sabor. Una fusión de salsa, cumbia y calor latinoamericano con sello argentino.": "An ambassador of rhythm and flavor. A fusion of salsa, cumbia, and Latin warmth with an unmistakably Argentine spirit.",
    "Escuchar Ahora": "Listen Now",
    "Ver Videos": "Watch Videos",
    "Desliza para explorar": "Scroll to explore",
    "El Sabor de la Voz": "The Flavor of His Voice",
    "Embajador de la Alegría": "An Ambassador of Joy",
    "Una Voz.": "One Voice.",
    "Una Historia.": "One Story.",
    "Walter Flores es el pulso y la energía de la música tropical. Representa el calor rítmico de Argentina para un público global, uniendo salsa, cumbia y sabrosura.": "Walter Flores brings the pulse and energy of tropical music to audiences around the world, blending salsa, cumbia, and Latin flavor with the warmth of Argentina.",
    "Nacido con el ritmo en las venas en las playas y calles de Mar del Plata, Walter descubrió su voz bajo el sol del Atlántico. Su canto evoca la percusión caliente, los metales potentes de la salsa y el pulso alegre de la cumbia argentina, transformando la música popular en una fiesta universal.": "Raised among the beaches and streets of Mar del Plata, Walter discovered his voice beneath the Atlantic sun. His singing evokes lively percussion, bold salsa brass, and the joyful pulse of Argentine cumbia, turning popular music into a celebration.",
    "A lo largo de su carrera, ha llevado la calidez del ritmo latino a los escenarios más exigentes de América Latina, Europa y Asia, demostrando que el baile es un puente que une corazones a nivel mundial.": "Throughout his career, he has brought the warmth of Latin rhythms to stages across Latin America, Europe, and Asia, showing how music and dance can bring people together.",
    "El ritmo está en cada latido. Cuando canto, llevo conmigo el calor del mar, el compás de los timbales, el sabor de la cumbia bonaerense y la alegría de mi gente. Le canto a la fiesta de estar vivos.": "Rhythm lives in every heartbeat. When I sing, I carry the warmth of the sea, the pulse of the timbales, the flavor of Buenos Aires cumbia, and the joy of my people. I sing to celebrate being alive.",
    "Discografía & Escucha": "Discography & Listening",
    "Universo ": "Musical ",
    "Musical": "Universe",
    "Siente el sabor de los metales, la percusión y la energía contagiosa de la cumbia y la salsa.": "Feel the brass, percussion, and infectious energy of cumbia and salsa.",
    "En Reproducción": "Now Playing",
    "Anterior": "Previous",
    "Reproducir": "Play",
    "Siguiente": "Next",
    "Mutear": "Mute",
    "Escuchar Álbum": "Listen to Album",
    "Escuchar Sencillo": "Listen to Single",
    "Escuchar Tema": "Listen to Track",
    "Álbum Completo • Salsa & Clave": "Full Album • Salsa & Clave",
    "Canciones del Álbum:": "Album Tracks:",
    "1. En el Contestador": "1. On the Answering Machine",
    "2. Todo Comenzó para Siempre": "2. It All Began Forever",
    "3. Embustera": "3. Deceiver",
    "4. Diosa del Mar": "4. Goddess of the Sea",
    "5. Mirar al Cielo": "5. Looking at the Sky",
    "Sencillo Destacado • Cumbia Romántica": "Featured Single • Romantic Cumbia",
    "El gran éxito de Walter Flores. Una apasionada cumbia romántica que suena con fuerza en todas las emisoras de radio latina.": "A romantic cumbia single by Walter Flores, carried by a passionate rhythm and a warm tropical sound.",
    "Tema de \"Pulsares Salsa\" • Salsa & Sabor": "From \"Pulsares Salsa\" • Salsa & Flavor",
    "Una vibrante fusión de ritmo tropical y sabor dedicada a la costa. Parte oficial de la producción \"Pulsares Salsa\".": "A vibrant blend of tropical rhythm and flavor inspired by the coast, from the \"Pulsares Salsa\" release.",
    "YouTube Channel": "YouTube Channel",
    "Ruta de Conciertos": "Concert Journey",
    "Argentina ": "Around the ",
    "al Mundo": "World",
    "El viaje de una voz que traspasa fronteras y une continentes.": "A musical journey that crosses borders and connects continents.",
    "MAR DEL PLATA": "MAR DEL PLATA",
    "MÉXICO DF": "MEXICO CITY",
    "México DF": "Mexico City",
    "LONDRES": "LONDON",
    "Londres": "London",
    "TOKIO": "TOKYO",
    "Tokio": "Tokyo",
    "Tour Destacado": "Featured Tour",
    "Mar del Plata, AR": "Mar del Plata, Argentina",
    "Estadio Polideportivo": "Polideportivo Stadium",
    "Presentaciones Anteriores": "Past Performances",
    "Reservar Tickets": "Book Tickets",
    "Noviembre 2026": "November 2026",
    "Diciembre 2026": "December 2026",
    "Febrero 2027": "February 2027",
    "Marzo 2027": "March 2027",
    "Mayo 2027": "May 2027",
    "Próximamente": "Coming Soon",
    "Venta de Entradas": "Tickets on Sale",
    "Preventa VIP": "VIP Presale",
    "Anunciado": "Announced",
    "Confirmado": "Confirmed",
    "En Concierto": "Live",
    "Galería de ": "Video ",
    "Videos ": "Gallery ",
    "Deslizar a la izquierda": "Scroll left",
    "Deslizar a la derecha": "Scroll right",
    "VIDEOCLIP OFICIAL": "OFFICIAL MUSIC VIDEO",
    "Walter Flores en Concierto": "Walter Flores Live in Concert",
    "De Argentina al Mundo": "From Argentina to the World",
    "El videoclip oficial de “Regálame tu Amor”, una interpretación de Walter Flores con toda la energía de su repertorio tropical.": "The official music video for “Regálame tu Amor,” featuring Walter Flores and the vibrant energy of his tropical repertoire.",
    "VIDEO OFICIAL": "OFFICIAL VIDEO",
    "Video de “Diosa del Mar” de Walter Flores: una canción de Pulsares Salsa con sabor tropical y espíritu de mar.": "Walter Flores performs “Diosa del Mar,” a tropical song from Pulsares Salsa inspired by the spirit of the sea.",
    "PRESENTACIÓN EN VIVO": "LIVE PERFORMANCE",
    "Walter Flores en vivo, compartiendo su voz, su repertorio y la energía de un concierto frente al público.": "Walter Flores performs live, sharing his voice and repertoire with the energy of a concert audience.",
    "FOLKLORE Y TANGO": "FOLKLORE & TANGO",
    "Walter Flores: Folklore y Tango": "Walter Flores: Folklore & Tango",
    "Una interpretación de Walter Flores que recorre la raíz del folklore y la sensibilidad del tango argentino.": "A performance by Walter Flores celebrating Argentina’s folkloric roots and the expressive spirit of tango.",
    "VIDEO MUSICAL": "MUSIC VIDEO",
    "“Vos y Vos”, una presentación musical de Walter Flores que celebra su identidad artística y su conexión con el público.": "“Vos y Vos,” a musical performance by Walter Flores celebrating his artistic identity and connection with the audience.",
    "Colección Editorial": "Editorial Collection",
    "Galería de": "Gallery of",
    "Fotografías": "Photos",
    "Retratos y momentos que capturan la emoción del escenario y la intimidad del artista.": "Portraits and moments capturing the energy of the stage and the artist’s personal side.",
    "EDITORIAL": "EDITORIAL",
    "La Esencia del Artista": "The Artist’s Essence",
    "Ampliar": "Enlarge",
    "PERFIL": "PORTRAIT",
    "Pensamientos de Viaje": "On the Road",
    "CONCIERTO": "CONCERT",
    "Noche de Acordes": "A Night of Music",
    "ESTUDIO": "STUDIO",
    "Creando Acordes": "Creating Music",
    "PROMO": "PROMO",
    "ESCENARIO": "ON STAGE",
    "Fuerza Interpretativa": "Expressive Power",
    "Contrataciones de Alto Nivel": "Premium Bookings",
    "Contacto & ": "Contact & ",
    "Reservas": "Bookings",
    "Planifica conciertos, festivales nacionales e internacionales, o eventos corporativos exclusivos.": "Plan concerts, festivals, and exclusive corporate events in Argentina and around the world.",
    "Oficinas de Management": "Management Office",
    "Representación y Booking Internacional": "Representation & International Booking",
    "Consultas Generales y Contrataciones": "General Inquiries & Bookings",
    "Teléfono Management (Argentina / Internacional)": "Management Phone (Argentina / International)",
    "Ubicación Principal": "Main Location",
    "Mar del Plata, Argentina | Conexiones a nivel global": "Mar del Plata, Argentina | Connecting worldwide",
    "Redes oficiales": "Official Social Media",
    "Hablemos de tu próximo show": "Let’s talk about your next show",
    "Tu evento merece": "Your event deserves",
    "una voz inolvidable.": "an unforgettable voice.",
    "Cuéntanos la fecha, la ciudad y el tipo de celebración. El equipo de Walter Flores te responderá directamente por WhatsApp.": "Tell us the date, city, and type of event. Walter Flores’s team will reply to you directly on WhatsApp.",
    "Contactar por WhatsApp": "Contact via WhatsApp",
    "Respuesta directa del equipo": "Direct reply from the team",
    "Contrataciones, prensa y eventos internacionales": "Bookings, press, and international events",
    "Una experiencia artística Premium que fusiona la raíz folclórica y del tango de Argentina con arreglos modernos e impacto internacional.": "A live music experience connecting Argentina’s folkloric and tango roots with modern arrangements.",
    "Navegación": "Navigation",
    "Conecta con Walter": "Connect with Walter",
    "© 2026 Walter Flores. Todos los derechos reservados. Diseñado bajo el concepto premium de la música nacional.": "© 2026 Walter Flores. All rights reserved. Created around the spirit of Argentine music.",
    "Todos los derechos reservados.": "All rights reserved.",
    " Diseñado bajo el concepto premium de la música nacional.": " Designed around the spirit of Argentine music.",
    "Web creada por": "Website by",
    "Cerrar Video": "Close video",
    "Cerrar Imagen": "Close image",
    "Título de la imagen": "Image caption",
    "AUDIO MP3": "MP3 AUDIO",
    "AUDIO STREAM": "AUDIO STREAM",
    "SYNTH EN VIVO": "LIVE SYNTH",
    "Abriendo WhatsApp...": "Opening WhatsApp...",
    "Enviar Solicitud de Reserva": "Send Booking Request"
  };

  const attributeTranslations = {
    "Selector de idioma": "Language selector",
    "Cambiar idioma a español": "Switch language to Spanish",
    "Cambiar idioma a inglés": "Switch language to English",
    "Abrir Menú": "Open menu",
    "Anterior": "Previous",
    "Reproducir": "Play",
    "Siguiente": "Next",
    "Mutear": "Mute",
    "Deslizar a la izquierda": "Scroll left",
    "Deslizar a la derecha": "Scroll right",
    "Cerrar Video": "Close video",
    "Cerrar Imagen": "Close image",
    "Walter Flores en el escenario": "Walter Flores on stage",
    "Portada de álbum": "Album cover",
    "Álbum Pulsares Salsa": "Pulsares Salsa album cover",
    "Sencillo Regálame tu Amor": "Regálame tu Amor single cover",
    "Sencillo Diosa del Mar": "Diosa del Mar single cover",
    "Regálame tu Amor - Videoclip": "Regálame tu Amor music video",
    "Diosa del Mar, video oficial de Walter Flores": "Diosa del Mar, official video by Walter Flores",
    "Walter Flores en concierto": "Walter Flores live in concert",
    "Walter Flores: Folklore y Tango": "Walter Flores: Folklore & Tango",
    "Concierto al Aire Libre": "Outdoor performance",
    "Vos y Vos, video musical de Walter Flores": "Vos y Vos music video by Walter Flores",
    "Walter Flores - Sesión de Fotos": "Walter Flores photo session",
    "Walter Flores, la mirada de un viaje internacional": "Walter Flores on an international journey",
    "Walter Flores - Perfil": "Walter Flores portrait",
    "Concierto Acústico en Vivo": "Live acoustic concert",
    "Walter Flores - Tocando en vivo": "Walter Flores performing live",
    "Estudio de Grabación, Buenos Aires 2025": "Recording studio, Buenos Aires 2025",
    "Walter Flores - Estudio de Grabación": "Walter Flores in the recording studio",
    "Sesión Promocional, Álbum de Argentina para el Mundo": "Promotional photo session, From Argentina to the World",
    "Walter Flores - Promocional": "Walter Flores promotional photo",
    "Emoción pura en el escenario del Teatro Real, Madrid": "Pure emotion on stage at Teatro Real, Madrid",
    "Walter Flores - Presentación": "Walter Flores performing",
    "Retrato Editorial, Sesión Oficial 2026": "Editorial portrait, official 2026 session",
    "Walter Flores, la mirada de un viaje internacional": "Walter Flores, a view from an international journey",
    "Concierto Acústico en Vivo": "Live acoustic concert",
    "Estudio de Grabación, Buenos Aires 2025": "Recording studio, Buenos Aires 2025",
    "Sesión Promocional, Álbum de Argentina para el Mundo": "Promotional session, From Argentina to the World album",
    "Emoción pura en el escenario del Teatro Real, Madrid": "Pure emotion on stage at Teatro Real, Madrid",
    "Escuchar en Spotify": "Listen on Spotify",
    "Escuchar en Apple Music": "Listen on Apple Music",
    "Escuchar Playlist en YouTube": "Listen to playlist on YouTube",
    "Escuchar en YouTube": "Listen on YouTube",
    "TikTok oficial de Walter Flores": "Walter Flores’s official TikTok",
    "YouTube oficial de Walter Flores": "Walter Flores’s official YouTube",
    "Instagram oficial de Walter Flores": "Walter Flores’s official Instagram",
    "Instagram oficial": "Official Instagram",
    "YouTube oficial": "Official YouTube",
    "TikTok oficial": "Official TikTok",
    "Sitio web creado por Pa' music": "Website created by Pa' music",
    "México DF": "Mexico City",
    "Madrid": "Madrid",
    "Londres": "London",
    "Tokio": "Tokyo",
    "Noviembre 2026": "November 2026",
    "Diciembre 2026": "December 2026",
    "Febrero 2027": "February 2027",
    "Marzo 2027": "March 2027",
    "Mayo 2027": "May 2027",
    "Próximamente": "Coming Soon",
    "Venta de Entradas": "Tickets on Sale",
    "Preventa VIP": "VIP Presale",
    "Anunciado": "Announced",
    "Confirmado": "Confirmed"
  };

  const normalizeDictionary = dictionary => Object.fromEntries(Object.entries(dictionary).map(([source, translated]) => [source.trim(), translated]));
  const normalizedTranslations = normalizeDictionary(translations);
  const normalizedAttributeTranslations = normalizeDictionary(attributeTranslations);
  const reverseTranslations = new Map(Object.entries(normalizedTranslations).map(([source, translated]) => [translated, source]));
  const reverseAttributeTranslations = new Map(Object.entries(normalizedAttributeTranslations).map(([source, translated]) => [translated, source]));
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = "es";

  function sourceValue(value, reverseDictionary) {
    const leading = value.match(/^\s*/)?.[0] ?? "";
    const trailing = value.match(/\s*$/)?.[0] ?? "";
    const trimmed = value.trim();
    const source = reverseDictionary.get(trimmed) ?? reverseAttributeTranslations.get(trimmed) ?? trimmed;
    return `${leading}${source}${trailing}`;
  }

  function translateValue(value, dictionary = normalizedTranslations) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const exactTranslation = dictionary === normalizedTranslations ? translations[value] : undefined;
    const translated = exactTranslation ?? dictionary[trimmed] ?? (dictionary === normalizedTranslations ? normalizedAttributeTranslations[trimmed] : undefined) ?? trimmed.replace(/^Cargando Arte y Sonido\.\.\.(\s*\d+%)$/, "Loading art and sound...$1");
    if (exactTranslation !== undefined) return translated;
    const leading = value.match(/^\s*/)?.[0] ?? "";
    const trailing = value.match(/\s*$/)?.[0] ?? "";
    return `${leading}${translated}${trailing}`;
  }

  function translateTextValue(node, value) {
    const trimmed = value.trim();
    const inVideoHeading = node.parentElement?.closest("#videos .section-title");
    const inPhotoHeading = node.parentElement?.closest("#fotos .section-title");
    if (inVideoHeading && trimmed === "Galería de") return value.replace(trimmed, "Video");
    if (inVideoHeading && trimmed === "Videos") return value.replace(trimmed, "Gallery");
    if (inPhotoHeading && trimmed === "Galería de") return value.replace(trimmed, "Photo");
    if (inPhotoHeading && trimmed === "Fotografías") return value.replace(trimmed, "Gallery");
    return translateValue(value);
  }

  function translateTextNode(node, isMutation = false) {
    const current = node.nodeValue;
    let source = originalText.get(node);
    if (source === undefined || (isMutation && current !== source && current !== translateTextValue(node, source))) {
      source = sourceValue(current, reverseTranslations);
      originalText.set(node, source);
    }
    const next = language === "en" ? translateTextValue(node, source) : source;
    if (current !== next) node.nodeValue = next;
  }

  function translateAttribute(element, name, isMutation = false) {
    const current = element.getAttribute(name);
    if (current === null) return;
    let stored = originalAttributes.get(element);
    if (!stored) {
      stored = new Map();
      originalAttributes.set(element, stored);
    }
    let source = stored.get(name);
    if (source === undefined || (isMutation && current !== source && current !== (language === "en" ? (normalizedAttributeTranslations[source] ?? source) : source))) {
      source = sourceValue(current, reverseAttributeTranslations);
      stored.set(name, source);
    }
    const next = language === "en" ? (normalizedAttributeTranslations[source.trim()] ?? source) : source;
    if (current !== next) element.setAttribute(name, next);
  }

  function translateSubtree(root, isMutation = false) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.parentElement?.closest("script,style")) translateTextNode(root, isMutation);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const attributeNames = ["alt", "title", "aria-label", "placeholder", "data-caption", "data-city", "data-venue", "data-date", "data-status"];
    const elements = [root, ...root.querySelectorAll("*")];
    for (const element of elements) {
      for (const name of attributeNames) translateAttribute(element, name, isMutation);
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement?.closest("script,style")) translateTextNode(node, isMutation);
    }
  }

  function updateMetadata() {
    const english = language === "en";
    const title = english ? "Walter Flores | Official Website — Argentine Singer" : "Walter Flores | Sitio Oficial — Cantante Argentino";
    const description = english
      ? "Official website of Walter Flores, Argentine singer. Explore his music, videos, artistic journey, and official booking contacts."
      : "Sitio oficial de Walter Flores, cantante argentino. Descubre su música, videos, trayectoria y próximas presentaciones. Contrataciones y contacto oficial.";
    document.title = title;
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", english ? "Walter Flores | Official Website" : "Walter Flores | Sitio Oficial");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", english ? "Music, videos, and artistic journey of Walter Flores. Official website of the Argentine singer." : "Música, videos y trayectoria artística de Walter Flores. Sitio oficial del cantante argentino.");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", english ? "Walter Flores | Official Website" : "Walter Flores | Sitio Oficial");
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", english ? "Music, videos, and artistic journey of Walter Flores." : "Música, videos y trayectoria artística de Walter Flores.");
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", english ? "en_US" : "es_AR");
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute("content", english ? "Walter Flores, Argentine singer" : "Walter Flores, cantante argentino");
    document.querySelector('meta[name="twitter:image:alt"]')?.setAttribute("content", english ? "Walter Flores, Argentine singer" : "Walter Flores, cantante argentino");
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "es";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-language]").forEach(button => {
      const active = button.dataset.language === language;
      button.setAttribute("aria-pressed", String(active));
    });
    translateSubtree(document.body);
    updateMetadata();
    const url = new URL(window.location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function init() {
    const initialLanguage = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "es";
    document.querySelectorAll("[data-language]").forEach(button => {
      button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
    setLanguage(initialLanguage);

    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === "characterData") translateTextNode(record.target, true);
        if (record.type === "attributes") translateAttribute(record.target, record.attributeName, true);
        record.addedNodes?.forEach(node => translateSubtree(node, false));
      }
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["alt", "title", "aria-label", "placeholder", "data-caption", "data-city", "data-venue", "data-date", "data-status"] });
  }

  window.WalterI18n = {
    getLanguage: () => language,
    translate: (value) => language === "en" ? translateValue(value) : value
  };

  init();
})();
