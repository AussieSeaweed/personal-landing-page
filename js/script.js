'use strict'

const minColorComponent = 225
const maxColorComponent = 255
const lineCount = 3
const pointCount = 100
const lineMultiplier = 100
const pointIndexMultiplier = 0.025
const millisMultiplier = 0.0001
const minHeightMultiplier = 0.2
const maxHeightMultiplier = 0.8

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)

  canvas.parent('content')
  frameRate(Infinity)
}

function draw() {
  resizeCanvas(windowWidth, windowHeight)
  background(maxColorComponent)
  noStroke()
  
  let heights = []

  for (let i = 0; i < pointCount; ++i)
    heights.push(windowHeight)

  for (let i = 0; i < lineCount; ++i) {
    for (let j = 0; j < pointCount; ++j) {
      let x = i * lineMultiplier
      let y = j * pointIndexMultiplier
      let z = millis() * millisMultiplier
      heights[j] = heights[j] * (minHeightMultiplier + (maxHeightMultiplier - minHeightMultiplier) * noise(x, y, z))
    }

    fill(map(i + 1, 0, lineCount, maxColorComponent, minColorComponent))

    for (let j = 0; j < pointCount - 1; ++j) {
      let xBegin = map(j, 0, pointCount - 1, 0, windowWidth)
      let xEnd = map(j + 1, 0, pointCount - 1, 0, windowWidth)

      beginShape()
      vertex(xBegin, windowHeight)
      vertex(xBegin, windowHeight - heights[j])
      vertex(xEnd, windowHeight - heights[j + 1])
      vertex(xEnd, windowHeight)
      endShape()
    }
  }
}
