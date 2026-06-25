import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, D as Heart, E as Instagram, H as ArrowRight, I as Clock, L as ChevronRight, R as ChevronLeft, V as Award, _ as Music2, b as MessageCircle, c as User, d as Send, f as Search, g as Newspaper, h as Pause, k as Facebook, l as Twitter, m as Phone, n as X, p as Play, s as Users, t as Youtube, w as Mail, x as Menu, y as Mic } from "../_libs/lucide-react.mjs";
import { a as Logo, c as YoutubeLiveWidget, d as useI18n, f as useNews, i as LanguageSwitcher, l as categoriesFromNews, m as usePlayer, n as I18nProvider, o as PlayerProvider, r as InfoBar, s as StickyPlayer, t as Footer, u as formatRelativeDate } from "./youtube-live-h-gPNTAz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DF1Dt5Ne.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { playing, toggle, status } = usePlayer();
	const { t } = useI18n();
	const NAV = [
		{
			href: "#inicio",
			label: t("nav.home")
		},
		{
			href: "#noticias",
			label: t("nav.news")
		},
		{
			href: "#programacion",
			label: t("nav.programming")
		},
		{
			href: "#nosotros",
			label: t("nav.about")
		},
		{
			href: "#contacto",
			label: t("nav.contact")
		}
	];
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 10);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full transition-all ${scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "border-b border-transparent bg-background/40 backdrop-blur-md"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-1 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "Facebook",
									href: "#",
									className: "rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "Instagram",
									href: "#",
									className: "rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "YouTube",
									href: "#",
									className: "rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: toggle,
							className: "group inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary px-4 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-6 w-6 place-items-center rounded-full bg-background/15",
									children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 translate-x-px" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: playing ? t("cta.live") : t("cta.listenLive")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden items-center gap-0.5 sm:flex",
									"aria-hidden": true,
									children: playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" })
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: status
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							"aria-label": t("nav.home"),
							className: "rounded-md p-2 lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "container-page flex flex-col py-3",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-accent",
					children: n.label
				}, n.href))
			})
		})]
	});
}
var hero_studio_default = "/assets/hero-studio-BPSVlCIB.jpg";
function WhaleDecoration({ playing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fade-up hidden lg:flex lg:items-center lg:justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-elevated dark:border-border dark:bg-card/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden rounded-3xl pointer-events-none select-none opacity-[0.07]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 420 260",
							className: "absolute bottom-0 right-0 w-full h-full",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 200 Q50 185 100 200 Q150 215 200 200 Q250 185 300 200 Q350 215 420 200 L420 260 L0 260 Z",
									fill: "currentColor",
									opacity: "0.5",
									className: "text-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 220 Q60 205 120 220 Q180 235 240 220 Q300 205 360 220 Q390 228 420 220 L420 260 L0 260 Z",
									fill: "currentColor",
									className: "text-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M80 160 C60 155 30 165 15 150 C10 145 18 135 30 138 C20 125 35 115 50 120 C55 100 75 90 100 95 C115 75 145 70 170 80 C195 65 230 68 250 85 C275 80 295 90 300 108 C315 105 330 115 325 130 C335 140 330 155 315 158 C310 165 290 170 265 168 C255 178 235 182 215 178 C200 185 175 185 160 178 C145 185 120 182 105 175 Z",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "275",
									cy: "120",
									r: "6",
									fill: "white",
									opacity: "0.9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "277",
									cy: "119",
									r: "3",
									fill: "currentColor",
									className: "text-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M190 82 C195 60 210 50 220 55 C225 58 222 75 215 82 Z",
									fill: "currentColor",
									className: "text-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M130 135 C115 148 105 168 115 175 C125 168 140 155 145 140 Z",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.8"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M80 162 C65 155 45 148 30 155 C25 158 28 165 35 163 C42 175 55 178 68 170 Z",
									fill: "currentColor",
									className: "text-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M80 162 C68 172 55 185 60 195 C65 198 72 193 75 185 C82 188 88 183 85 172 Z",
									fill: "currentColor",
									className: "text-brand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M300 105 Q305 95 308 85 Q310 80 315 88 Q312 95 315 100",
									stroke: "currentColor",
									strokeWidth: "2",
									fill: "none",
									className: "text-brand",
									opacity: "0.7",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M308 85 Q312 75 320 70 Q322 65 326 73",
									stroke: "currentColor",
									strokeWidth: "1.5",
									fill: "none",
									className: "text-brand",
									opacity: "0.5",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "321",
									cy: "68",
									r: "2",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "327",
									cy: "63",
									r: "1.5",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M10 185 C0 182 -5 188 -10 183 C-12 180 -8 175 -2 177 C-8 170 0 164 10 167 C15 158 28 155 38 159 C46 152 60 153 68 160 C78 157 87 162 88 170 C94 168 100 174 97 180 C101 185 98 192 90 194 C87 198 76 200 65 198 C60 203 50 204 43 200 C37 204 26 203 20 198 Z",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "170",
									cy: "88",
									r: "3",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "178",
									cy: "78",
									r: "2",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "165",
									cy: "72",
									r: "1.5",
									fill: "currentColor",
									className: "text-brand",
									opacity: "0.2"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-white dark:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "En vivo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "h-4 w-4 opacity-70",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-4 text-white dark:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "h-7 w-7 text-brand-foreground",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider opacity-70",
									children: "Transmisión en vivo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-display text-xl font-bold",
									children: "Radio Cristal 107.1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm opacity-80",
									children: "Puerto Madryn, Chubut"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-end gap-1 text-brand",
						children: Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block w-1.5 rounded-full bg-current",
							style: {
								height: `${10 + Math.abs(Math.sin(i * .6)) * 38}px`,
								opacity: playing ? .9 : .35
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#programacion",
						className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white dark:text-muted-foreground dark:hover:text-foreground",
						children: ["Ver programación", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-3.5 w-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -bottom-16 -left-8 -right-8 select-none opacity-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 520 120",
					className: "w-full",
					xmlns: "http://www.w3.org/2000/svg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 80 Q65 60 130 80 Q195 100 260 80 Q325 60 390 80 Q455 100 520 80 L520 120 L0 120Z",
							fill: "white",
							opacity: "0.3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M60 75 C40 68 15 75 5 62 C2 57 10 48 22 52 C12 40 28 30 44 36 C50 18 72 10 95 18 C112 4 145 6 162 20 C185 15 202 25 204 40 C218 36 232 47 227 60 C236 70 230 83 216 86 C212 93 192 97 172 94 C163 102 143 104 125 99 C112 106 88 104 76 96 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "198",
							cy: "46",
							r: "5",
							fill: "white",
							opacity: "0.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "45",
							r: "2.5",
							fill: "currentColor",
							className: "text-primary",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M60 77 C46 70 28 62 14 70 C10 73 13 80 20 77 C28 89 42 92 55 84 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M60 77 C48 88 36 100 42 110 C48 113 54 107 56 98 C64 101 70 95 67 84 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M140 16 C146 -2 162 -12 170 -6 C175 -2 172 14 164 20 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M204 38 Q210 25 215 14 Q218 7 223 18 Q218 27 222 34",
							stroke: "white",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.7",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "224",
							cy: "8",
							r: "2",
							fill: "white",
							opacity: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M340 90 C325 85 305 90 296 80 C293 76 298 68 308 71 C300 62 313 54 325 59 C330 44 348 37 366 44 C380 32 406 34 420 46 C438 42 452 51 452 63 C462 61 472 70 468 80 C475 88 469 98 456 100 C453 106 435 109 418 107 C410 113 392 115 378 111 C366 116 345 115 335 108 Z",
							fill: "white",
							opacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "448",
							cy: "68",
							r: "4",
							fill: "white",
							opacity: "0.8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "450",
							cy: "67",
							r: "2",
							fill: "currentColor",
							className: "text-primary",
							opacity: "0.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M340 91 C328 85 312 78 300 85 C297 88 300 94 307 92 C313 102 326 105 337 97 Z",
							fill: "white",
							opacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M340 91 C329 101 318 112 323 120 C328 122 333 117 335 109 C342 112 347 106 344 96 Z",
							fill: "white",
							opacity: "0.6"
						})
					]
				})
			})]
		})
	});
}
function Hero() {
	const { playing, toggle } = usePlayer();
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_studio_default,
						alt: "",
						className: "h-full w-full object-cover",
						width: 1920,
						height: 1080
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-background/40 dark:from-background/95 dark:via-background/80 dark:to-background/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--color-brand)_45%,transparent),transparent_55%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 inset-x-0 -z-[1] select-none overflow-hidden h-40 opacity-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1440 160",
					className: "absolute bottom-0 w-full",
					preserveAspectRatio: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 80 Q90 40 180 80 Q270 120 360 80 Q450 40 540 80 Q630 120 720 80 Q810 40 900 80 Q990 120 1080 80 Q1170 40 1260 80 Q1350 120 1440 80 L1440 160 L0 160Z",
							fill: "white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M180 65 C165 58 142 65 130 54 C126 49 133 41 144 45 C135 34 149 25 163 30 C168 14 187 7 208 14 C223 2 252 4 267 17 C285 12 300 22 301 36 C313 32 324 42 320 54 C328 62 322 74 309 77 C305 83 287 87 269 84 C261 91 243 93 227 89 C215 95 193 94 182 87 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M180 67 C167 61 150 53 138 61 C135 64 138 70 145 67 C151 77 163 80 175 73 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M180 67 C170 76 159 87 165 95 C169 97 175 92 176 84 C183 87 188 82 185 72 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M226 12 C231 -4 244 -13 251 -8 C255 -4 252 11 245 17 Z",
							fill: "white",
							opacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M301 34 Q307 22 312 11 Q315 4 320 14",
							stroke: "white",
							strokeWidth: "2.5",
							fill: "none",
							opacity: "0.7",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "321",
							cy: "6",
							r: "2.5",
							fill: "white",
							opacity: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M850 72 C838 66 818 72 808 63 C804 59 810 51 820 54 C812 44 824 36 837 41 C841 27 857 20 876 26 C890 15 915 17 928 29 C944 25 957 34 957 47 C968 43 978 52 975 63 C982 71 976 81 964 83 C960 89 944 93 927 90 C920 97 903 98 888 95 C877 101 856 99 846 92 Z",
							fill: "white",
							opacity: "0.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M850 73 C838 67 823 60 812 67 C809 70 812 76 818 73 C824 83 835 85 846 78 Z",
							fill: "white",
							opacity: "0.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M850 73 C841 82 831 92 836 100 C840 102 845 97 846 89 C853 92 857 87 855 77 Z",
							fill: "white",
							opacity: "0.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M886 23 C890 11 901 3 907 7 C911 10 908 23 902 28 Z",
							fill: "white",
							opacity: "0.7"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid min-h-[78vh] items-center gap-10 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fade-up text-primary-foreground dark:text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), t("hero.badge")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
							children: ["Radio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gradient-to-r from-white to-[oklch(0.85_0.15_240)] bg-clip-text text-transparent dark:from-foreground dark:to-brand",
								children: "Cristal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-white/80 dark:text-muted-foreground sm:text-xl",
							children: t("hero.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: toggle,
								className: "group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-background/20",
									children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 translate-x-px" })
								}), playing ? t("cta.pause") : t("cta.listenLive")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#noticias",
								className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 dark:border-border dark:bg-card dark:text-foreground dark:hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-4 w-4" }), t("hero.latestNews")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-white/80 dark:border-border dark:text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider opacity-70",
									children: t("hero.listeners")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-2xl font-bold text-white dark:text-foreground",
									children: "+12K"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider opacity-70",
									children: t("hero.programs")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-2xl font-bold text-white dark:text-foreground",
									children: "24"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider opacity-70",
									children: t("hero.years")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-2xl font-bold text-white dark:text-foreground",
									children: "15+"
								})] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhaleDecoration, { playing })]
			})
		]
	});
}
function FeaturedNews() {
	const { lang, t } = useI18n();
	const { data: news, isLoading, isError } = useNews();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative -mt-12 lg:-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-elevated sm:p-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-16/11 animate-pulse rounded-2xl bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full animate-pulse rounded-2xl bg-surface" }, i))
				})]
			})
		})
	});
	if (isError || !news || news.length === 0) return null;
	const [main, ...rest] = news.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative -mt-12 lg:-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-elevated sm:p-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/noticias/$slug",
					params: { slug: main.slug },
					className: "group relative overflow-hidden rounded-2xl bg-surface",
					children: [
						main.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: main.image,
							alt: main.title,
							className: "aspect-[16/11] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
							loading: "lazy"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[16/11] h-full w-full items-center justify-center text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-12 w-12" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5 text-white sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground",
									children: main.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl",
									children: main.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 max-w-xl text-sm text-white/80",
									children: main.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-3 text-xs text-white/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatRelativeDate(main.dateIso, lang)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: main.author })
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: rest.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/noticias/$slug",
						params: { slug: n.slug },
						className: "group grid grid-cols-[1fr_1.2fr] gap-4 overflow-hidden rounded-2xl bg-surface p-3 transition-colors hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl bg-card",
							children: n.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.image,
								alt: n.title,
								className: "aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
								loading: "lazy"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex aspect-[4/3] h-full w-full items-center justify-center text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-6 w-6" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-brand",
									children: n.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 line-clamp-2 font-display text-base font-bold leading-snug sm:text-lg",
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
									children: n.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand",
									children: [
										t("featured.readMore"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-0.5" })
									]
								})
							]
						})]
					}, n.id))
				})]
			})
		})
	});
}
var PAGE_SIZE = 6;
function NewsSection() {
	const { lang, t } = useI18n();
	const { data: news, isLoading, isError } = useNews();
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(1);
	const categories = (0, import_react.useMemo)(() => news ? categoriesFromNews(news) : [], [news]);
	const filtered = (0, import_react.useMemo)(() => {
		if (!news) return [];
		return news.filter((n) => (cat === "all" || n.category === cat) && (q === "" || n.title.toLowerCase().includes(q.toLowerCase())));
	}, [
		news,
		q,
		cat
	]);
	const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "noticias",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
							children: t("news.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
							children: t("news.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted-foreground",
							children: t("news.subtitle")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-full flex-col gap-3 sm:flex-row md:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative w-full sm:w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => {
									setQ(e.target.value);
									setPage(1);
								},
								placeholder: t("news.search"),
								className: "h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
							})]
						})
					})]
				}),
				categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCat("all");
							setPage(1);
						},
						className: `rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${cat === "all" ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"}`,
						children: t("cat.all")
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCat(c);
							setPage(1);
						},
						className: `rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${cat === c ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"}`,
						children: c
					}, c))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						isLoading && Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/10] animate-pulse bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-2 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-2/3 animate-pulse rounded bg-surface" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-full animate-pulse rounded bg-surface" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/2 animate-pulse rounded bg-surface" })
								]
							})]
						}, i)),
						!isLoading && isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground",
							children: t("news.error")
						}),
						!isLoading && !isError && visible.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/noticias/$slug",
							params: { slug: n.slug },
							className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden bg-surface",
								children: [n.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: n.image,
									alt: n.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full w-full items-center justify-center text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-10 w-10" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand backdrop-blur",
									children: n.category
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold leading-snug",
										children: n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
										children: n.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3 w-3" }), n.author]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatRelativeDate(n.dateIso, lang)]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand",
										children: [
											t("news.readMore"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
										]
									})
								]
							})]
						}, n.id)),
						!isLoading && !isError && visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground",
							children: t("news.empty")
						})
					]
				}),
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex items-center justify-center gap-2",
					children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPage(i + 1),
						className: `h-9 w-9 rounded-full text-sm font-semibold transition-colors ${page === i + 1 ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:bg-accent"}`,
						children: i + 1
					}, i))
				})
			]
		})
	});
}
var STUDIO_IMAGES = [
	{
		src: "/assets/radio2-rra6yDRq.png",
		caption: "Nuestros estudios"
	},
	{
		src: "/assets/radio1-CQx-eMVx.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio3-NRhl0SZC.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio4-s3cHSfT7.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio5-_g5PJATH.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio6-p-RccJxw.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio7-BJc-DbYi.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio8-DD9QJVNT.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio9-QXdDRO0Y.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio10-Cuq21Y3E.png",
		caption: "En el aire"
	},
	{
		src: "/assets/radio11-COhNcqU7.png",
		caption: "En el aire"
	}
];
var VALUES = [
	{
		icon: Mic,
		key: "v1"
	},
	{
		icon: Users,
		key: "v2"
	},
	{
		icon: Award,
		key: "v3"
	},
	{
		icon: Heart,
		key: "v4"
	}
];
function StudioCarousel() {
	const [current, setCurrent] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (STUDIO_IMAGES.length <= 1) return;
		const id = setInterval(() => {
			setCurrent((c) => (c + 1) % STUDIO_IMAGES.length);
		}, 5e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-border shadow-elevated aspect-[5/4] bg-surface",
		children: [STUDIO_IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img.src,
			alt: img.caption,
			width: 1280,
			height: 832,
			loading: "lazy",
			className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
			style: { opacity: i === current ? 1 : 0 }
		}, i)), STUDIO_IMAGES.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",
			children: STUDIO_IMAGES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCurrent(i),
				"aria-label": `Imagen ${i + 1}`,
				className: `h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`
			}, i))
		})]
	});
}
function About() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "nosotros",
		className: "border-y border-border bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioCarousel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-elevated sm:block lg:-right-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl font-bold",
						children: "15+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: t("about.years")
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
					children: t("about.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: t("about.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-muted-foreground",
					children: t("about.body")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 rounded-2xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold",
							children: t(`about.${v.key}.t`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: t(`about.${v.key}.d`)
						})] })]
					}, v.key))
				})
			] })]
		})
	});
}
var IMAGES = [
	{
		src: "/assets/madryn-1-G49dXSaB.jpg",
		caption: "Puerto Madryn"
	},
	{
		src: "/assets/madryn-2-WtY6GbZK.jpg",
		caption: "Puerto Madryn"
	},
	{
		src: "/assets/madryn-3-C4A5Lj6j.jpg",
		caption: "Puerto Madryn"
	},
	{
		src: "/assets/madryn-4-RKU84lsI.jpg",
		caption: "Puerto Madryn"
	},
	{
		src: "/assets/madryn-5-yaIS0fuR.jpg",
		caption: "Puerto Madryn"
	}
];
var INTERVAL = 5e3;
function MadrynGallery() {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [prev, setPrev] = (0, import_react.useState)(null);
	const [direction, setDirection] = (0, import_react.useState)("right");
	const [transitioning, setTransitioning] = (0, import_react.useState)(false);
	const timerRef = (0, import_react.useRef)(null);
	const goTo = (index, dir) => {
		if (transitioning) return;
		setDirection(dir);
		setPrev(current);
		setTransitioning(true);
		setCurrent(index);
		setTimeout(() => {
			setPrev(null);
			setTransitioning(false);
		}, 700);
	};
	const restartTimer = () => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => advance(), INTERVAL);
	};
	const advance = () => {
		setCurrent((c) => {
			const next = (c + 1) % IMAGES.length;
			setDirection("right");
			setPrev(c);
			setTransitioning(true);
			setTimeout(() => {
				setPrev(null);
				setTransitioning(false);
			}, 700);
			return next;
		});
	};
	(0, import_react.useEffect)(() => {
		timerRef.current = setInterval(advance, INTERVAL);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 sm:py-28 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
						children: "Nuestra ciudad"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Puerto Madryn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted-foreground",
						children: "La tierra que nos da voz. Capital de la ballena franca austral y puerta de entrada a la Patagonia."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl overflow-hidden aspect-[16/7] bg-surface shadow-elevated group",
				children: [
					prev !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES[prev].src,
						alt: IMAGES[prev].caption,
						className: "absolute inset-0 h-full w-full object-cover",
						style: { animation: `slideOut${direction === "right" ? "Left" : "Right"} 0.7s ease forwards` }
					}, `prev-${prev}`),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES[current].src,
						alt: IMAGES[current].caption,
						className: "absolute inset-0 h-full w-full object-cover",
						style: { animation: prev !== null ? `slideIn${direction === "right" ? "Right" : "Left"} 0.7s ease forwards` : void 0 }
					}, `cur-${current}`),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute bottom-5 left-6 font-display text-lg font-semibold text-white drop-shadow-lg",
						children: IMAGES[current].caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							goTo((current - 1 + IMAGES.length) % IMAGES.length, "left");
							restartTimer();
						},
						"aria-label": "Anterior",
						className: "absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/50 text-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							goTo((current + 1) % IMAGES.length, "right");
							restartTimer();
						},
						"aria-label": "Siguiente",
						className: "absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/50 text-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-5 right-5 flex gap-1.5",
						children: IMAGES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								goTo(i, i > current ? "right" : "left");
								restartTimer();
							},
							"aria-label": `Imagen ${i + 1}`,
							className: `h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`
						}, i))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes slideInRight  { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideOutLeft  { from { transform: translateX(0); }    to { transform: translateX(-100%); } }
        @keyframes slideInLeft   { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes slideOutRight { from { transform: translateX(0); }    to { transform: translateX(100%); } }
      ` })]
	});
}
var programacion_default = {
	mes: "Junio 2026",
	programas: {
		"lunes_viernes": [
			{
				"time": "00:00 – 07:00",
				"name": "Trasnoche Cristal",
				"host": "Producción Radio Cristal",
				"description": "Música y contenidos para acompañar la madrugada.",
				"initials": "TC"
			},
			{
				"time": "07:00 – 09:00",
				"name": "Caminos Folklóricos",
				"host": "Diego Cicocci",
				"description": "Música folklórica para arrancar la mañana.",
				"initials": "DC"
			},
			{
				"time": "09:00 – 12:30",
				"name": "AM Noticias",
				"host": "Julián Tortola",
				"description": "Informativo de interés general, cultura, formación y deportes con móviles exteriores.",
				"initials": "JT"
			},
			{
				"time": "12:30 – 13:00",
				"name": "Panoramas de Noticias",
				"host": "Orlando Truppa",
				"description": "Resumen informativo de la mañana.",
				"initials": "OT"
			},
			{
				"time": "13:00 – 15:00",
				"name": "Planeta 80",
				"host": "Pablo Sturzenegger",
				"description": "Los mejores hits de los años 80.",
				"initials": "PS"
			},
			{
				"time": "15:00 – 17:00",
				"name": "Mega Ranking",
				"host": "María Bustos",
				"description": "El ranking musical más escuchado de la radio.",
				"initials": "MB"
			},
			{
				"time": "17:00 – 19:00",
				"name": "Lo Que Faltaba – Magazine",
				"host": "Marcos Méndez",
				"description": "Magazine de tarde con actualidad, entrevistas y humor.",
				"initials": "MM"
			},
			{
				"time": "19:00 – 20:00",
				"name": "Una y Mil Canciones",
				"host": "Ana Córdoba",
				"description": "Música variada para el atardecer.",
				"initials": "AC"
			},
			{
				"time": "20:00 – 21:00",
				"name": "Panorama Cristal",
				"host": "Orlando Truppa",
				"description": "Informativo y periodístico del cierre del día.",
				"initials": "OT"
			},
			{
				"time": "21:00 – 24:00",
				"name": "La Canción Lógica",
				"host": "Mariano Lainez",
				"description": "Música y entretenimiento para cerrar la noche.",
				"initials": "ML"
			}
		],
		"lunes_miercoles_viernes": [{
			"time": "21:00 – 24:00",
			"name": "Las Estrelladas",
			"host": "Vicky González",
			"description": "En vivo y por streaming en YouTube. Solo lunes, miércoles y viernes.",
			"initials": "VG"
		}],
		"jueves": [{
			"time": "19:00 – 20:00",
			"name": "Mentes Lúcidas",
			"host": "Prof. Flavia Núñez",
			"description": "Taller de radio del Servicio de Protección de los Derechos del Niño, Niña y Adolescentes, dependiente de la Subsecretaría de Familia de la Municipalidad de Puerto Madryn. En Radio Cristal desde el año 2007.",
			"initials": "FN"
		}],
		"sabado": [
			{
				"time": "00:05 – 03:00",
				"name": "Internacionales 107",
				"host": "Producción Radio Cristal",
				"description": "Música internacional para la madrugada del sábado.",
				"initials": "IC"
			},
			{
				"time": "03:00 – 07:00",
				"name": "Trasnoche Cristal",
				"host": "Producción Radio Cristal",
				"description": "Música del recuerdo para la madrugada.",
				"initials": "TC"
			},
			{
				"time": "07:00 – 09:00",
				"name": "Acordes y Rasguidos",
				"host": "Producción Radio Cristal",
				"description": "Folklore para el sábado a la mañana.",
				"initials": "AR"
			},
			{
				"time": "09:00 – 12:00",
				"name": "Protagonistas",
				"host": "Julio César Serón",
				"description": "Periodístico político y social. En vivo.",
				"initials": "JS"
			},
			{
				"time": "12:00 – 13:00",
				"name": "Panorama Resumen Semanal",
				"host": "Orlando Trupa",
				"description": "Resumen semanal de noticias.",
				"initials": "OT"
			},
			{
				"time": "13:00 – 16:00",
				"name": "La Canción Lógica",
				"host": "Mariano Lainez",
				"description": "Música y entretenimiento de tarde.",
				"initials": "ML"
			},
			{
				"time": "16:00 – 19:00",
				"name": "Planeta 80",
				"host": "Pablo Sturzenegger",
				"description": "Producción y conducción. Los mejores éxitos de los 80.",
				"initials": "PS"
			},
			{
				"time": "19:00 – 21:00",
				"name": "Musiquera",
				"host": "Producción Radio Cristal",
				"description": "Música variada y bailable para el sábado a la noche.",
				"initials": "MU"
			},
			{
				"time": "21:00 – 24:00",
				"name": "Hagamos Previa",
				"host": "Marco Méndez",
				"description": "El cierre del sábado con la mejor música.",
				"initials": "HP"
			}
		],
		"domingo": [
			{
				"time": "00:01 – 03:00",
				"name": "Parriba Musical Tropical",
				"host": "Rogelio Suárez",
				"description": "Música tropical para la madrugada del domingo.",
				"initials": "RS"
			},
			{
				"time": "03:00 – 07:00",
				"name": "Amanecer de Cristal",
				"host": "Producción Radio Cristal",
				"description": "Musical para acompañar el amanecer del domingo.",
				"initials": "AC"
			},
			{
				"time": "07:00 – 09:00",
				"name": "Acordes y Rasguidos",
				"host": "Producción Radio Cristal",
				"description": "Folklore para el domingo a la mañana.",
				"initials": "AR"
			},
			{
				"time": "09:00 – 13:00",
				"name": "Anti-Age",
				"host": "Marcela Cabrera",
				"description": "Música del recuerdo para disfrutar el domingo.",
				"initials": "MC"
			},
			{
				"time": "13:00 – 15:00",
				"name": "Tarde de Nacionales",
				"host": "Producción Radio Cristal",
				"description": "Música nacional para el domingo a la tarde.",
				"initials": "TN"
			},
			{
				"time": "15:00 – 18:00",
				"name": "Una y Mil Canciones",
				"host": "Ana Córdoba",
				"description": "Música variada para la tarde del domingo.",
				"initials": "AC"
			},
			{
				"time": "18:00 – 24:00",
				"name": "Adiós Finde",
				"host": "Producción Radio Cristal",
				"description": "Música variada para despedir el fin de semana.",
				"initials": "AF"
			}
		]
	},
	nota: "Flashes informativos de Radio Noticias del Plata cada media hora. Los programas pueden variar por transmisiones de fútbol nacionales o internacionales."
};
var SCHEDULE = programacion_default;
programacion_default.programas.lunes_viernes;
var DAY_LABELS = {
	lunes_viernes: "Lunes a Viernes",
	lunes_miercoles_viernes: "Lun / Mié / Vie",
	jueves: "Jueves",
	sabado: "Sábado",
	domingo: "Domingo"
};
var DAY_KEYS = Object.keys(DAY_LABELS);
function Programming() {
	const { t } = useI18n();
	const [activeDay, setActiveDay] = (0, import_react.useState)("lunes_viernes");
	const programs = SCHEDULE.programas[activeDay];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "programacion",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
							children: t("prog.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
							children: t("prog.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted-foreground",
							children: t("prog.subtitle")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
							" ",
							SCHEDULE.mes
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: DAY_KEYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveDay(day),
						className: `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeDay === day ? "bg-brand text-brand-foreground" : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"}`,
						children: DAY_LABELS[day]
					}, day))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-primary font-display text-sm font-bold text-brand-foreground",
									children: p.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold tabular-nums text-muted-foreground",
									children: p.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-bold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-brand",
								children: p.host
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.description
							})
						]
					}, p.name + p.time))
				}),
				SCHEDULE.nota && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-xs text-muted-foreground border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Nota: "
					}), SCHEDULE.nota]
				})
			]
		})
	});
}
var SOCIALS = [
	{
		name: "Facebook",
		icon: Facebook,
		href: "#",
		color: "from-[#1877F2] to-[#0d5fcc]"
	},
	{
		name: "Instagram",
		icon: Instagram,
		href: "#",
		color: "from-[#E1306C] to-[#C13584]"
	},
	{
		name: "X / Twitter",
		icon: Twitter,
		href: "#",
		color: "from-[#1f1f1f] to-[#000]"
	},
	{
		name: "YouTube",
		icon: Youtube,
		href: "#",
		color: "from-[#FF0000] to-[#c40000]"
	},
	{
		name: "TikTok",
		icon: Music2,
		href: "#",
		color: "from-[#25F4EE] to-[#FE2C55]"
	},
	{
		name: "WhatsApp",
		icon: MessageCircle,
		href: "#",
		color: "from-[#25D366] to-[#128C7E]"
	}
];
function Socials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
					children: "Seguinos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
					children: "Conectate con Radio Cristal"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: s.href,
					"aria-label": s.name,
					className: `group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl bg-linear-to-br ${s.color} p-5 text-white transition-transform hover:-translate-y-1`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						children: s.name
					})]
				}, s.name))
			})]
		})
	});
}
function Contact() {
	const { t } = useI18n();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const schema = objectType({
		name: stringType().trim().min(2, t("contact.err.name")).max(100),
		email: stringType().trim().email(t("contact.err.email")).max(200),
		phone: stringType().trim().max(40).optional().or(literalType("")),
		message: stringType().trim().min(10, t("contact.err.message")).max(1e3)
	});
	const submit = (e) => {
		e.preventDefault();
		const r = schema.safeParse(form);
		if (!r.success) {
			const errs = {};
			r.error.issues.forEach((i) => errs[String(i.path[0])] = i.message);
			setErrors(errs);
			return;
		}
		setErrors({});
		toast.success(t("contact.success"));
		setForm({
			name: "",
			email: "",
			phone: "",
			message: ""
		});
	};
	const field = (k) => ({
		value: form[k],
		onChange: (e) => setForm({
			...form,
			[k]: e.target.value
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
					children: t("contact.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl",
					children: t("contact.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: t("contact.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold",
								children: t("contact.studios")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: "Av. Roca 1234, Puerto Madryn, Chubut"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold",
								children: t("contact.email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sm text-muted-foreground hover:text-foreground",
								href: "mailto:fmcristal107.1@gmail.com",
								children: "fmcristal107.1@gmail.com"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold",
								children: t("contact.phone")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: "+54 280 4 123 456"
							})] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: t("contact.name")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									...field("name"),
									className: "mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
								}),
								errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-destructive",
									children: errors.name
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: t("contact.email")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									...field("email"),
									className: "mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
								}),
								errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-destructive",
									children: errors.email
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold",
							children: [
								t("contact.phone"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: t("contact.phoneOpt")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							...field("phone"),
							className: "mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: t("contact.message")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								...field("message"),
								rows: 5,
								className: "mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs text-destructive",
								children: errors.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.01] active:scale-95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
							" ",
							t("contact.send")
						]
					})
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen bg-background pb-24 text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedNews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MadrynGallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programming, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyPlayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoutubeLiveWidget, {})
		]
	}) }) });
}
//#endregion
export { Index as component };
