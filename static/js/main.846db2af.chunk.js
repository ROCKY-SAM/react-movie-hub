(this["webpackJsonpSam-MovieHub"]=this["webpackJsonpSam-MovieHub"]||[]).push([[0],{19:function(e,c,s){},39:function(e,c,s){"use strict";s.r(c);var t=s(2),i=s.n(t),n=s(12),a=s.n(n),r=(s(19),s(14)),l=s(13),j=s.n(l),o=s(0);var d=function(){var e=Object(t.useState)([]),c=Object(r.a)(e,2),s=c[0],i=c[1];return Object(t.useEffect)((function(){j.a.get("https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=year&sort_by=like_count").then((function(e){i(e.data.data.movies),console.log(s)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{children:s.map((function(e){return Object(o.jsxs)("div",{className:"movie_card",id:"ave",children:[Object(o.jsxs)("div",{className:"info_section",children:[Object(o.jsxs)("div",{className:"movie_header",children:[Object(o.jsx)("img",{className:"locandina",src:e.large_cover_image}),Object(o.jsx)("h1",{children:e.title}),Object(o.jsxs)("h4",{children:[e.year,", Rating ",e.rating]}),Object(o.jsxs)("span",{className:"minutes",children:[e.runtime," min"]}),Object(o.jsx)("p",{className:"type",children:e.genres.map((function(e){return Object(o.jsxs)("span",{children:[" | ",e]})}))})]}),Object(o.jsx)("div",{className:"movie_desc",children:Object(o.jsx)("p",{className:"text",children:e.summary})}),Object(o.jsxs)("div",{className:"movie_social",children:[Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"gotoLink",children:Object(o.jsx)("a",{href:e.url,target:"_blank",children:"View in YTS"})})})}),Object(o.jsx)("br",{}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"material-icons",children:"Download"})}),e.torrents.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"gotoLink",children:Object(o.jsxs)("a",{href:e.url,children:[e.quality,"(",e.size,")"]})})})}))]})]})]}),Object(o.jsx)("div",{className:"blur_back ",style:{backgroundImage:"url("+e.large_cover_image+")"}})]},e.id)}))})};var b=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("b",{className:"mainTitle",children:"Movie plaza"}),Object(o.jsx)(d,{})]})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.846db2af.chunk.js.map