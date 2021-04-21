import Tensor from './tensor.js'

let database, firebase_init = false;

let rgb = {
	r: '',
	g: '',
	b: ''
};

function setRandomColor()
{
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)

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

function dumpData()
{
	firebaseInit()

	let colors = []

	database.collection('colors').get()
		.then(querySnapshot => {
			let dumped_data_table = document.querySelector('#dumped_data table tbody')
			
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
				colors.push()

				let content = "id: " + color.id + ", label: " + color.label

				const tr = document.createElement('tr')
				const td = document.createElement('td')

				const newContent = document.createTextNode(content)

				td.appendChild(newContent)
				tr.appendChild(td)

				dumped_data_table.appendChild(tr)

				tr.style.backgroundColor = data.label
			})

		})
}

let start_btn = document.querySelector('#start_btn')

start_btn.addEventListener('click', () => {
	init()
})

let dump_btn = document.querySelector('#dump_btn')

dump_btn.addEventListener('click', () => {
	dumpData()
})

// let tensor = new Tensor()

// tensor.init()
