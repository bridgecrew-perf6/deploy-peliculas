(self["webpackChunktienda"]=self["webpackChunktienda"]||[]).push([[266],{4078:(i,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>M});s(5363);var e=s(3673),l=s(2323);const t={class:"q-ma-sm"},c=(0,e._)("div",{class:"text-overline"},"informacion de la pelicula",-1),o={class:"text-h5 q-mt-sm q-mb-xs"},n={class:"text-caption text-grey"},r=(0,e._)("br",null,null,-1),u=(0,e._)("br",null,null,-1),m=(0,e._)("br",null,null,-1),j=(0,e._)("br",null,null,-1),d=(0,e._)("br",null,null,-1),p=(0,e.Uk)(" Reserve "),h=(0,e._)("hr",null,null,-1),f={class:"q-pa-md q-mx-auto desktop-only",style:{width:"50%"}},b={class:"q-pa-md q-mx-auto desktop-hide"},g={class:"text-center text-uppercase"};function y(i,a,s,y,v,k){const w=(0,e.up)("q-rating"),_=(0,e.up)("q-separator"),z=(0,e.up)("q-checkbox"),C=(0,e.up)("q-btn"),q=(0,e.up)("q-form"),x=(0,e.up)("q-card-section"),W=(0,e.up)("q-img"),Z=(0,e.up)("q-card-actions"),Q=(0,e.up)("q-video"),V=(0,e.up)("q-card");return(0,e.wg)(),(0,e.iD)("div",t,[(0,e.Wm)(V,{class:"my-card bg-dark",flat:"",bordered:""},{default:(0,e.w5)((()=>[(0,e.Wm)(x,{horizontal:""},{default:(0,e.w5)((()=>[(0,e.Wm)(x,{class:"q-pt-xs col-6 text-center"},{default:(0,e.w5)((()=>[c,(0,e._)("div",o,(0,l.zw)(i.name),1),(0,e._)("div",n,(0,l.zw)(i.descripcion),1),r,(0,e._)("span",null,"duraccion : "+(0,l.zw)(i.pelicula.duracion),1),u,(0,e._)("span",null,"fecha de estreno "+(0,l.zw)(i.momento(i.pelicula.fecha_estreno)),1),m,(0,e.Wm)(w,{modelValue:i.calificacion,"onUpdate:modelValue":a[0]||(a[0]=a=>i.calificacion=a),max:"5",size:"2.5em",color:"yellow",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",class:"q-mb-lg",readonly:""},null,8,["modelValue"]),j,(0,e.Uk)(" "+(0,l.zw)(i.genteCalificacion.length)+" vista ",1),d,(0,e.Uk)(" "+(0,l.zw)(i.genteCalificacion.length)+" "+(0,l.zw)(0==i.pelicula.calificacion?"se el primero en calificarla ":"calificacion")+" ",1),(0,e.Wm)(_,{inset:""}),(0,e.Wm)(q,{onSubmit:i.calificar,class:"q-gutter-md q-mt-lg"},{default:(0,e.w5)((()=>[(0,e.Wm)(z,{"left-label":"",modelValue:i.vista,"onUpdate:modelValue":a[1]||(a[1]=a=>i.vista=a),label:"pelicula vista"},null,8,["modelValue"]),(0,e.Wm)(w,{name:"quality",modelValue:i.myCalifiacion,"onUpdate:modelValue":a[2]||(a[2]=a=>i.myCalifiacion=a),max:"5",size:"1.5em",color:"yellow",icon:"star_border","icon-selected":"star","no-dimming":""},null,8,["modelValue"]),(0,e._)("div",null,[i.user?((0,e.wg)(),(0,e.j4)(C,{key:0,label:"calificar",type:"submit",color:"primary"})):(0,e.kq)("",!0),i.user?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(C,{key:1,label:"iniciar session",onClick:a[3]||(a[3]=a=>i.$router.replace("/login")),type:"submit",color:"primary"}))])])),_:1},8,["onSubmit"])])),_:1}),(0,e.Wm)(x,{class:"col-5 flex flex-center"},{default:(0,e.w5)((()=>[(0,e.Wm)(W,{class:"rounded-borders",src:"https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/img/"+i.pelicula.caratula},null,8,["src"])])),_:1})])),_:1}),(0,e.Wm)(_),(0,e.Wm)(Z,null,{default:(0,e.w5)((()=>[(0,e.Wm)(C,{flat:"",round:"",icon:"event"}),(0,e.Wm)(C,{flat:""},{default:(0,e.w5)((()=>[(0,e.Uk)((0,l.zw)(i.pelicula.fecha_estreno.substr(0,10)),1)])),_:1}),(0,e.Wm)(C,{flat:"",color:"primary",disable:""},{default:(0,e.w5)((()=>[p])),_:1})])),_:1}),h,(0,e._)("div",f,[(0,e.Wm)(Q,{ratio:16/9,src:i.pelicula.trailer.replace("watch?v=","embed/").split("&")[0]},null,8,["src"])]),(0,e._)("div",b,[(0,e.Wm)(Q,{ratio:16/9,src:i.pelicula.trailer.replace("watch?v=","embed/").split("&")[0]},null,8,["src"])]),(0,e._)("p",g,(0,l.zw)(i.name),1)])),_:1})])}var v=s(3617),k=s(1959),w=s(1488),_=s.n(w),z=s(52),C=s.n(z),q=s(8825);const x=(0,e.aZ)({name:"PageIndex",data(){return{pelicula:{Descripcion:"",calificacion:5,caratula:"",duracion:"00:00:00",fecha_estreno:"2022-01-03T05:00:00.000Z",id_pelicula:5,titulo:"",trailer:"",views:0},$store:(0,v.oR)(),trailer:"",name:"",descripcion:"",slide:(0,k.iH)(1),autoplay:(0,k.iH)(!0),ratingModel:(0,k.iH)(3),myCalifiacion:(0,k.iH)(0),vista:!0,user:JSON.parse(localStorage.getItem("usuario")),calificacion:"",history:[],$q:(0,q.Z)(),genteCalificacion:[]}},beforeCreate:async function(){const i=await C().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/"),a=await C().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/historial");this.pelicula=i.data.peliculas.filter((i=>i.id_pelicula==this.$route.params.id))[0],console.log(this.pelicula.titulo),this.name=this.pelicula.titulo,this.descripcion=this.pelicula.Descripcion,this.trailer=this.pelicula.trailer,this.calificacion=this.pelicula.calificacion,this.myCalifiacion=a.data.history.filter((i=>i.usuarioid_usuario==this.user.id_usuario)),"si"==this.myCalifiacion[0].visto&&(this.vista=!0),this.genteCalificacion=this.myCalifiacion,this.myCalifiacion=this.myCalifiacion[0].calififacion,this.ratingModel=this.pelicula.calificacion,console.log(this.pelicula),"jhon"==this.$store.state.movie.nombre&&(window.location.href="#/")},mounted(){},components:{},watch:{caratula:function(){}},methods:{actualizar:async function(){const i=await C().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/"),a=await C().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/historial");this.pelicula=i.data.peliculas.filter((i=>i.id_pelicula==this.$route.params.id))[0],console.log(this.pelicula.titulo),this.name=this.pelicula.titulo,this.descripcion=this.pelicula.Descripcion,this.trailer=this.pelicula.trailer,this.calificacion=this.pelicula.calificacion,this.myCalifiacion=a.data.history.filter((i=>i.usuarioid_usuario==this.user.id_usuario)),"si"==this.myCalifiacion[0].visto&&(this.vista=!0),this.genteCalificacion=this.myCalifiacion,this.myCalifiacion=this.myCalifiacion[0].calififacion,this.ratingModel=this.pelicula.calificacion,console.log(this.pelicula)},momento:function(i){return _()(i).fromNow()},calificar:async function(){const i=await C().post("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/calificar",{calificacion:this.myCalifiacion,id_usuario:JSON.parse(localStorage.getItem("usuario")).id_usuario,visto:"si",id_pelicula:this.pelicula.id_pelicula,promedio:this.pelicula.calificacion});"califiacado con exito"==i.data.msg?(this.$q.notify({color:"green-5",textColor:"white",icon:"done",message:i.data.msg}),this.actualizar()):this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"algo anda mal"})}}});var W=s(151),Z=s(5589),Q=s(8833),V=s(5869),U=s(5269),S=s(5735),$=s(2165),D=s(4152),O=s(9367),N=s(1419),H=s(7518),I=s.n(H);x.render=y;const M=x;I()(x,"components",{QCard:W.Z,QCardSection:Z.Z,QRating:Q.Z,QSeparator:V.Z,QForm:U.Z,QCheckbox:S.Z,QBtn:$.Z,QImg:D.Z,QCardActions:O.Z,QVideo:N.Z})},6700:(i,a,s)=>{var e={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":8393,"./cs.js":8393,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":8486,"./me.js":8486,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":1515,"./zh-mo.js":1515,"./zh-tw":4746,"./zh-tw.js":4746};function l(i){var a=t(i);return s(a)}function t(i){if(!s.o(e,i)){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}return e[i]}l.keys=function(){return Object.keys(e)},l.resolve=t,i.exports=l,l.id=6700}}]);