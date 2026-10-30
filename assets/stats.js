/* ubo.vn · đếm lượt xem và số người đang xem, ẩn danh, qua Abacus (abacus.jasoncameron.dev). Lỗi mạng thì ẩn số, không ảnh hưởng trang. */
(function(){
var B='https://abacus.jasoncameron.dev',NS='ubo.vn';
function j(u){return fetch(u,{mode:'cors'}).then(function(r){return r.ok?r.json():{value:0}}).then(function(d){return +d.value||0}).catch(function(){return null});}
function fmt(n){return n==null?'–':n.toLocaleString('vi-VN');}
function init(){
  var v=document.getElementById('vw'),o=document.getElementById('ol');if(!v&&!o)return;
  var seen=0;try{seen=sessionStorage.getItem('ubo_seen')}catch(e){}
  var vp=j(B+(seen?'/get/':'/hit/')+NS+'/views');try{sessionStorage.setItem('ubo_seen','1')}catch(e){}
  vp.then(function(n){if(v)v.textContent=fmt(n);});
  function beat(){var b=Math.floor(Date.now()/60000);
    j(B+'/hit/'+NS+'/on-'+b).then(function(cur){
      return j(B+'/get/'+NS+'/on-'+(b-1)).then(function(prev){var n=Math.max(1,cur==null?0:cur,prev||0);if(o)o.textContent=fmt(cur==null&&prev==null?null:n);});});}
  beat();setInterval(function(){if(!document.hidden)beat();},60000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
