(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7038:function(e,n,t){"use strict";var r=t(8430);n.default=void 0;var o,a=(o=t(1261))&&o.__esModule?o:{default:o},i=t(409),c=t(3219),l=t(420);var s={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var _=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,y=l.useIntersection({rootMargin:"200px"}),w=r(y,2),b=w[0],j=w[1],C=a.default.useCallback((function(e){b(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,b]);a.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),n="undefined"!==typeof x?x:o&&o.locale,r=s[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(o,d,p,{locale:n})}),[p,d,j,x,t,o]);var k={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,v,m,g,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var P="undefined"!==typeof x?x:o&&o.locale,I=o&&o.isLocaleDomain&&i.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);k.href=I||i.addBasePath(i.addLocale(p,P,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},420:function(e,n,t){"use strict";var r=t(8430);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,s=e.disabled||!i,u=o.useRef(),f=o.useState(!1),d=r(f,2),p=d[0],h=d[1],v=o.useState(n?n.current:null),m=r(v,2),g=m[0],x=m[1],_=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),s||p||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=c.get(r):(n=c.get(t),l.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var n=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:t}))}),[s,g,t,p]);return o.useEffect((function(){if(!i&&!p){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){n&&x(n.current)}),[n]),[_,p]};var o=t(1261),a=t(3944),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},4588:function(e,n,t){"use strict";t.d(n,{F:function(){return d}});var r=t(9278),o=t(55),a=r.ZP.img.withConfig({displayName:"Avatar__Img",componentId:"sc-j2rhp9-0"})(["width:100%;height:100%;vertical-align:middle;border-radius:50%;"]),i=t(6826),c=[{path:"/",title:"\u6700\u65b0"},{path:"/blogs",title:"\u535a\u5ba2"},{path:"/readings",title:"\u4e66\u8bc4"}],l=function(){var e=(0,i.useRouter)();return(0,o.jsx)(s,{children:c.map((function(n){var t=n.path,r=n.title,a="/"===t?t===e.pathname:e.pathname.indexOf(t)>=0;return(0,o.jsx)(u,{selected:a,children:(0,o.jsx)(f,{href:t,children:r})},t)}))})},s=r.ZP.menu.withConfig({displayName:"HeaderMenu__MenuWrapper",componentId:"sc-14dkklk-0"})(["padding:0;display:flex;list-style:none;border-bottom:1px solid #cacfd2;"]),u=r.ZP.li.withConfig({displayName:"HeaderMenu__MenuItem",componentId:"sc-14dkklk-1"})(["line-height:32px;min-width:96px;text-align:center;border-bottom:",";"],(function(e){return e.selected?"2px solid #EB984E":"none"})),f=r.ZP.a.withConfig({displayName:"HeaderMenu__Link",componentId:"sc-14dkklk-2"})(["text-decoration:none;color:#24292f;"]),d=function(e){var n=e.children;return(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(g,{src:"/avatar.jpeg"}),(0,o.jsx)(x,{children:"\u5b59\u6653\u806a"})]}),(0,o.jsxs)(m,{children:[(0,o.jsx)(l,{}),(0,o.jsx)(v,{children:n})]})]})},p=r.ZP.div.withConfig({displayName:"PageWrapper__Wrapper",componentId:"sc-859ve4-0"})(["margin:0;padding:32px 16px;display:flex;justify-content:center;width:1280px;"]),h=r.ZP.div.withConfig({displayName:"PageWrapper__SideBarWrapper",componentId:"sc-859ve4-1"})(["width:256px;display:flex;flex-flow:column nowrap;align-items:center;@media (max-width:768px){display:none;}"]),v=r.ZP.div.withConfig({displayName:"PageWrapper__ContentWrapper",componentId:"sc-859ve4-2"})([""]),m=r.ZP.div.withConfig({displayName:"PageWrapper__MainContentWrapper",componentId:"sc-859ve4-3"})(["flex:1;display:flex;flex-flow:column nowrap;"]),g=(0,r.ZP)((function(e){var n=e.src,t=e.className;return(0,o.jsx)(a,{className:t,src:n})})).withConfig({displayName:"PageWrapper__StyledAvatar",componentId:"sc-859ve4-4"})(["width:128px;height:128px;margin:32px 0 8px 0;"]),x=r.ZP.span.withConfig({displayName:"PageWrapper__Name",componentId:"sc-859ve4-5"})(["margin-bottom:4px;font-size:1.6rem;"])},3582:function(e,n,t){"use strict";t.r(n);var r=t(5486),o=t(4588),a=t(55);n.default=function(){return(0,a.jsx)(o.F,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/blogs",children:"blogs"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/readings",children:"readings"})})]})})}},928:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3582)}])},5486:function(e,n,t){e.exports=t(7038)},6826:function(e,n,t){e.exports=t(3219)}},function(e){e.O(0,[774,888,179],(function(){return n=928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);