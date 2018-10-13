
function ViewModel() {
	var self = this;

	self.floors = ko.observableArray(allFloors)

    self.items = ko.observableArray(
		[{"Name": 'Ryan', "Id": 'flash'},
		{"Name": 'Ryan', "Id": 'flash'},
		{"Name": 'Ryan', "Id": 'flash'},
		{"Name": 'Ryan', "Id": 'flash'},
		{"Name": 'Ryan', "Id": 'flash'}]
	);
    self.items_grouped = ko.computed(function(){
        var grouped = [];
        var itemlist = self.items();
        for(var i = 0; i < itemlist.length; i+=5){
            var row = [];
            for(var j = 0; j < 5; ++j){
                row.push(itemlist[i+j]);
			}
			grouped.push(row);
        }
        return grouped;
    });
}

ko.applyBindings(new ViewModel())