// Implements a Contains UDF to facilitate
// wild card searches within text fields.
var containsUdf = {
	name: "contains",
	body: function contains(val, expr){	
		// checks if the expr is contained within val.
		return val.indexOf(expr) > -1 ? true : false;
	}
}