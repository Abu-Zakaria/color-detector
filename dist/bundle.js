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

eval("module.exports = JSON.parse('[{\"id\":\"3XLMS4yKpaUagzftH7f8\",\"r\":143,\"g\":147,\"b\":234,\"label\":\"blue\"},{\"id\":\"3kPcCEIrqPP548S30j47\",\"r\":108,\"g\":45,\"b\":243,\"label\":\"blue\"},{\"id\":\"4LdqOpViL9uQOLIfYTW9\",\"r\":167,\"g\":72,\"b\":204,\"label\":\"blue\"},{\"id\":\"7bheb7mgStR0lOgahYz7\",\"r\":171,\"g\":47,\"b\":26,\"label\":\"brown\"},{\"id\":\"9OIse7ozKIY5q8rcCIqH\",\"r\":13,\"g\":19,\"b\":144,\"label\":\"blue\"},{\"id\":\"9Rio6BmHcbUEbcsJCeXL\",\"r\":197,\"g\":207,\"b\":74,\"label\":\"brown\"},{\"id\":\"CWlakoZ3wNaMsr1sulh2\",\"r\":152,\"g\":176,\"b\":216,\"label\":\"blue\"},{\"id\":\"CX9fSlIhAUPlzztdYpmU\",\"r\":65,\"g\":173,\"b\":243,\"label\":\"blue\"},{\"id\":\"GSaKWlPwbwLlvEbvRUQ7\",\"r\":157,\"g\":119,\"b\":16,\"label\":\"brown\"},{\"id\":\"HGTkDAoGqeaH3AwGopEm\",\"r\":200,\"g\":101,\"b\":182,\"label\":\"purple\"},{\"id\":\"OMXaHvH3tYjo3DzFwrzY\",\"r\":139,\"g\":229,\"b\":202,\"label\":\"blue\"},{\"id\":\"Ordohm7sGsC4xFvwP2W8\",\"r\":59,\"g\":30,\"b\":207,\"label\":\"blue\"},{\"id\":\"S9VODGUlDmx3K6bkUeVc\",\"r\":216,\"g\":235,\"b\":194,\"label\":\"white\"},{\"id\":\"TugDrXrhZoJOMVJojWit\",\"r\":153,\"g\":19,\"b\":133,\"label\":\"purple\"},{\"id\":\"ZOXoTbd4WqLPBre3uRu7\",\"r\":189,\"g\":50,\"b\":12,\"label\":\"brown\"},{\"id\":\"c64AWNGR9obvU3RJlr51\",\"r\":128,\"g\":214,\"b\":139,\"label\":\"green\"},{\"id\":\"eihmLGBpcshXyzcUFzN2\",\"r\":181,\"g\":65,\"b\":68,\"label\":\"brown\"},{\"id\":\"fjRi0dEEsAy3txQwYutz\",\"r\":196,\"g\":41,\"b\":8,\"label\":\"red\"},{\"id\":\"gNSBBaC5OPziiCo6BHus\",\"r\":185,\"g\":130,\"b\":67,\"label\":\"brown\"},{\"id\":\"iuYzH414F8BVXi1UPcEX\",\"r\":182,\"g\":67,\"b\":60,\"label\":\"red\"},{\"id\":\"k4XwSXjXTYusTEkJswEq\",\"r\":37,\"g\":179,\"b\":167,\"label\":\"green\"},{\"id\":\"ni4Hd6OJE1zvIkUMSwtx\",\"r\":153,\"g\":243,\"b\":167,\"label\":\"green\"},{\"id\":\"nxuxfmsOTcPLSGYzSI6a\",\"r\":180,\"g\":148,\"b\":201,\"label\":\"blue\"},{\"id\":\"p0VdherTgKgu0VvpCc5U\",\"r\":108,\"g\":78,\"b\":72,\"label\":\"black\"},{\"id\":\"sVrsD8grW0ZgiqW8BxWI\",\"r\":185,\"g\":2,\"b\":62,\"label\":\"red\"},{\"id\":\"tzlVHQZAC1BiRDrtXIhj\",\"r\":112,\"g\":139,\"b\":7,\"label\":\"green\"},{\"id\":\"ys9DapycJwnqt53MR4y2\",\"r\":174,\"g\":141,\"b\":146,\"label\":\"black\"},{\"id\":\"yxTdMIj47OD3jNFfKNlB\",\"r\":94,\"g\":0,\"b\":21,\"label\":\"black\"}]');\n\n//# sourceURL=webpack://color-detector/./data.json?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dumpData\": () => (/* binding */ dumpData)\n/* harmony export */ });\n/* harmony import */ var _tensor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor.js */ \"./tensor.js\");\n\n\nlet database, tensor, firebase_init = false;\n\nlet rgb = {\n\tr: '',\n\tg: '',\n\tb: ''\n};\n\nfunction setRandomColor()\n{\n\tlet r = Math.floor(Math.random() * 255)\n\t// let r = Math.floor(Math.random() * (255 - 230) + 230)\n\tlet g = Math.floor(Math.random() * 255)\n\t// let g = Math.floor(Math.random() * (255 - 220) + 220)\n\tlet b = Math.floor(Math.random() * 255)\n\t// let b = Math.floor(Math.random() * (114 - 0) + 0)\n\n\tlet color_el = document.querySelector('.color-sample #color')\n\n\tcolor_el.style.backgroundColor = \"rgb(\"+ r + \", \" + g + \", \" + b + \")\"\n\n\trgb.r = r\n\trgb.g = g\n\trgb.b = b\n}\n\nfunction init()\n{\n\tlet start_btn = document.querySelector(\"#start_btn\")\n\tstart_btn.style.display = 'none'\n\n\tlet training_card = document.querySelector(\"#training_card\")\n\ttraining_card.style.display = 'block'\n\n\tsetRandomColor()\n\t\n\tfirebaseInit()\n\n\tlet buttons =  document.querySelectorAll('.color-list .btn')\n\t\n\tfor (var i = 0; i < buttons.length; i++)\n\t{\n\t\tlet button = buttons[i]\n\n\t\tbutton.addEventListener('click', () => {\n\t\t\tsubmitData(button)\n\t\t})\n\t}\n\n\tsetupTryAnotherBtn()\n}\n\nfunction firebaseInit()\n{\n\tif(firebase_init)\n\t{\n\t\treturn false\n\t}\n\t// Your web app's Firebase configuration\n\t// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\tvar firebaseConfig = {\n\t\tapiKey: \"AIzaSyBseBtULwihGRFMvdOy_qF2bRc_B4EONVs\",\n\t\tauthDomain: \"color-detector-d5dce.firebaseapp.com\",\n\t\tprojectId: \"color-detector-d5dce\",\n\t\tstorageBucket: \"color-detector-d5dce.appspot.com\",\n\t\tmessagingSenderId: \"1060350119929\",\n\t\tappId: \"1:1060350119929:web:0950902230c618cdaeb728\",\n\t\tmeasurementId: \"G-JNQL1BLL4M\"\n\t};\n\t// Initialize Firebase\n\tfirebase.initializeApp(firebaseConfig);\n\tfirebase.analytics();\n\n\tdatabase = firebase.firestore()\n\n\tconsole.log('firebase', firebase)\n\n\tfirebase_init = true\n}\n\nfunction setupTryAnotherBtn()\n{\n\tlet try_another = document.querySelector('#try_another_btn')\n\n\ttry_another.addEventListener('click', () => {\n\t\tsetRandomColor()\n\t})\n}\n\nfunction submitData(button)\n{\n\tlet name = button.getAttribute('data-name')\n\tlet message_el = document.querySelector('#submission_message')\n\n\tdatabase.collection('colors-2').add({\n\t\tr: rgb.r,\n\t\tg: rgb.g,\n\t\tb: rgb.b,\n\t\tlabel: name\n\t})\n\t.then(ref => {\n\t\tconsole.log(\"doc ref: \", ref)\n\t\tmessage_el.innerHTML = \"Successfully submitted the data\"\n\t\tsetRandomColor()\n\t})\n\t.catch(error => {\n\t\tconsole.error('error: ', error)\n\t\tmessage_el.innerHTML = \"An error occured\"\n\t})\n}\n\nfunction dumpData()\n{\n\tlet dumped_data = document.querySelector('#dumped_data')\n\tlet dumped_data_table = document.querySelector('#dumped_data table tbody')\n\tif (document.querySelector(\"#dumped_data p\")) document.querySelector(\"#dumped_data p\").remove()\n\n\tdumped_data.querySelector('table tbody').innerHTML = \"\"\n\n\tfirebaseInit()\n\n\tlet colors = []\n\n\tdatabase.collection('colors-2').get()\n\t\t.then(querySnapshot => {\n\n\t\t\tlet counter = document.createElement('p')\n\n\t\t\tcounter.innerHTML = \"Total data size: \" + querySnapshot.size\n\n\t\t\tdumped_data_table.appendChild(counter)\n\n\t\t\tquerySnapshot.forEach(doc => {\n\t\t\t\tlet data = doc.data()\n\t\t\t\tconsole.log(doc.id, ' => ', doc.data())\n\t\t\t\tlet color = {\n\t\t\t\t\tid: doc.id,\n\t\t\t\t\tr: data.r,\n\t\t\t\t\tg: data.g,\n\t\t\t\t\tb: data.b,\n\t\t\t\t\tlabel: data.label\n\t\t\t\t};\n\t\t\t\tcolors.push(color)\n\n\t\t\t\tlet content = \"id: \" + color.id + \", label: \" + color.label\n\n\t\t\t\tconst tr = document.createElement('tr')\n\t\t\t\tconst td = document.createElement('td')\n\n\t\t\t\tconst newContent = document.createTextNode(content)\n\n\t\t\t\ttd.appendChild(newContent)\n\t\t\t\ttr.appendChild(td)\n\n\t\t\t\tdumped_data_table.appendChild(tr)\n\n\t\t\t\ttr.style.backgroundColor = data.label\n\t\t\t})\n\n\t\t\tdumped_data.querySelector(\"#raw\").innerHTML = JSON.stringify(colors)\n\t\t})\n}\n\nfunction initGuess()\n{\n}\n\nfunction initTensor()\n{\n\ttensor = new _tensor_js__WEBPACK_IMPORTED_MODULE_0__.default()\n}\n\nfunction guestColor(rgb)\n{\n\ttensor.guessColor(rgb)\n}\n\nfunction initTraining()\n{\n\ttensor.initTraining()\n}\n\nfunction colorPickerInit()\n{\n\tconsole.log('color', jscolor.install())\n\tlet colorpicker = document.querySelector('#colorpicker')\n\n\tlet rgb = colorpicker.jscolor.toRGBString()\n\trgb = rgb.slice(4, rgb.length - 1)\n\tlet array = rgb.split(',')\n\tlet r = array[0]\n\tlet g = array[1]\n\tlet b = array[2]\n\n\treturn {\n\t\tr: r,\n\t\tg: g,\n\t\tb: b\n\t}\n}\n\nlet start_btn = document.querySelector('#start_btn')\nlet dump_btn = document.querySelector('#dump_btn')\nlet start_guessing = document.querySelector(\"#start_guessing\")\nlet start_training = document.querySelector('#start_training')\nlet guess = document.querySelector('#guess')\n\nif(start_btn)\n{\n\tstart_btn.addEventListener('click', () => {\n\t\tinit()\n\t})\n}\n\nif(dump_btn)\n{\n\tdump_btn.addEventListener('click', () => {\n\t\tdumpData()\n\t})\n}\n\nif(start_guessing)\n{\n\tstart_guessing.addEventListener('click', () => {\n\t\tinitGuess()\n\t})\n}\n\nif(start_training)\n{\n\tstart_training.addEventListener('click', () => {\n\t\tinitTraining()\n\t})\n}\n\nif(guess)\n{\n\tguess.addEventListener('click', () => {\n\t\tguestColor(colorPickerInit())\n\t})\n}\n\ninitTensor()\n\n//# sourceURL=webpack://color-detector/./main.js?");

