(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(8),i=n(2),r=n(3),s=n(5),l=n(4),u=n(1),m=(n(13),n(0)),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date,timerClockChange:0},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.timerClockChange=window.setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString("en-US"))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerClockChange)}},{key:"render",value:function(){var e=this.state.date;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("strong",{children:this.props.clockName})," time is ",e.toLocaleTimeString()]})}}]),n}(u.Component);function d(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:d(),timerNameChange:0},e.settingTimer=function(){e.state.timerNameChange=window.setInterval((function(){e.setState({clockName:d()})}),3300)},e.handleClockDisappearing=function(){e.setState((function(e){return{hasClock:!e.hasClock}}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.settingTimer(),document.addEventListener("contextmenu",(function(){e.handleClockDisappearing(),clearInterval(e.state.timerNameChange)})),document.addEventListener("click",(function(){e.handleClockDisappearing(),e.settingTimer()}))}},{key:"componentDidUpdate",value:function(e,t){Object(o.a)(e),console.log("Renamed from <".concat(t.clockName,"> to <").concat(this.state.clockName,">"))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleClockDisappearing),document.removeEventListener("click",this.handleClockDisappearing)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),Object(m.jsx)("div",{className:"clock",children:t&&Object(m.jsx)(h,{clockName:n})})]})}}]),n}(u.Component),v=k;a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9e64e62e.chunk.js.map