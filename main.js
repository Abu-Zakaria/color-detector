import Tensor from './tensor.js'

let database, tensor, firebase_init = false;

let rgb = {
	r: '',
	g: '',
	b: ''
};

function setRandomColor()
{
	let r = Math.floor(Math.random() * 255)
	// let r = Math.floor(Math.random() * (255 - 230) + 230)
	let g = Math.floor(Math.random() * 255)
	// let g = Math.floor(Math.random() * (255 - 220) + 220)
	let b = Math.floor(Math.random() * 255)
	// let b = Math.floor(Math.random() * (114 - 0) + 0)

	let color_el = document.querySelector('.color-sample #color')

	color_el.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")"

	rgb.r = r
	rgb.g = g
	rgb.b = b
}

function init()
{
	let start_btn = document.querySelector("#start_btn")
	start_btn.style.display = 'none'

	let training_card = document.querySelector("#training_card")
	training_card.style.display = 'block'

	setRandomColor()
	
	firebaseInit()

	let buttons =  document.querySelectorAll('.color-list .btn')
	
	for (var i = 0; i < buttons.length; i++)
	{
		let button = buttons[i]

		button.addEventListener('click', () => {
			submitData(button)
		})
	}

	setupTryAnotherBtn()
}

function firebaseInit()
{
	if(firebase_init)
	{
		return false
	}
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	var firebaseConfig = {
		apiKey: "AIzaSyBseBtULwihGRFMvdOy_qF2bRc_B4EONVs",
		authDomain: "color-detector-d5dce.firebaseapp.com",
		projectId: "color-detector-d5dce",
		storageBucket: "color-detector-d5dce.appspot.com",
		messagingSenderId: "1060350119929",
		appId: "1:1060350119929:web:0950902230c618cdaeb728",
		measurementId: "G-JNQL1BLL4M"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();

	database = firebase.firestore()

	console.log('firebase', firebase)

	firebase_init = true
}

function setupTryAnotherBtn()
{
	let try_another = document.querySelector('#try_another_btn')

	try_another.addEventListener('click', () => {
		setRandomColor()
	})
}

function submitData(button)
{
	let name = button.getAttribute('data-name')
	let message_el = document.querySelector('#submission_message')

	database.collection('colors').add({
		r: rgb.r,
		g: rgb.g,
		b: rgb.b,
		label: name
	})
	.then(ref => {
		console.log("doc ref: ", ref)
		message_el.innerHTML = "Successfully submitted the data"
		setRandomColor()
	})
	.catch(error => {
		console.error('error: ', error)
		message_el.innerHTML = "An error occured"
	})
}

export function dumpData()
{
	let dumped_data = document.querySelector('#dumped_data')
	let dumped_data_table = document.querySelector('#dumped_data table tbody')
	if (document.querySelector("#dumped_data p")) document.querySelector("#dumped_data p").remove()

	dumped_data.querySelector('table tbody').innerHTML = ""

	firebaseInit()

	let colors = []

	database.collection('colors').get()
		.then(querySnapshot => {

			let counter = document.createElement('p')

			counter.innerHTML = "Total data size: " + querySnapshot.size

			dumped_data_table.appendChild(counter)

			querySnapshot.forEach(doc => {
				let data = doc.data()
				console.log(doc.id, ' => ', doc.data())
				let color = {
					id: doc.id,
					r: data.r,
					g: data.g,
					b: data.b,
					label: data.label
				};
				colors.push(color)

				let content = "id: " + color.id + ", label: " + color.label

				const tr = document.createElement('tr')
				const td = document.createElement('td')

				const newContent = document.createTextNode(content)

				td.appendChild(newContent)
				tr.appendChild(td)

				dumped_data_table.appendChild(tr)

				tr.style.backgroundColor = data.label
			})

			dumped_data.querySelector("#raw").innerHTML = JSON.stringify(colors)
		})
}

function initGuess()
{
}

function initTensor()
{
	tensor = new Tensor()
}

function guestColor(rgb)
{
	tensor.guessColor(rgb)
}

function initTraining()
{
	tensor.initTraining()
}

function colorPickerInit()
{
	console.log('color', jscolor.install())
	let colorpicker = document.querySelector('#colorpicker')

	let rgb = colorpicker.jscolor.toRGBString()
	rgb = rgb.slice(4, rgb.length - 1)
	let array = rgb.split(',')
	let r = array[0]
	let g = array[1]
	let b = array[2]

	return {
		r: r,
		g: g,
		b: b
	}
}

let start_btn = document.querySelector('#start_btn')
let dump_btn = document.querySelector('#dump_btn')
let start_guessing = document.querySelector("#start_guessing")
let start_training = document.querySelector('#start_training')
let guess = document.querySelector('#guess')

if(start_btn)
{
	start_btn.addEventListener('click', () => {
		init()
	})
}

if(dump_btn)
{
	dump_btn.addEventListener('click', () => {
		dumpData()
	})
}

if(start_guessing)
{
	start_guessing.addEventListener('click', () => {
		initGuess()
	})
}

if(start_training)
{
	start_training.addEventListener('click', () => {
		initTraining()
	})
}

if(guess)
{
	guess.addEventListener('click', () => {
		guestColor(colorPickerInit())
	})
}

initTensor()