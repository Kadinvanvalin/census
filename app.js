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
    let birthsAndDeaths =[0,0];
    
 let ctx = document.getElementById("myChart");  
let myChart = new Chart(ctx,{
    type: 'polarArea',
    data: {
	  labels: [
        "Births",
        "Deaths"
        
    ],
    datasets: [{
    	 label: 'Birth and deaths', // for legend
        data: 
         birthsAndDeaths
       ,
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
       
    }]
},
    options: {

			
			scales: {
				yAxes:  [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
});



 let form = document.querySelector(".search-form"); function handleForm(event) { event.preventDefault(); } form.addEventListener('submit', handleForm);
let keypress = 0;let canSearch = false;
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
           [birthsAndDeaths[0], birthsAndDeaths[1]] = [obj.BIRTHS, obj.DEATHS];
           myChart.update();
           console.log(myChart.data.datasets);     
   }
	function test(num){
		
		let state= stateFIPS[num].FIPS
				function birthsDeathsState (){
			var URL = "https://api.census.gov/data/2016/pep/components?";
			return $.getJSON(URL, {
				get:"BIRTHS,DEATHS,GEONAME",
				for:"state:" + state,
				PERIOD:"7",
				key:"a912e352a634b630f370a38232e3a6a2c7c01a2e"
			});
		}
		http://api.census.gov/data/2010/sf1?key=[user key]&get=PCT012A015,PCT012A119&for=state:01
		var promised = birthsDeathsState();
		
		promised.done((data) => createObject(data));
		promised.fail(data => setTimeout(test, 10000));

	}

	//start of code
	
	

	console.log(stateFIPS);


function findMatches(wordToMatch, stateFIPS) {
  return stateFIPS.filter(place => {
  	 
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
   
    return place.State.match(regex) 
  });
}



function displayMatches() {
  const matchArray = findMatches(this.value, stateFIPS);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const stateName = place.State.replace(regex, `<span class="hl">${this.value}</span>`);
    console.log(place);
    const dex = stateFIPS.indexOf(place);
    console.log(dex);
   //const stateID = stateFIPS[dex].FIPS;
  //console.log(stateID);
   if(canSearch){
   		test(dex);
   		canSearch = false;
   	}
    return `
      <li>
        <span class="name">${stateName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}




 const searchInput = document.querySelector('.search');
 const suggestions = document.querySelector('.suggestions');
document.querySelector('.search-form').addEventListener('keypress', function (e) {
	
    let key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter

      keypress = 5;
      console.log(searchInput);
      	for(let i=0; i < stateFIPS.length; i++){
      		if(stateFIPS[i].State === $('#query').val()){
      			canSearch = true;
      		}

      		  else{console.log('wrong val');}
      	} 
    
    }
});


 searchInput.addEventListener('change', displayMatches);
 searchInput.addEventListener('keyup', displayMatches);
 });