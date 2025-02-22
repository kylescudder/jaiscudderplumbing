import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BLnWuV8g.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/","cacheDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/node_modules/.astro/","outDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/dist/","srcDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/src/","publicDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/public/","buildClientDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/dist/","buildServerDir":"file:///Users/kyle/Documents/Repos/jaiscudderplumbing/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.w28LBE--.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kyle/Documents/Repos/jaiscudderplumbing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BeIyajsx.mjs","/Users/kyle/Documents/Repos/jaiscudderplumbing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B73S2KGP.mjs","/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Gallery":"_astro/Gallery.BTOtJLYC.js","@astrojs/react/client.js":"_astro/client.6H0tFSZU.js","/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.C6O4fg8d.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/kyle/Documents/Repos/jaiscudderplumbing/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\"a.smooth-scroll, .mobile-nav-link\").forEach(s=>{s.addEventListener(\"click\",function(a){a.preventDefault();const c=this.getAttribute(\"href\"),l=document.querySelector(c);if(l){l.scrollIntoView({behavior:\"smooth\",block:\"start\"});const t=document.getElementById(\"mobile-menu\");t&&(t.classList.remove(\"translate-x-0\"),t.classList.add(\"-translate-x-full\"))}})});const n=document.getElementById(\"mobile-menu-toggle\"),o=document.getElementById(\"mobile-menu-close\"),e=document.getElementById(\"mobile-menu\");n&&e&&n.addEventListener(\"click\",()=>{e.classList.remove(\"-translate-x-full\"),e.classList.add(\"translate-x-0\")});o&&e&&o.addEventListener(\"click\",()=>{e.classList.remove(\"translate-x-0\"),e.classList.add(\"-translate-x-full\")});"]],"assets":["/_astro/vanImage.C5gYP7mf.jpg","/_astro/bathrooms.C6rAxhBJ.jpg","/_astro/decorating.D2lRH3QU.jpg","/_astro/kitchens.yYmho5An.jpg","/_astro/plumbing.CHBGkTzH.jpg","/_astro/Pic8.C4736BuK.JPG","/_astro/Pic10.CkciLKsP.JPG","/_astro/Pic12.BlLPMbAk.JPG","/_astro/Pic11.-uW5SokZ.jpg","/_astro/Pic9.63omQd8u.JPG","/_astro/tiling.4VzrnKCj.jpg","/_astro/maintenance.GWfmCsfQ.jpg","/_astro/Pic13.Dysy64NG.JPG","/_astro/Pic14.BsewAJCZ.JPG","/_astro/Pic1.C13318Df.JPG","/_astro/Pic5.DEwbUHds.JPG","/_astro/Pic7.D9aFXJqN.JPG","/_astro/Pic15.Dn5XtBu4.JPG","/_astro/Pic16.jquz63t9.jpg","/_astro/Pic17.BtfjMU7b.JPG","/_astro/Pic18.CQhZ39q-.JPG","/_astro/Pic6.VsW2t6vr.JPG","/_astro/Pic3.BQyniVPb.JPG","/_astro/Pic2.CXrgUvyH.JPG","/_astro/Pic4.DATRrYcL.JPG","/_astro/Pic20.CQ5G9cSF.JPG","/_astro/Pic21.C5Fdk_k3.JPG","/_astro/Pic22.DGjoR7kT.JPG","/_astro/Pic24.D0RiugR5.JPG","/_astro/Pic19.CbmmVxMb.JPG","/_astro/Pic25.ByUjiLRr.JPG","/_astro/Pic27.DwAG_0dI.JPG","/_astro/Pic23.Ci0YvmwB.JPG","/_astro/Pic26.sTkq9Voj.jpg","/_astro/Pic29.C6tMcGK5.JPG","/_astro/Pic28.BOgu4UqW.JPG","/_astro/Pic31.e2c6mDDO.JPG","/_astro/Pic30.B2ADLqBx.JPG","/_astro/Pic1.C38F4Tba.JPG","/_astro/Pic32.BtqzT_h_.JPG","/_astro/Pic2.y1bHaRX9.JPG","/_astro/Pic3.B_vB_XYS.JPG","/_astro/Pic7.C-FgmcLh.JPG","/_astro/Pic8.CRYz-WWA.JPG","/_astro/Pic4.CJZfx5sX.JPG","/_astro/Pic9.C-EfbbLC.JPG","/_astro/Pic10.BKM9DCxS.JPG","/_astro/Pic5.DzwqJYV5.JPG","/_astro/Pic11.D-0Yaw3P.JPG","/_astro/Pic17.CEqt2M11.JPG","/_astro/Pic18.DkfpjzG7.JPG","/_astro/Pic6.Dm5ulzwu.JPG","/_astro/Pic12.zv77YRkH.JPG","/_astro/Pic19.CoexMKW7.JPG","/_astro/Pic16.C9kOBjfc.JPG","/_astro/Pic15.DPC2EX3B.JPG","/_astro/Pic13.Cej49KJ2.JPG","/_astro/Pic14.DAAZ_TVe.JPG","/_astro/Pic23.C2XQa2SJ.JPG","/_astro/headerLogo.Dv1UI56t.svg","/_astro/Pic21.CcAXs0Df.JPG","/_astro/Pic22.DJkmHg1E.JPG","/_astro/Pic20.BU48dU2V.JPG","/_astro/index.w28LBE--.css","/favicon.ico","/favicon.svg","/headerLogo.svg","/_astro/Gallery.BTOtJLYC.js","/_astro/client.6H0tFSZU.js","/_astro/index.DSb8Szbl.js","/_astro/index.G0iZE90Q.css"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Fo32nBczhPSARl/hWoOCwh88R2sGMCmmScP2tUQfr6k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
