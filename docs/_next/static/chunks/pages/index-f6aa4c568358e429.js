(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7038:function(e,n,r){"use strict";var t=r(8430);n.default=void 0;var o,a=(o=r(1261))&&o.__esModule?o:{default:o},i=r(409),c=r(3219),u=r(420);var l={};function s(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),r=t(n,2),a=r[0],c=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,b=u.useIntersection({rootMargin:"200px"}),x=t(b,2),w=x[0],E=x[1],C=a.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);a.default.useEffect((function(){var e=E&&r&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,E,y,r,o]);var j={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:c}))}(e,o,d,p,h,g,m,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);j.href=M||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,j)};n.default=f},420:function(e,n,r){"use strict";var t=r(8430);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,l=e.disabled||!i,s=o.useRef(),f=o.useState(!1),d=t(f,2),p=d[0],v=d[1],h=o.useState(n?n.current:null),g=t(h,2),m=g[0],y=g[1],_=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),l||p||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=c.get(t):(n=c.get(r),u.push(r));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(r,n={id:r,observer:a,elements:o}),n}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&v(e)}),{root:m,rootMargin:r}))}),[l,m,r,p]);return o.useEffect((function(){if(!i&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){n&&y(n.current)}),[n]),[_,p]};var o=r(1261),a=r(3944),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},6657:function(e,n,r){"use strict";r.d(n,{F:function(){return a}});var t=r(9278),o=r(55),a=function(e){var n=e.children;return(0,o.jsxs)(i,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(u,{children:n})]})},i=t.ZP.div.withConfig({displayName:"PageWrapper__Wrapper",componentId:"sc-859ve4-0"})(["margin:0;padding:0;display:flex;justify-content:center;max-width:1024px;"]),c=t.ZP.div.withConfig({displayName:"PageWrapper__SideBarWrapper",componentId:"sc-859ve4-1"})(["width:256px;border:1px solid red;"]),u=t.ZP.div.withConfig({displayName:"PageWrapper__ContentWrapper",componentId:"sc-859ve4-2"})(["flex:1;border:1px solid blue;"])},3582:function(e,n,r){"use strict";r.r(n);var t=r(5486),o=r(6657),a=r(55);n.default=function(){return(0,a.jsx)(o.F,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.default,{href:"/blogs",children:"blogs"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.default,{href:"/readings",children:"readings"})})]})})}},928:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3582)}])},5486:function(e,n,r){e.exports=r(7038)}},function(e){e.O(0,[278,774,888,179],(function(){return n=928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);