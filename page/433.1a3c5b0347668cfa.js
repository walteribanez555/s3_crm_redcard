"use strict";(self.webpackChunkadminMonster=self.webpackChunkadminMonster||[]).push([[433],{5433:(Z,C,g)=>{g.r(C),g.d(C,{VentasModule:()=>B});var s=g(96814),p=g(3057),t=g(46689),x=g(78645),v=g(56585),u=g(51215),l=g(23707);let a=(()=>{var i;class d{getParamsRoute(n){const{firstDate:e,lastDate:c}=this.getFirstAndLastDateOfMonth((new Date).getFullYear(),n);return`./dashboard/reporte/ventas/data?init=${e}&end=${c}`}getFirstAndLastDateOfMonth(n,e){const c=new Date(n,e,1).toISOString().split("T")[0],r=new Date(n,e+1,1);return{firstDate:c,lastDate:new Date(r.getTime()-1).toISOString().split("T")[0]}}}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["month-item"]],inputs:{month:"month",position:"position"},decls:4,vars:2,consts:[["routerLinkActive","active",3,"href"],[1,"field"],[1,"description"]],template:function(n,e){1&n&&(t.TgZ(0,"a",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()()()),2&n&&(t.s9C("href",e.getParamsRoute(e.position),t.LSH),t.xp6(3),t.Oqu(e.month))},dependencies:[p.Od],styles:["a[_ngcontent-%COMP%]{text-decoration:none;border:1px solid gainsboro;padding:10px 20px;font-weight:700;cursor:pointer;border-radius:5px;color:var(--text-color);width:100%;display:flex}a[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}.active[_ngcontent-%COMP%]{background-color:var(--main-color);color:#fff}"]}),d})();function h(i,d){if(1&i&&t._UZ(0,"month-item",14),2&i){const n=d.index;t.Q6J("month",d.$implicit)("position",n)}}let _=(()=>{var i;class d{constructor(){this.getMonthsBetweenDates=(n=this.getFirstDayOfYear(),e=new Date)=>{const c=["January","February","March","April","May","June","July","August","September","October","November","December"],r=[];let f=new Date(n);for(;f<=e;){const T=c[f.getMonth()];r.push(T),f.setMonth(f.getMonth()+1)}return r},this.oficces=[],this.notificacionModalService=(0,t.f3M)(l.g),this.sessionService=(0,t.f3M)(v.m),this.isClicked=!1,this.isHideInfo=!1}ngOnInit(){this.loadItems()}getFirstDayOfYear(){const e=(new Date).getFullYear();return new Date(e,0,1)}loadItems(){const n=new x.x,e=n.asObservable();this.onLoading(e),this.sessionService.getOfficesFromUser().subscribe({next:c=>{n.complete(),this.oficces=c},error:c=>{n.complete(),this.onError(c)},complete:()=>{}})}onChangeClick(){this.isClicked=!this.isClicked}onClickInfo(){this.isHideInfo=!this.isHideInfo}onSuccess(n){this.notificacionModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/check.svg",closeOnTouch:!0})}onError(n){this.notificacionModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/warning.svg",closeOnTouch:!0})}onLoading(n){this.notificacionModalService.show("Cargando",{size:u.$u.normal,positions:[u.iS.center],imageUrl:"assets/icons/loading.svg",closeOnTouch:!1,notifier:n})}}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:22,vars:11,consts:[[1,"content"],[1,"steps"],[1,"info"],[1,"top",3,"click"],[1,"container-text"],[1,"title"],[1,"expand"],[1,"fa-solid","fa-caret-up","fa-2xl",2,"color","white"],[1,"process"],[1,"list-title"],[1,"list"],["routerLink","./data"],[3,"month","position",4,"ngFor","ngForOf"],[1,"expand-info",3,"click"],[3,"month","position"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.NdJ("click",function(){return e.onChangeClick()}),t.TgZ(5,"div",4)(6,"span",5),t._uU(7,"Ventas"),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"i",7),t.qZA()()(),t.TgZ(10,"div",8)(11,"div",9)(12,"span",5),t._uU(13,"Orden de ventas"),t.qZA()(),t.TgZ(14,"div",10)(15,"a",11),t._uU(16,"Filtro Dinamico"),t.qZA(),t._UZ(17,"hr"),t.YNc(18,h,1,2,"month-item",12),t.qZA()(),t.TgZ(19,"button",13),t.NdJ("click",function(){return e.onClickInfo()}),t.TgZ(20,"span"),t._uU(21,">"),t.qZA()()()()),2&n&&(t.ekj("onDisplay",e.isClicked)("collapsed",e.isHideInfo),t.xp6(1),t.ekj("expanded",e.isHideInfo),t.xp6(2),t.ekj("active",e.isClicked)("hidden",e.isHideInfo),t.xp6(15),t.Q6J("ngForOf",e.getMonthsBetweenDates()))},dependencies:[s.sg,p.lC,p.rH,a],styles:[".content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;width:100vw;height:calc(100vh - var(--main-header-height));overflow-x:hidden;overflow-y:hidden;position:relative}.steps[_ngcontent-%COMP%]{position:relative;height:calc(100vh - var(--main-header-height));width:70vw;flex-direction:column;align-items:center;justify-content:center;animation:moveToLeft 1s forwards}@keyframes _ngcontent-%COMP%_mostrarInfo{0%{right:-35%}70%{right:0%}to{right:0}}@keyframes _ngcontent-%COMP%_ocultarInfo{to{right:-30%}30%{right:-10%}0%{right:0}}.info[_ngcontent-%COMP%]{height:calc(100vh - var(--main-header-height));width:30vw;position:absolute;right:-100%;animation:_ngcontent-%COMP%_mostrarInfo 1s forwards;background:white}.top[_ngcontent-%COMP%]{height:20%;background-color:var(--main-color);padding:10px;color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.process[_ngcontent-%COMP%]{border:2px solid gainsboro;height:100%;padding:20px;overflow-y:auto}.process[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.process[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:25px}.process[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:gray;border-radius:25px}.process[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:gray}.container-text[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;display:flex;flex-direction:column;padding-left:20px}.text[_ngcontent-%COMP%], .second-text[_ngcontent-%COMP%]{font-weight:700;height:-moz-fit-content;height:fit-content;font-size:1.4em;letter-spacing:10px;width:100%;white-space:nowrap;overflow:hidden}.data-step[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12%;height:45%}.list-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:-moz-fit-content;height:fit-content;align-items:center;justify-content:space-between}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;height:-moz-fit-content;height:fit-content;width:100%;padding:10px;gap:5px}.list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;border:none;background-color:#f04b46;color:#fff;cursor:pointer;border-radius:8px;font-weight:700}hr[_ngcontent-%COMP%]{margin:10px 0;border:1px solid gainsboro}.list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--main-color)}rol-item-view[_ngcontent-%COMP%]{width:100%}a[_ngcontent-%COMP%]{background-color:#f04b46;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:700;cursor:pointer}a[_ngcontent-%COMP%]:hover{background-color:var(--main-color)}@keyframes _ngcontent-%COMP%_cursor{50%{border-color:transparent}}@keyframes _ngcontent-%COMP%_typing{0%{width:0}}.expand[_ngcontent-%COMP%]{visibility:hidden}.expand-info[_ngcontent-%COMP%]{position:absolute;top:50%;background-color:var(--main-color);border:none;border-radius:100px;z-index:6;color:#fff;font-size:20px;padding:20px;left:-25px;font-weight:700;cursor:pointer;transition:.3s all ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;--webkit-transform: translateY(0);transform:translateY(10%)}to{opacity:1;--webkit-transform: translateY(0);transform:translateY(0)}}.steps[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{visibility:hidden;display:none}.process[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px;font-weight:700}@media (min-width:1024px){.info[_ngcontent-%COMP%]{border:1px solid gainsboro}.info[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:none}.progress[_ngcontent-%COMP%]{flex:1 0 35%;min-width:300px;padding:10px 30px}@keyframes moveToLeft{0%{width:100vw}to{width:70vw}}@keyframes moveToRight{0%{width:70vw}30%{width:50vw}to{width:100vw}}.info.hidden[_ngcontent-%COMP%]{right:-35%;animation:_ngcontent-%COMP%_ocultarInfo 2s forwards}.info.hidden[_ngcontent-%COMP%]   .expand-info[_ngcontent-%COMP%]{left:-100px;rotate:180deg;transition:.3s all ease-in-out}.content.collapsed[_ngcontent-%COMP%]{grid-template-columns:4fr 1fr;transition:all .3s ease-in-out}.steps.expanded[_ngcontent-%COMP%]{width:100vw;animation:moveToRight 1.2s forwards}}@media (max-width:1024px){.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;transition:.4s all ease-in-out}.content.onDisplay[_ngcontent-%COMP%]{display:flex;position:fixed;z-index:5;height:90vh;width:100vw;max-height:100%;inset:0;overflow-x:hidden;transition:.4s all ease-in-out}@keyframes moveToTop{0%{bottom:0%}50%{bottom:50%}to{top:100%}}.info[_ngcontent-%COMP%]{z-index:3;position:fixed;top:90%;height:10vh;width:100%;overflow:hidden;transition:.4s all ease-in-out}.steps[_ngcontent-%COMP%]{width:100vw;height:calc(90vh - var(--main-header-height));position:relative;flex-direction:column;align-items:end;justify-content:end}.steps.expanded[_ngcontent-%COMP%]{width:100vw}.info[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{height:10vh}.info.active[_ngcontent-%COMP%]{height:100vh;top:0%;transition:.4s all ease-in-out}.top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:50px}.second-text[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{font-size:15px}.info.active[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{rotate:180deg;transition:.3s all ease-in-out}.info[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.3s all ease-in-out}.expand[_ngcontent-%COMP%]{visibility:visible;position:absolute;right:20px}.process[_ngcontent-%COMP%]{border:2px solid gainsboro;height:90vh;background:white}.expand-info[_ngcontent-%COMP%]{visibility:hidden}}"]}),d})();var m=g(91011),O=g(11902),P=g(20355);function w(i,d){1&i&&(t.TgZ(0,"button",9),t._UZ(1,"i",10),t.TgZ(2,"span"),t._uU(3,"Exportar"),t.qZA()())}const b=function(i,d,o){return{poliza_id:i,beneficiario_id:d,siniestro_id:o}};function y(i,d){if(1&i&&(t.TgZ(0,"tr",11)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&i){const o=d.$implicit;t.Q6J("routerLink","../"+o.venta_id)("queryParams",t.kEZ(11,b,o.poliza_id,o.beneficiario_id,o.siniestro_id)),t.xp6(2),t.Oqu(o.siniestro_id),t.xp6(2),t.Oqu(o.poliza_id),t.xp6(2),t.Oqu(o.fecha_salida.split("T")[0]),t.xp6(2),t.Oqu(o.fecha_retorno.split("T")[0]),t.xp6(2),t.Oqu(o.fecha_siniestro.split("T")[0]),t.xp6(2),t.Oqu(o.primer_nombre),t.xp6(2),t.Oqu(o.primer_apellido),t.xp6(2),t.Oqu(o.pais_ocurrencia),t.xp6(2),t.Oqu(o.ciudad_ocurrencia)}}let A=(()=>{var i;class d{constructor(){this.notificationModalService=(0,t.f3M)(l.g),this.serviciosService=(0,t.f3M)(m.Co),this.reportesService=(0,t.f3M)(O.c),this.siniestros=[],this.servicios=[]}ngOnInit(){localStorage.getItem("client_id");const e=new x.x,c=e.asObservable();this.onLoading(c),this.serviciosService.getAll().subscribe({next:r=>{console.log({resp:r}),this.servicios=r,e.complete()},error:r=>{this.onError(r)},complete:()=>{}})}mapQuantity(n){return n.split(",").reduce((e,c)=>e+parseInt(c),0)}mapService(n){return this.servicios.filter(e=>e.servicio_id===n)[0].servicio}onFilter(n){const e=new x.x,c=e.asObservable();this.fetchReport(n[0],n[1],c,e)}fetchReport(n,e,c,r){this.onLoading(c),this.reportesService.getSiniestros(n,e).subscribe({next:f=>{r.complete(),this.siniestros=f},error:f=>{r.complete(),this.onError(f)}})}getTotalPayment(n,e="1"){const c=e.split(",").reduce((f,T)=>f+parseInt(T),0);return n.split(",").reduce((f,T)=>f+parseInt(T),0)/c}getAmountByQuantity(n,e="1"){return n/e.split(",").reduce((r,f)=>r+parseInt(f),0)}onSuccess(n){this.notificationModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/check.svg",closeOnTouch:!0})}onError(n){this.notificationModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/warning.svg",closeOnTouch:!0})}onLoading(n){this.notificationModalService.show("Cargando",{size:u.$u.normal,positions:[u.iS.center],imageUrl:"assets/icons/loading.svg",closeOnTouch:!1,notifier:n})}getStatusClass(n){return{success:2===n,deleted:3===n}}}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:31,vars:2,consts:[[1,"container"],[1,"top"],[1,"title"],[2,"width","100%",3,"onFilter"],[2,"width","100%"],["class","export",4,"ngIf"],[1,"info"],[1,"table-data","info"],[3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"export"],[1,"fa-solid","fa-file-csv"],[3,"routerLink","queryParams"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span"),t._uU(4,"Siniestros"),t.qZA()()(),t.TgZ(5,"filter",3),t.NdJ("onFilter",function(r){return e.onFilter(r)}),t.qZA(),t._UZ(6,"hr",4),t.YNc(7,w,4,0,"button",5),t.TgZ(8,"div",6)(9,"div",7)(10,"table")(11,"tr")(12,"th"),t._uU(13,"Codigo Siniestro"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Codigo Poliza"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Fecha Salida"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Fecha Retorno"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Fecha Siniestro"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Nombres"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Apellidos"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Pais Ocurrencia"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Ciudad Ocurrencia"),t.qZA()(),t.YNc(30,y,19,15,"tr",8),t.qZA()()()()),2&n&&(t.xp6(7),t.Q6J("ngIf",e.siniestros.length>0),t.xp6(23),t.Q6J("ngForOf",e.siniestros))},dependencies:[s.sg,s.O5,p.rH,P.z],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:40px;width:100%;height:calc(100vh - 80px);overflow-y:auto}.top[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.title[_ngcontent-%COMP%]{display:flex;align-items:center}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:600;text-align:start;padding-left:20px}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background:none;border:3px solid var(--main-color);border-radius:10px;padding:10px 20px;color:var(--main-color);font-size:15px;transition:.3s all ease-in-out}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:.3s all ease-in-out;padding-left:5px}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{transition:.3s all ease-in-out;padding-left:20px}hr[_ngcontent-%COMP%]{margin:20px 0;width:100%;border:1px solid gainsboro}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:20px;width:100%}.table-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px}.table-data[_ngcontent-%COMP%]{width:100%;height:500px;overflow:auto;border-radius:2px;border:1px solid #ccc}.table-data[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.info[_ngcontent-%COMP%]{padding:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid black}table[_ngcontent-%COMP%]{width:120%}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;flex-wrap:wrap;gap:10px;width:30%}.row[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end;justify-content:flex-end}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px 20px;font-size:12px;outline:none;border-radius:8px;border:1px solid gainsboro;color:var(--text-color);height:100%}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px;border-radius:8px;border:none;color:#fff;cursor:pointer;transition:.3s ease-in-out}button.export[_ngcontent-%COMP%]{background-color:var(--body-bg);color:green;border:1px solid green;font-weight:700;transition:all .3s ease-in-out;margin:10px}button.export[_ngcontent-%COMP%]:hover{background-color:green;color:#fff;transition:all .3s ease-in-out}button.export[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px}.filters[_ngcontent-%COMP%]   button.valid[_ngcontent-%COMP%]{transition:.3s ease-in-out;background-color:#f04b46}.status[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid var(--main-color);color:var(--main-color);font-weight:700;border-radius:8px}.status.success[_ngcontent-%COMP%]{border:1px solid green;color:green}thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:var(--body-bg)}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:small;text-align:center;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;font-size:small}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.vigente[_ngcontent-%COMP%]{color:green;border:1px solid green;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.congelada[_ngcontent-%COMP%]{color:gray;border:1px solid gray;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.uso[_ngcontent-%COMP%]{color:var(--main-color);border:1px solid var(--main-color);padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.anulada[_ngcontent-%COMP%]{color:#ff4500;border:1px solid orangered;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--main-color);font-weight:700}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--main-color);border-radius:6px}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f1f1f1}@media (max-width: 1024px){.table-container[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:20px 10px}.container[_ngcontent-%COMP%]{height:calc(100vh - (80px + 10vh))}button.export[_ngcontent-%COMP%]{width:100%;margin:10px 0}}"]}),d})(),U=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,e){1&n&&t._UZ(0,"router-outlet")},dependencies:[p.lC]}),d})();var M=g(56223),S=g(30043),F=g(94664),q=g(7110);function D(i,d){if(1&i){const o=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.makeCsvVen())}),t._UZ(1,"i",10),t.TgZ(2,"span"),t._uU(3,"Exportar"),t.qZA()()}}function E(i,d){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"span",11),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.ALo(24,"currency"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.ALo(27,"currency"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"currency"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.ALo(33,"currency"),t.qZA(),t.TgZ(34,"td"),t._uU(35),t.qZA(),t.TgZ(36,"td"),t._uU(37),t.qZA(),t.TgZ(38,"td"),t._uU(39),t.qZA(),t.TgZ(40,"td"),t._uU(41),t.qZA()()),2&i){const o=d.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngClass",n.getStatusClass(o.status)),t.xp6(1),t.Oqu(1==o.status?"Proceso":2==o.status?"Realizada":"Cancelada"),t.xp6(2),t.Oqu(o.fecha_venta.split("T")[0].split("-").join("/")),t.xp6(2),t.Oqu(o.fecha_salida.split("T")[0].split("-").join("/")),t.xp6(2),t.Oqu(o.fecha_retorno.split("T")[0].split("-").join("/")),t.xp6(2),t.Oqu(n.getOficces(o.office_id)[0]),t.xp6(2),t.hij(" ",o.username," "),t.xp6(2),t.hij(" ",o.poliza_id," "),t.xp6(2),t.hij(" ",n.getService(o.servicio_id)," "),t.xp6(2),t.hij(" ",o.primer_nombre," "),t.xp6(2),t.hij(" ",o.primer_apellido," "),t.xp6(2),t.hij(" ",t.lcZ(24,19,o.precio)," "),t.xp6(3),t.Oqu(t.lcZ(27,21,n.getPriceByItem(o.plus,o.cantidad))),t.xp6(3),t.Oqu(t.lcZ(30,23,n.getPriceByItem(o.descuento,o.cantidad))),t.xp6(3),t.Oqu(t.lcZ(33,25,n.getPriceByItem(o.total_pago,o.cantidad))),t.xp6(3),t.Oqu(o.edad),t.xp6(2),t.Oqu(o.origen),t.xp6(2),t.Oqu(o.destino),t.xp6(2),t.Oqu(o.email)}}const k=[{path:"reporte",component:U,children:[{path:"ventas",component:_,children:[{path:"data",component:(()=>{var i;class d{constructor(){this.route=(0,t.f3M)(p.gz),this.reportesService=(0,t.f3M)(O.c),this.officeService=(0,t.f3M)(q.a),this.serviciosService=(0,t.f3M)(m.Co),this.ventas=[],this.servicios=[],this.oficina=[],this.filterForm=new M.cw({initialDate:new M.NI(null,[M.kI.required]),finalDate:new M.NI(null,[M.kI.required])}),this.notificacionModalService=(0,t.f3M)(l.g),this.isWithFilter=!1}ngOnInit(){const n=new x.x,e=n.asObservable();this.serviciosService.getAll().pipe((0,F.w)(c=>(this.servicios=c,this.officeService.getAll()))).subscribe({next:c=>{this.oficina=c},error:c=>{n.complete(),this.onError(c)},complete:()=>{this.route.queryParams.subscribe(c=>{this.ventas=[];const{init:r,end:f}=this.route.snapshot.queryParams;r&&f?this.fetchReport(r,f,e,n):this.isWithFilter=!0})}})}fetchReport(n,e,c,r){this.onLoading(c),this.reportesService.get(n,e).subscribe({next:f=>{r.complete(),this.ventas=f},error:f=>{r.complete(),this.onError(f)}})}onFilter(n){const e=new x.x,c=e.asObservable();this.fetchReport(n[0],n[1],c,e)}getPriceByItem(n,e){return"string"==typeof n?parseInt(n)/parseInt(e):n/parseInt(e)}getOficces(n){console.log({office_id:n}),console.log(this.oficina);const e=this.oficina.filter(c=>c.office_id==n).map(c=>c.office_name);return console.log({oficcess:e}),e}getService(n){return this.servicios.filter(e=>e.servicio_id==n).map(e=>e.servicio)}getStatusClass(n){return{success:2===n,deleted:3===n}}getStatusString(n){return 1==n?"realizado":"proceso"}getStatusPoliza(n){switch(n){case 1:return"proceso";case 2:return"espera";case 3:return"activa";case 4:return"congelada";case 5:return"reembolso";case 6:return"anulada";default:return"vencida"}}makeCsvVen(){const n="reporte ventas-"+(new Date).toISOString().split("T")[0],c=this.ventas.map(r=>({venta:r.venta_id,status:this.getStatusString(r.status),oficina:this.getOficces(r.office_id),username:r.username,"fecha venta":r.fecha_venta.split("T")[0],"forma pago":"efectivo",cantidad:r.cantidad,precio:parseFloat(r.precio),total:parseFloat(r.total),plus:r.plus,descuento:parseFloat(r.descuento),"descuento extra":r.descuento_extra,"total pagado":r.total_pago,poliza:r.poliza_id,"status poliza":this.getStatusPoliza(r.poliza_st),destino:r.destino,dias:r.nro_dias,"fecha salida":r.fecha_salida.split("T")[0],"fecha retorno":r.fecha_retorno.split("T")[0],beneficiario:r.beneficiario_id,nombres:r.primer_nombre,apellidos:r.primer_apellido,identificacion:r.nro_identificacion,"fecha nacimiento":r.fecha_nacimiento.split("T")[0],edad:r.edad,origen:r.origen,email:r.email,telefono:r.telefono}));new S.J0(c,n,{fieldSeparator:";",quoteStrings:'"',decimalseparator:"locale",showLabels:!0,showTitle:!0,title:"Report data",useBom:!0,headers:["venta","status","Oficina","username","fecha venta","forma pago","cantidad","precio","total","plus","descuento","descuento extra","total_pago","poliza","status poliza","destino","dias","fecha salida","fecha retorno","beneficiario","nombres","apellidos","identificacion","fecha nacimiento","edad","origen","email","telefono"]})}onSuccess(n){this.notificacionModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/check.svg",closeOnTouch:!0})}onError(n){this.notificacionModalService.show(n,{size:u.$u.normal,duration:3e3,positions:[u.iS.center],imageUrl:"assets/icons/warning.svg",closeOnTouch:!0})}onLoading(n){this.notificacionModalService.show("Cargando",{size:u.$u.normal,positions:[u.iS.center],imageUrl:"assets/icons/loading.svg",closeOnTouch:!1,notifier:n})}}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:51,vars:2,consts:[[1,"container"],[1,"top"],[1,"title"],[2,"width","100%",3,"onFilter"],[2,"width","100%"],["class","export",3,"click",4,"ngIf"],[1,"info"],[1,"table-data","info"],[4,"ngFor","ngForOf"],[1,"export",3,"click"],[1,"fa-solid","fa-file-csv"],[1,"status",3,"ngClass"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span"),t._uU(4,"Ventas"),t.qZA()()(),t.TgZ(5,"filter",3),t.NdJ("onFilter",function(r){return e.onFilter(r)}),t.qZA(),t._UZ(6,"hr",4),t.YNc(7,D,4,0,"button",5),t.TgZ(8,"div",6)(9,"div",7)(10,"table")(11,"thead")(12,"tr")(13,"th"),t._uU(14,"Status"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"fecha venta"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"fecha salida"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"fecha retorno"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Oficina"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Usuario"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Poliza"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Plan"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Nombres"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Apellidos"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Precio"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Plus"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Descuento"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Total"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Edad"),t.qZA(),t.TgZ(43,"th"),t._uU(44,"Origen"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"Destino"),t.qZA(),t.TgZ(47,"th"),t._uU(48,"Email"),t.qZA()()(),t.TgZ(49,"tbody"),t.YNc(50,E,42,27,"tr",8),t.qZA()()()()()),2&n&&(t.xp6(7),t.Q6J("ngIf",e.ventas.length>0),t.xp6(43),t.Q6J("ngForOf",e.ventas))},dependencies:[s.mk,s.sg,s.O5,P.z,s.H9],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:40px;width:100%;height:calc(100vh - 80px);overflow-y:auto}.top[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.title[_ngcontent-%COMP%]{display:flex;align-items:center}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:600;text-align:start;padding-left:20px}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background:none;border:3px solid var(--main-color);border-radius:10px;padding:10px 20px;color:var(--main-color);font-size:15px;transition:.3s all ease-in-out}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:.3s all ease-in-out;padding-left:5px}.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{transition:.3s all ease-in-out;padding-left:20px}hr[_ngcontent-%COMP%]{margin:20px 0;width:100%;border:1px solid gainsboro}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:20px;width:100%}.table-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px}.table-data[_ngcontent-%COMP%]{width:100%;height:500px;overflow:auto;border-radius:2px;border:1px solid #ccc}.table-data[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.info[_ngcontent-%COMP%]{padding:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid black}table[_ngcontent-%COMP%]{width:120%}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;flex-wrap:wrap;gap:10px;width:30%}.row[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end;justify-content:flex-end}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px 20px;font-size:12px;outline:none;border-radius:8px;border:1px solid gainsboro;color:var(--text-color);height:100%}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px;border-radius:8px;border:none;color:#fff;cursor:pointer;transition:.3s ease-in-out}button.export[_ngcontent-%COMP%]{background-color:var(--body-bg);color:green;border:1px solid green;font-weight:700;transition:all .3s ease-in-out;margin:10px}button.export[_ngcontent-%COMP%]:hover{background-color:green;color:#fff;transition:all .3s ease-in-out}button.export[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px}.filters[_ngcontent-%COMP%]   button.valid[_ngcontent-%COMP%]{transition:.3s ease-in-out;background-color:#f04b46}.status[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid var(--main-color);color:var(--main-color);font-weight:700;border-radius:8px}.status.success[_ngcontent-%COMP%]{border:1px solid green;color:green}thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:var(--body-bg)}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:small;text-align:center;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;font-size:small}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.vigente[_ngcontent-%COMP%]{color:green;border:1px solid green;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.congelada[_ngcontent-%COMP%]{color:gray;border:1px solid gray;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.uso[_ngcontent-%COMP%]{color:var(--main-color);border:1px solid var(--main-color);padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.anulada[_ngcontent-%COMP%]{color:#ff4500;border:1px solid orangered;padding:2px 5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--main-color);font-weight:700}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--main-color);border-radius:6px}.table-data.info[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f1f1f1}@media (max-width: 1024px){.table-container[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:20px 10px}.container[_ngcontent-%COMP%]{height:calc(100vh - (80px + 10vh))}button.export[_ngcontent-%COMP%]{width:100%;margin:10px 0}}"]}),d})()}]},{path:"siniestros",component:A}]}];let L=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),p.Bz]}),d})();var I=g(91352),z=g(36204),j=g(63183),R=g(81837);let B=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[s.ez,L,I.I,p.Bz,M.u5,M.UX,z.AuthModule,j.OficinasModule,R.m]}),d})()},20355:(Z,C,g)=>{g.d(C,{z:()=>t});var s=g(46689),p=g(56223);let t=(()=>{var x;class v{constructor(){this.filterForm=new p.cw({initialDate:new p.NI(null,[p.kI.required]),finalDate:new p.NI(null,[p.kI.required])}),this.onFilter=new s.vpe}onFormSubmitFilter(){if(!this.filterForm.valid)return;const{initialDate:l,finalDate:a}=this.filterForm.value;this.onFilter.emit([l,a])}}return(x=v).\u0275fac=function(l){return new(l||x)},x.\u0275cmp=s.Xpm({type:x,selectors:[["filter"]],outputs:{onFilter:"onFilter"},decls:12,vars:3,consts:[[1,"filters",3,"formGroup","ngSubmit"],[1,"field"],["for","initialDate"],["type","date","name","initialDate","formControlName","initialDate"],["for","finalDate"],["type","date","name","finalDate","formControlName","finalDate"],[1,"field","row"],["type","submit"]],template:function(l,a){1&l&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return a.onFormSubmitFilter()}),s.TgZ(1,"div",1)(2,"label",2),s._uU(3,"Fecha inicial"),s.qZA(),s._UZ(4,"input",3),s.qZA(),s.TgZ(5,"div",1)(6,"label",4),s._uU(7,"Fecha Final"),s.qZA(),s._UZ(8,"input",5),s.qZA(),s.TgZ(9,"div",6)(10,"button",7),s._uU(11," Filtrar "),s.qZA()()()),2&l&&(s.Q6J("formGroup",a.filterForm),s.xp6(10),s.ekj("valid",a.filterForm.valid))},dependencies:[p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u],styles:["form.filters[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;padding:10px}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;flex-wrap:wrap;gap:10px;width:30%}.field.row[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-end;justify-content:flex-end}.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px 20px;font-size:12px;outline:none;border-radius:8px;border:1px solid gainsboro;color:var(--text-color);height:100%}.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px;border-radius:8px;border:none;color:#fff;cursor:pointer;transition:.3s ease-in-out}.filters[_ngcontent-%COMP%]   button.export[_ngcontent-%COMP%]{background-color:var(--body-bg);color:green;border:1px solid green;font-weight:700;transition:all .3s ease-in-out}.filters[_ngcontent-%COMP%]   button.export[_ngcontent-%COMP%]:hover{background-color:green;color:#fff;transition:all .3s ease-in-out}button.export[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px}.filters[_ngcontent-%COMP%]   button.valid[_ngcontent-%COMP%]{transition:.3s ease-in-out;background-color:#f04b46}@media (max-width:768px){.field[_ngcontent-%COMP%]{flex-direction:column;width:100%}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"]}),v})()},30043:(Z,C)=>{var s=function(){function l(){}return l.EOL="\r\n",l.BOM="\ufeff",l.DEFAULT_FIELD_SEPARATOR=",",l.DEFAULT_DECIMAL_SEPARATOR=".",l.DEFAULT_QUOTE='"',l.DEFAULT_SHOW_TITLE=!1,l.DEFAULT_TITLE="My Report",l.DEFAULT_FILENAME="mycsv.csv",l.DEFAULT_SHOW_LABELS=!1,l.DEFAULT_USE_BOM=!0,l.DEFAULT_HEADER=[],l.DEFAULT_NO_DOWNLOAD=!1,l.DEFAULT_REMOVE_EMPTY_VALUES=!1,l}();C.hd={filename:s.DEFAULT_FILENAME,fieldSeparator:s.DEFAULT_FIELD_SEPARATOR,quoteStrings:s.DEFAULT_QUOTE,decimalseparator:s.DEFAULT_DECIMAL_SEPARATOR,showLabels:s.DEFAULT_SHOW_LABELS,showTitle:s.DEFAULT_SHOW_TITLE,title:s.DEFAULT_TITLE,useBom:s.DEFAULT_USE_BOM,headers:s.DEFAULT_HEADER,noDownload:s.DEFAULT_NO_DOWNLOAD,removeEmptyValues:s.DEFAULT_REMOVE_EMPTY_VALUES};var p=function(){function l(a,h,_){this.csv="";var m=_||{};this.data="object"!=typeof a?JSON.parse(a):a,this._options=function u(l){for(var a=[],h=1;h<arguments.length;h++)a[h-1]=arguments[h];for(var _,O,m=function v(l){if(null==l)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(l)}(l),P=1;P<arguments.length;P++){for(var w in _=Object(arguments[P]))t.call(_,w)&&(m[w]=_[w]);if(Object.getOwnPropertySymbols){O=Object.getOwnPropertySymbols(_);for(var b=0;b<O.length;b++)x.call(_,O[b])&&(m[O[b]]=_[O[b]])}}return m}({},C.hd,m),this._options.filename&&(this._options.filename=h),this.generateCsv()}return l.prototype.generateCsv=function(){if(this._options.useBom&&(this.csv+=s.BOM),this._options.showTitle&&(this.csv+=this._options.title+"\r\n\n"),this.getHeaders(),this.getBody(),""!=this.csv){if(this._options.noDownload)return this.csv;var a=new Blob([this.csv],{type:"text/csv;charset=utf8;"});if(navigator.msSaveBlob){var h=this._options.filename.replace(/ /g,"_")+".csv";navigator.msSaveBlob(a,h)}else{encodeURI(this.csv);var m=document.createElement("a");m.href=URL.createObjectURL(a),m.setAttribute("visibility","hidden"),m.download=this._options.filename.replace(/ /g,"_")+".csv",document.body.appendChild(m),m.click(),document.body.removeChild(m)}}else console.log("Invalid data")},l.prototype.getHeaders=function(){var a=this;if(this._options.headers.length>0){var _=this._options.headers.reduce(function(m,O){return m+O+a._options.fieldSeparator},"");_=_.slice(0,-1),this.csv+=_+s.EOL}},l.prototype.getBody=function(){for(var a=0;a<this.data.length;a++){var h="";for(var _ in this.data[a])h+=this.formartData(this.data[a][_])+this._options.fieldSeparator;h=h.slice(0,-1),this.csv+=h+s.EOL}},l.prototype.formartData=function(a){return this._options.removeEmptyValues&&!a?"":"locale"===this._options.decimalseparator&&l.isFloat(a)?a.toLocaleString():"."!==this._options.decimalseparator&&l.isFloat(a)?a.toString().replace(".",this._options.decimalseparator):"string"==typeof a?(a=a.replace(/"/g,'""'),(this._options.quoteStrings||a.indexOf(",")>-1||a.indexOf("\n")>-1||a.indexOf("\r")>-1)&&(a=this._options.quoteStrings+a+this._options.quoteStrings),a):"boolean"==typeof a?a?"TRUE":"FALSE":a},l.prototype.getCsv=function(){return this.csv},l.isFloat=function(a){return!(+a!==a||isFinite(a)&&!(a%1))},l}();C.J0=p;var t=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable}}]);