/***/ }),

/***/ "./tensor.js":
/*!*******************!*\
  !*** ./tensor.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tensor)\n/* harmony export */ });\nclass Tensor\n{\n\tconstructor()\n\t{\n\t\tthis.labelsList = [\n\t\t\t\"red\",\n\t\t\t\"green\",\n\t\t\t\"blue\",\n\t\t\t\"purple\",\n\t\t\t\"pink\",\n\t\t\t\"orange\",\n\t\t\t\"brown\",\n\t\t\t\"black\",\n\t\t\t\"white\"\n\t\t]\n\n\t\tthis.model;\n\n\t\tthis.training_status = document.querySelector('#training_status')\n\t}\n\n\tasync analyze(rgb)\n\t{\n\t\tlet error_el = document.querySelector('#error_message')\n\t\terror_el.innerHTML = \"\"\n\n\t\tconsole.log('running')\n\n\t\tlet model;\n\n\t\ttry\n\t\t{\n\t\t\tmodel = await tf.loadLayersModel(\"localstorage://model-x1\")\n\t\t}\n\t\tcatch(e)\n\t\t{\n\t\t\terror_el.innerHTML = \"Training data doesn't exists in this browser. Train first!\"\n\t\t\tconsole.log('e', e)\n\t\t\treturn;\n\t\t}\n\n\t\tconsole.log('MODEL', model)\n\t\t\n\t\tthis.guess(model, rgb);\n\n\t\tconsole.log('done')\n\t}\n\n\tinitTraining()\n\t{\n\t\tthis.training_status.innerHTML = \"\"\n\n\t\tlet _this = this;\n\n\t\tlet colors = []\n\t\tlet labels = []\n\n\t\tlet data = this.getData()\n\t\ttraining_status.innerHTML = \"Getting data...\"\n\n\t\tdata.forEach(color => {\n\t\t\tlet c = [\n\t\t\t\tcolor.r / 255,\n\t\t\t\tcolor.g / 255,\n\t\t\t\tcolor.b / 255,\n\t\t\t]\n\t\t\tcolors.push(c)\n\t\t\tlabels.push(this.labelsList.indexOf(color.label))\n\t\t})\n\n\t\ttraining_status.innerHTML = \"Labeling...\"\n\n\t\tlet xs = tf.tensor2d(colors)\n\t\tlet labelTensor = tf.tensor1d(labels, 'int32')\n\t\tconsole.log('xs', xs.shape)\n\t\tlabelTensor.print()\n\n\t\tlet ys = tf.oneHot(labelTensor, this.labelsList.length)\n\t\tconsole.log('ys', ys.shape)\n\n\t\txs.print()\n\t\tys.print()\n\n\t\ttraining_status.innerHTML = \"Preparing model...\"\n\t\tthis.model = tf.sequential()\n\n\t\tlet hidden_layer = this.getHiddenLayer(tf)\n\t\tlet output_layer = this.getOutputLayer(tf)\n\n\t\tthis.model.add(hidden_layer)\n\t\tthis.model.add(output_layer)\n\n\t\tlet learning_rate = 0.1\n\t\tconst optimizer = tf.train.sgd(learning_rate)\n\n\t\tthis.model.compile({\n\t\t\toptimizer: optimizer,\n\t\t\tloss: 'categoricalCrossentropy'\n\t\t})\n\n\t\tconst options = {\n\t\t\tepochs: 30,\n\t\t\tvalidationSplit: 0.1,\n\t\t\tshuffle: true\n\t\t}\n\n\t\tlet model = this.model\n\n\t\ttraining_status.innerHTML = \"Training...\"\n\t\tthis.model.fit(xs, ys, options).then(result => {\n\t\t\tconsole.log('result', result)\n\n\t\t\tmodel.save(\"localstorage://model-x1\")\n\t\t\ttraining_status.innerHTML = \"Training completed!\"\n\t\t})\n\t}\n\n\tguessColor(rgb)\n\t{\n\t\tlet _this = this;\n\n\t\tconsole.log('analyzing')\n\t\t_this.analyze(rgb)\n\t}\n\n\tguess(model, rgb)\n\t{\n\t\tlet _this = this\n\n\t\tlet input_xs = tf.tensor2d([\n\t\t\t\t[rgb.r / 255, rgb.g / 255, rgb.b / 255]\n\t\t\t])\n\t\tlet prediction = _this.predict(model, input_xs)\n\n\t\tlet result_el = document.querySelector('#result')\n\t\tprediction = this.labelsList[prediction]\n\t\tresult_el.innerHTML = \"The guess is: \" + prediction\n\t}\n\n\tgetHiddenLayer(tf)\n\t{\n\t\tconsole.log(\"getting hidden layer\")\n\t\treturn tf.layers.dense({\n\t\t\tunits: 8,\n\t\t\tactivation: 'sigmoid',\n\t\t\tinputDim: 3\n\t\t})\n\t}\n\n\tgetOutputLayer(tf)\n\t{\n\t\tconsole.log(\"getting output layer\")\n\t\treturn tf.layers.dense({\n\t\t\tunits: this.labelsList.length,\n\t\t\tactivation: 'softmax'\n\t\t})\n\t}\n\n\tgetData()\n\t{\n\t\tconst data = __webpack_require__(/*! ./data.json */ \"./data.json\")\n\n\t\treturn data\n\t}\n\n\tpredict(model, xs)\n\t{\n\t\tlet prediction =  model.predict(xs)\n\t\treturn prediction.argMax(1).dataSync()[0]\n\t}\n}\n\n//# sourceURL=webpack://color-detector/./tensor.js?");

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