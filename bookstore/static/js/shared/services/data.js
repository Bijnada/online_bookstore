/**
 * 
 */
angular.module("bookStore").factory("DataService",function($q, $http){
	endPoint="books"
	/*
	 	@param offset: page number: for example if offset is 0 records fetched will be 0 - 4 ,if offset is 1 records fetched will be 5- 9
	 	@return: promise for api 
	 	@description :this method will get the records from audit log according to the offset
	 	
	 */
	var getPopularBooks =  function(){
		return $http.get(config.baseUrl+ 'books/getPopularBooks',{headers: {'Content-Type': 'application/json'}});
	}
	
	return {
		"getPopularBooks":getPopularBooks
	}

})