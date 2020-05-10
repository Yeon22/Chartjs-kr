(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(200)),l={title:"New Charts"},i={id:"developers/charts",title:"New Charts",description:"Chart.js 2.0 introduces the concept of controllers for each dataset. Like scales, new controllers can be written as needed.",source:"@site/docs/developers/charts.md",permalink:"/docs/master/developers/charts",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/charts.md",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/docs/master/developers/plugins"},next:{title:"New Axes",permalink:"/docs/master/developers/axes"}},s=[{value:"Dataset Controller Interface",id:"dataset-controller-interface",children:[]},{value:"Extending Existing Chart Types",id:"extending-existing-chart-types",children:[{value:"Bar Controller",id:"bar-controller",children:[]}]}],c={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chart.js 2.0 introduces the concept of controllers for each dataset. Like scales, new controllers can be written as needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.controllers.MyType = Chart.DatasetController.extend({\n\n});\n\n\n// Now we can create a new instance of our chart, using the Chart.js API\nnew Chart(ctx, {\n    // this is the string the constructor was registered at, ie Chart.controllers.MyType\n    type: 'MyType',\n    data: data,\n    options: options\n});\n")),Object(o.b)("h2",{id:"dataset-controller-interface"},"Dataset Controller Interface"),Object(o.b)("p",null,"Dataset controllers must implement the following interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Create elements for each piece of data in the dataset. Store elements in an array on the dataset as dataset.metaData\n    addElements: function() {},\n\n    // Create a single element for the data at the given index and reset its state\n    addElementAndReset: function(index) {},\n\n    // Draw the representation of the dataset\n    // @param ease : if specified, this number represents how far to transition elements. See the implementation of draw() in any of the provided controllers to see how this should be used\n    draw: function(ease) {},\n\n    // Remove hover styling from the given element\n    removeHoverStyle: function(element, datasetIndex, index) {},\n\n    // Add hover styling to the given element\n    setHoverStyle: function(element, datasetIndex, index) {},\n\n    // Update the elements in response to new data\n    // @param reset : if true, put the elements into a reset state so they can animate to their final values\n    update: function(reset) {}\n}\n")),Object(o.b)("p",null,"The following methods may optionally be overridden by derived dataset controllers."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Initializes the controller\n    initialize: function(chart, datasetIndex) {},\n\n    // Ensures that the dataset represented by this controller is linked to a scale. Overridden to helpers.noop in the polar area and doughnut controllers as these\n    // chart types using a single scale\n    linkScales: function() {},\n\n    // Called by the main chart controller when an update is triggered. The default implementation handles the number of data points changing and creating elements appropriately.\n    buildOrUpdateElements: function() {}\n}\n")),Object(o.b)("h2",{id:"extending-existing-chart-types"},"Extending Existing Chart Types"),Object(o.b)("p",null,"Extending or replacing an existing controller type is easy. Simply replace the constructor for one of the built in types with your own."),Object(o.b)("p",null,"The built in controller types are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.line")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.bar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.horizontalBar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.radar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.doughnut")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.polarArea")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chart.controllers.bubble"))),Object(o.b)("p",null,"For example, to derive a new chart type that extends from a bubble chart, you would do the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Sets the default config for 'derivedBubble' to be the same as the bubble defaults.\n// We look for the defaults by doing Chart.defaults[chartType]\n// It looks like a bug exists when the defaults don't exist\nChart.defaults.derivedBubble = Chart.defaults.bubble;\n\n// I think the recommend using Chart.controllers.bubble.extend({ extensions here });\nvar custom = Chart.controllers.bubble.extend({\n    draw: function(ease) {\n        // Call super method first\n        Chart.controllers.bubble.prototype.draw.call(this, ease);\n\n        // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset\n        var meta = this.getMeta();\n        var pt0 = meta.data[0];\n        var radius = pt0.radius;\n\n        var ctx = this.chart.chart.ctx;\n        ctx.save();\n        ctx.strokeStyle = 'red';\n        ctx.lineWidth = 1;\n        ctx.strokeRect(pt0.x - radius, pt0.y - radius, 2 * radius, 2 * radius);\n        ctx.restore();\n    }\n});\n\n// Stores the controller so that the chart initialization routine can look it up with\n// Chart.controllers[type]\nChart.controllers.derivedBubble = custom;\n\n// Now we can create and use our new chart type\nnew Chart(ctx, {\n    type: 'derivedBubble',\n    data: data,\n    options: options\n});\n")),Object(o.b)("h3",{id:"bar-controller"},"Bar Controller"),Object(o.b)("p",null,"The bar controller has a special property that you should be aware of. To correctly calculate the width of a bar, the controller must determine the number of datasets that map to bars. To do this, the bar controller attaches a property ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," to the dataset during initialization. If you are creating a replacement or updated bar controller, you should do the same. This will ensure that charts with regular bars and your new derived bars will work seamlessly."))}d.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,i({ref:t},c,{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);