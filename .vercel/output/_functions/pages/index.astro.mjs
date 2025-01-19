/* empty css                                 */
import { i as createComponent, r as renderTemplate, m as maybeRenderHead, J as renderComponent, k as addAttribute, ac as renderScript, h as createAstro, ad as renderHead, ae as renderSlot } from '../chunks/astro/server_H-PE5UOB.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$Image } from '../chunks/_astro_assets_G954ZYVZ.mjs';
import 'clsx';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
export { renderers } from '../renderers.mjs';

const bathroomImage = new Proxy({"src":"/_astro/bathrooms.C6rAxhBJ.jpg","width":793,"height":446,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/bathrooms.jpg";
							}
							
							return target[name];
						}
					});

const decoratingImage = new Proxy({"src":"/_astro/decorating.D2lRH3QU.jpg","width":792,"height":446,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/decorating.jpg";
							}
							
							return target[name];
						}
					});

const kitchensImage = new Proxy({"src":"/_astro/kitchens.yYmho5An.jpg","width":793,"height":446,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/kitchens.jpg";
							}
							
							return target[name];
						}
					});

const maintenanceImage = new Proxy({"src":"/_astro/maintenance.GWfmCsfQ.jpg","width":5939,"height":3959,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/maintenance.jpg";
							}
							
							return target[name];
						}
					});

const plumbingImage = new Proxy({"src":"/_astro/plumbing.CHBGkTzH.jpg","width":792,"height":446,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/plumbing.jpg";
							}
							
							return target[name];
						}
					});

const tilingImage = new Proxy({"src":"/_astro/tiling.4VzrnKCj.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/services/tiling.jpg";
							}
							
							return target[name];
						}
					});

const services = [
  {
    title: "Property Maintenance",
    image: maintenanceImage
  },
  {
    title: "Bathrooms",
    image: bathroomImage
  },
  {
    title: "Kitchens",
    image: kitchensImage
  },
  {
    title: "Plumbing",
    image: plumbingImage
  },
  {
    title: "Tiling",
    image: tilingImage
  },
  {
    title: "Decorating",
    image: decoratingImage
  }
];

const MobileIcon = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-device-mobile",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" }),
      /* @__PURE__ */ jsx("path", { d: "M11 4h2" }),
      /* @__PURE__ */ jsx("path", { d: "M12 17v.01" })
    ]
  }
);
const PhoneIcon = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-phone",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" })
    ]
  }
);
const EmailIcon = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon icon-tabler icons-tabler-outline icon-tabler-mail",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }),
      /* @__PURE__ */ jsx("path", { d: "M3 7l9 6l9 -6" })
    ]
  }
);

