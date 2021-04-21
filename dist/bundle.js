/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":\"0tZPRVbi4j5LT1n6El1S\",\"r\":108,\"g\":54,\"b\":205,\"label\":\"blue\"},{\"id\":\"1APnRM4IxqoFMdYaLnUN\",\"r\":59,\"g\":121,\"b\":93,\"label\":\"green\"},{\"id\":\"5UVMdgTQruIhxI907HVT\",\"r\":237,\"g\":103,\"b\":218,\"label\":\"pink\"},{\"id\":\"FynnhmzoHremClKqNnru\",\"r\":31,\"g\":186,\"b\":94,\"label\":\"green\"},{\"id\":\"MSRnlcMXRzj1r1k7WeX0\",\"r\":13,\"g\":156,\"b\":32,\"label\":\"green\"},{\"id\":\"N5zP9ebBrwm49hU3h1n8\",\"r\":47,\"g\":9,\"b\":4,\"label\":\"black\"},{\"id\":\"Ngv1K8AmTaTrl2LMgwbb\",\"r\":189,\"g\":135,\"b\":239,\"label\":\"blue\"},{\"id\":\"Ubey00lhWMALONpxgpXp\",\"r\":170,\"g\":126,\"b\":161,\"label\":\"purple\"},{\"id\":\"VKwlLPLo6y1LFPzcIBwv\",\"r\":181,\"g\":142,\"b\":24,\"label\":\"brown\"},{\"id\":\"VRmcu6w4njahGnfmCPz0\",\"r\":229,\"g\":79,\"b\":87,\"label\":\"brown\"},{\"id\":\"Z1pmtodMKogMZS84vjHa\",\"r\":189,\"g\":223,\"b\":160,\"label\":\"green\"},{\"id\":\"a8MRlvqsPGsVjF0z5IGr\",\"r\":109,\"g\":52,\"b\":61,\"label\":\"brown\"},{\"id\":\"aB0rQ8GgbBXT6ovarvYk\",\"r\":164,\"g\":81,\"b\":71,\"label\":\"brown\"},{\"id\":\"b4b3E91V0NoOdHDDuZkK\",\"r\":116,\"g\":122,\"b\":186,\"label\":\"blue\"},{\"id\":\"eW8kgOt0jmSL7tNGP9nt\",\"r\":134,\"g\":236,\"b\":32,\"label\":\"green\"},{\"id\":\"huBJKTaReFRMhTAK2NDg\",\"r\":173,\"g\":210,\"b\":132,\"label\":\"green\"},{\"id\":\"qDMBwECV7UMbZwpaNTHs\",\"r\":83,\"g\":197,\"b\":78,\"label\":\"green\"},{\"id\":\"wUCNSZDdKbWrYs2NSazR\",\"r\":202,\"g\":161,\"b\":163,\"label\":\"pink\"},{\"id\":\"xQt6fNIrSocPSAKSTmrb\",\"r\":145,\"g\":19,\"b\":84,\"label\":\"purple\"}]');\n\n//# sourceURL=webpack://color-detector/./data.json?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tensor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor.js */ \"./tensor.js\");\n\n\nlet database, firebase_init = false;\n\nlet rgb = {\n\tr: '',\n\tg: '',\n\tb: ''\n};\n\nfunction setRandomColor()\n{\n\tlet r = Math.floor(Math.random() * 255)\n\tlet g = Math.floor(Math.random() * 255)\n\tlet b = Math.floor(Math.random() * 255)\n\n\tlet color_el = document.querySelector('.color-sample #color')\n\n\tcolor_el.style.backgroundColor = \"rgb(\"+ r + \", \" + g + \", \" + b + \")\"\n\n\trgb.r = r\n\trgb.g = g\n\trgb.b = b\n}\n\nfunction init()\n{\n\tlet start_btn = document.querySelector(\"#start_btn\")\n\tstart_btn.style.display = 'none'\n\n\tlet training_card = document.querySelector(\"#training_card\")\n\ttraining_card.style.display = 'block'\n\n\tsetRandomColor()\n\t\n\tfirebaseInit()\n\n\tlet buttons =  document.querySelectorAll('.color-list .btn')\n\t\n\tfor (var i = 0; i < buttons.length; i++)\n\t{\n\t\tlet button = buttons[i]\n\n\t\tbutton.addEventListener('click', () => {\n\t\t\tsubmitData(button)\n\t\t})\n\t}\n\n\tsetupTryAnotherBtn()\n}\n\nfunction firebaseInit()\n{\n\tif(firebase_init)\n\t{\n\t\treturn false\n\t}\n\t// Your web app's Firebase configuration\n\t// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\tvar firebaseConfig = {\n\t\tapiKey: \"AIzaSyBseBtULwihGRFMvdOy_qF2bRc_B4EONVs\",\n\t\tauthDomain: \"color-detector-d5dce.firebaseapp.com\",\n\t\tprojectId: \"color-detector-d5dce\",\n\t\tstorageBucket: \"color-detector-d5dce.appspot.com\",\n\t\tmessagingSenderId: \"1060350119929\",\n\t\tappId: \"1:1060350119929:web:0950902230c618cdaeb728\",\n\t\tmeasurementId: \"G-JNQL1BLL4M\"\n\t};\n\t// Initialize Firebase\n\tfirebase.initializeApp(firebaseConfig);\n\tfirebase.analytics();\n\n\tdatabase = firebase.firestore()\n\n\tconsole.log('firebase', firebase)\n\n\tfirebase_init = true\n}\n\nfunction setupTryAnotherBtn()\n{\n\tlet try_another = document.querySelector('#try_another_btn')\n\n\ttry_another.addEventListener('click', () => {\n\t\tsetRandomColor()\n\t})\n}\n\nfunction submitData(button)\n{\n\tlet name = button.getAttribute('data-name')\n\tlet message_el = document.querySelector('#submission_message')\n\n\tdatabase.collection('colors').add({\n\t\tr: rgb.r,\n\t\tg: rgb.g,\n\t\tb: rgb.b,\n\t\tlabel: name\n\t})\n\t.then(ref => {\n\t\tconsole.log(\"doc ref: \", ref)\n\t\tmessage_el.innerHTML = \"Successfully submitted the data\"\n\t\tsetRandomColor()\n\t})\n\t.catch(error => {\n\t\tconsole.error('error: ', error)\n\t\tmessage_el.innerHTML = \"An error occured\"\n\t})\n}\n\nfunction dumpData()\n{\n\tfirebaseInit()\n\n\tlet colors = []\n\n\tdatabase.collection('colors').get()\n\t\t.then(querySnapshot => {\n\t\t\tlet dumped_data_table = document.querySelector('#dumped_data table tbody')\n\t\t\t\n\t\t\tquerySnapshot.forEach(doc => {\n\t\t\t\tlet data = doc.data()\n\t\t\t\tconsole.log(doc.id, ' => ', doc.data())\n\t\t\t\tlet color = {\n\t\t\t\t\tid: doc.id,\n\t\t\t\t\tr: data.r,\n\t\t\t\t\tg: data.g,\n\t\t\t\t\tb: data.b,\n\t\t\t\t\tlabel: data.label\n\t\t\t\t};\n\t\t\t\tcolors.push()\n\n\t\t\t\tlet content = \"id: \" + color.id + \", label: \" + color.label\n\n\t\t\t\tconst tr = document.createElement('tr')\n\t\t\t\tconst td = document.createElement('td')\n\n\t\t\t\tconst newContent = document.createTextNode(content)\n\n\t\t\t\ttd.appendChild(newContent)\n\t\t\t\ttr.appendChild(td)\n\n\t\t\t\tdumped_data_table.appendChild(tr)\n\n\t\t\t\ttr.style.backgroundColor = data.label\n\t\t\t})\n\n\t\t})\n}\n\nlet start_btn = document.querySelector('#start_btn')\n\nstart_btn.addEventListener('click', () => {\n\tinit()\n})\n\nlet dump_btn = document.querySelector('#dump_btn')\n\ndump_btn.addEventListener('click', () => {\n\tdumpData()\n})\n\n// let tensor = new Tensor()\n\n// tensor.init()\n\n\n//# sourceURL=webpack://color-detector/./main.js?");

