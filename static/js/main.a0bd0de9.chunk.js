(this.webpackJsonpfree6=this.webpackJsonpfree6||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(12),r=a.n(n),s=(a(29),a(30),a(31),a(2)),o=a(3),l=(a(32),a(0));function d(){return Object(l.jsxs)("div",{className:"page home",children:[Object(l.jsx)("h1",{children:"Home - Landing Page"}),Object(l.jsxs)("div",{className:"home-link",children:[Object(l.jsx)(o.b,{to:"/birthday",children:"Birthday"}),Object(l.jsx)(o.b,{to:"/tour",children:"Tour"}),Object(l.jsx)(o.b,{to:"/reviews",children:"Reviews"}),Object(l.jsxs)(o.b,{to:"/qa",children:["Q ","&"," A"]}),Object(l.jsx)(o.b,{to:"menu",children:"Menu"})]})]})}var j=a(4),u=(a(42),[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}]);function b(e){var t=e.list.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:e.image,width:"60",height:"60",alt:""}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("p",{children:[e.age," years"]})]})]},e.id)}));return Object(l.jsx)("ul",{children:t})}function h(){var e=Object(c.useState)(u),t=Object(j.a)(e,2),a=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page birthday",children:[Object(l.jsx)("h1",{children:"Birthday Page"}),Object(l.jsx)(o.b,{to:"/",className:"back-home",children:"Home"}),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsxs)("h2",{children:[a.length," birthdays today"]}),Object(l.jsx)(b,{list:a}),Object(l.jsx)("button",{onClick:function(){i([])},children:"Clear All"})]})]})}var m=a(20),p=a.n(m),g=a(22),f=(a(44),a(15));a(45);function x(e){var t=e.text||"Loading...",a=Object(f.a)(t).map((function(e,a){return Object(l.jsx)("span",{style:{animationDelay:.5*a+"s",animationDuration:t.length/2+"s"},children:e},a)}));return Object(l.jsx)("div",{className:"page loading",children:Object(l.jsx)("h1",{children:a})})}function O(e){var t=Object(c.useState)(!1),a=Object(j.a)(t,2),i=a[0],n=a[1],r=e.data;return Object(l.jsxs)("li",{className:"tour-item",children:[Object(l.jsx)("img",{src:r.image,alt:""}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h3",{children:r.name}),Object(l.jsxs)("span",{children:["$",r.price]})]}),Object(l.jsxs)("div",{className:"detail",children:[Object(l.jsx)("p",{children:!1===i?"".concat(r.info.substring(0,200),"..."):r.info}),Object(l.jsx)("button",{onClick:function(){n(!i)},children:!1===i?"Read More":"Show Less"})]}),Object(l.jsx)("button",{className:"not-inter-btn",onClick:function(){e.removeTour(r.id)},children:"Not Interested"})]})]})}function v(e){var t=e.data.map((function(t){return Object(l.jsx)(O,{data:t,removeTour:e.removeTour},t.id)}));return Object(l.jsx)("ul",{children:t})}var y="https://course-api.com/react-tours-project";function k(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([]),r=Object(j.a)(n,2),s=r[0],d=r[1];function u(){return b.apply(this,arguments)}function b(){return(b=Object(g.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch(y);case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,i(!1),d(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){return u()}),[]),a?Object(l.jsx)(x,{}):Object(l.jsxs)("div",{className:"page tour",children:[Object(l.jsx)("h1",{children:"Tour Page"}),Object(l.jsx)(o.b,{to:"/",className:"back-home",children:"Home"}),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h2",{className:"title",children:s.length>0?"Our Tours":"No Tours Left"}),s.length>0?Object(l.jsx)(v,{data:s,removeTour:function(e){var t=s.filter((function(t){return t.id!==e}));d(t)}}):Object(l.jsx)("button",{className:"refresh-btn",onClick:function(){u()},children:"Refresh"})]})]})}a(46);var w=[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}];function N(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],i=t[1],n=w[a],r=n.name,s=n.job,d=n.image,u=n.text;function b(e){return e>w.length-1?0:e<0?w.length-1:e}return Object(l.jsxs)("div",{className:"page reviews",children:[Object(l.jsx)("h1",{children:"Reviews Page"}),Object(l.jsx)(o.b,{to:"/",className:"back-home",children:"Home"}),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h2",{children:"Our Reviews"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"img-container",children:[Object(l.jsx)("img",{src:d,alt:""}),Object(l.jsx)("span",{className:"quotes",children:"\u201d"})]}),Object(l.jsx)("h3",{children:r}),Object(l.jsx)("p",{className:"job",children:s}),Object(l.jsx)("p",{className:"text",children:u}),Object(l.jsxs)("div",{className:"switch-btn",children:[Object(l.jsxs)("button",{onClick:function(){i((function(e){return b(e-1)}))},children:[" ","\u2039"," "]}),Object(l.jsxs)("button",{onClick:function(){i((function(e){return b(e+1)}))},children:[" ","\u203a"," "]})]}),Object(l.jsx)("button",{className:"random-btn",onClick:function(){var e=Math.floor(4*Math.random());i(b(e))},children:"Surprise Me"})]})]})]})}a(47);var q=a(11);function S(e){var t=e.title,a=e.info,i=Object(c.useState)(!1),n=Object(j.a)(i,2),r=n[0],s=n[1];return Object(l.jsxs)("li",{className:"item",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("button",{onClick:function(){s((function(e){return!e}))},children:!1===r?"+":"-"})]}),!1===r?null:Object(l.jsx)("p",{className:"info",children:a})]})}function C(e){var t=e.list.map((function(e){return Object(l.jsx)(S,Object(q.a)({},e),e.id)}));return Object(l.jsx)("ul",{className:"list",children:t})}var P=[{id:1,title:"Do I have to allow the use of cookes?",info:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},{id:2,title:"How do I change my My Page password?",info:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."},{id:3,title:"What is BankID?",info:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."},{id:4,title:"Whose birth number can I use?",info:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."},{id:5,title:"When do I recieve a password ordered by letter?",info:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan "}];function L(){return Object(l.jsxs)("div",{className:"page qa",children:[Object(l.jsx)("h1",{children:"QA Page"}),Object(l.jsx)(o.b,{to:"/",className:"back-home",children:"Home"}),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h2",{children:"Questions And Answers About Login"}),Object(l.jsx)(C,{list:P})]})]})}a(48);var H=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"https://react-projects-5-menu.netlify.app/images/item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"https://react-projects-5-menu.netlify.app/images/item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"https://react-projects-5-menu.netlify.app/images/item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"https://react-projects-5-menu.netlify.app/images/item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"https://react-projects-5-menu.netlify.app/images/item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"https://react-projects-5-menu.netlify.app/images/item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"https://react-projects-5-menu.netlify.app/images/item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"https://react-projects-5-menu.netlify.app/images/item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"https://react-projects-5-menu.netlify.app/images/item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}];function M(e){var t=e.data,a=t.title,c=t.price,i=t.img,n=t.desc;return Object(l.jsxs)("li",{className:"item",children:[Object(l.jsx)("img",{src:i,alt:""}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("h3",{className:"title",children:a}),Object(l.jsxs)("span",{className:"price",children:["$",c]})]}),Object(l.jsx)("p",{children:n})]})]})}function I(e){var t=e.list.map((function(e){return Object(l.jsx)(M,{data:e},e.id)}));return Object(l.jsx)("ul",{className:"list",children:t})}function T(e){var t=e.categories,a=e.filter;return Object(l.jsx)("div",{className:"filter-btn",children:t.map((function(e,t){return Object(l.jsx)("button",{onClick:function(){return a(e)},children:e},t)}))})}var _=["all"].concat(Object(f.a)(new Set(H.map((function(e){return e.category})))));function z(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(_[0]),r=Object(j.a)(n,2),s=r[0],d=r[1];return Object(c.useEffect)((function(){if("all"===s)i(H);else{var e=H.filter((function(e){return e.category===s}));i(e)}}),[s]),Object(l.jsxs)("div",{className:"page menu",children:[Object(l.jsx)("h1",{children:"Menu Page"}),Object(l.jsx)(o.b,{to:"/",className:"back-home",children:"Home"}),Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h2",{children:"Our Menu"}),Object(l.jsx)(T,{categories:_,filter:function(e){d(e)}}),Object(l.jsx)(I,{list:a})]})]})}var B=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/menu",component:z}),Object(l.jsx)(s.a,{path:"/qa",component:L}),Object(l.jsx)(s.a,{path:"/reviews",component:N}),Object(l.jsx)(s.a,{path:"/tour",component:k}),Object(l.jsx)(s.a,{path:"/birthday",component:h,exact:!0}),Object(l.jsx)(s.a,{path:"/",component:d,exact:!0})]})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),i(e),n(e),r(e)}))},D=a(14),E=a(24),F=Object(D.a)({validReducers:function(){return 1}}),R=Object(D.b)(F);r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(E.a,{store:R,children:Object(l.jsx)(o.a,{basename:"/15-react-project",children:Object(l.jsx)(B,{})})})}),document.getElementById("root")),A()}},[[50,1,2]]]);
//# sourceMappingURL=main.a0bd0de9.chunk.js.map