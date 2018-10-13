
function ViewModel() {
	var self = this;

	self.floors = ko.observableArray(allFloors)
}

ko.applyBindings(new ViewModel())