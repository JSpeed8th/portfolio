(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){},,function(e,t,a){},function(e,t,a){var n={"./css-logo.jpg":33,"./html-logo.jpg":34,"./javascript-logo.jpg":35,"./rails-logo.png":36,"./react-logo.jpg":37,"./resume-logo.jpg":38,"./resume-two-logo-LEG.png":39,"./ruby-logo.png":40,"./sass-logo.jpg":41};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=4},,,,,function(e,t,a){e.exports=a.p+"static/media/about.fb3a4c31.jpg"},function(e,t,a){e.exports=a.p+"static/media/jordansBakery.b6dc5042.mov"},function(e,t,a){e.exports=a.p+"static/media/pokemon.398ad81c.mov"},function(e,t,a){e.exports=a.p+"static/media/tastebuds.1501b067.mov"},function(e,t,a){e.exports=a.p+"static/media/smart-brain.dcea27e5.mov"},function(e,t,a){e.exports=a.p+"static/media/projects.31a3f133.jpg"},function(e,t,a){e.exports=a.p+"static/media/contact.884a7583.jpg"},function(e,t,a){e.exports=a.p+"static/media/react-logo.66657f5d.png"},,,function(e,t,a){e.exports=a(44)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/css-logo.0966a3d8.jpg"},function(e,t,a){e.exports=a.p+"static/media/html-logo.2c321d3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/javascript-logo.9020ffe9.jpg"},function(e,t,a){e.exports=a.p+"static/media/rails-logo.34470741.png"},function(e,t,a){e.exports=a.p+"static/media/react-logo.dcb1b92c.jpg"},function(e,t,a){e.exports=a.p+"static/media/resume-logo.369a993f.jpg"},function(e,t,a){e.exports=a.p+"static/media/resume-two-logo-LEG.8494c542.png"},function(e,t,a){e.exports=a.p+"static/media/ruby-logo.b43c43bb.png"},function(e,t,a){e.exports=a.p+"static/media/sass-logo.493c53b4.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),i=a.n(r),l=(a(25),a(6)),s=a(7),c=a(17),u=a(8),p=a(18),m=(a(1),a(3),a(26),function(e){var t=e.route,a=e.passedRoute,n={};n.display=a===t?"inline-block":"none";var r=[{link:"https://github.com/JSpeed8th",name:"logo-github"},{link:"https://www.facebook.com/jordanspeed8",name:"logo-facebook"},{link:"https://www.linkedin.com/in/jordan-speed/",name:"logo-linkedin"},{link:"https://www.instagram.com/art_angel_ichi/",name:"logo-instagram"},{link:"mailto:jspeed8th@gmail.com",name:"mail"}].map(function(e,t){return o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",key:t},o.a.createElement("ion-icon",{name:e.name,style:n}))});return o.a.createElement("div",{className:"icons hover-effect"},r)}),d=(a(27),function(e){var t={display:"inline-block"};return"Home"===e.route?t.animationName="appear-and-slide-up":t.display="none",o.a.createElement("div",{className:"home-title slide-duration",style:t},o.a.createElement("h1",null,"Jordan Speed"),o.a.createElement("p",null,"full stack web developer"))}),g=(a(28),function(e){var t=e.changeRoutingHandler,a=e.route,n={height:"97vh"};return o.a.createElement("div",{className:"home-view",style:n,onClick:function(){return t("Home")}},o.a.createElement(m,{route:a,passedRoute:"Home"}),o.a.createElement("h1",{className:"page-title"},"Home"),o.a.createElement(d,{route:a}))}),h=function(){return o.a.createElement("p",null,"Hi. I'm Jordan, a software developer from Philadephia, PA. I'm passionate about building software that impacts people's lives. I love problem solving and believe that every problem has a solution! My graphic arts background influences the cool designs you see today. I love to travel, hence the beautiful photgraphs taken by my fiance during our time in Iceland. I'm a naturists through and through and try to live as organic and wastless as possible.")},f=(a(29),a(9)),b=a.n(f),k=function(e){var t=e.changeRoutingHandler,a=e.route,n={},r={};return(0,e.expandPageHandler)("About",n),"About"===a?r.animationName="appear-and-slide-up":r.display="none",o.a.createElement("div",{className:"about view",style:n,onClick:function(){return t("About")}},o.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(b.a,")")}},o.a.createElement(m,{route:a,passedRoute:"About"}),o.a.createElement("h1",{className:"page-title"},"About"),o.a.createElement("div",{className:"about-modal slide-duration",style:r},o.a.createElement(h,null))))},v=(a(30),a(10)),y=a.n(v),E=a(11),j=a.n(E),w=a(12),x=a.n(w),N=a(13),H=a.n(N),R=function(e){var t=e.route,a=[{path:y.a,github:"https://github.com/JSpeed8th/Jordans-Bakery-And-Company",livelink:"https://jordans-bakery-and-company.herokuapp.com/",title:"Jordan's Bakery & Company",description:'An application for, "jordan\'s bakery & company" which includes CRUD functionality and the ability to order bakes. Built in Ruby, Rails, & SQLite.'},{path:H.a,github:"https://github.com/JSpeed8th/smart-brain",livelink:"https://smart-facial-detect.herokuapp.com/",title:"Smart Brain",description:"A fun facial detection application built in React, Node.js, Express.js, & PostgresSQL."},{path:j.a,github:"https://github.com/JSpeed8th/Pokemon-Group-Gym",livelink:"https://jspeed8th.github.io/Pokemon-Group-Gym/",title:"Pokedex App",description:"Pokedex app showcases individual Pokemon\u2019s statistics upon user request. Pokedex was built in Ruby, Rails, and SQLite."},{path:x.a,github:"https://github.com/JSpeed8th/Pokemon-Group-Gym",livelink:"https://jordansrumblr.herokuapp.com ",title:"Taste Buds",description:"A social networking site for bakers to share their recipes. Built in Ruby, Rails, & SQLite."}].map(function(e,t){return o.a.createElement("div",{className:"individual-project",key:t},o.a.createElement("div",{className:"individual-project__left"},o.a.createElement("p",{className:"project-title"},e.title),o.a.createElement("video",{muted:!0,autoPlay:!0,loop:!0},o.a.createElement("source",{src:e.path,type:"video/mp4"})),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"GitHub"),o.a.createElement("span",null," / "),o.a.createElement("a",{href:e.livelink,target:"_blank",rel:"noopener noreferrer"},"Live Link"," "))),o.a.createElement("div",{className:"individual-project__description"},o.a.createElement("p",null,e.description)))}),n={display:"flex"};return"Projects"===t?n.animationName="appear-and-slide-up":n.display="none",o.a.createElement("div",{className:"project-container slide-duration",style:n},a)},P=(a(31),a(14)),S=a.n(P),A=function(e){var t=e.changeRoutingHandler,a=(e.skills,e.route),n={};return(0,e.expandPageHandler)("Projects",n),o.a.createElement("div",{className:"projects view",style:n,onClick:function(){return t("Projects")}},o.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(S.a,")")}},o.a.createElement(m,{route:a,passedRoute:"Projects"}),o.a.createElement("h1",{className:"page-title"},"Projects"),o.a.createElement(R,{route:a})))},L=(a(32),function(e){var t=e.route,n=["html-logo.jpg","css-logo.jpg","sass-logo.jpg","javascript-logo.jpg","react-logo.jpg","rails-logo.png","ruby-logo.png","resume-two-logo-LEG.png"].map(function(e,t){return"resume-two-logo-LEG.png"===e?o.a.createElement("a",{className:"skills",href:"https://drive.google.com/file/d/1wV85rid1cSXxLe4GYQ-07nVFF3FjA4rU/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",key:t},o.a.createElement("img",{src:a(4)("./"+e),alt:"",key:t,style:{backgroundColor:"white"}})):o.a.createElement("img",{className:"skills ",src:a(4)("./"+e),alt:"",key:t})}),r={};return"Skills"===t?r.animationName="appear-and-slide-up":r.display="none",o.a.createElement("div",{className:"skill-modal slide-duration",style:r},n)}),G=(a(42),a(15)),_=a.n(G),J=function(e){var t=e.changeRoutingHandler,a=e.route,n={};return(0,e.expandPageHandler)("Skills",n),o.a.createElement("div",{className:"skills view",style:n,onClick:function(){return t("Skills")}},o.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(_.a,")")}},o.a.createElement(m,{route:a,passedRoute:"Skills"}),o.a.createElement("h1",{className:"page-title"},"Skills"),o.a.createElement(L,{route:a})))},C=(a(43),a(16)),I=a.n(C),B=function(){return o.a.createElement("footer",null,o.a.createElement("img",{className:"react-logo",src:I.a,alt:"React Logo"}))},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={route:"Home"},a.changeRoutingHandler=function(e){return a.setState({route:e})},a.expandPageHandler=function(e,t){e===a.state.route&&(t.width="85vw")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,{changeRoutingHandler:this.changeRoutingHandler,expandPageHandler:this.expandPageHandler,route:this.state.route}),o.a.createElement(A,{changeRoutingHandler:this.changeRoutingHandler,expandPageHandler:this.expandPageHandler,route:this.state.route}),o.a.createElement(k,{changeRoutingHandler:this.changeRoutingHandler,expandPageHandler:this.expandPageHandler,route:this.state.route}),o.a.createElement(g,{changeRoutingHandler:this.changeRoutingHandler,route:this.state.route}),o.a.createElement(B,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);
//# sourceMappingURL=main.dd471a0c.chunk.js.map