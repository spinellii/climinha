(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{93:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(2),r=c(38),l=c(37),o=c(6),s=c(1);var i=function(){return Object(s.jsx)(n.default,{children:Object(s.jsx)(n.default,{style:d.header,children:Object(s.jsx)(o.default,{style:d.texto,children:"Previs\xe3o do tempo"})})})},d=a.default.create({informacao:{fontSize:17,color:"#fff"},header:{height:100,backgroundColor:"#c5d5cb",alignItems:"center",justifyContent:"center"},texto:{paddingTop:10,color:"#fff",fontWeight:"bold",fontSize:20}}),f=c(14),u=c.n(f),j=c(18),x=c.n(j),b=c(0),m=c(85),h=c.n(m).a.create({baseURL:"http://api.weatherapi.com/v1/"}),O=c(94);function y(e){var t=Object(b.useState)(),c=u()(t,2),a=c[0],r=c[1],l=Object(b.useState)(),i=u()(l,2),d=i[0],f=i[1],j=Object(b.useState)(),m=u()(j,2),y=m[0],p=m[1],S=Object(b.useState)(),v=u()(S,2),w=v[0],C=v[1],k=Object(b.useState)(),z=u()(k,2),I=z[0],P=z[1],R=Object(b.useState)(),W=u()(R,2),_=W[0],T=W[1],U=Object(b.useState)(),q=u()(U,2),F=q[0],J=q[1];return Object(b.useEffect)((function(){!function(){var t,c;x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.awrap(h.get("forecast.json?key=870e327d30f5486e914120742220509&q="+e.nome+"&days=1&aqi=no&alerts=no"));case 2:t=n.sent,c=t.data,r(c.current.condition.icon),f(c.current.temp_c),C(c.forecast.forecastday[0].day.maxtemp_c),p(c.forecast.forecastday[0].day.mintemp_c),P(c.current.feelslike_c),T(c.current.humidity),J(c.current.uv);case 11:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),Object(s.jsxs)(n.default,{style:g.card,children:[Object(s.jsxs)(n.default,{style:g.teste,children:[Object(s.jsx)(O.default,{style:g.img,source:{uri:"http:"+a}}),Object(s.jsxs)(o.default,{style:g.temp,children:[d,"\xba"]}),Object(s.jsx)(o.default,{style:g.cidade,children:e.nome})]}),Object(s.jsxs)(o.default,{style:g.max,children:[Object(s.jsx)(o.default,{style:g.maxemin,children:"M\xe1xima: "}),w]}),Object(s.jsxs)(o.default,{style:g.max,children:[Object(s.jsx)(o.default,{style:g.maxemin,children:"M\xednima: "})," ",y]}),Object(s.jsxs)(o.default,{style:g.max,children:[Object(s.jsx)(o.default,{style:g.maxemin,children:"Umidade: "}),_,"%"]}),Object(s.jsxs)(o.default,{style:g.max,children:[Object(s.jsx)(o.default,{style:g.maxemin,children:"Sensa\xe7\xe3o: "}),I]}),Object(s.jsxs)(o.default,{style:g.max,children:[Object(s.jsx)(o.default,{style:g.maxemin,children:"UV: "}),F]})]})}var g=a.default.create({maxemin:{fontWeight:"bold",color:"#fff"},max:{bottom:15,fontSize:17,display:"flex",color:"gray",letterSpacing:2},card:{width:300,height:280,padding:20,marginBottom:50,backgroundColor:"#001f3f",borderRadius:20,marginTop:20},teste:{flex:1,flexWrap:"wrap",alignItems:"flex-end",flexDirection:"row",justifyContent:"flex-end"},img:{width:80,height:75,marginRight:110},temp:{fontSize:40,color:"#fff"},cidade:{fontSize:25,marginLeft:80,color:"#fff"}});function p(){return Object(s.jsx)(n.default,{children:Object(s.jsx)(n.default,{style:S.Footer,children:Object(s.jsx)(o.default,{style:S.footer,children:"\xa9 Copyright 2022"})})})}var S=a.default.create({Footer:{height:70,backgroundColor:"#c5d5cb",alignItems:"center",justifyContent:"center"},footer:{paddingTop:10,color:"#fff",fontWeight:"bold",fontSize:15}});t.default=function(){return Object(s.jsx)(n.default,{children:Object(s.jsx)(l.default,{children:Object(s.jsxs)(r.default,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)(n.default,{style:v.container,children:[Object(s.jsx)(y,{nome:"Sao Paulo"}),Object(s.jsx)(y,{nome:"Rio de janeiro"}),Object(s.jsx)(y,{nome:"Paris"})]}),Object(s.jsx)(p,{})]})})})};var v=a.default.create({container:{flex:1,backgroundColor:"#e3e0cf",alignItems:"center",justifyContent:"center"},scrollView:{flex:1,backgroundColor:"#fff"}})},95:function(e,t,c){e.exports=c(143)}},[[95,1,2]]]);
//# sourceMappingURL=app.f782c4ce.chunk.js.map