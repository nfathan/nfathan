(()=>{var n={929:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);e&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},590:()=>{function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function t(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(r,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r):t}function o(n){var r="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,e)}function e(){return i(n,arguments,l(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function i(n,r,t){return(i=a()?Reflect.construct:function(n,r,t){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(n,e));return t&&c(o,t.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,r){return(c=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&c(n,r)}(d,n);var o,i,s,p,u=(o=d,i=a(),function(){var n,r=l(o);if(i){var t=l(this).constructor;n=Reflect.construct(r,arguments,t)}else n=r.apply(this,arguments);return e(this,n)});function d(){return r(this,d),u.apply(this,arguments)}return s=d,(p=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <style>\n      bottom-nav {\n        display: none;\n      }\n      \n      /* tablet ==================== */\n      @media (max-width: 1000px) {\n        bottom-nav {\n          display: block;\n          position: fixed;\n          bottom: 0;\n          z-index: 1;\n          width: 100%;\n          border-top: 1px solid rgba(255, 255, 255, 0.1);\n          background-color: rgba(17, 25, 40, 0.99);\n        }\n\n        .bottom-nav-list {\n          display: flex;\n          color : #9ca3af;\n        }\n\n        .bottom-nav-item {\n          width: 100%;\n          text-align: center;\n        }\n      }\n      \n      /* smartphone ==================== */\n      @media (max-width: 670px) {\n        \n      }\n\n      /* sidebar ================================ */\n        .sidebar-icon {\n          display: none;\n          font-size: 26px;\n          background-color: transparent;\n          color: #6c7686;\n          margin-top: 20px;\n          padding: 0 15px;\n          border: 1px solid rgba(255, 255, 255, 0.125);\n          border-radius: 10px\n        }\n        \n        .sidebar {\n          display: none;\n          z-index: 1;\n          width: 300px;\n          height: calc(100% - 50px);\n          top: 0;\n          left: 0;\n          position: fixed;\n          font-size: 14px;\n          font-weight: 600;\n          border-right: 1px solid rgba(255, 255, 255, 0.125);\n          box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);\n          transform: translate(-310px, 0);\n          transition: transform 0.3s ease-in-out;\n          backdrop-filter: blur(16px) saturate(180%);\n          -webkit-backdrop-filter: blur(16px) saturate(180%);\n          background-color: rgba(255, 255, 255, 0.1);\n        }\n        \n        .sidebar.open {\n          transform: translate(0,0)\n        }\n        \n        .sidebar-menu {\n          padding: 20px;\n        }\n        \n        .sidebar-list {\n          text-align: left;\n          margin-top: 40px;\n          padding: 10px 0;\n          border-radius: 10px;\n          border-top: 1px solid rgba(255, 255, 255, 0.125);\n        }\n        \n        .sidebar-list li {\n          padding: 10px 0;\n          list-style-type: none;\n        }\n        \n        .sidebar-item {\n          padding: 10px;\n        }\n        \n        .sidebar-item:hover {\n          border-bottom: 2px solid #6c7686;\n        }\n        \n        .sidebar-item:focus {\n          border-bottom: 2px solid #a1a6af;\n        }\n        \n        /* tablet ==================== */\n        @media (max-width: 1000px) {        \n          .sidebar-icon {\n            display: block;\n          }\n      \n          .sidebar {\n            display: block;\n          }\n        }\n        \n        /* smartphone ==================== */\n        @media (max-width: 670px) {\n          .sidebar-icon {\n            display: block;\n          } \n        }\n      </style>\n\n      <div class="bottom-nav-list">\n        <div class="bottom-nav-item">\n          <button class="menu icon" type="button"> &#9776 </button>\n        </div>\n        <div class="bottom-nav-item">\n          <a class="home icon" href="index.html"> &#8962 </a>\n        </div>\n        <div class="bottom-nav-item">\n          <button class="contact icon" type="button" onclick="openTab(\'contact\', this, \'#f6faff\')"> &#128172 </button>\n        </div>\n      </div>\n\n      <div class="sidebar">\n        <div class="sidebar-menu">\n          <button class="closebtn" type="button">&#120;</button>\n          <ul class="sidebar-list">\n            <li><a class="sidebar-item" onclick="openTab(\'experience\', this, \'#58d2b2\')" href="#experience">Experience</a></li>\n            <li><a class="sidebar-item" onclick="openTab(\'education\', this, \'#58d2b2\')" href="#education">Education</a></li>\n            <li><a class="sidebar-item" onclick="openTab(\'PiaCianni\', this, \'#58d2b2\')" href="#PiaCianni">Pia Cianni</a></li>\n          </ul>\n        </div>\n        </div>\n      '}}])&&t(s.prototype,p),d}(o(HTMLElement));customElements.define("bottom-nav",s)},373:()=>{function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function t(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(r,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r):t}function o(n){var r="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,e)}function e(){return i(n,arguments,l(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function i(n,r,t){return(i=a()?Reflect.construct:function(n,r,t){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(n,e));return t&&c(o,t.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,r){return(c=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&c(n,r)}(d,n);var o,i,s,p,u=(o=d,i=a(),function(){var n,r=l(o);if(i){var t=l(this).constructor;n=Reflect.construct(r,arguments,t)}else n=r.apply(this,arguments);return e(this,n)});function d(){return r(this,d),u.apply(this,arguments)}return s=d,(p=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>\n        /* navbar ================================ */\n        nav-bar {\n            display: flex;\n            z-index: 1;\n            height: 80px;\n            width: 100%;\n            padding: 0 120px;\n            margin-top: 20px;\n        }\n        \n        .navbar-brand {\n            flex-basis: 30%;\n            line-height: 100px;\n            margin: 0;\n        }\n        \n        .navbar-brand img {\n          width: 190px;\n        }\n\n        .navbar-menu {\n            flex-basis: 70%;\n        }\n        \n        .navbar-list {\n            display: flex;\n            line-height: 50px;\n        }\n\n        .navbar-list li {\n          list-style-type: none;\n        }\n\n        .navbar-item {\n            font-size: 14px; \n            font-weight: 600;\n            padding: 15px;\n            cursor: pointer;\n            backdrop-filter: blur(16px) saturate(180%);\n            -webkit-backdrop-filter: blur(16px) saturate(180%);\n            background-color: rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            border: 1px solid rgba(255, 255, 255, 0.125);\n            margin: 10px;\n        }\n        \n        .navbar-item:hover {\n            border-bottom: 2px solid #ffff;\n        }\n        \n        .navbar-item:focus { \n            color: #ffff;\n            border-bottom: 2px solid #ffff;\n        }\n        \n        /* tablet ==================== */\n        @media (max-width: 1000px) {\n            nav-bar {\n                padding: 0 30px;\n            }\n        \n            .navbar-brand {\n                flex: auto;\n                font-size: 26px;  \n            }\n        \n            .navbar-menu {\n                display: none;\n            }\n        }\n        \n        /* smartphone ==================== */\n        @media (max-width: 670px) {\n            nav-bar {\n                padding: 0 15px;\n            }\n        }\n        </style>\n        \n        <div class="navbar-brand center"><img src="./../public/images/nfathan-logo.png" alt="nfathan-logo"> </div>\n        <div class="navbar-menu">\n            <ul class="navbar-list">\n                \n                <li><a class="navbar-item" onclick="openTab(\'experience\', this, \'#f6faff\')" href="#">Experience</a></li>\n                <li><a class="navbar-item" onclick="openTab(\'education\', this, \'#f6faff\')" href="#">Education</a></li>\n                <li><a class="navbar-item" onclick="openTab(\'contact\', this, \'#f6faff\')" href="#">Contact</a></li>\n                <li><a class="navbar-item" onclick="openTab(\'PiaCianni\', this, \'#f6faff\')" href="#">PiaCianni</a></li>\n            </ul>\n        </div>\n        '}}])&&t(s.prototype,p),d}(o(HTMLElement));customElements.define("nav-bar",s)},102:()=>{function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function t(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(r,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r):t}function o(n){var r="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,e)}function e(){return i(n,arguments,l(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function i(n,r,t){return(i=a()?Reflect.construct:function(n,r,t){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(n,e));return t&&c(o,t.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,r){return(c=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&c(n,r)}(d,n);var o,i,s,p,u=(o=d,i=a(),function(){var n,r=l(o);if(i){var t=l(this).constructor;n=Reflect.construct(r,arguments,t)}else n=r.apply(this,arguments);return e(this,n)});function d(){return r(this,d),u.apply(this,arguments)}return s=d,(p=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n            <style>\n                pro-file {\n                    display: block;\n                    padding: 30px;\n                    margin: 20px 5px 20px 5px;\n                    backdrop-filter: blur(16px) saturate(180%);\n                    -webkit-backdrop-filter: blur(16px) saturate(180%);\n                    color : #9ca3af;\n                    background-color: rgba(17, 25, 40, 0.75);\n                    border-radius: 12px;\n                    border: 1px solid rgba(255, 255, 255, 0.125);\n                }\n                \n                .ava img {\n                    vertical-align: middle;\n                    width: 150px;\n                    height: 150px;\n                    border: 1px solid rgba(255, 255, 255, 0.125);\n                    border-radius: 150px;\n                    padding: 15px;\n                    margin-bottom: 20px;\n                }\n\n                .profile-desc {\n                    padding-top: 15px;\n                }\n\n                .profile-desc h1 {\n                    font-size: 24px;\n                    margin: 0;\n                    color: #ffff;\n                }\n\n                .profile-desc p {\n                  color: #ffff;\n                }\n\n                .profile-skill {\n                    padding-top: 15px;\n                }\n\n                .skill-list {\n                    flex: 1 100px;\n                    display: flex;\n                    flex-flow: row wrap;\n                    align-items: center;\n                    justify-content: space-around;\n                    padding-top: 15px;\n                }\n\n                .skill-item {\n                    flex: 1 auto;\n                    padding: 10px;\n                    margin: 3px;\n                    border-radius: 12px;\n                    border: 1px solid rgba(255, 255, 255, 0.125);\n                }\n                \n                .skill-item img {\n                    max-width: 70px;\n                }\n            </style>\n\n            <section class="ava">\n                <img src="./public/images/nfathan.jpg">\n            </section>\n            <section class="profile-desc bt">\n                <h1>Hey..<br> I\'m Fathan Nasrullah</h1>\n                <p>Front-End Web Developer</p>\n            </section>\n            <section class="profile-skill bt">\n                <h3>Skill</h3>\n                <div class="skill-list">\n                    <div class="skill-item">\n                        <img src="./public/images/html.png" alt="html">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/css.png" alt="css">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/js.png" alt="javascript">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/webpack.png" alt="webpack">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/bootstrap.png" alt="bootstrap">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/sass.png" alt="sass">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/react.png" alt="react-js">\n                    </div>\n                    <div class="skill-item">\n                        <img src="./public/images/node.png" alt="node-js">\n                    </div>\n                </div>\n                \n            </section>\n            \n            \n        '}}])&&t(s.prototype,p),d}(o(HTMLElement));customElements.define("pro-file",s)},574:()=>{function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var r="daftarCustomerPia_history";function t(){return"undefined"!=typeof Storage}function e(){var e=t()&&JSON.parse(localStorage.getItem(r))||[],o=document.querySelector("#historyList");o.innerHTML="";var i,a=function(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){l=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw a}}}}(e);try{for(a.s();!(i=a.n()).done;){var c=i.value,l=document.createElement("tr");l.innerHTML="<td> ".concat(c.customer," </td>"),l.innerHTML+="<td> ".concat(c.rasa," </td>"),l.innerHTML+="<td> ".concat(c.qty," </td>"),l.innerHTML+='<td id="tharga"> '.concat(c.tHarga," </td>"),l.innerHTML+="<td> ".concat(c.hariTgl," </td>"),l.innerHTML+='<td id="pdptnHarian">  </td>',o.appendChild(l)}}catch(n){a.e(n)}finally{a.f()}}window.putHistory=function(n){if(t()){var e=null;(e=null===localStorage.getItem(r)?[]:JSON.parse(localStorage.getItem(r))).unshift(n),localStorage.setItem(r,JSON.stringify(e))}},window.renderHistory=e,e()},948:(n,r,t)=>{"use strict";t.d(r,{Z:()=>i});var e=t(929),o=t.n(e)()((function(n){return n[1]}));o.push([n.id,"/* tablet ==================== */\r\n@media (max-width: 1000px) {\r\n    main {\r\n        padding:0 30px;\r\n    }\r\n    .content-wrapper {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .sticky {\r\n        position: relative;\r\n    }    \r\n}\r\n\r\n/* smartphone ==================== */\r\n@media (max-width: 670px) {\r\n    main {\r\n        padding:0 15px;\r\n    }\r\n\r\n    .main-content h1 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .tab-content-wrapper article {\r\n        flex: 100%;\r\n        max-width: 100%;\r\n        /* padding: 15px;\r\n        margin: 10px;\r\n        border-radius: 10px;\r\n        background-color: lawngreen; */\r\n    }\r\n\r\n    .link {\r\n        text-align: center;\r\n    } \r\n\r\n    form .form-control {\r\n        width: 100%;\r\n    }\r\n\r\n    form .form-control-2 {\r\n        width: 100%;\r\n    }\r\n\r\n    .varian {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .varian div {\r\n        padding-right: 0;\r\n    }\r\n}",""]);const i=o},890:(n,r,t)=>{"use strict";t.d(r,{Z:()=>i});var e=t(929),o=t.n(e)()((function(n){return n[1]}));o.push([n.id,"/* default ================================ */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    /* font-size: 100%; */\r\n    font-family: 'Hiragino Sans', sans-serif;\r\n    line-height: 1.7;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    /* background-color: #f6faff; */\r\n    color: #9ca3af;\r\n    /* font-size: 14px; */\r\n    background-color: #111927;\r\n    background-image: \r\n        radial-gradient(at 47% 45%, hsl(164, 58%, 58%) 0, transparent 59%), \r\n        radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);\r\n}\r\n\r\n/* ul, li {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n} */\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #ffff;\r\n}\r\n\r\na:hover {\r\n    transition: all 0.3s ease;\r\n    color: #ffff;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, p {\r\n    margin: 0;\r\n}\r\n\r\n\r\n/* container ================================ */\r\n.container{\r\n    padding: 0 120px;\r\n}\r\n@media (max-width: 768px){\r\n    .container{\r\n    padding: 0 30px;\r\n    }\r\n}\r\n@media (max-width: 425px){\r\n    .container{\r\n    padding-left: 0 15px;\r\n    }\r\n}\r\n\r\n/* main ================================ */\r\nmain {\r\n    padding: 0 120px;\r\n    border-radius: 15px;\r\n}\r\n\r\n/* content-wrapper ================================ */\r\n.content-wrapper {\r\n    display: flex;\r\n    /* padding-top: 60px; */\r\n}\r\n\r\n/* main-content ================================ */\r\n#main-content {\r\n    flex-basis: 70%;\r\n}\r\n\r\n.tab-content {\r\n    display: none;\r\n}\r\n\r\n.tab-content h1 {\r\n    color: #ffff;\r\n}\r\n\r\n.tab-content-wrapper {\r\n    padding-top: 10px;\r\n    flex: 1 100px;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.tab-content-wrapper article {\r\n    flex: 1 auto;\r\n    margin: 15px 0;\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.125);\r\n}\r\n\r\n.tab-content-wrapper article img {\r\n    max-width: 100%;\r\n}\r\n\r\n.tab-content-item {\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.125);\r\n  margin: 10px 0;\r\n  padding: 15px;\r\n}\r\n\r\n.project-name {\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    color: #ffff;\r\n    background-color: rgba(29, 150, 118, 0.75);\r\n}\r\n\r\n.skill-content-wrapper {\r\n    display: flex;\r\n    padding: 10px;\r\n}\r\n\r\n#home {\r\n    display: block;\r\n}\r\n\r\n/* #skill {background-color: #d6cbcb;} */\r\n\r\n/* #experience {background-color: transparent;}\r\n\r\n#education {background-color: transparent;} */\r\n\r\n\r\n.history {\r\n    width: 100%;\r\n    margin: 20px auto;\r\n    overflow: scroll;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\nth, td {\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n    \r\nth {\r\n    background-color: #58d2b2;\r\n    color: white;\r\n}\r\n    \r\ntr:nth-child(even) {\r\n    background-color: #d2d2d2;\r\n}\r\n    \r\n@media screen and (max-width: 513px) {\r\n    /* .button {\r\n        padding: 10px;\r\n    } */\r\n    .history {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\nform .form-control {\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0 10px 5px 0px;\r\n}\r\n\r\nform .form-control-2 {\r\n    display: block;\r\n    width: 25%;\r\n    margin: 0 10px 5px 0px;\r\n}\r\n\r\n.varian {\r\n    display: flex;\r\n}\r\n\r\n.varian div {\r\n    flex: auto;\r\n    padding-right: 25px;\r\n}\r\n\r\n.Tharga {\r\n    text-align: center;\r\n    padding: 20px;\r\n    border: 1px solid #ececec;\r\n    margin: 20px 0px;\r\n    background-color: #f6faff;\r\n}\r\n\r\n/* side-content ================================ */\r\naside {\r\n    flex-basis: 30%;\r\n    text-align: center;\r\n}\r\n\r\n/* footer ================================ */\r\nfooter {\r\n  font-weight: 600;\r\n    text-align: center;\r\n    padding: 0 0 20px 0;\r\n}\r\n@media (max-width: 670px) {\r\n  footer {\r\n    margin-bottom: 55px;\r\n  }\r\n}\r\n\r\n/* card ================================ */\r\n.card {\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\r\n    /* border-radius: 8px; */\r\n    padding: 30px;\r\n    margin: 20px 5px 20px 5px;\r\n    /* background-color: #ffffff; */\r\n\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    color : #9ca3af;\r\n    background-color: rgba(17, 25, 40, 0.75);\r\n    border-radius: 12px;\r\n    border: 1px solid rgba(255, 255, 255, 0.125);\r\n}\r\n\r\n.card-image {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.year {\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n}\r\n\r\n.icon {\r\n  font-size: 30px;\r\n  color : #9ca3af;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.icon:focus {\r\n  color: #ffff;\r\n  font-weight: 900;\r\n}\r\n\r\n.menu {\r\n  margin-top: 3px;\r\n}\r\n\r\n.contact {\r\n  margin-top: 5px;\r\n}\r\n\r\n.closebtn {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 15px;\r\n  font-size: 30px;\r\n  border: none;\r\n  color: #ffff;\r\n  background-color: transparent;\r\n}\r\n\r\n/* align items ================================ */\r\n.center {\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.right {\r\n    text-align: right;\r\n}\r\n\r\n/* border ================================ */\r\n.bt {\r\n    border-top: 1px solid rgba(255, 255, 255, 0.125);\r\n    margin-top: 15px;\r\n}\r\n\r\n/* margin ================================ */\r\n.mt {\r\n    margin-top: 15px;\r\n}\r\n\r\n.mr-15 {\r\n    margin-right: 15px;\r\n}\r\n\r\n/* link ================================ */\r\n.link a {\r\n    font-weight: bold;\r\n    color: #58d2b2 !important;\r\n}\r\n\r\n/* sticky ================================ */\r\n.sticky {\r\n    position: relative;\r\n    /* max-width: 310px; */\r\n}\r\n\r\n\r\n\r\n/* scroll ================================ */\r\n/* scroll menggunakan inline-block */\r\n/* .scroll-container {\r\n    position: relative;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.scroll-item {\r\n    width:120px;\r\n    height:120px;\r\n    background-color:#09aadf;\r\n    border-radius:7px;\r\n    display:inline-block;\r\n    margin-right:10px;\r\n} */\r\n\r\n/* scroll menggunakan flex  */\r\n/* .scroll-container {\r\n    display: flex;\r\n    flex-wrap: nowrap; \r\n    overflow: auto;\r\n}\r\n\r\n.grid {\r\n    flex: 0 0 auto;\r\n    width:120px;\r\n    height:120px;\r\n    background-color:#09aadf;\r\n    border-radius:7px;\r\n    margin-right:10px;\r\n} */\r\n\r\n",""]);const i=o},379:(n,r,t)=>{"use strict";var e,o=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),i=[];function a(n){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===n){r=t;break}return r}function c(n,r){for(var t={},e=[],o=0;o<n.length;o++){var c=n[o],l=r.base?c[0]+r.base:c[0],s=t[l]||0,p="".concat(l," ").concat(s);t[l]=s+1;var u=a(p),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:p,updater:m(d,r),references:1}),e.push(p)}return e}function l(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,p=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function u(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function d(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,b=0;function m(n,r){var t,e,o;if(r.singleton){var i=b++;t=f||(f=l(r)),e=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(r),e=d.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=a(t[e]);i[o].references--}for(var l=c(n,r),s=0;s<t.length;s++){var p=a(t[s]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}t=l}}}}},r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,t),o.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;var n=t(379),r=t.n(n),e=t(890);r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals;var o=t(948);function i(n,r){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return a(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){l=!0,i=n},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw i}}}}function a(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,t(373),t(590);t(102);t(574),document.addEventListener("DOMContentLoaded",(function(){document.openTab=function(n,r,t){var e,o=i(document.querySelectorAll(".tab-content"));try{for(o.s();!(e=o.n()).done;)e.value.style.display="none"}catch(n){o.e(n)}finally{o.f()}document.querySelector(".sidebar").classList.remove("open");var a,c=i(document.querySelectorAll(".navbar-item, .sidebar-item"));try{for(c.s();!(a=c.n()).done;)a.value.style.backgroundColor=""}catch(n){c.e(n)}finally{c.f()}document.getElementById(n).style.display="block"}})),document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("pro-file"),r=n.offsetTop;window.onscroll=function(){window.pageYOffset>r?n.classList.add("sticky"):n.classList.remove("sticky")};var t=document.querySelector("#detailPesanan");t.innerHTML+="";var e=document.createElement("div");e.setAttribute("class","varian"),e.innerHTML='\n        <div class="vrasa">\n            <label>Varian Rasa</label>\n            <select id="rasa" class="form-control">\n                <option value="Kacang Hijau">Kacang Hijau</option>\n                <option value="Coklat">Coklat</option>\n                <option value="Keju">Keju</option>\n            </select>\n        </div>\n        <div class="vharga">\n            <label>Varian Harga</label>\n            <select id="harga" class="form-control" onchange="totalHarga();">\n                <option value="10000">Rp10.000 (8pcs)</option>\n                <option value="15000">Rp15.000 (12pcs)</option>\n                <option value="25000">Rp25.000 (20pcs)</option>\n            </select>\n        </div>\n        <div class="vqty">\n            <label>Jumlah</label>\n            <input id="qty" type="number" value="" onkeyup="totalHarga();" class="form-control">\n        </div>\n    ';var o=document.querySelector("#addVarian");t.insertBefore(e,o),o.addEventListener("click",(function(){var n=e.cloneNode(!0);t.insertBefore(n,o)})),document.totalHarga=function(){var n=document.querySelector("#harga"),r=parseInt(n.options[n.selectedIndex].value),t=parseInt(document.querySelector("#qty").value);document.querySelector(".Tharga").innerHTML="<p>Total Harga : Rp ".concat(r*t," </p> ")},document.querySelector("#btnSave").addEventListener("click",(function(){var n=document.querySelector("#customer").value,r=document.querySelector("#rasa"),t=r.options[r.selectedIndex].value,e=document.querySelector("#tglPesan").value,o=document.querySelector("#harga"),i=parseInt(o.options[o.selectedIndex].value),a=parseInt(document.querySelector("#qty").value);putHistory({customer:n,rasa:t,qty:a,tHarga:i*a,hariTgl:e}),renderHistory()}))})),document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector(".menu"),r=document.querySelector(".sidebar"),t=document.querySelector(".closebtn");n.addEventListener("click",(function(n){r.classList.toggle("open"),n.stopPropagation()})),t.addEventListener("click",(function(n){r.classList.remove("open"),n.stopPropagation()}))}))})()})();