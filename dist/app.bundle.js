!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(window,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){(function(e){const t=r(2);e.export={getFileType:e=>t(e)}}).call(this,r(1)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(module,exports,__webpack_require__){"use strict";(function(Buffer){const{stringToBytes:stringToBytes,readUInt64LE:readUInt64LE,tarHeaderChecksumMatches:tarHeaderChecksumMatches,uint8ArrayUtf8ByteString:uint8ArrayUtf8ByteString}=__webpack_require__(8),xpiZipFilename=stringToBytes("META-INF/mozilla.rsa"),oxmlContentTypes=stringToBytes("[Content_Types].xml"),oxmlRels=stringToBytes("_rels/.rels"),fileType=e=>{if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||Buffer.isBuffer(e)))throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);const t=Buffer.from(e);if(!(t&&t.length>1))return;const r=(e,r)=>{r={offset:0,...r};for(let i=0;i<e.length;i++)if(r.mask){if(e[i]!==(r.mask[i]&t[i+r.offset]))return!1}else if(e[i]!==t[i+r.offset])return!1;return!0},i=(e,t)=>r(stringToBytes(e),t);if(r([255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(r([137,80,78,71,13,10,26,10])){const e=33,r=t.findIndex((r,i)=>i>=e&&73===t[i]&&68===t[i+1]&&65===t[i+2]&&84===t[i+3]),i=t.subarray(e,r);return i.findIndex((e,t)=>97===i[t]&&99===i[t+1]&&84===i[t+2]&&76===i[t+3])>=0?{ext:"apng",mime:"image/apng"}:{ext:"png",mime:"image/png"}}if(r([71,73,70]))return{ext:"gif",mime:"image/gif"};if(r([87,69,66,80],{offset:8}))return{ext:"webp",mime:"image/webp"};if(r([70,76,73,70]))return{ext:"flif",mime:"image/flif"};if((r([73,73,42,0])||r([77,77,0,42]))&&r([67,82],{offset:8}))return{ext:"cr2",mime:"image/x-canon-cr2"};if(r([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(r([73,73,42,0])&&(r([16,251,134,1],{offset:4})||r([8,0,0,0,19,0],{offset:4})||r([8,0,0,0,18,0],{offset:4})))return{ext:"arw",mime:"image/x-sony-arw"};if(r([73,73,42,0,8,0,0,0])&&(r([45,0,254,0],{offset:8})||r([39,0,254,0],{offset:8})))return{ext:"dng",mime:"image/x-adobe-dng"};if(r([73,73,42,0])&&r([28,0,254,0],{offset:8}))return{ext:"nef",mime:"image/x-nikon-nef"};if(r([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(i("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(r([73,73,42,0])||r([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(r([66,77]))return{ext:"bmp",mime:"image/bmp"};if(r([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(r([56,66,80,83]))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};const n=Buffer.from([80,75,3,4]);if(r(n)){if(r([109,105,109,101,116,121,112,101,97,112,112,108,105,99,97,116,105,111,110,47,101,112,117,98,43,122,105,112],{offset:30}))return{ext:"epub",mime:"application/epub+zip"};if(r(xpiZipFilename,{offset:30}))return{ext:"xpi",mime:"application/x-xpinstall"};if(i("mimetypeapplication/vnd.oasis.opendocument.text",{offset:30}))return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};if(i("mimetypeapplication/vnd.oasis.opendocument.spreadsheet",{offset:30}))return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};if(i("mimetypeapplication/vnd.oasis.opendocument.presentation",{offset:30}))return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};const e=(e,t=0)=>e.indexOf(n,t);let o,f=0,a=!1;do{const n=f+30;if(a||(a=r(oxmlContentTypes,{offset:n})||r(oxmlRels,{offset:n})),o||(i("word/",{offset:n})?o={ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}:i("ppt/",{offset:n})?o={ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}:i("xl/",{offset:n})&&(o={ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),a&&o)return o;f=e(t,n)}while(f>=0);if(o)return o}if(r([80,75])&&(3===t[2]||5===t[2]||7===t[2])&&(4===t[3]||6===t[3]||8===t[3]))return{ext:"zip",mime:"application/zip"};if(r([48,48,48,48,48,48],{offset:148,mask:[248,248,248,248,248,248]})&&tarHeaderChecksumMatches(t))return{ext:"tar",mime:"application/x-tar"};if(r([82,97,114,33,26,7])&&(0===t[6]||1===t[6]))return{ext:"rar",mime:"application/x-rar-compressed"};if(r([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(r([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(r([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(r([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(r([102,114,101,101],{offset:4})||r([109,100,97,116],{offset:4})||r([109,111,111,118],{offset:4})||r([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(r([102,116,121,112],{offset:4})&&0!=(96&t[8])&&0!=(96&t[9])&&0!=(96&t[10])&&0!=(96&t[11])){const e=uint8ArrayUtf8ByteString(t,8,12);switch(e){case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt  ":return{ext:"mov",mime:"video/quicktime"};case"M4V ":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P ":return{ext:"m4p",mime:"video/mp4"};case"M4B ":return{ext:"m4b",mime:"audio/mp4"};case"M4A ":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V ":return{ext:"f4v",mime:"video/mp4"};case"F4P ":return{ext:"f4p",mime:"video/mp4"};case"F4A ":return{ext:"f4a",mime:"audio/mp4"};case"F4B ":return{ext:"f4b",mime:"audio/mp4"};default:return e.startsWith("3g")?e.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"video/mp4"}}}if(r([77,84,104,100]))return{ext:"mid",mime:"audio/midi"};if(r([26,69,223,163])){const e=t.subarray(4,4100),r=e.findIndex((e,t,r)=>66===r[t]&&130===r[t+1]);if(-1!==r){const t=r+3,i=r=>[...r].every((r,i)=>e[t+i]===r.charCodeAt(0));if(i("matroska"))return{ext:"mkv",mime:"video/x-matroska"};if(i("webm"))return{ext:"webm",mime:"video/webm"}}}if(r([82,73,70,70])){if(r([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(r([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};if(r([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(r([48,38,178,117,142,102,207,17,166,217])){let e=30;do{const i=readUInt64LE(t,e+16);if(r([145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101],{offset:e})){if(r([64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43],{offset:e+24}))return{ext:"wma",mime:"audio/x-ms-wma"};if(r([192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43],{offset:e+24}))return{ext:"wmv",mime:"video/x-ms-asf"};break}e+=i}while(e+24<=t.length);return{ext:"asf",mime:"application/vnd.ms-asf"}}if(r([0,0,1,186])||r([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};for(let e=0;e<2&&e<t.length-16;e++){if(r([73,68,51],{offset:e})||r([255,226],{offset:e,mask:[255,230]}))return{ext:"mp3",mime:"audio/mpeg"};if(r([255,228],{offset:e,mask:[255,230]}))return{ext:"mp2",mime:"audio/mpeg"};if(r([255,248],{offset:e,mask:[255,252]}))return{ext:"mp2",mime:"audio/mpeg"};if(r([255,240],{offset:e,mask:[255,252]}))return{ext:"mp4",mime:"audio/mpeg"}}if(r([79,112,117,115,72,101,97,100],{offset:28}))return{ext:"opus",mime:"audio/opus"};if(r([79,103,103,83]))return r([128,116,104,101,111,114,97],{offset:28})?{ext:"ogv",mime:"video/ogg"}:r([1,118,105,100,101,111,0],{offset:28})?{ext:"ogm",mime:"video/ogg"}:r([127,70,76,65,67],{offset:28})?{ext:"oga",mime:"audio/ogg"}:r([83,112,101,101,120,32,32],{offset:28})?{ext:"spx",mime:"audio/ogg"}:r([1,118,111,114,98,105,115],{offset:28})?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"};if(r([102,76,97,67]))return{ext:"flac",mime:"audio/x-flac"};if(r([77,65,67,32]))return{ext:"ape",mime:"audio/ape"};if(r([119,118,112,107]))return{ext:"wv",mime:"audio/wavpack"};if(r([35,33,65,77,82,10]))return{ext:"amr",mime:"audio/amr"};if(r([37,80,68,70]))return{ext:"pdf",mime:"application/pdf"};if(r([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if((67===t[0]||70===t[0])&&r([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(r([123,92,114,116,102]))return{ext:"rtf",mime:"application/rtf"};if(r([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(r([119,79,70,70])&&(r([0,1,0,0],{offset:4})||r([79,84,84,79],{offset:4})))return{ext:"woff",mime:"font/woff"};if(r([119,79,70,50])&&(r([0,1,0,0],{offset:4})||r([79,84,84,79],{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(r([76,80],{offset:34})&&(r([0,0,1],{offset:8})||r([1,0,2],{offset:8})||r([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(r([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(r([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(r([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(r([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(r([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(r([37,33]))return{ext:"ps",mime:"application/postscript"};if(r([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(r([83,81,76,105]))return{ext:"sqlite",mime:"application/x-sqlite3"};if(r([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(r([67,114,50,52]))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(r([77,83,67,70])||r([73,83,99,40]))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(r([33,60,97,114,99,104,62,10,100,101,98,105,97,110,45,98,105,110,97,114,121]))return{ext:"deb",mime:"application/x-deb"};if(r([33,60,97,114,99,104,62]))return{ext:"ar",mime:"application/x-unix-archive"};if(r([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(r([31,160])||r([31,157]))return{ext:"Z",mime:"application/x-compress"};if(r([76,90,73,80]))return{ext:"lz",mime:"application/x-lzip"};if(r([208,207,17,224,161,177,26,225]))return{ext:"msi",mime:"application/x-msi"};if(r([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(r([71],{offset:4})&&(r([71],{offset:192})||r([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(r([66,76,69,78,68,69,82]))return{ext:"blend",mime:"application/x-blender"};if(r([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(r([0,0,0,12,106,80,32,32,13,10,135,10])){if(r([106,112,50,32],{offset:20}))return{ext:"jp2",mime:"image/jp2"};if(r([106,112,120,32],{offset:20}))return{ext:"jpx",mime:"image/jpx"};if(r([106,112,109,32],{offset:20}))return{ext:"jpm",mime:"image/jpm"};if(r([109,106,112,50],{offset:20}))return{ext:"mj2",mime:"image/mj2"}}return r([70,79,82,77])?{ext:"aif",mime:"audio/aiff"}:i("<?xml ")?{ext:"xml",mime:"application/xml"}:r([66,79,79,75,77,79,66,73],{offset:60})?{ext:"mobi",mime:"application/x-mobipocket-ebook"}:r([171,75,84,88,32,49,49,187,13,10,26,10])?{ext:"ktx",mime:"image/ktx"}:r([68,73,67,77],{offset:128})?{ext:"dcm",mime:"application/dicom"}:r([77,80,43])?{ext:"mpc",mime:"audio/x-musepack"}:r([77,80,67,75])?{ext:"mpc",mime:"audio/x-musepack"}:r([66,69,71,73,78,58])?{ext:"ics",mime:"text/calendar"}:r([103,108,84,70,2,0,0,0])?{ext:"glb",mime:"model/gltf-binary"}:r([212,195,178,161])||r([161,178,195,212])?{ext:"pcap",mime:"application/vnd.tcpdump.pcap"}:r([68,83,68,32])?{ext:"dsf",mime:"audio/x-dsf"}:r([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70])?{ext:"lnk",mime:"application/x.ms.shortcut"}:r([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0])?{ext:"alias",mime:"application/x.apple.alias"}:i("Creative Voice File")?{ext:"voc",mime:"audio/x-voc"}:r([11,119])?{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"}:void 0};module.exports=fileType,Object.defineProperty(fileType,"minimumBytes",{value:4100}),fileType.stream=readableStream=>new Promise((resolve,reject)=>{const stream=eval("require")("stream");readableStream.on("error",reject),readableStream.once("readable",()=>{const e=new stream.PassThrough,t=readableStream.read(module.exports.minimumBytes)||readableStream.read();try{e.fileType=fileType(t)}catch(e){reject(e)}readableStream.unshift(t),stream.pipeline?resolve(stream.pipeline(readableStream,e,()=>{})):resolve(readableStream.pipe(e))})})}).call(this,__webpack_require__(3).Buffer)},function(e,t,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var i=r(5),n=r(6),o=r(7);function f(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(f()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return m(this,e)}return s(this,e,t,r)}function s(e,t,r,i){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,i){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(i||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,r):new Uint8Array(t,r,i);u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=c(e,t);return e}(e,t,r,i):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var i=0|l(t,r),n=(e=a(e,i)).write(t,r);n!==i&&(e=e.slice(0,n));return e}(e,t,r):function(e,t){if(u.isBuffer(t)){var r=0|h(t.length);return 0===(e=a(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(i=t.length)!=i?a(e,0):c(e,t);if("Buffer"===t.type&&o(t.data))return c(e,t.data)}var i;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function m(e,t){if(p(t),e=a(e,t<0?0:0|h(t)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function c(e,t){var r=t.length<0?0:0|h(t.length);e=a(e,r);for(var i=0;i<r;i+=1)e[i]=255&t[i];return e}function h(e){if(e>=f())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f().toString(16)+" bytes");return 0|e}function l(e,t){if(u.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return F(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(i)return F(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,r){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return U(this,t,r);case"utf8":case"utf-8":return B(this,t,r);case"ascii":return P(this,t,r);case"latin1":case"binary":return S(this,t,r);case"base64":return R(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,r);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function d(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function y(e,t,r,i,n){if(0===e.length)return-1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return-1;r=e.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof t&&(t=u.from(t,i)),u.isBuffer(t))return 0===t.length?-1:x(e,t,r,i,n);if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):x(e,[t],r,i,n);throw new TypeError("val must be string, number or Buffer")}function x(e,t,r,i,n){var o,f=1,a=e.length,u=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;f=2,a/=2,u/=2,r/=2}function s(e,t){return 1===f?e[t]:e.readUInt16BE(t*f)}if(n){var p=-1;for(o=r;o<a;o++)if(s(e,o)===s(t,-1===p?0:o-p)){if(-1===p&&(p=o),o-p+1===u)return p*f}else-1!==p&&(o-=o-p),p=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){for(var m=!0,c=0;c<u;c++)if(s(e,o+c)!==s(t,c)){m=!1;break}if(m)return o}return-1}function w(e,t,r,i){r=Number(r)||0;var n=e.length-r;i?(i=Number(i))>n&&(i=n):i=n;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");i>o/2&&(i=o/2);for(var f=0;f<i;++f){var a=parseInt(t.substr(2*f,2),16);if(isNaN(a))return f;e[r+f]=a}return f}function v(e,t,r,i){return q(F(t,e.length-r),e,r,i)}function b(e,t,r,i){return q(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,i)}function A(e,t,r,i){return b(e,t,r,i)}function E(e,t,r,i){return q(N(t),e,r,i)}function _(e,t,r,i){return q(function(e,t){for(var r,i,n,o=[],f=0;f<e.length&&!((t-=2)<0);++f)r=e.charCodeAt(f),i=r>>8,n=r%256,o.push(n),o.push(i);return o}(t,e.length-r),e,r,i)}function R(e,t,r){return 0===t&&r===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,r))}function B(e,t,r){r=Math.min(e.length,r);for(var i=[],n=t;n<r;){var o,f,a,u,s=e[n],p=null,m=s>239?4:s>223?3:s>191?2:1;if(n+m<=r)switch(m){case 1:s<128&&(p=s);break;case 2:128==(192&(o=e[n+1]))&&(u=(31&s)<<6|63&o)>127&&(p=u);break;case 3:o=e[n+1],f=e[n+2],128==(192&o)&&128==(192&f)&&(u=(15&s)<<12|(63&o)<<6|63&f)>2047&&(u<55296||u>57343)&&(p=u);break;case 4:o=e[n+1],f=e[n+2],a=e[n+3],128==(192&o)&&128==(192&f)&&128==(192&a)&&(u=(15&s)<<18|(63&o)<<12|(63&f)<<6|63&a)>65535&&u<1114112&&(p=u)}null===p?(p=65533,m=1):p>65535&&(p-=65536,i.push(p>>>10&1023|55296),p=56320|1023&p),i.push(p),n+=m}return function(e){var t=e.length;if(t<=T)return String.fromCharCode.apply(String,e);var r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=T));return r}(i)}t.Buffer=u,t.SlowBuffer=function(e){+e!=e&&(e=0);return u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=f(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,r){return s(null,e,t,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,r){return function(e,t,r,i){return p(t),t<=0?a(e,t):void 0!==r?"string"==typeof i?a(e,t).fill(r,i):a(e,t).fill(r):a(e,t)}(null,e,t,r)},u.allocUnsafe=function(e){return m(null,e)},u.allocUnsafeSlow=function(e){return m(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,i=t.length,n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var i=u.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){var f=e[r];if(!u.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,n),n+=f.length}return i},u.byteLength=l,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)d(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)d(this,t,t+3),d(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)d(this,t,t+7),d(this,t+1,t+6),d(this,t+2,t+5),d(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?B(this,0,e):g.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,r,i,n){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(n>>>=0)-(i>>>=0),f=(r>>>=0)-(t>>>=0),a=Math.min(o,f),s=this.slice(i,n),p=e.slice(t,r),m=0;m<a;++m)if(s[m]!==p[m]){o=s[m],f=p[m];break}return o<f?-1:f<o?1:0},u.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},u.prototype.write=function(e,t,r,i){if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===i&&(i="utf8")):(i=r,r=void 0)}var n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var o=!1;;)switch(i){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return v(this,e,t,r);case"ascii":return b(this,e,t,r);case"latin1":case"binary":return A(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function P(e,t,r){var i="";r=Math.min(e.length,r);for(var n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}function S(e,t,r){var i="";r=Math.min(e.length,r);for(var n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}function U(e,t,r){var i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);for(var n="",o=t;o<r;++o)n+=z(e[o]);return n}function I(e,t,r){for(var i=e.slice(t,r),n="",o=0;o<i.length;o+=2)n+=String.fromCharCode(i[o]+256*i[o+1]);return n}function k(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function C(e,t,r,i,n,o){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw new RangeError('"value" argument is out of bounds');if(r+i>e.length)throw new RangeError("Index out of range")}function M(e,t,r,i){t<0&&(t=65535+t+1);for(var n=0,o=Math.min(e.length-r,2);n<o;++n)e[r+n]=(t&255<<8*(i?n:1-n))>>>8*(i?n:1-n)}function Y(e,t,r,i){t<0&&(t=4294967295+t+1);for(var n=0,o=Math.min(e.length-r,4);n<o;++n)e[r+n]=t>>>8*(i?n:3-n)&255}function O(e,t,r,i,n,o){if(r+i>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,i,o){return o||O(e,0,r,4),n.write(e,t,r,i,23,4),r+4}function L(e,t,r,i,o){return o||O(e,0,r,8),n.write(e,t,r,i,52,8),r+8}u.prototype.slice=function(e,t){var r,i=this.length;if((e=~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),(t=void 0===t?i:~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=u.prototype;else{var n=t-e;r=new u(n,void 0);for(var o=0;o<n;++o)r[o]=this[o+e]}return r},u.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var i=this[e],n=1,o=0;++o<t&&(n*=256);)i+=this[e+o]*n;return i},u.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var i=this[e+--t],n=1;t>0&&(n*=256);)i+=this[e+--t]*n;return i},u.prototype.readUInt8=function(e,t){return t||k(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||k(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||k(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||k(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var i=this[e],n=1,o=0;++o<t&&(n*=256);)i+=this[e+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},u.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var i=t,n=1,o=this[e+--i];i>0&&(n*=256);)o+=this[e+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},u.prototype.readInt8=function(e,t){return t||k(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||k(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){t||k(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return t||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||k(e,4,this.length),n.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||k(e,4,this.length),n.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||k(e,8,this.length),n.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||k(e,8,this.length),n.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,r,i){(e=+e,t|=0,r|=0,i)||C(this,e,t,r,Math.pow(2,8*r)-1,0);var n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},u.prototype.writeUIntBE=function(e,t,r,i){(e=+e,t|=0,r|=0,i)||C(this,e,t,r,Math.pow(2,8*r)-1,0);var n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):Y(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Y(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t|=0,!i){var n=Math.pow(2,8*r-1);C(this,e,t,r,n-1,-n)}var o=0,f=1,a=0;for(this[t]=255&e;++o<r&&(f*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/f>>0)-a&255;return t+r},u.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t|=0,!i){var n=Math.pow(2,8*r-1);C(this,e,t,r,n-1,-n)}var o=r-1,f=1,a=0;for(this[t+o]=255&e;--o>=0&&(f*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/f>>0)-a&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):Y(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Y(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return L(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return L(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,i){if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);var n,o=i-r;if(this===e&&r<t&&t<i)for(n=o-1;n>=0;--n)e[n+t]=this[n+r];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(n=0;n<o;++n)e[n+t]=this[n+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},u.prototype.fill=function(e,t,r,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),1===e.length){var n=e.charCodeAt(0);n<256&&(e=n)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var f=u.isBuffer(e)?e:F(new u(e,i).toString()),a=f.length;for(o=0;o<r-t;++o)this[o+t]=f[o%a]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function z(e){return e<16?"0"+e.toString(16):e.toString(16)}function F(e,t){var r;t=t||1/0;for(var i=e.length,n=null,o=[],f=0;f<i;++f){if((r=e.charCodeAt(f))>55295&&r<57344){if(!n){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(f+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function N(e){return i.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(D,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,r,i){for(var n=0;n<i&&!(n+r>=t.length||n>=e.length);++n)t[n+r]=e[n];return n}}).call(this,r(4))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],i=t[1];return 3*(r+i)/4-i},t.toByteArray=function(e){for(var t,r=s(e),i=r[0],f=r[1],a=new o(function(e,t,r){return 3*(t+r)/4-r}(0,i,f)),u=0,p=f>0?i-4:i,m=0;m<p;m+=4)t=n[e.charCodeAt(m)]<<18|n[e.charCodeAt(m+1)]<<12|n[e.charCodeAt(m+2)]<<6|n[e.charCodeAt(m+3)],a[u++]=t>>16&255,a[u++]=t>>8&255,a[u++]=255&t;2===f&&(t=n[e.charCodeAt(m)]<<2|n[e.charCodeAt(m+1)]>>4,a[u++]=255&t);1===f&&(t=n[e.charCodeAt(m)]<<10|n[e.charCodeAt(m+1)]<<4|n[e.charCodeAt(m+2)]>>2,a[u++]=t>>8&255,a[u++]=255&t);return a},t.fromByteArray=function(e){for(var t,r=e.length,n=r%3,o=[],f=0,a=r-n;f<a;f+=16383)o.push(p(e,f,f+16383>a?a:f+16383));1===n?(t=e[r-1],o.push(i[t>>2]+i[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],o.push(i[t>>10]+i[t>>4&63]+i[t<<2&63]+"="));return o.join("")};for(var i=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=f.length;a<u;++a)i[a]=f[a],n[f.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function p(e,t,r){for(var n,o,f=[],a=t;a<r;a+=3)n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),f.push(i[(o=n)>>18&63]+i[o>>12&63]+i[o>>6&63]+i[63&o]);return f.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,i,n){var o,f,a=8*n-i-1,u=(1<<a)-1,s=u>>1,p=-7,m=r?n-1:0,c=r?-1:1,h=e[t+m];for(m+=c,o=h&(1<<-p)-1,h>>=-p,p+=a;p>0;o=256*o+e[t+m],m+=c,p-=8);for(f=o&(1<<-p)-1,o>>=-p,p+=i;p>0;f=256*f+e[t+m],m+=c,p-=8);if(0===o)o=1-s;else{if(o===u)return f?NaN:1/0*(h?-1:1);f+=Math.pow(2,i),o-=s}return(h?-1:1)*f*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var f,a,u,s=8*o-n-1,p=(1<<s)-1,m=p>>1,c=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:o-1,l=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,f=p):(f=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-f))<1&&(f--,u*=2),(t+=f+m>=1?c/u:c*Math.pow(2,1-m))*u>=2&&(f++,u/=2),f+m>=p?(a=0,f=p):f+m>=1?(a=(t*u-1)*Math.pow(2,n),f+=m):(a=t*Math.pow(2,m-1)*Math.pow(2,n),f=0));n>=8;e[r+h]=255&a,h+=l,a/=256,n-=8);for(f=f<<n|a,s+=n;s>0;e[r+h]=255&f,h+=l,f/=256,s-=8);e[r+h-l]|=128*g}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){"use strict";t.stringToBytes=e=>[...e].map(e=>e.charCodeAt(0));const i=(e,t,r)=>String.fromCharCode(...e.slice(t,r));t.readUInt64LE=(e,t=0)=>{let r=e[t],i=1,n=0;for(;++n<8;)i*=256,r+=e[t+n]*i;return r},t.tarHeaderChecksumMatches=e=>{if(e.length<512)return!1;let t=256,r=0;for(let i=0;i<148;i++){const n=e[i];t+=n,r+=128&n}for(let i=156;i<512;i++){const n=e[i];t+=n,r+=128&n}const n=parseInt(i(e,148,154),8);return n===t||n===t-(r<<1)},t.uint8ArrayUtf8ByteString=i}])});