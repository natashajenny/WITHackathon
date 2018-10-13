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
}

ko.applyBindings(new ViewModel())