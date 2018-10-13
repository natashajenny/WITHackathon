function ViewModel() {
	var self = this;

	self.floors = ko.observableArray(allFloors)

    self.items = ko.observableArray(parkingMap);
    self.items_grouped = ko.computed(function(){
        var grouped = [];
        var itemlist = self.items();
        for(var i = 0; i < itemlist.length; i++){
            var row = [];
            for(var j = 0; j < itemlist[i].length; j++){
                row.push(itemlist[i][j]);
			}
			grouped.push(row);
        }
        return grouped;
	});
	self.parkingText = ko.observable("Welcome to Macquarie Centre!");
	self.nextParkingText = "Scanned J3NNY. Allocating your space...";
	
	self.enterCar = function() {
		if (self.nextParkingText === "Welcome! You've been allocated Level 1 R2.") {
			self.items([]);
		}
		self.parkingText(self.nextParkingText);
		self.nextParkingText = "Welcome! You've been allocated Level 1 R2.";
	};
}

ko.applyBindings(new ViewModel())