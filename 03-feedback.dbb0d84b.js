!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("1WSnx");const a="feedback-form-state",l=JSON.parse(localStorage.getItem(a));let i=null!=l?l:{};const f={form:document.querySelector(".feedback-form")};f.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.email.value||""===e.currentTarget.message.value)return;e.currentTarget.reset(),localStorage.removeItem(a),console.log(i),i={}})),f.form.addEventListener("input",(0,o.throttle)((e=>{i[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(i))})),500),l&&(f.form.elements.email.value=l.email||"",f.form.elements.message.value=l.message||"")}();
//# sourceMappingURL=03-feedback.dbb0d84b.js.map