const contactPoints = [
  {
    type: "Mob",
    details: "07581 398859",
    icon: MobileIcon
  },
  {
    type: "Tel",
    details: "01323 899839",
    icon: PhoneIcon
  },
  {
    type: "Email",
    details: "mail@jaiscudderplumbing.co.uk",
    icon: EmailIcon
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const businessName = "Jai Scudder Ltd Plumbing & Property Maintenance";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-red-700 text-gray-100"> <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 gap-8 md:grid-cols-3"> <!-- Company Info --> <div class="space-y-4"> <h3 class="text-xl font-bold text-white">Contact Us</h3> <div class="space-y-2"> ${contactPoints.map((contact) => {
    const Icon = contact.icon;
    return renderTemplate`<p class="flex items-center"> ${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "className": "h-5 w-5 mr-2" })}`} <a${addAttribute(
      contact.type === "Email" ? `mailto:${contact.details}` : `tel:${contact.details.replace(/\s/g, "")}`,
      "href"
    )} class="transition-colors hover:text-gray-300"> ${contact.details} </a> </p>`;
  })} </div> </div> <!-- Services --> <div> <h3 class="mb-4 text-xl font-bold text-white">Our Services</h3> <ul class="space-y-2"> ${services.map((service) => renderTemplate`<li>${service.title}</li>`)} </ul> </div> <!-- Quick Links --> <div> <h3 class="mb-4 text-xl font-bold text-white">Quick Links</h3> <ul class="space-y-2"> <li> <a href="#services" class="transition-colors hover:text-gray-300">
Services
</a> </li> <li> <a href="#gallery" class="transition-colors hover:text-gray-300">
Gallery
</a> </li> <li> <a href="#testimonials" class="transition-colors hover:text-gray-300">
Testimonials
</a> </li> <li> <a href="#contact" class="transition-colors hover:text-gray-300">
Contact Us
</a> </li> </ul> </div> </div> <!-- Bottom Bar --> <div class="mt-8 border-t border-white pt-8"> <div class="flex flex-col items-center justify-between md:flex-row"> <p class="text-sm">
&copy; ${currentYear} ${businessName}. All rights reserved.
</p> <div class="mt-4 md:mt-0"> <p class="text-sm">
Insured & Fully Qualified | Family Owned & Operated
</p> </div> </div> </div> </div> </footer>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Footer.astro", void 0);

const icon = new Proxy({"src":"/_astro/headerLogo.Dv1UI56t.svg","width":600,"height":600,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/headerLogo.svg";
							}
							
							return target[name];
						}
					});

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-white shadow-md"> <div class="container mx-auto flex items-center justify-between px-4 py-4"> <div class="flex items-center text-left"> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": "JSP Logo", "class": "mr-2 h-8 w-8" })} <div class="text-2xl font-bold">JAI SCUDDER LTD</div> </div>  <ul class="hidden space-x-6 md:flex"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="smooth-scroll text-gray-800 transition-colors hover:text-blue-600"> ${item.label} </a> </li>`)} </ul>  <div class="md:hidden"> <button id="mobile-menu-toggle" class="text-gray-800 focus:outline-none" aria-label="Toggle mobile menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div>  <div id="mobile-menu" class="fixed inset-0 z-40 -translate-x-full transform bg-white transition-transform duration-300 ease-in-out md:hidden"> <button id="mobile-menu-close" class="absolute right-4 top-4 text-2xl" aria-label="Close mobile menu">
✕
</button> <ul class="flex h-full flex-col items-center justify-center space-y-6"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="mobile-nav-link text-2xl text-gray-800 hover:text-blue-600"> ${item.label} </a> </li>`)} </ul> </div> </nav> ${renderScript($$result, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$HeadSEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadSEO;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  if (Astro2.props.ogImage === void 0) {
    Astro2.props.ogImage = new URL("me.png", canonicalURL);
  }
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="shortcut icon" type="image/svg+xml"${addAttribute(`${Astro2.site}favicon.ico`, "href")}><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:site_name"${addAttribute(title, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/HeadSEO.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Jai Scudder - Plumbing and Property Maintenance",
    description = "A local plumber that places an emphasis on quality and reputation",
    ogImage = new URL("headerLogo.svg", Astro2.url)
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full w-full"> <head>${renderComponent($$result, "HeadSEO", $$HeadSEO, { "title": title, "description": description, "ogImage": ogImage })}${renderHead()}</head> <body class="h-full min-h-screen w-full bg-white text-black"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/layouts/Layout.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16" id="services"> <div class="mb-12 bg-red-700 rounded-lg"> <div class="container mx-auto px-4"> <h2 class="py-6 text-center text-4xl font-bold text-white">Services</h2> </div> </div> <div class="grid gap-8 md:grid-cols-3"> ${services.map((service) => renderTemplate`<div class="group relative h-96 overflow-hidden rounded-lg shadow-lg"> ${renderComponent($$result, "Image", $$Image, { "src": service.image, "alt": service.title, "width": 500, "height": 500, "class": "absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110", "loading": "eager", "fetchpriority": "low" })} <div class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-6 text-white transition-opacity duration-300 group-hover:bg-opacity-70"> <h3 class="mb-3 text-2xl font-bold">${service.title}</h3> </div> </div>`)} </div> </section>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Services.astro", void 0);

const Gallery = ({ galleries }) => {
  const [selectedGallery, setSelectedGallery] = useState(
    null
  );
  const formatImagesForGallery = (images) => {
    return images.map((img) => ({
      original: img.src,
      thumbnail: img.src,
      originalAlt: img.alt || "",
      thumbnailAlt: img.alt || ""
    }));
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16", id: "gallery", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-12 rounded-lg bg-red-700", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("h2", { className: "py-6 text-center text-4xl font-bold text-white", children: "Gallery" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2", children: galleries.map((gallery, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setSelectedGallery(gallery),
        className: "group relative cursor-pointer overflow-hidden rounded-lg shadow-lg",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: gallery.images[0].src,
              alt: gallery.name,
              className: "h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-white", children: /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold", children: gallery.name }) }) })
        ]
      },
      index
    )) }),
    selectedGallery && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSelectedGallery(null),
          className: "absolute right-4 top-4 z-50 p-4 text-white transition-colors hover:text-gray-300",
          children: "Close"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-full max-w-5xl", children: /* @__PURE__ */ jsx(
        ImageGallery,
        {
          items: formatImagesForGallery(selectedGallery.images),
          showPlayButton: false,
          showFullscreenButton: true,
          showNav: true,
          showThumbnails: true,
          useBrowserFullscreen: true
        }
      ) })
    ] })
  ] }) });
};

