(this.webpackJsonpcoffee=this.webpackJsonpcoffee||[]).push([[0],{65:function(e,a,t){},66:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(50),r=t.n(l),i=(t(65),t(34)),s=t(35),o=t(26),h=t(37),u=t(36),j=(t(66),t(101)),d=t(95),b=t(100),O=t(99),C=t(93),f=t(94),g=t(92),v=t(98),p=t(2);var x=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.onWaterChange(e.target.value)}},{key:"render",value:function(){return Object(p.jsxs)(d.a,{className:"waterInput",variant:"standard",sx:{m:1,mt:3,width:"25ch"},children:[Object(p.jsx)("label",{for:"water",children:"The amount of water in dl:"}),Object(p.jsx)(g.a,{sx:{width:"10ch"},id:"water",type:"number",value:this.props.water,onChange:this.handleChange,endAdornment:Object(p.jsx)(v.a,{position:"end",children:"dl"})})]})}}]),t}(c.a.Component),m=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.onMeasureChange(e.target.value)}},{key:"render",value:function(){return Object(p.jsxs)(d.a,{component:"fieldset",children:[Object(p.jsx)(O.a,{component:"legend",children:"The scoop used:"}),Object(p.jsxs)(f.a,{row:!0,"aria-label":"scoop",defaultValue:7,name:"radio-buttons-group",onChange:this.handleChange,children:[Object(p.jsx)(b.a,{value:7,control:Object(p.jsx)(C.a,{}),label:"7g"}),Object(p.jsx)(b.a,{value:10,control:Object(p.jsx)(C.a,{}),label:"10g"}),Object(p.jsx)(b.a,{value:12,control:Object(p.jsx)(C.a,{}),label:"12g"}),Object(p.jsx)(b.a,{value:15,control:Object(p.jsx)(C.a,{}),label:"15g"})]})]})}}]),t}(c.a.Component),k=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(p.jsx)(j.a,{variant:"contained",onClick:this.props.onCalculationClick,children:"Calculate!"})}}]),t}(c.a.Component),w=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleMeasureChange=n.handleMeasureChange.bind(Object(o.a)(n)),n.handleWaterChange=n.handleWaterChange.bind(Object(o.a)(n)),n.handleCalculationClick=n.handleCalculationClick.bind(Object(o.a)(n)),n.state={measure:7,water:"",calculation:0},n}return Object(s.a)(t,[{key:"handleMeasureChange",value:function(e){this.setState({measure:e})}},{key:"handleWaterChange",value:function(e){this.setState({water:e})}},{key:"handleCalculationClick",value:function(){var e,a,t=(e=this.state.measure,a=this.state.water,Math.round(5.6*a/e*100)/100);this.setState({calculation:t})}},{key:"render",value:function(){var e=this.state.water,a=this.state.calculation;return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{children:"Coffee calculator"}),Object(p.jsx)(m,{onMeasureChange:this.handleMeasureChange}),Object(p.jsx)(x,{water:e,onWaterChange:this.handleWaterChange}),Object(p.jsx)(k,{onCalculationClick:this.handleCalculationClick}),Object(p.jsxs)("h1",{children:["You need ",a," scoops of coffee!"]})]})})}}]),t}(c.a.Component),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),y()}},[[72,1,2]]]);
//# sourceMappingURL=main.99fd9f7c.chunk.js.map