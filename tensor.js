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
	}

	init()
	{
		let colors = []
		let labels = []

		let data = this.getData()

		data.forEach(color => {
			let c = [
				color.r / 255,
				color.g / 255,
				color.b / 255,
			]
			colors.push(c)
			labels.push(this.labelsList.indexOf(color.label))
		})

		let xs = tf.tensor2d(colors)
		let labelTensor = tf.tensor1d(labels, 'int32')
		console.log('xs', xs.shape)
		labelTensor.print()

		let ys = tf.oneHot(labelTensor, this.labelsList.length)
		console.log('ys', ys.shape)

		xs.print()
		ys.print()

		this.model = tf.sequential()

		let hidden_layer = this.getHiddenLayer(tf)
		let output_layer = this.getOutputLayer(tf)

		this.model.add(hidden_layer)
		this.model.add(output_layer)

		let learning_rate = 0.1
		const optimizer = tf.train.sgd(learning_rate)

		this.model.compile({
			optimizer: optimizer,
			loss: 'categoricalCrossentropy'
		})

		const options = {
			epochs: 80
		}

		this.model.fit(xs, ys, options).then(result => {
			console.log('result', result)
		})
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
}