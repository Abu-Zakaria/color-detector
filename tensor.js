export default class Tensor
{
	constructor()
	{
		this.labelsList = [
			"red",
			"green",
			"blue",
			"purple",
			"pink",
			"orange",
			"brown",
			"black",
			"white"
		]

		this.model;
		this.training = false

		this.training_status = document.querySelector('#training_status')
	}

	async analyze(rgb)
	{
		let error_el = document.querySelector('#error_message')
		error_el.innerHTML = ""

		console.log('running')

		let model;

		try
		{
			model = await tf.loadLayersModel("localstorage://model-x1")
		}
		catch(e)
		{
			error_el.innerHTML = "Training data doesn't exists in this browser. Train first!"
			console.log('e', e)
			return;
		}

		console.log('MODEL', model)
		
		this.guess(model, rgb);

		console.log('done')
	}

	initTraining()
	{
		if(this.training)
		{
			return false;
		}

		this.training = true
		this.training_status.innerHTML = ""

		let _this = this;

		let colors = []
		let labels = []

		let data = this.getData()
		training_status.innerHTML = "Getting data..."

		data.forEach(color => {
			let c = [
				color.r / 255,
				color.g / 255,
				color.b / 255,
			]
			colors.push(c)
			labels.push(this.labelsList.indexOf(color.label))
		})

		training_status.innerHTML = "Labeling..."

		let xs = tf.tensor2d(colors)
		let labelTensor = tf.tensor1d(labels, 'int32')
		console.log('xs', xs.shape)
		labelTensor.print()

		let ys = tf.oneHot(labelTensor, this.labelsList.length)
		console.log('ys', ys.shape)

		xs.print()
		ys.print()

		training_status.innerHTML = "Preparing model..."
		this.model = tf.sequential()

		let hidden_layer = this.getHiddenLayer(tf)
		let output_layer = this.getOutputLayer(tf)

		this.model.add(hidden_layer)
		this.model.add(output_layer)

		let learning_rate = 0.5
		const optimizer = tf.train.sgd(learning_rate)

		this.model.compile({
			optimizer: optimizer,
			loss: 'categoricalCrossentropy'
		})

		const options = {
			epochs: 40,
			validationSplit: 0.1,
			shuffle: true
		}

		let model = this.model

		training_status.innerHTML = "Training..."
		this.model.fit(xs, ys, options).then(result => {
			console.log('result', result)

			model.save("localstorage://model-x1")
			training_status.innerHTML = "Training completed!"
			_this.training = false
		})
	}

	guessColor(rgb)
	{
		let _this = this;

		console.log('analyzing')
		_this.analyze(rgb)
	}

	guess(model, rgb)
	{
		let _this = this

		let input_xs = tf.tensor2d([
				[rgb.r / 255, rgb.g / 255, rgb.b / 255]
			])
		let prediction = _this.predict(model, input_xs)

		let result_el = document.querySelector('#result')
		prediction = this.labelsList[prediction]
		result_el.innerHTML = "The guess is: " + prediction
	}

	getHiddenLayer(tf)
	{
		console.log("getting hidden layer")
		return tf.layers.dense({
			units: 8,
			activation: 'sigmoid',
			inputDim: 3
		})
	}

	getOutputLayer(tf)
	{
		console.log("getting output layer")
		return tf.layers.dense({
			units: this.labelsList.length,
			activation: 'softmax'
		})
	}

	getData()
	{
		const data = require('./data.json')

		return data
	}

	predict(model, xs)
	{
		let prediction =  model.predict(xs)
		return prediction.argMax(1).dataSync()[0]
	}
}