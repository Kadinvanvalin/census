// want to get ride of jquery asap
$(function() {
    console.log( "ready!" );
    const stateFIPS=[
    	{State:'ALASKA', 
    	FIPS:02},			
    	{State:'ALABAMA',
    		FIPS:01},			
    	{State:'ARKANSAS',  
    		FIPS:05},			
    	{State:'AMERICAN SAMOA',
    		FIPS:60},	
    	{State:'ARIZONA', 
    		FIPS:04},	
    	{State:'CALIFORNIA',
    		FIPS:06},			
    	{State:'COLORADO',
    		FIPS:08},	
    	{State:'CONNECTICUT', 
    		FIPS:09},		
    	{State:'DISTRICT OF COLUMBIA', 
    		FIPS:11},			
    	{State:'DELAWARE',
    		FIPS:10},			
    	{State:'FLORIDA',
    		FIPS:12},	
    	{State:'GEORGIA',
    		FIPS:13},			
    	{State:'GUAM',
    		FIPS:66},			
    	{State:'HAWAII',
    		FIPS:15},	
    	{State:'IOWA',
    		FIPS:19},		
    	{State:'IDAHO',
    		FIPS:16},		
    	{State:'ILLINOIS',
    		FIPS:17},			
    	{State:'INDIANA',
    		FIPS:18},			
    	{State:'KANSAS',
    		FIPS:20},		
    	{State:'KENTUCKY',
    		FIPS:21},		
    	{State:'LOUISIANA',
    		FIPS:22},			
    	{State:'MASSACHUSETTS',
    		FIPS:25},		
    	{State:'MARYLAND',
    		FIPS:24},			
    	{State:'MAINE',
    		FIPS:23},			
    	{State:'MICHIGAN',
    		FIPS:26},			
    	{State:'MINNESOTA',
    		FIPS:27},				
    	{State:'MISSOURI',
    		FIPS:29},			
    	{State:'MISSISSIPPI',
    		FIPS:28},
    	{State:'MONTANA',
    		FIPS:30},
    	{State:'NORTH CAROLINA',
    		FIPS:37},
    	{State:'NORTH DAKOTA',
    		FIPS:38},
    	{State:'NEBRASKA',
    		FIPS:31},
    	{State:'NEW HAMPSHIRE',
    		FIPS:33},
    	{State:'NEW JERSEY',
    		FIPS:34},
    	{State:'NEVADA',
    		FIPS:32},
    	{State:'NEW MEXICO',
    		FIPS:35},
    	{State:'NEW YORK',
    		FIPS:36},
    	{State:'OHIO',
    		FIPS:39},	
    	{State:'OKLAHOMA',
    		FIPS:40},
    	{State:'OREGON',
    		FIPS:41},
    	{State:'PENNSYLVANIA',
    		FIPS:42},
    	{State:'PUERTO RICO',
    		FIPS:72},	
    	{State:'RHODE ISLAND',
    		FIPS:44},
    	{State:'SOUTH CAROLINA',
    		FIPS:45},
    	{State:'SOUTH DAKOTA',
    		FIPS:46},	 	 	
    	{State:'TENNESSEE',
    		FIPS:47},
    	{State:'TEXAS',
    		FIPS:48},
    	{State:'UTAH',
    		FIPS:49},
    	{State:'VERMONT',
    		FIPS:50},
    	{State:'VIRGINIA',
    		FIPS:51},
    	{State:'WASHINGTON',
    		FIPS:53},
    	{State:'WEST VIRGINIA',
    		FIPS:54},
    	{State:'WISCONSIN',
    		FIPS:55},
    	{State:'WYOMING',
    		FIPS:56},
    	{State:'VIRGIN ISLANDS',
    		FIPS:78}
    ]
    let form = document.querySelector(".search-form"); function handleForm(event) { event.preventDefault(); } form.addEventListener('submit', handleForm);
let keypress = 0;
let state = stateFIPS[keypress].FIPS;

    let obj = new Object;
    //puts api data into an object
    function createObject(data){
    	console.log(data);
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
				for:"state:" + state,
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
	

	
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex)
//   });
// }

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }
// function findMatches(wordToMatch, stateFIPS){
// 	const regex = new RegExp(wordToMatch, 'gi')
// 	let ary =[]

// 	for(let key in stateFIPS){
// 		let bingo = key.match(regex);
// 		if(bingo){ary.push(bingo);} 
// 	}
// 	return ary;
// }

// function displayMatches(){
// const matchArray = findMatches(this.value, stateFIPS);

// const html = matchArray.map(place =>{
// 	console.log(place);

//  	const regex = new RegExp(this.value, 'gi');
//  	const stateName = place.toString().replace(regex, `<span class="h1">${this.value}</span>`);
//  	return`
//  	<li>
//  		<span class ="name">${stateName}</span>
//  	</li>
//  	`;

//  }).join('');
// 	suggestions.innerHTML = html;
// }





 const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');
document.querySelector('.search-form').addEventListener('keypress', function (e) {
	
    let key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter

      keypress = 5;
      console.log(searchInput);
      test();
    }
});

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
 });