import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { A as Cloud, B as Check, C as MapPin, E as Instagram, F as CloudFog, M as CloudSnow, N as CloudRain, O as Globe, P as CloudLightning, S as Maximize2, T as LoaderCircle, a as VolumeX, h as Pause, i as WifiOff, j as CloudSun, k as Facebook, l as Twitter, m as Phone, n as X, o as Volume2, p as Play, r as Wifi, t as Youtube, u as Sun, v as Minimize2, w as Mail, z as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/youtube-live-h-gPNTAz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-Toqd3mjP.png";
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "Radio Cristal",
		className: `h-10 w-auto ${className}`
	});
}
var LANGS = [
	{
		code: "es",
		label: "Español",
		flag: "🇦🇷"
	},
	{
		code: "en",
		label: "English",
		flag: "🇺🇸"
	},
	{
		code: "pt",
		label: "Português",
		flag: "🇧🇷"
	}
];
var DICTS = {
	es: {
		"nav.home": "Inicio",
		"nav.news": "Noticias",
		"nav.programming": "Programación",
		"nav.about": "Nosotros",
		"nav.contact": "Contacto",
		"cta.listenLive": "Escuchar en Vivo",
		"cta.live": "En vivo",
		"cta.pause": "Pausar transmisión",
		"infobar.location": "Puerto Madryn, Chubut",
		"infobar.loading": "Cargando clima…",
		"infobar.feels": "ST",
		"weather.clear": "Despejado",
		"weather.partly": "Parcialmente nublado",
		"weather.cloudy": "Nublado",
		"weather.fog": "Neblina",
		"weather.drizzle": "Llovizna",
		"weather.rain": "Lluvia",
		"weather.snow": "Nieve",
		"weather.storm": "Tormenta",
		"hero.badge": "EN VIVO · FM 95.7 Puerto Madryn",
		"hero.subtitle": "La voz que acompaña a Puerto Madryn las 24 horas. Información, música y comunidad.",
		"hero.latestNews": "Últimas Noticias",
		"hero.listeners": "Oyentes",
		"hero.programs": "Programas",
		"hero.years": "Años",
		"hero.nowPlaying": "AHORA SUENA",
		"hero.currentProgram": "Programa actual",
		"hero.seeSchedule": "Ver programación completa",
		"hero.withHost": "con",
		"featured.readMore": "Leer más",
		"news.eyebrow": "Actualidad",
		"news.title": "Últimas Noticias",
		"news.subtitle": "Lo más importante de Puerto Madryn, la Patagonia y el país, las 24 horas.",
		"news.search": "Buscar noticias…",
		"news.empty": "No se encontraron noticias.",
		"news.error": "No pudimos cargar las noticias en este momento. Intentá nuevamente en unos minutos.",
		"news.readMore": "Leer más",
		"cat.all": "Todas",
		"cat.politics": "Política",
		"cat.sports": "Deportes",
		"cat.tourism": "Turismo",
		"cat.culture": "Cultura",
		"cat.police": "Policiales",
		"cat.regional": "Regionales",
		"cat.national": "Nacionales",
		"cat.international": "Internacionales",
		"prog.eyebrow": "Agenda",
		"prog.title": "Programación",
		"prog.subtitle": "Nuestra grilla diaria, pensada para acompañarte de la mañana a la noche.",
		"prog.days": "Lunes a Viernes",
		"about.eyebrow": "Sobre Nosotros",
		"about.title": "Sobre Radio Cristal",
		"about.body": "Radio Cristal es un medio de comunicación comprometido con la información, el entretenimiento y el acompañamiento diario de la comunidad. Nuestra misión es conectar a las personas a través de contenidos de calidad, noticias relevantes y una programación pensada para informar, entretener y generar cercanía con nuestros oyentes.",
		"about.years": "años en el aire",
		"about.v1.t": "Voz local",
		"about.v1.d": "Información cercana, contada por periodistas de la región.",
		"about.v2.t": "Comunidad",
		"about.v2.d": "Acompañamos a Puerto Madryn las 24 horas.",
		"about.v3.t": "Credibilidad",
		"about.v3.d": "Más de 15 años informando con rigor y respeto.",
		"about.v4.t": "Pasión",
		"about.v4.d": "Programación cuidada con la mejor música y entrevistas.",
		"social.eyebrow": "Seguinos",
		"social.title": "Conectate con Radio Cristal",
		"contact.eyebrow": "Contacto",
		"contact.title": "Escribinos",
		"contact.subtitle": "¿Querés enviarnos información, sumarte a la radio o contratar una pauta? Estamos para vos.",
		"contact.studios": "Estudios",
		"contact.email": "Email",
		"contact.phone": "Teléfono",
		"contact.name": "Nombre",
		"contact.phoneOpt": "(opcional)",
		"contact.message": "Mensaje",
		"contact.send": "Enviar mensaje",
		"contact.success": "¡Mensaje enviado! Te responderemos a la brevedad.",
		"contact.err.name": "Nombre muy corto",
		"contact.err.email": "Email inválido",
		"contact.err.message": "Contanos un poco más",
		"footer.tag": "La voz que acompaña a Puerto Madryn las 24 horas. Información, música y comunidad.",
		"footer.nav": "Navegación",
		"footer.contact": "Contacto",
		"footer.join": "Sumate",
		"footer.joinDesc": "Recibí las noticias más importantes en tu email.",
		"footer.rights": "Todos los derechos reservados.",
		"footer.privacy": "Política de privacidad",
		"footer.terms": "Términos",
		"footer.langLabel": "Idioma",
		"player.live": "En vivo",
		"player.play": "Reproducir",
		"player.pause": "Pausar",
		"player.volume": "Volumen",
		"player.connecting": "Conectando",
		"player.connected": "Conectado",
		"player.idle": "En espera",
		"player.nosignal": "Sin señal",
		"lang.switch": "Idioma"
	},
	en: {
		"nav.home": "Home",
		"nav.news": "News",
		"nav.programming": "Schedule",
		"nav.about": "About",
		"nav.contact": "Contact",
		"cta.listenLive": "Listen Live",
		"cta.live": "Live",
		"cta.pause": "Pause stream",
		"infobar.location": "Puerto Madryn, Chubut",
		"infobar.loading": "Loading weather…",
		"infobar.feels": "Feels",
		"weather.clear": "Clear",
		"weather.partly": "Partly cloudy",
		"weather.cloudy": "Cloudy",
		"weather.fog": "Fog",
		"weather.drizzle": "Drizzle",
		"weather.rain": "Rain",
		"weather.snow": "Snow",
		"weather.storm": "Storm",
		"hero.badge": "LIVE · FM 95.7 Puerto Madryn",
		"hero.subtitle": "The voice that keeps Puerto Madryn company 24 hours a day. News, music and community.",
		"hero.latestNews": "Latest News",
		"hero.listeners": "Listeners",
		"hero.programs": "Programs",
		"hero.years": "Years",
		"hero.nowPlaying": "NOW PLAYING",
		"hero.currentProgram": "Current program",
		"hero.seeSchedule": "See full schedule",
		"hero.withHost": "with",
		"featured.readMore": "Read more",
		"news.eyebrow": "What's New",
		"news.title": "Latest News",
		"news.subtitle": "The most important news from Puerto Madryn, Patagonia and the country, 24/7.",
		"news.search": "Search news…",
		"news.empty": "No news found.",
		"news.error": "We couldn't load the news right now. Please try again in a few minutes.",
		"news.readMore": "Read more",
		"cat.all": "All",
		"cat.politics": "Politics",
		"cat.sports": "Sports",
		"cat.tourism": "Tourism",
		"cat.culture": "Culture",
		"cat.police": "Police",
		"cat.regional": "Regional",
		"cat.national": "National",
		"cat.international": "International",
		"prog.eyebrow": "Agenda",
		"prog.title": "Schedule",
		"prog.subtitle": "Our daily lineup, designed to keep you company from morning to night.",
		"prog.days": "Monday to Friday",
		"about.eyebrow": "About Us",
		"about.title": "About Radio Cristal",
		"about.body": "Radio Cristal is a media outlet committed to information, entertainment and daily companionship for the community. Our mission is to connect people through quality content, relevant news and a schedule designed to inform, entertain and build closeness with our listeners.",
		"about.years": "years on air",
		"about.v1.t": "Local voice",
		"about.v1.d": "Up-close reporting by journalists from the region.",
		"about.v2.t": "Community",
		"about.v2.d": "We accompany Puerto Madryn 24 hours a day.",
		"about.v3.t": "Credibility",
		"about.v3.d": "More than 15 years reporting with rigor and respect.",
		"about.v4.t": "Passion",
		"about.v4.d": "Carefully crafted programming with the best music and interviews.",
		"social.eyebrow": "Follow Us",
		"social.title": "Connect with Radio Cristal",
		"contact.eyebrow": "Contact",
		"contact.title": "Get in touch",
		"contact.subtitle": "Want to send us a tip, join the station, or book an ad? We're here for you.",
		"contact.studios": "Studios",
		"contact.email": "Email",
		"contact.phone": "Phone",
		"contact.name": "Name",
		"contact.phoneOpt": "(optional)",
		"contact.message": "Message",
		"contact.send": "Send message",
		"contact.success": "Message sent! We'll get back to you shortly.",
		"contact.err.name": "Name too short",
		"contact.err.email": "Invalid email",
		"contact.err.message": "Tell us a bit more",
		"footer.tag": "The voice that keeps Puerto Madryn company 24 hours a day. News, music and community.",
		"footer.nav": "Navigation",
		"footer.contact": "Contact",
		"footer.join": "Join",
		"footer.joinDesc": "Get the most important news in your inbox.",
		"footer.rights": "All rights reserved.",
		"footer.privacy": "Privacy policy",
		"footer.terms": "Terms",
		"footer.langLabel": "Language",
		"player.live": "Live",
		"player.play": "Play",
		"player.pause": "Pause",
		"player.volume": "Volume",
		"player.connecting": "Connecting",
		"player.connected": "Connected",
		"player.idle": "Idle",
		"player.nosignal": "No signal",
		"lang.switch": "Language"
	},
	pt: {
		"nav.home": "Início",
		"nav.news": "Notícias",
		"nav.programming": "Programação",
		"nav.about": "Sobre",
		"nav.contact": "Contato",
		"cta.listenLive": "Ouvir ao vivo",
		"cta.live": "Ao vivo",
		"cta.pause": "Pausar transmissão",
		"infobar.location": "Puerto Madryn, Chubut",
		"infobar.loading": "Carregando clima…",
		"infobar.feels": "Sensação",
		"weather.clear": "Limpo",
		"weather.partly": "Parcialmente nublado",
		"weather.cloudy": "Nublado",
		"weather.fog": "Neblina",
		"weather.drizzle": "Garoa",
		"weather.rain": "Chuva",
		"weather.snow": "Neve",
		"weather.storm": "Tempestade",
		"hero.badge": "AO VIVO · FM 95.7 Puerto Madryn",
		"hero.subtitle": "A voz que acompanha Puerto Madryn 24 horas por dia. Informação, música e comunidade.",
		"hero.latestNews": "Últimas Notícias",
		"hero.listeners": "Ouvintes",
		"hero.programs": "Programas",
		"hero.years": "Anos",
		"hero.nowPlaying": "TOCANDO AGORA",
		"hero.currentProgram": "Programa atual",
		"hero.seeSchedule": "Ver programação completa",
		"hero.withHost": "com",
		"featured.readMore": "Leia mais",
		"news.eyebrow": "Atualidade",
		"news.title": "Últimas Notícias",
		"news.subtitle": "O mais importante de Puerto Madryn, da Patagônia e do país, 24 horas.",
		"news.search": "Buscar notícias…",
		"news.empty": "Nenhuma notícia encontrada.",
		"news.error": "Não foi possível carregar as notícias agora. Tente novamente em alguns minutos.",
		"news.readMore": "Leia mais",
		"cat.all": "Todas",
		"cat.politics": "Política",
		"cat.sports": "Esportes",
		"cat.tourism": "Turismo",
		"cat.culture": "Cultura",
		"cat.police": "Policial",
		"cat.regional": "Regionais",
		"cat.national": "Nacionais",
		"cat.international": "Internacionais",
		"prog.eyebrow": "Agenda",
		"prog.title": "Programação",
		"prog.subtitle": "Nossa grade diária, pensada para te acompanhar de manhã até a noite.",
		"prog.days": "Segunda a sexta",
		"about.eyebrow": "Sobre Nós",
		"about.title": "Sobre a Radio Cristal",
		"about.body": "A Radio Cristal é um veículo de comunicação comprometido com a informação, o entretenimento e o acompanhamento diário da comunidade. Nossa missão é conectar pessoas por meio de conteúdos de qualidade, notícias relevantes e uma programação pensada para informar, entreter e gerar proximidade com nossos ouvintes.",
		"about.years": "anos no ar",
		"about.v1.t": "Voz local",
		"about.v1.d": "Informação próxima, contada por jornalistas da região.",
		"about.v2.t": "Comunidade",
		"about.v2.d": "Acompanhamos Puerto Madryn 24 horas por dia.",
		"about.v3.t": "Credibilidade",
		"about.v3.d": "Mais de 15 anos informando com rigor e respeito.",
		"about.v4.t": "Paixão",
		"about.v4.d": "Programação cuidada com a melhor música e entrevistas.",
		"social.eyebrow": "Siga-nos",
		"social.title": "Conecte-se com a Radio Cristal",
		"contact.eyebrow": "Contato",
		"contact.title": "Fale conosco",
		"contact.subtitle": "Quer enviar uma informação, fazer parte da rádio ou contratar um anúncio? Estamos aqui.",
		"contact.studios": "Estúdios",
		"contact.email": "E-mail",
		"contact.phone": "Telefone",
		"contact.name": "Nome",
		"contact.phoneOpt": "(opcional)",
		"contact.message": "Mensagem",
		"contact.send": "Enviar mensagem",
		"contact.success": "Mensagem enviada! Responderemos em breve.",
		"contact.err.name": "Nome muito curto",
		"contact.err.email": "E-mail inválido",
		"contact.err.message": "Conte-nos um pouco mais",
		"footer.tag": "A voz que acompanha Puerto Madryn 24 horas por dia. Informação, música e comunidade.",
		"footer.nav": "Navegação",
		"footer.contact": "Contato",
		"footer.join": "Inscreva-se",
		"footer.joinDesc": "Receba as notícias mais importantes no seu e-mail.",
		"footer.rights": "Todos os direitos reservados.",
		"footer.privacy": "Política de privacidade",
		"footer.terms": "Termos",
		"footer.langLabel": "Idioma",
		"player.live": "Ao vivo",
		"player.play": "Reproduzir",
		"player.pause": "Pausar",
		"player.volume": "Volume",
		"player.connecting": "Conectando",
		"player.connected": "Conectado",
		"player.idle": "Em espera",
		"player.nosignal": "Sem sinal",
		"lang.switch": "Idioma"
	}
};
var LOCALES = {
	es: "es-AR",
	en: "en-US",
	pt: "pt-BR"
};
var I18nCtx = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("es");
	(0, import_react.useEffect)(() => {
		try {
			const saved = localStorage.getItem("rc.lang");
			if (saved && DICTS[saved]) setLangState(saved);
		} catch {}
	}, []);
	const setLang = (l) => {
		setLangState(l);
		try {
			localStorage.setItem("rc.lang", l);
		} catch {}
		if (typeof document !== "undefined") document.documentElement.lang = l;
	};
	const t = (k) => DICTS[lang][k] ?? DICTS.es[k] ?? k;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nCtx.Provider, {
		value: {
			lang,
			setLang,
			t,
			locale: LOCALES[lang]
		},
		children
	});
}
function useI18n() {
	const v = (0, import_react.useContext)(I18nCtx);
	if (!v) throw new Error("useI18n must be used inside I18nProvider");
	return v;
}
function describeWeatherKey(code) {
	if (code === 0) return "weather.clear";
	if ([1, 2].includes(code)) return "weather.partly";
	if (code === 3) return "weather.cloudy";
	if ([45, 48].includes(code)) return "weather.fog";
	if ([
		51,
		53,
		55,
		56,
		57
	].includes(code)) return "weather.drizzle";
	if ([
		61,
		63,
		65,
		66,
		67,
		80,
		81,
		82
	].includes(code)) return "weather.rain";
	if ([
		71,
		73,
		75,
		77,
		85,
		86
	].includes(code)) return "weather.snow";
	if ([
		95,
		96,
		99
	].includes(code)) return "weather.storm";
	return "weather.cloudy";
}
function LanguageSwitcher({ compact = false }) {
	const { lang, setLang, t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const current = LANGS.find((l) => l.code === lang);
	(0, import_react.useEffect)(() => {
		const onDoc = (e) => {
			if (!ref.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((v) => !v),
			"aria-label": t("lang.switch"),
			"aria-haspopup": "menu",
			"aria-expanded": open,
			className: `inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent ${compact ? "" : "sm:px-3"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: current.code.toUpperCase()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sm:hidden",
					children: current.flag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3 w-3 transition-transform ${open ? "rotate-180" : ""}` })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "menu",
			className: "absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-elevated",
			children: LANGS.map((l) => {
				const active = l.code === lang;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					role: "menuitemradio",
					"aria-checked": active,
					onClick: () => {
						setLang(l.code);
						setOpen(false);
					},
					className: `flex w-full items-center justify-between gap-2 px-3 py-2.5 text-sm transition-colors hover:bg-accent ${active ? "text-foreground" : "text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base leading-none",
							children: l.flag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: l.label
						})]
					}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-brand" })]
				}, l.code);
			})
		})]
	});
}
var STREAM_URL = "https://stream.zeno.fm/2cg12xpx2e0vv";
var Ctx = (0, import_react.createContext)(null);
function PlayerProvider({ children }) {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [volume, setVolumeState] = (0, import_react.useState)(.8);
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		if (typeof Audio === "undefined") return;
		const a = new Audio();
		a.preload = "none";
		a.src = STREAM_URL;
		a.volume = volume;
		a.addEventListener("playing", () => setStatus("live"));
		a.addEventListener("waiting", () => setStatus("connecting"));
		a.addEventListener("error", () => {
			setStatus("error");
			console.error("No se pudo conectar al stream de radio. Verificá que STREAM_URL en player-context.tsx sea una URL válida y use https://.", a.error);
		});
		audioRef.current = a;
		return () => {
			a.pause();
			a.src = "";
			audioRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (audioRef.current) audioRef.current.volume = volume;
	}, [volume]);
	const toggle = () => {
		const a = audioRef.current;
		if (!a) return;
		if (playing) {
			a.pause();
			setPlaying(false);
			setStatus("idle");
		} else {
			setStatus("connecting");
			a.play().then(() => setPlaying(true)).catch(() => setStatus("error"));
			setPlaying(true);
		}
	};
	const value = (0, import_react.useMemo)(() => ({
		playing,
		volume,
		status,
		toggle,
		setVolume: setVolumeState
	}), [
		playing,
		volume,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function usePlayer() {
	const v = (0, import_react.useContext)(Ctx);
	if (!v) throw new Error("usePlayer must be used inside PlayerProvider");
	return v;
}
function useClock() {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	return now;
}
function formatTime(d, locale = "es-AR") {
	return d.toLocaleTimeString(locale, {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
}
function formatDate(d, locale = "es-AR") {
	return d.toLocaleDateString(locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	});
}
var URL = "https://api.open-meteo.com/v1/forecast?latitude=-42.7692&longitude=-65.0385&current=temperature_2m,apparent_temperature,weather_code,is_day&timezone=America%2FArgentina%2FBuenos_Aires";
function useWeather() {
	const [data, setData] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		const load = async () => {
			try {
				const j = await (await fetch(URL)).json();
				if (cancel) return;
				setData({
					temp: Math.round(j.current.temperature_2m),
					feels: Math.round(j.current.apparent_temperature),
					code: j.current.weather_code,
					isDay: j.current.is_day === 1
				});
			} catch {}
		};
		load();
		const id = setInterval(load, 600 * 1e3);
		return () => {
			cancel = true;
			clearInterval(id);
		};
	}, []);
	return data;
}
function WeatherIcon({ code }) {
	const cls = "h-3.5 w-3.5";
	if (code === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cls });
	if ([1, 2].includes(code)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: cls });
	if (code === 3) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: cls });
	if ([45, 48].includes(code)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudFog, { className: cls });
	if ([
		51,
		53,
		55,
		56,
		57,
		61,
		63,
		65,
		66,
		67,
		80,
		81,
		82
	].includes(code)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRain, { className: cls });
	if ([
		71,
		73,
		75,
		77,
		85,
		86
	].includes(code)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSnow, { className: cls });
	if ([
		95,
		96,
		99
	].includes(code)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudLightning, { className: cls });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: cls });
}
function InfoBar() {
	const now = useClock();
	const w = useWeather();
	const { t, locale } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden border-b border-border/60 bg-primary text-primary-foreground md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-9 items-center justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capitalize",
						children: formatDate(now, locale)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-50",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono tabular-nums",
						children: formatTime(now, locale)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-50",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-80",
						children: t("infobar.location")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-4",
				children: w ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherIcon, {
							code: w.code,
							isDay: w.isDay
						}), t(describeWeatherKey(w.code))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-50",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold",
						children: [w.temp, "°C"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 opacity-70",
						children: [
							t("infobar.feels"),
							" ",
							w.feels,
							"°"
						]
					})] })
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-70",
					children: t("infobar.loading")
				})
			})]
		})
	});
}
var WORDPRESS_URL = "https://radiocristalmadryn.com.ar";
function stripHtml(html) {
	return html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#8217;|&#039;/g, "'").replace(/\s+/g, " ").trim();
}
function mapPost(post) {
	const media = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
	const author = post._embedded?.author?.[0]?.name ?? "Redacción";
	const categoryTerm = post._embedded?.["wp:term"]?.flat().find((t) => t?.taxonomy === "category" && t?.name?.toLowerCase() !== "sin categoría");
	return {
		id: post.id,
		slug: post.slug,
		title: stripHtml(post.title.rendered),
		excerpt: stripHtml(post.excerpt.rendered),
		content: post.content.rendered,
		image: media,
		category: categoryTerm?.name ?? "Noticias",
		author,
		dateIso: post.date
	};
}
async function fetchNews(perPage = 30) {
	const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=${perPage}&_embed=true`;
	const res = await fetch(url, { headers: { Accept: "application/json" } });
	if (!res.ok) return [];
	return (await res.json()).map(mapPost);
}
async function fetchNewsBySlug(slug) {
	const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
	const res = await fetch(url, { headers: { Accept: "application/json" } });
	if (!res.ok) return null;
	const posts = await res.json();
	return posts.length > 0 ? mapPost(posts[0]) : null;
}
/** Trae la lista de noticias publicadas. Cachea 2 minutos para no saturar WP. */
function useNews() {
	return useQuery({
		queryKey: ["wp-news"],
		queryFn: () => fetchNews(30),
		staleTime: 120 * 1e3
	});
}
/** Trae una noticia puntual por slug, para la página de detalle. */
function useNewsBySlug(slug) {
	return useQuery({
		queryKey: ["wp-news", slug],
		queryFn: () => fetchNewsBySlug(slug),
		enabled: Boolean(slug),
		staleTime: 120 * 1e3
	});
}
/** Lista de categorías disponibles a partir de las noticias ya cargadas. */
function categoriesFromNews(news) {
	const set = new Set(news.map((n) => n.category));
	return Array.from(set);
}
var RELATIVE_LABELS = {
	es: {
		now: "Hace instantes",
		min: "Hace {n} min",
		hr: "Hace {n} h",
		day: "Hace {n} días",
		on: "el"
	},
	en: {
		now: "Just now",
		min: "{n} min ago",
		hr: "{n} h ago",
		day: "{n} days ago",
		on: "on"
	},
	pt: {
		now: "Agora mesmo",
		min: "Há {n} min",
		hr: "Há {n} h",
		day: "Há {n} dias",
		on: "em"
	}
};
/** Formatea una fecha ISO de WordPress como texto relativo ("Hace 2 horas"). */
function formatRelativeDate(iso, lang) {
	const labels = RELATIVE_LABELS[lang];
	const date = new Date(iso);
	const diffMs = Date.now() - date.getTime();
	const diffMin = Math.floor(diffMs / 6e4);
	if (diffMin < 1) return labels.now;
	if (diffMin < 60) return labels.min.replace("{n}", String(diffMin));
	const diffHr = Math.floor(diffMin / 60);
	if (diffHr < 24) return labels.hr.replace("{n}", String(diffHr));
	const diffDay = Math.floor(diffHr / 24);
	if (diffDay < 7) return labels.day.replace("{n}", String(diffDay));
	return date.toLocaleDateString(lang === "es" ? "es-AR" : lang === "pt" ? "pt-BR" : "en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-primary-foreground [&_*]:text-primary-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm opacity-75",
						children: t("footer.tag")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-2",
						children: [
							Facebook,
							Instagram,
							Twitter,
							Youtube
						].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-[11px] font-bold uppercase tracking-wider opacity-70",
							children: t("footer.langLabel")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
					children: t("footer.nav")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm opacity-75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#inicio",
							className: "hover:opacity-100",
							children: t("nav.home")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#noticias",
							className: "hover:opacity-100",
							children: t("nav.news")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#programacion",
							className: "hover:opacity-100",
							children: t("nav.programming")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#nosotros",
							className: "hover:opacity-100",
							children: t("nav.about")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "hover:opacity-100",
							children: t("nav.contact")
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
					children: t("footer.contact")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm opacity-75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }), "Av. Roca 1234, Puerto Madryn, Chubut"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0" }), "fmcristal107.1@gmail.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0" }), "+54 280 4 123 456"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-bold uppercase tracking-wider opacity-90",
						children: t("footer.join")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm opacity-75",
						children: t("footer.joinDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "tu@email.com",
							className: "h-10 w-full rounded-l-full bg-white/10 px-4 text-sm outline-none placeholder:text-white/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "h-10 rounded-r-full bg-brand px-4 text-sm font-semibold text-brand-foreground",
							children: "OK"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col items-center justify-between gap-3 py-5 text-xs opacity-70 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Radio Cristal. ",
						t("footer.rights")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "opacity-70",
						children: ["Sitio web desarrollado por ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/valentino.profumo/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-semibold hover:opacity-100 underline underline-offset-2",
							children: "Valentino Profumo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:opacity-100",
							children: t("footer.privacy")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:opacity-100",
							children: t("footer.terms")
						})]
					})
				]
			})
		})]
	});
}
function StickyPlayer() {
	const { playing, toggle, status, volume, setVolume } = usePlayer();
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-border bg-card/90 px-3 py-2 shadow-elevated backdrop-blur-xl sm:gap-4 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggle,
					"aria-label": playing ? t("player.pause") : t("player.play"),
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-primary text-brand-foreground shadow-glow transition-transform active:scale-95",
					children: status === "connecting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5 translate-x-px" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-live/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-live",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }),
							" ",
							t("player.live")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm font-semibold leading-tight",
							children: "La Mañana Informativa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[11px] text-muted-foreground",
							children: "Diego Vázquez"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 sm:flex",
					children: [volume === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 1,
						step: .01,
						value: volume,
						onChange: (e) => setVolume(Number(e.target.value)),
						className: "h-1 w-24 accent-brand",
						"aria-label": t("player.volume")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 text-[11px] text-muted-foreground sm:flex",
					children: [status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "h-3.5 w-3.5 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden md:inline",
						children: status === "error" ? t("player.nosignal") : status === "connecting" ? t("player.connecting") : playing ? t("player.connected") : t("player.idle")
					})]
				})
			]
		})
	});
}
var YOUTUBE_CHANNEL_ID = "UC6pJGaMdx5Ter_8zYbLoRgA";
var YOUTUBE_API_KEY = "AIzaSyDi9_B0exm1LKQM_qZoMODYH3afKeoVXH0n";
async function fetchLiveVideoId(channelId, apiKey) {
	const url = `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
	const res = await fetch(url);
	if (!res.ok) return null;
	return (await res.json()).items?.[0]?.id?.videoId ?? null;
}
function YoutubeLiveWidget() {
	const [status, setStatus] = (0, import_react.useState)("checking");
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const [liveVideoId, setLiveVideoId] = (0, import_react.useState)(null);
	const intervalRef = (0, import_react.useRef)(null);
	const checkLive = async () => {
		try {
			{
				const videoId = await fetchLiveVideoId(YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY);
				if (videoId) {
					setLiveVideoId(videoId);
					setStatus("live");
				} else setStatus("offline");
			}
		} catch {
			setStatus("offline");
		}
	};
	(0, import_react.useEffect)(() => {
		checkLive();
		intervalRef.current = setInterval(checkLive, 120 * 1e3);
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);
	const embedUrl = liveVideoId ? `https://www.youtube.com/embed/${liveVideoId}?autoplay=1&rel=0` : `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&rel=0`;
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed bottom-24 right-4 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${expanded ? "w-80 h-56" : "w-64 h-auto"}`,
		style: { boxShadow: "0 8px 32px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 bg-surface px-3 py-2 border-b border-border shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4 text-[#FF0000]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-foreground",
							children: "En Vivo"
						}),
						status === "live" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 rounded-full bg-red-500/15 px-1.5 py-0.5 text-[10px] font-bold text-red-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "live-dot",
								style: {
									width: 5,
									height: 5
								}
							}), "YOUTUBE"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setExpanded((v) => !v),
						className: "rounded p-1 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
						"aria-label": expanded ? "Minimizar" : "Expandir",
						children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setVisible(false),
						className: "rounded p-1 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
						"aria-label": "Cerrar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
					})]
				})]
			}),
			status === "checking" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center gap-2 py-5 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs",
					children: "Verificando…"
				})]
			}),
			status === "offline" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center gap-2 px-4 py-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "h-5 w-5 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-foreground",
						children: "Sin transmisión activa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground leading-tight",
						children: "Cuando la radio esté en vivo en YouTube, el stream aparecerá aquí."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-1 inline-flex items-center gap-1 rounded-full bg-[#FF0000]/10 px-3 py-1 text-[11px] font-semibold text-[#FF0000] hover:bg-[#FF0000]/20 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-3 w-3" }), " Ver canal"]
					})
				]
			}),
			status === "live" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative bg-black ${expanded ? "flex-1" : "aspect-video"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: embedUrl,
					title: "Radio Cristal en vivo",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					className: "absolute inset-0 h-full w-full"
				}, embedUrl)
			})
		]
	});
}
//#endregion
export { Logo as a, YoutubeLiveWidget as c, useI18n as d, useNews as f, LanguageSwitcher as i, categoriesFromNews as l, usePlayer as m, I18nProvider as n, PlayerProvider as o, useNewsBySlug as p, InfoBar as r, StickyPlayer as s, Footer as t, formatRelativeDate as u };