const bathroomsimg1 = new Proxy({"src":"/_astro/Pic1.C13318Df.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic1.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg2 = new Proxy({"src":"/_astro/Pic2.CXrgUvyH.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic2.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg3 = new Proxy({"src":"/_astro/Pic3.BQyniVPb.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic3.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg4 = new Proxy({"src":"/_astro/Pic4.DATRrYcL.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic4.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg5 = new Proxy({"src":"/_astro/Pic5.DEwbUHds.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic5.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg6 = new Proxy({"src":"/_astro/Pic6.VsW2t6vr.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic6.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg7 = new Proxy({"src":"/_astro/Pic7.D9aFXJqN.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic7.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg8 = new Proxy({"src":"/_astro/Pic8.C4736BuK.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic8.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg9 = new Proxy({"src":"/_astro/Pic9.63omQd8u.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic9.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg10 = new Proxy({"src":"/_astro/Pic10.CkciLKsP.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic10.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg11 = new Proxy({"src":"/_astro/Pic11.-uW5SokZ.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic11.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg12 = new Proxy({"src":"/_astro/Pic12.BlLPMbAk.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic12.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg13 = new Proxy({"src":"/_astro/Pic13.Dysy64NG.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic13.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg14 = new Proxy({"src":"/_astro/Pic14.BsewAJCZ.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic14.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg15 = new Proxy({"src":"/_astro/Pic15.Dn5XtBu4.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic15.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg16 = new Proxy({"src":"/_astro/Pic16.jquz63t9.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic16.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg17 = new Proxy({"src":"/_astro/Pic17.BtfjMU7b.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic17.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg18 = new Proxy({"src":"/_astro/Pic18.CQhZ39q-.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic18.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg19 = new Proxy({"src":"/_astro/Pic19.CbmmVxMb.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic19.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg20 = new Proxy({"src":"/_astro/Pic20.CQ5G9cSF.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic20.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg21 = new Proxy({"src":"/_astro/Pic21.C5Fdk_k3.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic21.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg22 = new Proxy({"src":"/_astro/Pic22.DGjoR7kT.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic22.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg23 = new Proxy({"src":"/_astro/Pic23.Ci0YvmwB.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic23.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg24 = new Proxy({"src":"/_astro/Pic24.D0RiugR5.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic24.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg25 = new Proxy({"src":"/_astro/Pic25.ByUjiLRr.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic25.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg26 = new Proxy({"src":"/_astro/Pic26.sTkq9Voj.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic26.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg27 = new Proxy({"src":"/_astro/Pic27.DwAG_0dI.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic27.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg28 = new Proxy({"src":"/_astro/Pic28.BOgu4UqW.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic28.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg29 = new Proxy({"src":"/_astro/Pic29.C6tMcGK5.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic29.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg30 = new Proxy({"src":"/_astro/Pic30.B2ADLqBx.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic30.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg31 = new Proxy({"src":"/_astro/Pic31.e2c6mDDO.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic31.jpg";
							}
							
							return target[name];
						}
					});

const bathroomsimg32 = new Proxy({"src":"/_astro/Pic32.BtqzT_h_.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/bathrooms/Pic32.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg1 = new Proxy({"src":"/_astro/Pic1.C38F4Tba.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic1.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg2 = new Proxy({"src":"/_astro/Pic2.y1bHaRX9.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic2.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg3 = new Proxy({"src":"/_astro/Pic3.B_vB_XYS.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic3.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg4 = new Proxy({"src":"/_astro/Pic4.CJZfx5sX.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic4.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg5 = new Proxy({"src":"/_astro/Pic5.DzwqJYV5.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic5.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg6 = new Proxy({"src":"/_astro/Pic6.Dm5ulzwu.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic6.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg7 = new Proxy({"src":"/_astro/Pic7.C-FgmcLh.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic7.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg8 = new Proxy({"src":"/_astro/Pic8.CRYz-WWA.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic8.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg9 = new Proxy({"src":"/_astro/Pic9.C-EfbbLC.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic9.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg10 = new Proxy({"src":"/_astro/Pic10.BKM9DCxS.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic10.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg11 = new Proxy({"src":"/_astro/Pic11.D-0Yaw3P.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic11.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg12 = new Proxy({"src":"/_astro/Pic12.zv77YRkH.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic12.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg13 = new Proxy({"src":"/_astro/Pic13.Cej49KJ2.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic13.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg14 = new Proxy({"src":"/_astro/Pic14.DAAZ_TVe.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic14.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg15 = new Proxy({"src":"/_astro/Pic15.DPC2EX3B.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic15.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg16 = new Proxy({"src":"/_astro/Pic16.C9kOBjfc.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic16.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg17 = new Proxy({"src":"/_astro/Pic17.CEqt2M11.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic17.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg18 = new Proxy({"src":"/_astro/Pic18.DkfpjzG7.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic18.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg19 = new Proxy({"src":"/_astro/Pic19.CoexMKW7.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic19.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg20 = new Proxy({"src":"/_astro/Pic20.BU48dU2V.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic20.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg21 = new Proxy({"src":"/_astro/Pic21.CcAXs0Df.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic21.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg22 = new Proxy({"src":"/_astro/Pic22.DJkmHg1E.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic22.jpg";
							}
							
							return target[name];
						}
					});

const kitchensimg23 = new Proxy({"src":"/_astro/Pic23.C2XQa2SJ.jpg","width":4640,"height":3480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/gallery/kitchens/Pic23.jpg";
							}
							
							return target[name];
						}
					});

const galleries = [
  {
    name: "Bathrooms",
    images: [
      bathroomsimg1,
      bathroomsimg2,
      bathroomsimg3,
      bathroomsimg4,
      bathroomsimg5,
      bathroomsimg6,
      bathroomsimg7,
      bathroomsimg8,
      bathroomsimg9,
      bathroomsimg10,
      bathroomsimg11,
      bathroomsimg12,
      bathroomsimg13,
      bathroomsimg14,
      bathroomsimg15,
      bathroomsimg16,
      bathroomsimg17,
      bathroomsimg18,
      bathroomsimg19,
      bathroomsimg20,
      bathroomsimg21,
      bathroomsimg22,
      bathroomsimg23,
      bathroomsimg24,
      bathroomsimg25,
      bathroomsimg26,
      bathroomsimg27,
      bathroomsimg28,
      bathroomsimg29,
      bathroomsimg30,
      bathroomsimg31,
      bathroomsimg32
    ]
  },
  {
    name: "Kitchens",
    images: [
      kitchensimg1,
      kitchensimg2,
      kitchensimg3,
      kitchensimg4,
      kitchensimg5,
      kitchensimg6,
      kitchensimg7,
      kitchensimg8,
      kitchensimg9,
      kitchensimg10,
      kitchensimg11,
      kitchensimg12,
      kitchensimg13,
      kitchensimg14,
      kitchensimg15,
      kitchensimg16,
      kitchensimg17,
      kitchensimg18,
      kitchensimg19,
      kitchensimg20,
      kitchensimg21,
      kitchensimg22,
      kitchensimg23
    ]
  }
];

const testimonials = [
  {
    name: "Anne",
    location: "Bishopstone",
    quote: "Jai provides a reliable, friendly and courteous service. He is multi skilled and highly effective for plumbing, household repairs and maintenance."
  },
  {
    name: "Steve & Charlotte",
    location: "Seaford",
    quote: "From start to finish we always felt like Jai understood what we were after in terms of style and finish. With every addition we added to the project (shelves in the boxing in for instance), it was never a problem and a solution was found so that we were happy with the end result. In terms of quality of work we couldn't fault it, the tiling is a real standout! Anyone else looking to get their bathroom refitted then look no further."
  },
  {
    name: "Lynn",
    location: "Seaford",
    quote: "I have always been very pleased with the work Jai has done for me which is why I always use him. When I have needed work done ASAP he has always done his best to fit me in which is much appreciated. His timekeeping is second to none and his attitude couldn't be better, very friendly & helpful. Nothing is too much trouble. I would not hesitate to recommend him to family & friends."
  },
  {
    name: "Steve & Sava",
    location: "Seaford",
    quote: "We just wanted to thank you for the excellent job you carried out on our new kitchen. As you know our original kitchen was extremely tired and dated but you have transformed it beyond recognition. We especially appreciated your friendly yet professional approach and attention to detail, which was very important to us, being quite fussy customers! Your knowledge and advice was invaluable in making the best out of a fairly small space, but the end result feels so much more airy, clean and spacious. It was also very convenient for us that we were able to entrust you with a key to our house to complete the work which did not disrupt the running of our own business. We would have absolutely no hesitation in recommending you to others."
  },
  {
    name: "Diane",
    location: "Seaford",
    quote: "I have used Jai for all my plumbing work for many years. He provides an excellent service and is always prompt and reliable. Jai will go beyond the call of duty should you have any unforeseen emergency and I feel I can rely on him if I have a problem. Jai is polite, friendly and trustworthy. His work is of a good standard and his prices are very reasonable. I would not hesitate to seek his help with any future problems and would recommend him to others."
  },
  {
    name: "Janis",
    location: "Eastbourne",
    quote: "Jai always attended when he said he would, from the first enquiry appointment right through to completing the work. He is very experienced in what he does and is happy to offer advice where necessary. He is a very tidy and careful worker. We are very happy with the work completed and would be happy to recommend Jai to others and to offer him work in the future."
  },
  {
    name: "Gerry",
    location: "Seaford",
    quote: "I am a professional landlord and when plumbing needs arise I require a responsive, efficient and friendly plumber who I can trust. I highly recommend Jai Scudder."
  },
  {
    name: "Judy",
    location: "Hailsham",
    quote: "Jai is a professional and friendly builder and plumber who did a great refresh job on my kitchen and utility area. Always on time, Jai offered good advice, and provided a true to cost estimate, with no hidden extras. I found Jai to be helpful and tidy, and would certainly use him again and would definitely recommend."
  },
  {
    name: "Tara",
    location: "Seaford",
    quote: "Jai has worked for me several times and there has been no job too big or too small. Jai is considerate, thoughtful and polite at all times. Jai carefully discusses with me all the options and advises me of the very best way forward. If any unforeseen hiccups occur Jai always has an answer and resolves it swiftly. I would not hesitate to call Jai for any jobs at hand (amongst some he has carried out are re-modelling my bathroom and kitchen) and would HIGHLY recommend him for his exceptionally tidy work, price and professionalism."
  }
];

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16" id="testimonials"> <div class="container mx-auto"> <div class="mb-12 rounded-lg bg-red-700"> <div class="container mx-auto px-4"> <h2 class="py-6 text-center text-4xl font-bold text-white">Testimonials</h2> </div> </div> <h3 class="mb-12 text-center">
If you would like to leave your own testimonial please send them to
<a href="mailto:mail@jaiscudderplumbing.co.uk">mail@jaiscudderplumbing.co.uk</a>. All testimonials are appreciated. Thank you!
</h3> ${testimonials.map((testimonial) => renderTemplate`<div class="group relative overflow-hidden py-4"> <p class="text-left">${testimonial.quote}</p> <p class="pb-8 pt-4 text-right font-bold"> ${testimonial.name}, ${testimonial.location} </p> </div>`)} </div> </section>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Testimonials.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto" id="contact"> <div class="mb-12 rounded-lg bg-red-700"> <div class="container mx-auto px-4"> <h2 class="py-6 text-center text-4xl font-bold text-white">Contact Us
</h2> </div> </div> <div class="mt-12"> <div class="mb-8 text-center"> <h2 class="font-light">Please contact Jai Scudder on:</h2> </div>  <div class="flex flex-col items-center justify-center"> ${contactPoints.map((contact) => {
    const Icon = contact.icon;
    return renderTemplate`<div class="mb-8 flex items-center justify-center"> <h3 class="flex items-center"> ${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "className": "h-5 w-5 mr-2" })}`} <a${addAttribute(
      contact.type === "Email" ? `mailto:${contact.details}` : `tel:${contact.details.replace(/\s/g, "")}`,
      "href"
    )} class="transition-colors hover:text-red-300"> ${contact.details} </a> </h3> </div>`;
  })} </div> </div> </div>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Contact.astro", void 0);

const paragraphs = [
  {
    text: "I am Jai Scudder, owner of Jai Scudder Ltd - Plumbing and Property Maintenance. I have been in the industry since 2005, and being based in Seaford, I am ideally situated to cover areas along the South Coast and Mid Sussex."
  },
  {
    text: "I have lived in Seaford all my life and seek to promote local business. My reputation for plumbing and property maintenance has developed through hard work and reliability."
  },
  {
    text: "I provide free advice, no obligation estimates and no call-out fees. My workmanship is guaranteed and fully insured and my aim is to take the worry out of your plumbing and property maintenance needs by providing a high quality, friendly and competitively priced service."
  }
];

const vanImage = new Proxy({"src":"/_astro/vanImage.C5gYP7mf.jpg","width":584,"height":329,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/assets/images/vanImage.jpg";
							}
							
							return target[name];
						}
					});

const $$Paragraphs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-full"> ${renderComponent($$result, "Image", $$Image, { "src": vanImage, "alt": "Jai Scudder Plumbing Van", "class": "h-full w-full rounded-lg object-cover", "loading": "eager", "fetchpriority": "low" })} </div> <div class="h-full"> <div class="flex h-full flex-col overflow-hidden rounded-lg border shadow-lg"> <div class="bg-red-700 p-4 font-semibold text-white">About Us</div> <div class="flex flex-1 flex-col justify-between"> ${paragraphs.map((paragraph) => renderTemplate`<div class="border-b p-4 last:border-b-0"> <p class="text-gray-700">${paragraph.text}</p> </div>`)} </div> </div> </div>`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Paragraphs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-10 text-center" id="home"> <h1 class="mb-3 pt-5 text-4xl font-bold">
JAI SCUDDER LTD<br>
PLUMBING AND PROPERTY MAINTENANCE
</h1> <p class="pb-3 pt-5 italic">
A local plumber that places an emphasis on quality and reputation.
</p> <hr class="border-jsp my-4 border-2"> <div class="grid items-start gap-6 md:grid-cols-2"> ${renderComponent($$result2, "Paragraphs", $$Paragraphs, {})} </div> ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Gallery", Gallery, { "galleries": galleries, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Gallery", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </div> ` })}`;
}, "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/pages/index.astro", void 0);

const $$file = "/Users/kyle/Documents/Repos/jaiscudderplumbing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
