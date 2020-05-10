(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(9),c=(r(0),r(200)),o={title:"Scatter Chart"},i={id:"charts/scatter",title:"Scatter Chart",description:"Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 3 points.",source:"@site/docs/charts/scatter.md",permalink:"/docs/next/charts/scatter",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/scatter.md",sidebar:"someSidebar",previous:{title:"Bubble Chart",permalink:"/docs/next/charts/bubble"},next:{title:"Area Chart",permalink:"/docs/next/charts/area"}},s=[{value:"Dataset Properties",id:"dataset-properties",children:[]},{value:"Data Structure",id:"data-structure",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 3 points."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var scatterChart = new Chart(ctx, {\n    type: 'scatter',\n    data: {\n        datasets: [{\n            label: 'Scatter Dataset',\n            data: [{\n                x: -10,\n                y: 0\n            }, {\n                x: 0,\n                y: 10\n            }, {\n                x: 10,\n                y: 5\n            }]\n        }]\n    },\n    options: {\n        scales: {\n            x: {\n                type: 'linear',\n                position: 'bottom'\n            }\n        }\n    }\n});\n")),Object(c.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(c.b)("p",null,"The scatter chart supports all of the same properties as the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./line.md#dataset-properties"}),"line chart"),"."),Object(c.b)("h2",{id:"data-structure"},"Data Structure"),Object(c.b)("p",null,"Unlike the line chart where data can be supplied in two different formats, the scatter chart only accepts data in a point format."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"data: [{\n        x: 10,\n        y: 20\n    }, {\n        x: 15,\n        y: 10\n    }]\n")),Object(c.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"{x, y}")))}l.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?n.a.createElement(h,i({ref:t},p,{components:r})):n.a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);