'use strict'

class Sketch {
	parentID = 'content'

	setup() {
		let canvas = createCanvas(windowWidth, windowHeight)

		canvas.parent(this.parentID)
		frameRate(Infinity)
	}

	draw() {
	}
}

class WaveSketch extends Sketch {
	minColorComponent = 225
	maxColorComponent = 255
	lineCount = 3
	pointCount = 100
	lineMultiplier = 100
	pointIndexMultiplier = 0.025
	millisMultiplier = 0.0001
	minHeightMultiplier = 0.2
	maxHeightMultiplier = 0.8

	draw() {
		super.draw()

		resizeCanvas(windowWidth, windowHeight)
		background(this.maxColorComponent)
		noStroke()

		let heights = []

		for (let i = 0; i < this.pointCount; ++i)
			heights.push(windowHeight)

		for (let i = 0; i < this.lineCount; ++i) {
			for (let j = 0; j < this.pointCount; ++j) {
				let x = i * this.lineMultiplier
				let y = j * this.pointIndexMultiplier
				let z = millis() * this.millisMultiplier

				heights[j] = heights[j] * (this.minHeightMultiplier + (this.maxHeightMultiplier - this.minHeightMultiplier) * noise(x, y, z))
			}

			fill(map(i + 1, 0, this.lineCount, this.maxColorComponent, this.minColorComponent))

			for (let j = 0; j < this.pointCount - 1; ++j) {
				let xBegin = map(j, 0, this.pointCount - 1, 0, windowWidth)
				let xEnd = map(j + 1, 0, this.pointCount - 1, 0, windowWidth)

				beginShape()
				vertex(xBegin, windowHeight)
				vertex(xBegin, windowHeight - heights[j])
				vertex(xEnd, windowHeight - heights[j + 1])
				vertex(xEnd, windowHeight)
				endShape()
			}
		}
	}
}

const sketches = [new WaveSketch()]
const sketchIndex = Math.floor(Math.random() * sketches.length)
const sketch = sketches[sketchIndex]

function setup() {
	sketch.setup()
}

function draw() {
	sketch.draw()
}
