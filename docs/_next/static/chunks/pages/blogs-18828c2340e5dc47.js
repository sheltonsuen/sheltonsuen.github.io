(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{7038:function(e,n,r){"use strict";var t=r(8430);n.default=void 0;var o,a=(o=r(1261))&&o.__esModule?o:{default:o},i=r(409),c=r(3219),l=r(420);var s={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),r=t(n,2),a=r[0],c=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,m=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=l.useIntersection({rootMargin:"200px"}),w=t(x,2),b=w[0],C=w[1],j=a.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);a.default.useEffect((function(){var e=C&&r&&i.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,t=s[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,C,_,r,o]);var N={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,h,g,m,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof _?_:o&&o.locale,P=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);N.href=P||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(n,N)};n.default=f},420:function(e,n,r){"use strict";var t=r(8430);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,s=e.disabled||!i,u=o.useRef(),f=o.useState(!1),d=t(f,2),p=d[0],v=d[1],h=o.useState(n?n.current:null),g=t(h,2),m=g[0],_=g[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),s||p||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=c.get(t):(n=c.get(r),l.push(r));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(r,n={id:r,observer:a,elements:o}),n}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var n=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&v(e)}),{root:m,rootMargin:r}))}),[s,m,r,p]);return o.useEffect((function(){if(!i&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){n&&_(n.current)}),[n]),[y,p]};var o=r(1261),a=r(3944),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},5157:function(e,n,r){"use strict";r.d(n,{F:function(){return i}});var t=r(9278),o=r(55),a=t.ZP.img.withConfig({displayName:"Avatar__Img",componentId:"sc-j2rhp9-0"})(["width:100%;height:100%;vertical-align:middle;border-radius:50%;"]),i=function(e){var n=e.children;return(0,o.jsxs)(c,{children:[(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{src:"/avatar.jpeg"}),(0,o.jsx)(f,{children:"\u5b59\u6653\u806a"})]}),(0,o.jsx)(s,{children:n})]})},c=t.ZP.div.withConfig({displayName:"PageWrapper__Wrapper",componentId:"sc-859ve4-0"})(["margin:0;padding:32px 16px;display:flex;justify-content:center;width:1280px;"]),l=t.ZP.div.withConfig({displayName:"PageWrapper__SideBarWrapper",componentId:"sc-859ve4-1"})(["width:256px;border:1px solid red;display:flex;flex-flow:column nowrap;align-items:center;"]),s=t.ZP.div.withConfig({displayName:"PageWrapper__ContentWrapper",componentId:"sc-859ve4-2"})(["flex:1;border:1px solid blue;"]),u=(0,t.ZP)((function(e){var n=e.src,r=e.className;return(0,o.jsx)(a,{className:r,src:n})})).withConfig({displayName:"PageWrapper__StyledAvatar",componentId:"sc-859ve4-3"})(["width:128px;height:128px;margin:32px 0 8px 0;"]),f=t.ZP.span.withConfig({displayName:"PageWrapper__Name",componentId:"sc-859ve4-4"})(["font-size:1.6rem;"])},1288:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i}});var t=r(5486),o=r(5157),a=r(55),i=!0;n.default=function(e){var n=e.blogs;return(0,a.jsx)(o.F,{children:(0,a.jsx)("ul",{children:n.map((function(e,n){var r=e.categories,o=e.name,i=r.length?"".concat(r.join("/"),"/").concat(o):o;return(0,a.jsx)("li",{children:(0,a.jsx)(t.default,{href:"/blogs/".concat(i),children:"".concat(i)})},i)}))})})}},1859:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return r(1288)}])},5486:function(e,n,r){e.exports=r(7038)}},function(e){e.O(0,[774,888,179],(function(){return n=1859,e(e.s=n);var n}));var n=e.O();_N_E=n}]);