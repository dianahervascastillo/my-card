(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(2),l=t(5),s=t(3),i=t(4),c=t(6),o=t(0),m=t.n(o),u=t(8),p=t.n(u),d=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"85",height:"16",viewBox:"0 0 85 16"},m.a.createElement("g",{fill:"none",fillRule:"evenodd"},m.a.createElement("path",{fill:"#FDD94D",fillRule:"nonzero",d:"M13.9,5.7 L10.5,9.1 L11.4,13.6 L11.3,13.9 L10.9,13.9 L7,11.4 L3.1,13.9 L2.8,13.9 C2.7,13.8 2.6,13.7 2.7,13.6 L3.6,9.1 L0.1,5.7 L-3.33066907e-16,5.4 C0.1,5.3 0.1,5.2 0.3,5.2 L4.8,5.2 L6.8,0.1 L7,-3.33066907e-16 L7.3,0.2 L9.3,5.3 L13.8,5.3 L14.1,5.5 L13.9,5.7 Z M66.4,5.7 L63,9.1 L63.9,13.6 L63.8,13.9 L63.4,13.9 L59.5,11.4 L55.6,13.9 L55.3,13.9 C55.2,13.8 55.1,13.7 55.2,13.6 L56.1,9.1 L52.7,5.7 L52.6,5.4 C52.7,5.3 52.7,5.2 52.9,5.2 L57.4,5.2 L59.4,0.1 L59.5,-3.33066907e-16 L59.8,0.2 L61.8,5.3 L66.3,5.3 L66.6,5.5 L66.4,5.7 Z M48.9,5.7 L45.5,9.1 L46.4,13.6 L46.3,13.9 L45.9,13.9 L42,11.4 L38.1,13.9 L37.8,13.9 C37.7,13.8 37.6,13.7 37.7,13.6 L38.6,9.1 L35.2,5.7 C35,5.7 35,5.6 35,5.4 C35.1,5.3 35.1,5.2 35.3,5.2 L39.8,5.2 L41.8,0.1 L42,-3.33066907e-16 L42.3,0.2 L44.3,5.3 L48.8,5.3 L49.1,5.5 L48.9,5.7 Z M28,9.1 L28.9,13.6 L28.8,13.9 L28.4,13.9 L24.5,11.4 L20.6,13.9 L20.3,13.9 C20.2,13.8 20.1,13.7 20.2,13.6 L21.1,9.1 L17.7,5.7 L17.6,5.4 C17.7,5.3 17.7,5.2 17.9,5.2 L22.4,5.2 L24.4,0.1 L24.5,-3.33066907e-16 L24.8,0.2 L26.8,5.3 L31.3,5.3 L31.6,5.5 L31.4,5.7 L28,9.1 Z"}),m.a.createElement("path",{fill:"#D7D8DA",d:"M80.5,9.1 L81.4,13.6 L81.3,13.9 L80.9,13.9 L77,11.4 L73.1,13.9 L72.8,13.9 C72.7,13.8 72.6,13.7 72.7,13.6 L73.6,9.1 L70.2,5.7 C70,5.7 70,5.6 70,5.4 C70.1,5.3 70.1,5.2 70.3,5.2 L74.8,5.2 L76.8,0.1 L77,0 L77.3,0.2 L79.3,5.3 L83.8,5.3 L84.1,5.5 L83.9,5.7 L80.5,9.1 Z"})))}}]),a}(o.PureComponent),g=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"isRatingGood",value:function(e){return e>=4?"rating--good":"rating--bad"}},{key:"render",value:function(){var e=this.props,a=e.ratingGlobal,t=e.ratingNumber;return m.a.createElement("div",{className:"property-card__rating ".concat(this.isRatingGood(t))},a," ",t)}}]),a}(o.PureComponent),L=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props.property,a=e.reviewsRatingAverage;return m.a.createElement("div",{className:"property-card property-card--simple"},m.a.createElement("div",{className:"property-card__image",style:{backgroundImage:"url(".concat(e.listingThumbNail,")")}},m.a.createElement("div",{className:"carousel"},m.a.createElement("button",{className:"carousel--previous",type:"button"},m.a.createElement("svg",{width:"24",height:"14",viewBox:"0 0 14 24",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M12.118.263a.92.92 0 0 0-1.288 0L.293 10.8c-.176.176-.293.41-.293.644 0 .234.117.468.293.644l10.185 10.185c.176.176.41.293.644.293.234 0 .468-.117.644-.293a.92.92 0 0 0 0-1.288l-9.541-9.54 9.893-9.894a.92.92 0 0 0 0-1.288z"}),"              ")),m.a.createElement("button",{className:"carousel--next",type:"button"},m.a.createElement("svg",{width:"24",height:"14",viewBox:"0 0 14 24",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M.263.263a.92.92 0 0 1 1.288 0L12.088 10.8c.176.176.293.41.293.644 0 .234-.117.468-.293.644L1.903 22.273c-.176.176-.41.293-.644.293-.234 0-.468-.117-.644-.293a.92.92 0 0 1 0-1.288l9.541-9.54L.263 1.55a.92.92 0 0 1 0-1.288z"}),"              ")))),m.a.createElement("a",{className:"property-link",href:"#linktourlofproperty",target:"_blank","aria-label":"Opens link to Property page in new tab or window"},m.a.createElement("div",{className:"property-card__details"},m.a.createElement("h4",null,e.listingTitle),m.a.createElement("div",{className:"property-card__price"},m.a.createElement("strong",null,e.currency,e.price)," ",m.a.createElement("small",null,"avg/night")),m.a.createElement("ul",{className:"property-card__features"},m.a.createElement("li",{className:"feature"},"Sleeps ",m.a.createElement("span",{className:"counter"},e.sleeps)),m.a.createElement("li",{className:"feature"},"Bedrooms ",m.a.createElement("span",{className:"counter"},e.bedrooms)),m.a.createElement("li",{className:"feature"},"Bathrooms ",m.a.createElement("span",{className:"counter"},e.bathrooms))),m.a.createElement(g,{ratingGlobal:e.ratingGlobal,ratingNumber:e.ratingNumber}),m.a.createElement("div",{className:"property-card__reviews"},m.a.createElement("div",{className:"reviews-rating-stars"},m.a.createElement(d,{averageRating:a})),m.a.createElement("div",{className:"reviews-number"},e.reviewsNumber," reviews")))))}}]),a}(o.PureComponent),b=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"renderHeading",value:function(e,a){if(!e)return m.a.createElement("div",{className:"property-card__title"},m.a.createElement("h4",null,a.listingTitle))}},{key:"renderFeatures",value:function(e,a){var t=a.reviewsRatingAverage;return e?m.a.createElement(o.Fragment,null,m.a.createElement("div",{className:"property-card__price"},m.a.createElement("h4",null,a.currency,a.price," ",m.a.createElement("small",null,"avg/night"))),m.a.createElement("ul",{className:"property-card__features"},m.a.createElement("li",{className:"feature"},"Bedrooms ",m.a.createElement("span",{className:"counter"},a.bedrooms)),m.a.createElement("li",{className:"feature"},"Bathrooms ",m.a.createElement("span",{className:"counter"},a.bathrooms)),m.a.createElement("li",{className:"feature"},"Sleeps ",m.a.createElement("span",{className:"counter"},a.sleeps))),m.a.createElement("div",{className:"property-card__reviews"},m.a.createElement("div",{className:"reviews-rating-stars"},m.a.createElement(d,{averageRating:t})),m.a.createElement("div",{className:"reviews-number"},a.reviewsNumber," reviews"))):m.a.createElement(o.Fragment,null,m.a.createElement("ul",{className:"property-card__features"},m.a.createElement("li",{className:"feature"},"Sleeps ",m.a.createElement("span",{className:"counter"},a.sleeps)),m.a.createElement("li",{className:"feature"},"Bedrooms ",m.a.createElement("span",{className:"counter"},a.bedrooms)),m.a.createElement("li",{className:"feature"},"Bathrooms ",m.a.createElement("span",{className:"counter"},a.bathrooms))),m.a.createElement("div",{className:"property-card__footer"},m.a.createElement(g,{ratingGlobal:a.ratingGlobal,ratingNumber:a.ratingNumber}),m.a.createElement("div",{className:"property-card__price"},m.a.createElement("strong",null,a.currency,a.price," ",m.a.createElement("small",null,"avg/night"))),m.a.createElement("div",{className:"property-card__reviews"},m.a.createElement("div",{className:"reviews-rating-stars"},m.a.createElement(d,{averageRating:t})),m.a.createElement("div",{className:"reviews-number"},a.reviewsNumber," reviews"))))}},{key:"render",value:function(){var e=this.props.isMobile,a=this.props.property;return m.a.createElement("div",{className:"property-card property-card--complex"},m.a.createElement("div",{className:"property-card__image",style:{backgroundImage:"url(".concat(a.listingThumbNail,")")}},m.a.createElement("div",{className:"carousel"},m.a.createElement("button",{className:"carousel--previous",type:"button"},m.a.createElement("svg",{width:"24",height:"14",viewBox:"0 0 14 24",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M12.118.263a.92.92 0 0 0-1.288 0L.293 10.8c-.176.176-.293.41-.293.644 0 .234.117.468.293.644l10.185 10.185c.176.176.41.293.644.293.234 0 .468-.117.644-.293a.92.92 0 0 0 0-1.288l-9.541-9.54 9.893-9.894a.92.92 0 0 0 0-1.288z"}),"              ")),m.a.createElement("button",{className:"carousel--next",type:"button"},m.a.createElement("svg",{width:"24",height:"14",viewBox:"0 0 14 24",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M.263.263a.92.92 0 0 1 1.288 0L12.088 10.8c.176.176.293.41.293.644 0 .234-.117.468-.293.644L1.903 22.273c-.176.176-.41.293-.644.293-.234 0-.468-.117-.644-.293a.92.92 0 0 1 0-1.288l9.541-9.54L.263 1.55a.92.92 0 0 1 0-1.288z"}),"              ")))),m.a.createElement("a",{className:"property-link",href:"#linktourlofproperty",target:"_blank","aria-label":"Opens link to Property page in new tab or window"},m.a.createElement("div",{className:"property-card__details"},this.renderHeading(e,a),this.renderFeatures(e,a))))}}]),a}(o.PureComponent),v=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement(o.Fragment,null,m.a.createElement("ul",{className:"listing"},this.props.listings.properties.map(function(a,t){return m.a.createElement("li",{key:t},m.a.createElement(b,{property:a,isMobile:e.props.isMobile}))})),m.a.createElement("ul",{className:"listing"},this.props.listings.properties.map(function(e,a){return m.a.createElement("li",{key:a},m.a.createElement(L,{property:e}))})))}}]),a}(m.a.Component),h=t(9),E=(t(16),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).handleWindowResize=function(){t.setState({isMobile:window.innerWidth<=650})},t.state={isMobile:window.innerWidth<=650},t.handleWindowResize=t.handleWindowResize.bind(Object(c.a)(Object(c.a)(t))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(v,Object.assign({listings:h},this.state)))}}]),a}(m.a.Component)),w=document.getElementById("root");p.a.render(m.a.createElement(E,null),w)},9:function(e){e.exports={properties:[{listingId:1,listingTitle:"Luxury Resort + Spa - 4 Bed/3 Bath Holiday Lodge - Superb Free Facilities",listingThumbNail:"https://odis.homeaway.com/odis/listing/3c033031-ed8e-4292-8f69-b86305778f3d.c10.jpg",sleeps:"6",bedrooms:"3",bathrooms:"3.5",ratingGlobal:"Wonderful",ratingNumber:4.5,reviewsNumber:10,reviewsRatingAverage:4,price:862,currency:"$"},{listingId:2,listingTitle:"Holiday home with unlimited WiFi, shared swimming pools, no pets",listingThumbNail:"https://odis.homeaway.com/odis/listing/4f80bd16-2502-41ae-9295-1e3e42422eda.c10.jpg",sleeps:"5",bedrooms:"5",bathrooms:"2",ratingGlobal:"Not bad",ratingNumber:3,reviewsNumber:4,reviewsRatingAverage:2,price:300,currency:"$"}]}}},[[10,2,1]]]);
//# sourceMappingURL=main.001c0dca.chunk.js.map