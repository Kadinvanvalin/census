
$(function() {
    console.log( "ready!" );
    const stateFIPS={
    	ALASKA:02,			
    	ALABAMA:01,			
    	ARKANSAS:05,			
    	'AMERICAN SAMOA':60,	
    	ARIZONA:04,	
    	CALIFORNIA:06,			
    	COLORADO:08,	
    	CONNECTICUT:09,		
    	'DISTRICT OF COLUMBIA':11,			
    	DELAWARE:10,			
    	FLORIDA:12,	
    	GEORGIA:13,			
    	GUAM:66,			
    	HAWAII:15,	
    	IOWA:19,		
    	IDAHO:16,		
    	ILLINOIS:17,			
    	INDIANA:18,			
    	KANSAS:20,		
    	KENTUCKY:21,		
    	LOUISIANA:22,			
    	MASSACHUSETTS:25,		
    	MARYLAND:24,			
    	MAINE:23,			
    	MICHIGAN:26,			
    	MINNESOTA:27,				
    	MISSOURI:29,			
    	MISSISSIPPI:28,
    	MONTANA:30,
    	'NORTH CAROLINA':37,
    	'NORTH DAKOTA':38,
    	NEBRASKA:31,
    	'NEW HAMPSHIRE':33,
    	'NEW JERSEY':34,
    	NEVADA:32,
    	'NEW MEXICO':35,
    	'NEW YORK':36,
    	OHIO:39,	
    	OKLAHOMA:40,
    	OREGON:41,
    	PENNSYLVANIA:42,
    	'PUERTO RICO':72,	
    	'RHODE ISLAND':44,
    	'SOUTH CAROLINA':45,
    	'SOUTH DAKOTA':46,	 	 	
    	TENNESSEE:47,
    	TEXAS:48,
    	UTAH:49,
    	VERMONT:50,
    	VIRGINIA:51,
    	WASHINGTON:53,
    	'WEST VIRGINIA':54,
    	WISCONSIN:55,
    	WYOMING:56,
    	'VIRGIN ISLANDS':78
    }



    let obj = new Object;
    //puts api data into an object
    function createObject(data){
    	let stream1 = data[0];
    	let stream2 = data[1];
    	console.log(stream2);
            for(var i = 0; i < stream2.length; i++){
                 obj[stream1[i]] = stream2[i];
           } 
           console.log(obj);     
   }
	function test(){
		//api call 
				function birthsDeathsCalifornia (){
			var URL = "https://api.census.gov/data/2016/pep/components?";
			return $.getJSON(URL, {
				get:"BIRTHS,DEATHS,GEONAME",
				for:"state:72",
				PERIOD:"7",
				key:"a912e352a634b630f370a38232e3a6a2c7c01a2e"
			});
		}
		var promised = birthsDeathsCalifornia();
		
		promised.done((data) => createObject(data));
		promised.fail(data => setTimeout(test, 10000));

	}

	//start of code
	test();
	
 });