/***/ }),

/***/ "./tensor.js":
/*!*******************!*\
  !*** ./tensor.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tensor)\n/* harmony export */ });\nclass Tensor\n{\n\tconstructor()\n\t{\n\t\tthis.labelsList = [\n\t\t\t\"red\",\n\t\t\t\"green\",\n\t\t\t\"blue\",\n\t\t\t\"purple\",\n\t\t\t\"pink\",\n\t\t\t\"orange\",\n\t\t\t\"brown\",\n\t\t\t\"black\",\n\t\t\t\"white\"\n\t\t]\n\n\t\tthis.model;\n\t}\n\n\tinit()\n\t{\n\t\tlet colors = []\n\t\tlet labels = []\n\n\t\tlet data = this.getData()\n\n\t\tdata.forEach(color => {\n\t\t\tlet c = [\n\t\t\t\tcolor.r / 255,\n\t\t\t\tcolor.g / 255,\n\t\t\t\tcolor.b / 255,\n\t\t\t]\n\t\t\tcolors.push(c)\n\t\t\tlabels.push(this.labelsList.indexOf(color.label))\n\t\t})\n\n\t\tlet xs = tf.tensor2d(colors)\n\t\tlet labelTensor = tf.tensor1d(labels, 'int32')\n\t\tconsole.log('xs', xs.shape)\n\t\tlabelTensor.print()\n\n\t\tlet ys = tf.oneHot(labelTensor, this.labelsList.length)\n\t\tconsole.log('ys', ys.shape)\n\n\t\txs.print()\n\t\tys.print()\n\n\t\tthis.model = tf.sequential()\n\n\t\tlet hidden_layer = this.getHiddenLayer(tf)\n\t\tlet output_layer = this.getOutputLayer(tf)\n\n\t\tthis.model.add(hidden_layer)\n\t\tthis.model.add(output_layer)\n\n\t\tlet learning_rate = 0.1\n\t\tconst optimizer = tf.train.sgd(learning_rate)\n\n\t\tthis.model.compile({\n\t\t\toptimizer: optimizer,\n\t\t\tloss: 'categoricalCrossentropy'\n\t\t})\n\n\t\tconst options = {\n\t\t\tepochs: 80\n\t\t}\n\n\t\tthis.model.fit(xs, ys, options).then(result => {\n\t\t\tconsole.log('result', result)\n\t\t})\n\t}\n\n\tgetHiddenLayer(tf)\n\t{\n\t\tconsole.log(\"getting hidden layer\")\n\t\treturn tf.layers.dense({\n\t\t\tunits: 8,\n\t\t\tactivation: 'sigmoid',\n\t\t\tinputDim: 3\n\t\t})\n\t}\n\n\tgetOutputLayer(tf)\n\t{\n\t\tconsole.log(\"getting output layer\")\n\t\treturn tf.layers.dense({\n\t\t\tunits: this.labelsList.length,\n\t\t\tactivation: 'softmax'\n\t\t})\n\t}\n\n\tgetData()\n\t{\n\t\tconst data = __webpack_require__(/*! ./data.json */ \"./data.json\")\n\n\t\treturn data\n\t}\n}\n\n//# sourceURL=webpack://color-detector/./tensor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;