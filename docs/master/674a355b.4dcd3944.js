(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),o=(a(0),a(200)),c={title:"Updating Charts"},i={id:"developers/updates",title:"Updating Charts",description:"It's pretty common to want to update charts after they've been created. When the chart data or options are changed, Chart.js will animate to the new data values and options.",source:"@site/docs/developers/updates.md",permalink:"/docs/master/developers/updates",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/updates.md",sidebar:"someSidebar",previous:{title:"API",permalink:"/docs/master/developers/api"},next:{title:"Plugins",permalink:"/docs/master/developers/plugins"}},p=[{value:"Adding or Removing Data",id:"adding-or-removing-data",children:[]},{value:"Updating Options",id:"updating-options",children:[]},{value:"Preventing Animations",id:"preventing-animations",children:[]}],s={rightToc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's pretty common to want to update charts after they've been created. When the chart data or options are changed, Chart.js will animate to the new data values and options."),Object(o.b)("h2",{id:"adding-or-removing-data"},"Adding or Removing Data"),Object(o.b)("p",null,"Adding and removing data is supported by changing the data array. To add data, just add data into the data array as seen in this example."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function addData(chart, label, data) {\n    chart.data.labels.push(label);\n    chart.data.datasets.forEach((dataset) => {\n        dataset.data.push(data);\n    });\n    chart.update();\n}\n\nfunction removeData(chart) {\n    chart.data.labels.pop();\n    chart.data.datasets.forEach((dataset) => {\n        dataset.data.pop();\n    });\n    chart.update();\n}\n")),Object(o.b)("h2",{id:"updating-options"},"Updating Options"),Object(o.b)("p",null,"To update the options, mutating the options property in place or passing in a new options object are supported."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the options are mutated in place, other option properties would be preserved, including those calculated by Chart.js."),Object(o.b)("li",{parentName:"ul"},"If created as a new object, it would be like creating a new chart with the options - old options would be discarded.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function updateConfigByMutating(chart) {\n    chart.options.title.text = 'new title';\n    chart.update();\n}\n\nfunction updateConfigAsNewObject(chart) {\n    chart.options = {\n        responsive: true,\n        title: {\n            display: true,\n            text: 'Chart.js'\n        },\n        scales: {\n            x: {\n                display: true\n            },\n            y: {\n                display: true\n            }\n        }\n    };\n    chart.update();\n}\n")),Object(o.b)("p",null,"Scales can be updated separately without changing other options.\nTo update the scales, pass in an object containing all the customization including those unchanged ones."),Object(o.b)("p",null,"Variables referencing any one from ",Object(o.b)("inlineCode",{parentName:"p"},"chart.scales")," would be lost after updating scales with a new ",Object(o.b)("inlineCode",{parentName:"p"},"id")," or the changed ",Object(o.b)("inlineCode",{parentName:"p"},"type"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function updateScales(chart) {\n    var xScale = chart.scales.x;\n    var yScale = chart.scales.y;\n    chart.options.scales = {\n        newId: {\n            display: true\n        },\n        y: {\n            display: true,\n            type: 'logarithmic'\n        }\n    };\n    chart.update();\n    // need to update the reference\n    xScale = chart.scales.newId;\n    yScale = chart.scales.y;\n}\n")),Object(o.b)("p",null,"You can also update a specific scale either by its id."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function updateScale(chart) {\n    chart.options.scales.y = {\n        type: 'logarithmic'\n    };\n    chart.update();\n}\n")),Object(o.b)("p",null,"Code sample for updating options can be found in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../samples/scales/toggle-scale-type.html"}),"toggle-scale-type.html"),"."),Object(o.b)("h2",{id:"preventing-animations"},"Preventing Animations"),Object(o.b)("p",null,"Sometimes when a chart updates, you may not want an animation. To achieve this you can call ",Object(o.b)("inlineCode",{parentName:"p"},"update")," with ",Object(o.b)("inlineCode",{parentName:"p"},"'none'")," as mode."))}l.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,h=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(h,i({ref:t},s,{components:a})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);