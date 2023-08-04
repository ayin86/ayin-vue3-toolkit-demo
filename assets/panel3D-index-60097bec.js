import{_ as u,r as l,o as a,c as f,w as n,b as e,n as h,e as p,F as D,f as x,a as s,u as g,h as m,t as $}from"./index-23efbe39.js";const B={name:"SVC",mixins:[],data(){return{boxStyle:{color1:$c.bll5,color2:$c.cyl5,color3:$c.bll9,BGColor:$c.fade($c.bim9,.6),BGColor2:$c.fade($c.bim9,.5)},boar3dConfig:{mode:"matrix",view3d:!0,showShadow:!0,coeff:2},toggleConfig:{checked:!0,title:"3D视图开关"},adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A2",backgroundFillAll:!0,loading:!0}}},components:{},computed:{},watch:{"globalConfig.panel3D"(t){this.boar3dConfig.view3d=t}},methods:{},mounted(){this.boar3dConfig.view3d=this.globalConfig.panel3D,this.$timer("B3DLoading",()=>{this.adptivePanelConfig.loading=!1},1e3)}},C=e("div",{class:"state state-on"},"3D view On",-1),y=e("div",{class:"state state-off"},"3D view Off",-1),P=e("div",{class:"desc"},"Please enable the 3D panel function in the global configuration item",-1),k=[C,y,P],S=e("div",{class:"title-desc"},"Matrix mode, all panels have the same deformation effect, all parameters are common, through v-for loop",-1),L={class:"panel3D-test-matrix-wrap"},T={class:"gridDemoMax"},R={class:"item"},O=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1);function A(t,c,d,_,o,v){const i=l("panel3D"),r=l("adaptivePanel");return a(),f(r,{config:o.adptivePanelConfig},{default:n(()=>[e("div",{class:h(["view3d-state",[t.globalConfig.panel3D?"on3D":"off3D"]])},k,2),S,e("div",L,[e("div",T,[(a(),p(D,null,x(15,(b,w)=>e("div",R,[s(i,{config:o.boar3dConfig,index:w,class:"panel-3d"},{default:n(()=>[O]),_:2},1032,["config","index"])])),64))])])]),_:1},8,["config"])}const N=u(B,[["render",A]]);const H={name:"SVC",mixins:[],data(){return{boxStyle:{color1:$c.bll5,color2:$c.cyl5,color3:$c.bll9,BGColor:$c.fade($c.bim9,.6),BGColor2:$c.fade($c.bim9,.5)},boar3dConfig:{mode:"hive",view3d:!0,showShadow:!0,coeff:2},toggleConfig:{checked:!0,title:"3D视图开关"},adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A2",backgroundFillAll:!0,loading:!0}}},components:{},computed:{},watch:{"globalConfig.panel3D"(t){this.boar3dConfig.view3d=t,console.log("pan3dState",t)}},methods:{},mounted(){this.boar3dConfig.view3d=this.globalConfig.panel3D}},V=e("div",{class:"state state-on"},"3D view On",-1),F=e("div",{class:"state state-off"},"3D view Off",-1),M=e("div",{class:"desc"},"Please enable the 3D panel function in the global configuration item",-1),E=[V,F,M],G=e("div",{class:"title-desc"},"Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop",-1),U={class:"panel3D-test-hive-wrap"},I={class:"gridDemoMax"},z={class:"item"},j=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1);function q(t,c,d,_,o,v){const i=l("panel3D"),r=l("adaptivePanel");return a(),f(r,{config:o.adptivePanelConfig},{default:n(()=>[e("div",{class:h(["view3d-state",[t.globalConfig.panel3D?"on3D":"off3D"]])},E,2),G,e("div",U,[e("div",I,[(a(),p(D,null,x(15,(b,w)=>e("div",z,[s(i,{config:o.boar3dConfig,index:w,class:"panel-3d"},{default:n(()=>[j]),_:2},1032,["config","index"])])),64))])])]),_:1},8,["config"])}const J=u(H,[["render",q]]);const K={name:"SVC",mixins:[],data(){return{boar3dConfig:{mode:"unity",view3d:!0,coeff:.5,showShadow:!0,eventBus:!0,shadowCoeff:2,inadaptivePanel:!0,eventElement:"eventElement"},toggleConfig:{checked:!0,title:"3D视图开关"},adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A2",backgroundFillAll:!0,loading:!0}}},components:{},computed:{},watch:{"globalConfig.panel3D"(t){this.boar3dConfig.view3d=t}},methods:{},mounted(){this.boar3dConfig.view3d=this.globalConfig.panel3D}},Q=e("div",{class:"state state-on"},"3D view On",-1),W=e("div",{class:"state state-off"},"3D view Off",-1),X=e("div",{class:"desc"},"Please enable the 3D panel function in the global configuration item",-1),Y=[Q,W,X],Z=e("div",{class:"title-desc"},"Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop",-1),ee={class:"panel3D-test-unity-wrap"},oe={class:"gridDemoMax"},te=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),ie=[te];function ne(t,c,d,_,o,v){const i=l("panel3D"),r=l("adaptivePanel");return a(),f(r,{config:o.adptivePanelConfig},{default:n(()=>[e("div",{class:h(["view3d-state",[t.globalConfig.panel3D?"on3D":"off3D"]])},Y,2),Z,e("div",ee,[s(i,{config:o.boar3dConfig,class:"panel-3d"},{default:n(b=>[e("div",oe,[(a(),p(D,null,x(15,(w,Je)=>e("div",{class:h(["item",b.boxShadowItem])},ie,2)),64))])]),_:1},8,["config"])])]),_:1},8,["config"])}const ae=u(K,[["render",ne]]);const se={name:"SVC",mixins:[],data(){return{loading:!0,adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A1",backgroundFillAll:!0,loading:!0},configBLeft:{rotate:{y:20},transformOrigin:"right",view3d:!0,showShadow:!0},configBTopLeft:{rotate:{y:20,x:-35},rotateHover:{x:-20,y:-20},view3d:!0,showShadow:!0},configBTopRight:{rotate:{y:-20,x:-35},view3d:!0,showShadow:!0},configBBottomLeft:{rotate:{y:20,x:35},view3d:!0,showShadow:!0},configBBottomRight:{rotate:{y:-20,x:35},view3d:!0,showShadow:!0},configBRight:{rotate:{y:-20},transformOrigin:"left",view3d:!0,showShadow:!0},toggleConfig:{checked:!0,title:"3D视图开关"}}},components:{},computed:{},watch:{"globalConfig.panel3D"(t){this.change3Dview()}},methods:{change3Dview(){let t=this.globalConfig.panel3D;[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight].forEach((d,_)=>{d.view3d=t})}},mounted(){this.change3Dview(),this.$timer("B3DLoading",()=>{this.adptivePanelConfig.loading=!1},1e3)}},ce=e("div",{class:"state state-on"},"3D view On",-1),le=e("div",{class:"state state-off"},"3D view Off",-1),de=e("div",{class:"desc"},"Please enable the 3D panel function in the global configuration item",-1),re=[ce,le,de],fe=e("div",{class:"title-desc"},"Hover mode is a static parameter, this demo is a parameter configured separately, deformation axis, parameter, shadow, etc.",-1),_e={class:"panel3D-test-hover-wrap"},ge=e("div",{class:"demo-box"},null,-1),he=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),ve=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),pe=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),me=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),ue=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1);function be(t,c,d,_,o,v){const i=l("panel3D"),r=l("adaptivePanel");return a(),f(r,{config:o.adptivePanelConfig},{default:n(()=>[e("div",{class:h(["view3d-state",[t.globalConfig.panel3D?"on3D":"off3D"]])},re,2),fe,e("div",_e,[s(i,{config:o.configBLeft,class:"panel-3d board-left"},{default:n(()=>[ge]),_:1},8,["config"]),s(i,{config:o.configBTopLeft,class:"panel-3d board-topLeft"},{default:n(()=>[he]),_:1},8,["config"]),s(i,{config:o.configBTopRight,class:"panel-3d board-topRight"},{default:n(()=>[ve]),_:1},8,["config"]),s(i,{config:o.configBBottomLeft,class:"panel-3d board-bottomLeft"},{default:n(()=>[pe]),_:1},8,["config"]),s(i,{config:o.configBBottomRight,class:"panel-3d board-bottomRight"},{default:n(()=>[me]),_:1},8,["config"]),s(i,{config:o.configBRight,class:"panel-3d board-right"},{default:n(()=>[ue]),_:1},8,["config"])])]),_:1},8,["config"])}const we=u(se,[["render",be]]);const De={name:"SVC",mixins:[],data(){return{adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A1",backgroundFillAll:!0,loading:!0},configBLeft:{transformOrigin:"right top",mode:"hive",eventBus:!0,view3d:!0,showShadow:!0,shadowCoeff:.2,coeff:1},configBTopLeft:{transformOrigin:"top",mode:"hive",view3d:!0,showShadow:!0,shadowTransparent:.1},configBTopRight:{transformOrigin:"top",mode:"hive",view3d:!0,showShadow:!0},configBBottomLeft:{transformOrigin:"bottom",mode:"hive",view3d:!0,showShadow:!0},configBBottomRight:{transformOrigin:"bottom",mode:"hive",view3d:!0,showShadow:!0},configBRight:{transformOrigin:"left bottom",mode:"hive",view3d:!0,showShadow:!0,shadowBlur:100,shadowTransparent:.9,coeff:1}}},components:{},computed:{},watch:{"globalConfig.panel3D"(t){this.change3Dview()}},methods:{change3Dview(){let t=this.globalConfig.panel3D;[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight].forEach((d,_)=>{d.view3d=t})}},mounted(){this.change3Dview()}},xe=e("div",{class:"state state-on"},"3D view On",-1),$e=e("div",{class:"state state-off"},"3D view Off",-1),Be=e("div",{class:"desc"},"Please enable the 3D panel function in the global configuration item",-1),Ce=[xe,$e,Be],ye=e("div",{class:"title-desc"},"Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop",-1),Pe={class:"panel3D-test-hive-wrap"},ke={class:"gridDemoApart"},Se={class:"item"},Le=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),Te={class:"item"},Re=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),Oe={class:"item"},Ae=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),Ne={class:"item"},He=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),Ve={class:"item"},Fe=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1),Me={class:"item"},Ee=e("div",{class:"demo-box"},[e("div",{class:"inner-box"})],-1);function Ge(t,c,d,_,o,v){const i=l("panel3D"),r=l("adaptivePanel");return a(),f(r,{config:o.adptivePanelConfig},{default:n(()=>[e("div",{class:h(["view3d-state",[t.globalConfig.panel3D?"on3D":"off3D"]])},Ce,2),ye,e("div",Pe,[e("div",ke,[e("div",Se,[s(i,{config:o.configBLeft,class:"panel-3d"},{default:n(()=>[Le]),_:1},8,["config"])]),e("div",Te,[s(i,{config:o.configBRight,class:"panel-3d"},{default:n(()=>[Re]),_:1},8,["config"])]),e("div",Oe,[s(i,{config:o.configBTopLeft,class:"panel-3d p50"},{default:n(()=>[Ae]),_:1},8,["config"])]),e("div",Ne,[s(i,{config:o.configBTopRight,class:"panel-3d p50"},{default:n(()=>[He]),_:1},8,["config"])]),e("div",Ve,[s(i,{config:o.configBBottomLeft,class:"panel-3d p50"},{default:n(()=>[Fe]),_:1},8,["config"])]),e("div",Me,[s(i,{config:o.configBBottomRight,class:"panel-3d p50"},{default:n(()=>[Ee]),_:1},8,["config"])])])])]),_:1},8,["config"])}const Ue=u(De,[["render",Ge]]);const Ie={class:"panel3D-demo"},ze={class:"tabs-wrap"},je=["onClick"],qe={class:"tab-content"},Qe={__name:"panel3D-index",setup(t){const c=reactive({activeName:"matrix",tabs:[{name:"Matrix",label:"matrix"},{name:"Hive",label:"hive"},{name:"Unity",label:"unity"},{name:"Hover",label:"hover"},{name:"HiveApart",label:"hiveApart"}]}),d=_=>{c.activeName=_.label};return(_,o)=>{const v=l("panel3DToggle");return a(),p("div",Ie,[e("div",ze,[(a(!0),p(D,null,x(g(c).tabs,(i,r)=>(a(),p("div",{class:h(`item ${i.label==g(c).activeName?"active":"deactive"}`),onClick:b=>d(i)},$(i.name),11,je))),256))]),e("div",qe,[s(v),g(c).activeName=="matrix"?(a(),f(N,{key:0})):m("",!0),g(c).activeName=="hive"?(a(),f(J,{key:1})):m("",!0),g(c).activeName=="unity"?(a(),f(ae,{key:2})):m("",!0),g(c).activeName=="hover"?(a(),f(we,{key:3})):m("",!0),g(c).activeName=="hiveApart"?(a(),f(Ue,{key:4})):m("",!0)])])}}};export{Qe as default};
