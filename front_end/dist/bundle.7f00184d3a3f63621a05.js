(()=>{"use strict";var n={639:(n,e,t)=>{t.d(e,{A:()=>m});var a=t(601),r=t.n(a),i=t(314),o=t.n(i),s=t(417),l=t.n(s),d=new URL(t(301),t.b),p=o()(r()),c=l()(d);p.push([n.id,`kedua\n/* General Reset */\nbody, h1, h2, h3, p, ul, li, a {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n  margin: 0;\n  background-color: #ffffff;\n  color: #333;\n}\n\n/* Header */\nheader {\nbackground: #3664b6;\ncolor: #33363b;\npadding: 1rem 2rem;\ndisplay: flex;\njustify-content: space-between; /* Menjaga logo di kiri dan nav di kanan */\nalign-items: center;\nposition: relative;\n}\n\n.header__inner {\ndisplay: flex;\njustify-content: space-between; /* Menjaga logo dan nav terpisah */\nalign-items: center;\nwidth: 100%; /* Memastikan header memiliki lebar penuh */\n}\n\n.logo {\nfont-size: 1.5rem;\nfont-weight: bold;\ncolor: white;\n}\n\n\n.nav {\ndisplay: none;\nposition: absolute;\nright: 0;\ntop: 50px;\nheight: 100%;\nbackground: #134B70;\nbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\npadding: 1rem;\nborder-radius: 5px;\nz-index: 1000;\n}\n\n.nav.active {\n  display: block;\n  transform: translateX(0);\n}\n\n.nav__list {\ndisplay: flex;\nflex-direction: column;\n}\n\n.nav__item {\nmargin-bottom: 1rem;\n}\n\n.nav__item:last-child {\nmargin-bottom: 0;\n}\n\n.nav__item a {\ncolor: #fcfafa; /* Mengubah warna teks menjadi hitam */\n}\n\n.close-btn {\n  position: absolute;\n  bottom: 50px;\n  top: 80px;\n  left: 0px;\n  right: 0px;\n  background: transparent;\n  font-size: 20px;\n  cursor: pointer;\n  border: none;\n}\n\n\n.navbar__toggler {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: white;\n}\n\n.navbar__toggler svg {\n  fill: white;\n}\n\n@media (min-width: 768px) {\n.nav {\n  display: flex;\n  position: static;\n  flex-direction: row;\n  background: none;\n  box-shadow: none;\n  padding: 0;\n  justify-content: flex-end; /* Menempatkan item navigasi di kanan */\n}\n\n.nav__list {\n  flex-direction: row;\n  margin: 0;\n}\n\n.nav__item {\n  margin: 0 1rem; /* Memberikan jarak antar item */\n}\n\n.navbar__toggler {\n  display: none;\n}\n\n.close-btn {\n  display: none;\n}\n}\n\n/* Main */\nmain {\n  padding: 1rem;\n}\n\n/* Footer */\nfooter {\n  background: #134B70;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n\n@media (min-width: 768px) {\n  .nav {\n    display: flex;\n    position: static;\n    flex-direction: row;\n    background: none;\n    box-shadow: none;\n    padding: 0;\n    width: 100%; /* Menambahkan lebar 100% agar memenuhi lebar kontainer */\n    justify-content: flex-end; /* Menambahkan agar item navigasi berada di sebelah kanan */\n  }\n\n  .nav__list {\n    flex-direction: row;\n    margin: 0;\n    width: auto; /* Menambahkan agar list tidak memenuhi seluruh lebar kontainer */\n  }\n\n  .nav__item {\n    margin: 0 1rem; /* Memberikan jarak antar item */\n  }\n\n  .close-btn {\n    display: none;\n  }\n}\n\n\n/* Main */\nmain {\n  padding: 1rem;\n}\n\n/* Hero Section */\n.hero {\n  text-align: center;\n  padding: 1rem;\n  background: #508C9B;\n  color: #ffffff;\n  \n}\n\n.hero h1 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.hero p {\n  font-size: 1rem;\n}\n\n/* Missing List */\n.missing-list {\n  margin-top: 2rem;\n}\n\n.missing-list h2 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #3664b6;\n}\n\n\n.list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.person {\n  background: #569ef4;\n  padding: 1rem;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.person img {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n\n.person p {\n  margin: 0rem 0;\n  font-weight: bold;\n  color: white;\n}\n\n.person a {\n  color: white;\n  text-decoration: none; /* Menghilangkan garis bawah */\n}\n\n.detail-link {\n  color: #4b382a;\n}\n\n/* Detail Section */\n.detail {\n  display: flex;\n  gap: 2rem; /* Memberikan jarak lebih antarelemen */\n  margin-top: 2rem;\n  padding: 1.5rem; /* Memberikan ruang internal */\n  border: 1px solid #e0e0e0; /* Memberikan garis pembatas ringan */\n  border-radius: 10px; /* Membuat sudut melengkung */\n  background-color: #569ef4; /* Memberikan warna latar belakang lembut */\n  box-shadow: 0 4px 0px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan */\n}\n\n.detail .image img {\n  max-width: 250px; /* Atur ukuran sesuai kebutuhan */\n  height: auto; /* Pastikan proporsi asli terjaga */\n  border-radius: 10px;\n  object-fit: cover; /* Pastikan gambar proporsional tanpa distorsi */\n  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1); /* Tambahkan sedikit bayangan */\n}\n\n.detail .info {\n  flex: 1; /* Memastikan info mengambil ruang sisa */\n}\n\n.detail .info h2 {\n  margin-bottom: 1rem;\n  font-size: 1.8rem; /* Meningkatkan ukuran font */\n  color: #ffffff; /* Warna yang sesuai dengan tombol */\n}\n\n.detail .info p {\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  color: #ffffff; /* Warna teks abu-abu gelap untuk keterbacaan */\n  line-height: 1.5; /* Menambahkan jarak antar baris */\n}\n\n.status-btn {\n  background: #3664b6;\n  color: white;\n  padding: 1rem 1.5rem; /* Memberikan ruang internal yang lebih proporsional */\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  transition: all 0.3s ease; /* Menambahkan transisi untuk efek hover */\n}\n\n.status-btn:hover {\n  background: #3664b6; /* Warna lebih terang untuk hover */\n  transform: scale(1.05); /* Efek zoom ringan saat dihover */\n}\n\n/* Media Query for Mobile (Max Width: 768px) */\n@media (max-width: 768px) {\n  .detail {\n    flex-direction: column; /* Ubah tata letak menjadi kolom */\n    gap: 1rem; /* Kurangi jarak antar elemen */\n    padding: 1rem; /* Sesuaikan ruang internal */\n  }\n\n  .detail .image img {\n    max-width: 100%; /* Biarkan gambar mengambil lebar penuh */\n    height: auto; /* Pastikan proporsinya tetap */\n  }\n\n  .detail .info h2 {\n    font-size: 1.5rem; /* Kurangi ukuran font agar sesuai di layar kecil */\n  }\n\n  .detail .info p {\n    font-size: 0.9rem; /* Kurangi ukuran font untuk teks deskripsi */\n  }\n\n  .status-btn {\n    padding: 0.8rem 1.2rem; /* Sesuaikan ukuran tombol */\n    font-size: 0.9rem; /* Kurangi ukuran font tombol */\n  }\n}\n\n/* Style untuk Form Pelaporan Orang Hilang */\n.form-section {\nmargin: 20px auto;\nmax-width: 600px;\npadding: 40px;\nbackground-color: #569ef4;\nborder-radius: 16px;\nbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\nborder: 1px solid #eee;\n}\n\nh2 {\nfont-size: 2em;\nmargin-bottom: 25px;\ncolor: #ffffff;\ntext-align: center;\nfont-weight: 700;\n}\n\n.form-group {\nmargin-bottom: 20px;\n}\n\nlabel {\ndisplay: block;\nfont-size: 1.1em;\ncolor: #ffffff;\nmargin-bottom: 8px;\nfont-weight: 600;\n}\n\ninput[type="text"],\ninput[type="url"],\ninput[type="date"],\ntextarea {\nwidth: 100%;\npadding: 12px 15px;\nfont-size: 1em;\nborder: 1px solid #ddd;\nborder-radius: 12px;\nbox-sizing: border-box;\ntransition: box-shadow 0.3s ease, border-color 0.3s ease;\nbackground-color: #fdfdfd;\n}\n\ninput:focus,\ntextarea:focus {\nborder-color: #3664b6;\nbox-shadow: 0 3px 10px rgba(75, 56, 42, 0.2);\noutline: none;\n}\n\ntextarea {\nheight: 140px;\nresize: vertical;\n}\n\nbutton {\nbackground-color: #3664b6;\ncolor: #ffffff;\nborder: none;\npadding: 12px;\nfont-size: 1.1em;\nfont-weight: 600;\nborder-radius: 12px;\ncursor: pointer;\nwidth: 100%;\nmargin-top: 15px;\ntransition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\nbutton:hover {\nbackground-color: #3664b6;\nbox-shadow: 0 4px 12px rgba(75, 56, 42, 0.4);\ntransform: translateY(-2px);\n}\n\nbutton:active {\ntransform: scale(0.97);\nbox-shadow: 0 2px 6px rgba(75, 56, 42, 0.3);\n}\n\n\n.close-btn {\n  position: absolute;\n  bottom: 50px;\n  top: 80px;\n  left: 0px;\n  right: 0px;\n  background: transparent;\n  font-size: 20px;\n  cursor: pointer;\n  border: none;\n}\n\n/* Animasi lembut saat input muncul */\n.form-section {\nanimation: fadeIn 0.5s ease-in-out;\n}\n\n@keyframes fadeIn {\nfrom {\n  opacity: 0;\n  transform: translateY(10px);\n}\nto {\n  opacity: 1;\n  transform: translateY(0);\n}\n}\n\n/* Responsif untuk layar kecil */\n@media (max-width: 600px) {\n.form-section {\n  padding: 30px;\n}\n\nh2 {\n  font-size: 1.6em;\n}\n\nbutton {\n  font-size: 1em;\n  padding: 10px;\n}\n}\n\n\n/* Responsif untuk layar kecil */\n@media (max-width: 768px) {\n.form-section {\n  padding: 15px;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\ninput[type="text"],\ninput[type="url"],\ninput[type="date"],\ntextarea {\n  font-size: 0.9em;\n}\n\nbutton {\n  padding: 10px 15px;\n  font-size: 0.9em;\n}\n}\n\n/* Footer */\nfooter {\n  background: #3664b6;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n\n.hero {\n  display: flex;\n  position: relative;\n  width: 93%;\n  height: 40vh;\n  background-image: url(${c});\n  background-size: cover;\n  background-position: center;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 100px;\n\n  \n}\n\n.hero-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white; /* Warna teks */\n  text-align: left;\n  padding: 20px; /* Memberikan padding agar teks tidak menempel ke tepi */\n}\n\n/* Judul */\n.hero h1 {\n  font-size: 5rem;\n  margin: 0;\n  text-align: left; /* Rata kiri */\n  display: block;\n  line-height: 1.1;\n}\n\n/* Paragraf */\n.hero p {\n  font-size: 1.5rem;\n  margin: 0;\n  text-align: left; /* Rata kiri */\n  line-height: 2;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 300px;\n  text-align: center;\n}\n\n.close-btn {\n  margin-top: 10px;\n  background: red;\n  color: white;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n/* Responsif: Untuk layar yang lebih kecil */\n@media (max-width: 1200px) {\n  .hero h1 {\n    font-size: 4rem; /* Menyesuaikan ukuran font untuk layar lebih kecil */\n  }\n  .hero p {\n    font-size: 1.3rem; /* Menyesuaikan ukuran font untuk paragraf */\n  }\n  .hero {\n    padding-left: 50px; /* Mengurangi padding kiri */\n  }\n}\n\n@media (max-width: 768px) {\n  .hero h1 {\n    font-size: 3rem; /* Ukuran font lebih kecil untuk tablet */\n  }\n  .hero p {\n    font-size: 1.2rem; /* Ukuran font lebih kecil untuk tablet */\n  }\n  .hero {\n    padding-left: 20px; /* Lebih kecil padding pada layar lebih kecil */\n  }\n}\n\n@media (max-width: 480px) {\n  .hero h1 {\n    font-size: 2.5rem; /* Ukuran font lebih kecil untuk smartphone */\n  }\n  .hero p {\n    font-size: 1rem; /* Ukuran font lebih kecil untuk smartphone */\n  }\n  .hero {\n    height: 70vh; /* Mengurangi tinggi pada layar kecil */\n    padding-left: 10px; /* Padding lebih kecil */\n  }\n  .hero-content {\n    padding: 10px; /* Padding lebih kecil untuk konten */\n  }\n}\n.logo__image {\n  width: 150px;  /* Adjust this value to your preferred width */\n  height: auto;  /* Keeps the aspect ratio of the logo intact */\n}\n\n\n\n`,""]);const m=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],s=0;s<n.length;s++){var l=n[s],d=a.base?l[0]+a.base:l[0],p=i[d]||0,c="".concat(d," ").concat(p);i[d]=p+1;var m=t(c),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var g=r(u,a);a.byIndex=s,e.splice(s,0,{identifier:c,updater:g,references:1})}o.push(c)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var l=a(n,r),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},301:(n,e,t)=>{n.exports=t.p+"84a8a323098a89fc3aa3.png"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a=t(72),r=t.n(a),i=t(825),o=t.n(i),s=t(659),l=t.n(s),d=t(56),p=t.n(d),c=t(540),m=t.n(c),u=t(113),g=t.n(u),f=t(639),h={};function b(){const n=document.getElementById("main-content");n.innerHTML='\n    <section class="missing-list">\n      <h2>Daftar Orang Hilang</h2>\n      <div id="missing-list-container" class="list">\n        \x3c!-- Data akan dimuat di sini --\x3e\n      </div>\n    </section>\n  ';const e=document.getElementById("missing-list-container");fetch("http://localhost:3000/api/orang_hilang").then((n=>n.json())).then((n=>{n.forEach((n=>{const t=document.createElement("div");t.classList.add("person"),t.innerHTML=`\n          <img src="http://localhost:3000/uploads/${n.foto}" alt="${n.nama}">\n          <p>${n.nama}</p>\n          <a href="#" data-id="${n.id}" class="detail-link">View More >></a>\n        `,e.appendChild(t)})),document.querySelectorAll(".detail-link").forEach((n=>{n.addEventListener("click",(n=>{n.preventDefault(),function(n){const e=document.getElementById("main-content");e.innerHTML="<p>Loading data...</p>",fetch("http://localhost:3000/api/orang_hilang").then((n=>n.json())).then((t=>{const a=t.find((e=>e.id==n));e.innerHTML=a?`\n          <section class="detail">\n            <div class="image">\n              <img src="http://localhost:3000/uploads/${a.foto}" alt="${a.nama}">\n            </div>\n            <div class="info">\n              <h2>${a.nama}</h2>\n              <p><strong>Tanggal Hilang:</strong> ${new Date(a.tanggal_hilang).toLocaleDateString()}</p>\n              <p><strong>Ciri-ciri:</strong> ${a.ciri}</p>\n              <p><strong>Nomor Pelapor:</strong> ${a.nomer_pelapor}</p>\n              <p><strong>Tanggal Ditemukan:</strong> ${"0000-00-00"===a.tanggal_ditemukan?"Belum ditemukan":new Date(a.tanggal_ditemukan).toLocaleDateString()}</p>\n              <button class="status-btn">${"sudah"===a.status?"Sudah Ditemukan":"Belum Ditemukan"}</button>\n            </div>\n          </section>\n        `:"<p>Detail tidak ditemukan.</p>"})).catch((n=>{console.error("Error fetching data:",n),e.innerHTML="<p>Gagal memuat detail.</p>"}))}(n.target.getAttribute("data-id"))}))}))})).catch((e=>{console.error("Error fetching data:",e),n.innerHTML="<p>Gagal memuat data.</p>"}))}h.styleTagTransform=g(),h.setAttributes=p(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m(),r()(f.A,h),f.A&&f.A.locals&&f.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("home-link"),e=document.getElementById("form-link"),t=(document.getElementById("main-content"),document.getElementById("hamburger")),a=document.getElementById("drawer"),r=document.getElementById("closeDrawer");b();const i=document.querySelector(".hero");i&&(i.style.display="flex"),n.addEventListener("click",(n=>{n.preventDefault(),b(),i&&(i.style.display="flex"),a.classList.remove("active")})),e.addEventListener("click",(n=>{n.preventDefault(),document.getElementById("main-content").innerHTML='\n    <section class="form-section">\n      <h2>Form Pelaporan Orang Hilang</h2>\n      <form id="missing-form">\n        <div class="form-group">\n          <label for="nama">Nama</label>\n          <input type="text" id="nama" name="nama" required>\n        </div>\n        <div class="form-group">\n          <label for="foto">Foto</label>\n          <input type="file" id="foto" name="foto" accept="image/*" required>\n        </div>\n        <div class="form-group">\n          <label for="tanggal_hilang">Tanggal Hilang</label>\n          <input type="date" id="tanggal_hilang" name="tanggal_hilang" required>\n        </div>\n        <div class="form-group">\n          <label for="ciri">Ciri-ciri</label>\n          <textarea id="ciri" name="ciri" required></textarea>\n        </div>\n        <div class="form-group">\n          <label for="nomer_pelapor">Nomor Pelapor</label>\n          <input type="text" id="nomer_pelapor" name="nomer_pelapor" required>\n        </div>\n        <div class="form-group">\n          <button type="submit">Laporkan</button>\n        </div>\n      </form>\n    </section>\n  ',document.getElementById("missing-form").addEventListener("submit",(function(n){n.preventDefault();const e=document.getElementById("nama").value,t=document.getElementById("foto").files[0],a=document.getElementById("tanggal_hilang").value,r=document.getElementById("ciri").value,i=document.getElementById("nomer_pelapor").value;if(!(e&&t&&a&&r&&i))return void alert("Semua field wajib diisi.");const o=new FormData;o.append("nama",e),o.append("foto",t),o.append("tanggal_hilang",a),o.append("tanggal_ditemukan","0000-00-00"),o.append("ciri",r),o.append("nomer_pelapor",i),o.append("status","Belum"),fetch("http://localhost:3000/api/orang_hilang/add",{method:"POST",body:o}).then((n=>{if(!n.ok)throw new Error("Gagal mengirim data");return n.json()})).then((n=>{console.log("Form Submitted:",n),alert("Pelaporan orang hilang berhasil dikirim.")})).catch((n=>{console.error("Error submitting form:",n),alert("Terjadi kesalahan saat mengirimkan pelaporan.")})),document.getElementById("missing-form").reset()})),i&&(i.style.display="none"),a.classList.remove("active")})),t.addEventListener("click",(()=>{a.classList.add("active")})),r.addEventListener("click",(()=>{a.classList.remove("active")}))}))})();