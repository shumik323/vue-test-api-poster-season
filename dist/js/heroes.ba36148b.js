(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["heroes"],{"2b38":function(e,t,a){e.exports=a.p+"img/llF5iyg.bb533f76.gif"},"414c":function(e,t,a){},"9d57":function(e,t,a){e.exports=a.p+"img/heart_icon-icons.com_54429.aa5c852b.svg"},eede:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[this.load?e._e():n("div",{staticClass:"wrapper-load"},[n("img",{attrs:{src:a("2b38"),alt:""}})]),e.loaded&&this.load?n("div",{staticClass:"heroes"},[e.heroe.length>0?n("div",{staticClass:"content"},[n("span",{staticClass:"favorite",on:{click:function(t){return e.addFavorite(e.heroe[0])}}},[e._v(" favorite "),n("img",{attrs:{src:a("9d57"),alt:""}})]),n("img",{attrs:{src:e.heroe[0].img,alt:e.heroe.name}}),n("div",{staticClass:"info-intro"},[n("p",[e._v("Name: "+e._s(e.heroe[0].name))]),"Unknown"!==e.heroe[0].birthday?n("p",[e._v(" Birthday: "+e._s(e.heroe[0].birthday.split("-").join("."))+" ")]):e._e(),"Unknown"!==e.heroe[0].birthday&&e.deathDate.length>0?n("p",[e._v(" Years of life: "+e._s(e.heroe[0].birthday.split("-").join("."))+" - "+e._s(e.deathDate[0].air_date.split("-").join("."))+" ")]):e._e(),n("span",[e._v("Occupation: "),n("ul",e._l(e.heroe[0].occupation,(function(t,a){return n("li",{key:t[a]},[e._v(" "+e._s(t)+" ")])})),0)]),n("p",[e._v("Nickname: "+e._s(e.heroe[0].nickname))]),n("p",[e._v("Status: "),n("span",{class:e.statusClass},[e._v(" "+e._s(e.heroe[0].status)+" ")]),e.deathDate.length>0?n("span",{staticClass:"death-date"},[e._v(" "+e._s(e.deathDate[0].air_date.split("-").join("."))+" ")]):e._e()]),n("span",{staticClass:"appearance"},[e._v("Appearance: "),n("ul",e._l(e.heroe[0].appearance,(function(t,a){return n("li",{key:t[a]},[e._v(" "+e._s(t)+" ")])})),0)])])]):e._e(),e.timeLine.length>0&&0!==e.heroe.length?n("div",{staticClass:"time-line"},[n("h3",[e._v("Time line:")]),e._l(e.timeLine,(function(t){return n("ul",{key:t.title},[n("li",[n("span",[e._v(e._s(t.season+" season"))]),n("span",[e._v(e._s(t.episode+" episode"))]),n("span",[e._v(e._s(t.title))]),n("span",[e._v(e._s(t.air_date.split("-").join(".")))])])])}))],2):e._e(),0===e.heroe.length?n("h2",[e._v("Данных по данному персонажу на API нет !")]):e._e(),(e.timeLine.length<=0||!e.timeLine)&&e.heroe.length>0?n("h2",[e._v("Данных по таймлайну на API нет !")]):e._e()]):e._e(),e.loadedQuote&&e.heroe.length>0?n("div",{staticClass:"quote"},[n("h3",[e._v("Quote")]),n("ul",[e._l(e.quote,(function(t){return n("li",{key:t.quote_id},[e._v(" "+e._s(t.quote)+" ")])})),0===e.quote.length?n("li",[e._v("Цитат на API нет !")]):e._e()],2)]):e._e()])},s=[],r=a("2909"),i=a("5530"),o=a("1da1"),c=(a("96cf"),a("d3b7"),a("820e"),a("3ca3"),a("ddb0"),a("4de4"),a("d81d"),a("b0c0"),a("caad"),a("2532"),a("2f62")),u={name:"HeroesDetail",props:["date"],created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.load=!1,a=localStorage.getItem("heroes"),t.next=4,Promise.allSettled([e.fetchHeroes(a),e.fetchData().then((function(){e.countSeason})),e.fetchDataQuote(a),e.fetchDeath()]).then((function(){e.load=!0}));case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{load:!1,countSeasons:{bb:[]}}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])("heroes",["heroes","loaded","keyHeroes"])),Object(c["c"])("quotes",["quotes","loadedQuote"])),Object(c["c"])("episodes",["episodes"])),Object(c["c"])("deaths",["deaths"])),{},{heroe:function(){return this.heroes},quote:function(){return this.quotes},deathEpisode:function(){var e=this;return this.deaths.map((function(t){if(t.death===e.heroe[0].name)return t})).filter((function(e){return null!=e}))},deathDate:function(){if(0===this.deathEpisode.length)return[];var e=this.deathEpisode[0].episode,t=this.deathEpisode[0].season,a=Object(r["a"])(this.episodes);return a.sort((function(e,t){return e.season-t.season})).map((function(a){if(a.series.includes("Breaking Bad")&&a.season.includes(t)&&a.episode.includes(e))return a})).filter((function(e){return null!=e}))},statusClass:function(){return"Alive"===this.heroe[0].status?"dot-alive":"dot-death"},timeLine:function(){if(0===this.heroe.length)return[];var e=this.heroe[0].name,t=Object(r["a"])(this.episodes);return t.sort((function(e,t){return e.season-t.season})).map((function(t){if(t.series.includes("Breaking Bad")&&t.characters.includes(e))return t})).filter((function(e){return null!=e}))}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["b"])("heroes",["fetchHeroes"])),Object(c["b"])("quotes",["fetchDataQuote"])),Object(c["b"])("episodes",["fetchData"])),Object(c["b"])("deaths",["fetchDeath"])),Object(c["b"])("favorite",["setStorageFavorite"])),{},{addFavorite:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=[],!localStorage.getItem("favorite")){t.next=11;break}return t.next=4,a.push.apply(a,Object(r["a"])(JSON.parse(localStorage.getItem("favorite"))));case 4:if(a.map((function(e){return e.name})).includes(e.name)){t.next=9;break}return t.next=7,a.push(e);case 7:return t.next=9,localStorage.setItem("favorite",JSON.stringify(a));case 9:t.next=15;break;case 11:return t.next=13,a.push(e);case 13:return t.next=15,localStorage.setItem("favorite",JSON.stringify(a));case 15:case"end":return t.stop()}}),t)})))()}}),watch:{}},h=u,l=(a("f8e1"),a("2877")),d=Object(l["a"])(h,n,s,!1,null,"3040c6ba",null);t["default"]=d.exports},f8e1:function(e,t,a){"use strict";a("414c")}}]);
//# sourceMappingURL=heroes.ba36148b.js.map