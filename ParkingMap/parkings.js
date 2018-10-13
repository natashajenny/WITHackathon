var parkingSize = {
	"width": 43,
	"height": 35
}

function generateBlankMap() {
	var parkings = []
	for (var i = 0; i < parkingSize.width; i++) {
		var row = []
		for (var j = 0; j < parkingSize.height; j++) {
			var col = {
				"colour": "white"
			}
			row.push(col)
		}
		parkings.push(row)
	}

	return parkings
}

function addParkingLots(parkingMap) {
	var ys = [1, 13, 18, 30]
	var xs = [6, 10, 14, 23, 27, 31]

	for (a in xs) {
		for (b in ys) {
			if ((a + b) % 3 == 0) {
				for (var i = 0; i < 3; i++){
					for (var j = 0; j < 4; j++) {
						var x = xs[a] + i
						var y = ys[b] + j
						parkingMap[y][x]["colour"] = "green"
					}
				} 
			} else {
				for (var i = 0; i < 3; i++){
					for (var j = 0; j < 4; j++) {
						var x = xs[a] + i
						var y = ys[b] + j						
						parkingMap[y][x]["colour"] = "red"
					}
				}
			}
		}
	}

	return parkingMap
}

function addWalls(parkingMap) {
	// Horizontals
	parkingMap = addWallBlock(parkingMap, 5, 0, 34, 0)
	parkingMap = addWallBlock(parkingMap, 5, 17, 34, 17)
	parkingMap = addWallBlock(parkingMap, 5, 34, 37, 34)

	parkingMap = addWallBlock(parkingMap, 0, 4, 5, 4)
	parkingMap = addWallBlock(parkingMap, 34, 4, 42, 4)
	parkingMap = addWallBlock(parkingMap, 0, 30, 5, 30)

	// Verticals
	parkingMap = addWallBlock(parkingMap, 5, 0, 5, 4)
	parkingMap = addWallBlock(parkingMap, 9, 0, 9, 4)
	parkingMap = addWallBlock(parkingMap, 13, 0, 13, 4)
	parkingMap = addWallBlock(parkingMap, 17, 0, 17, 4)
	parkingMap = addWallBlock(parkingMap, 22, 0, 22, 4)
	parkingMap = addWallBlock(parkingMap, 26, 0, 26, 4)
	parkingMap = addWallBlock(parkingMap, 30, 0, 30, 4)
	parkingMap = addWallBlock(parkingMap, 34, 0, 34, 4)

	parkingMap = addWallBlock(parkingMap, 5, 13, 5, 21)
	parkingMap = addWallBlock(parkingMap, 9, 13, 9, 21)
	parkingMap = addWallBlock(parkingMap, 13, 13, 13, 21)
	parkingMap = addWallBlock(parkingMap, 17, 13, 17, 21)
	parkingMap = addWallBlock(parkingMap, 22, 13, 22, 21)
	parkingMap = addWallBlock(parkingMap, 26, 13, 26, 21)
	parkingMap = addWallBlock(parkingMap, 30, 13, 30, 21)
	parkingMap = addWallBlock(parkingMap, 34, 13, 34, 21)

	parkingMap = addWallBlock(parkingMap, 5, 31, 5, 34)
	parkingMap = addWallBlock(parkingMap, 9, 31, 9, 34)
	parkingMap = addWallBlock(parkingMap, 13, 31, 13, 34)
	parkingMap = addWallBlock(parkingMap, 17, 31, 17, 34)
	parkingMap = addWallBlock(parkingMap, 22, 31, 22, 34)
	parkingMap = addWallBlock(parkingMap, 26, 31, 26, 34)
	parkingMap = addWallBlock(parkingMap, 30, 31, 30, 34)
	parkingMap = addWallBlock(parkingMap, 34, 31, 34, 34)

	parkingMap = addWallBlock(parkingMap, 0, 4, 0, 30)
	parkingMap = addWallBlock(parkingMap, 42, 4, 42, 6)
	parkingMap = addWallBlock(parkingMap, 42, 11, 42, 34)

	// Squares
	parkingMap = addWallBlock(parkingMap, 19, 3, 20, 4)
	parkingMap = addWallBlock(parkingMap, 19, 13, 20, 14)
	parkingMap = addWallBlock(parkingMap, 19, 20, 20, 21)
	parkingMap = addWallBlock(parkingMap, 19, 30, 20, 31)
	parkingMap = addWallBlock(parkingMap, 36, 30, 37, 31)

	parkingMap = addWallBlock(parkingMap, 34, 13, 42, 21)

	return parkingMap
}

function addWallBlock(parkingMap, x1, y1, x2, y2) {

	var x, y
	for (x = x1; x <= x2; x++) {
		for (y = y1; y <= y2; y ++) {
			parkingMap[x][y]["colour"] = "black"
		}
	}

	return parkingMap
}

var parkingMap = generateBlankMap()
parkingMap = addParkingLots(parkingMap)
parkingMap = addWalls(parkingMap)

console.log(parkingMap)
