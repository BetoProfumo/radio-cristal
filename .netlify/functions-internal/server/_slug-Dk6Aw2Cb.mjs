import { r as __toESM } from "./_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-CO7cYZJ0.mjs";
import { E as Instagram, I as Clock, T as LoaderCircle, U as ArrowLeft, c as User, g as Newspaper, h as Pause, k as Facebook, n as X, p as Play, t as Youtube, x as Menu } from "./_libs/lucide-react.mjs";
import { a as Logo, c as YoutubeLiveWidget, d as useI18n, f as useNews, i as LanguageSwitcher, m as usePlayer, n as I18nProvider, o as PlayerProvider, p as useNewsBySlug, r as InfoBar, s as StickyPlayer, t as Footer, u as formatRelativeDate } from "./_ssr/youtube-live-h-gPNTAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Dk6Aw2Cb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { playing, toggle, status } = usePlayer();
	const { t } = useI18n();
	const NAV = [
		{
			href: "/#inicio",
			label: t("nav.home")
		},
		{
			href: "/#noticias",
			label: t("nav.news")
		},
		{
			href: "/#programacion",
			label: t("nav.programming")
		},
		{
			href: "/#nosotros",
			label: t("nav.about")
		},
		{
			href: "/#contacto",
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
					href: "/",
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
								playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden items-center gap-0.5 sm:flex",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eq-bar block h-3 w-0.5 rounded-full bg-current/70" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: status
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							"aria-label": "Menú",
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
function RelatedNews({ currentSlug }) {
	const { lang } = useI18n();
	const { data: news } = useNews();
	const related = news?.filter((n) => n.slug !== currentSlug).slice(0, 4) ?? [];
	if (related.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "w-full lg:w-80 shrink-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border",
			children: "También te podría interesar"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-4",
			children: related.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/noticias/$slug",
				params: { slug: n.slug },
				className: "group flex gap-3 items-start rounded-xl p-2 -mx-2 transition-colors hover:bg-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 w-20 h-16 overflow-hidden rounded-lg bg-surface",
					children: n.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: n.image,
						alt: n.title,
						className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
						loading: "lazy"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-full flex items-center justify-center text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-5 w-5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-wider text-brand",
							children: n.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatRelativeDate(n.dateIso, lang)]
						})
					]
				})]
			}, n.id))
		})]
	});
}
function NewsDetailContent() {
	const { slug } = Route.useParams();
	const { lang } = useI18n();
	const { data: item, isLoading, isError } = useNewsBySlug(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-page py-14 sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			hash: "noticias",
			className: "inline-flex items-center gap-1.5 text-sm font-semibold text-brand mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Volver a noticias"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col lg:flex-row gap-12 lg:gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex-1 min-w-0",
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "Cargando noticia…"
						})]
					}),
					isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-4 py-20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-12 w-12 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-bold text-foreground",
								children: "No se pudo cargar la noticia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Verificá tu conexión e intentá de nuevo."
							})
						]
					}),
					!isLoading && !isError && !item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-4 py-20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-12 w-12 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-bold text-foreground",
								children: "Noticia no encontrada"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Puede que haya sido movida o eliminada."
							})
						]
					}),
					item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), item.author]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), formatRelativeDate(item.dateIso, lang)]
								})
							]
						}),
						item.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.title,
								className: "h-auto w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "wp-content mt-8",
							dangerouslySetInnerHTML: { __html: item.content }
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedNews, { currentSlug: slug })]
		})]
	});
}
function NewsDetailPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen bg-background pb-24 text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsDetailContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyPlayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoutubeLiveWidget, {})
		]
	}) }) });
}
//#endregion
export { NewsDetailPage as component };
