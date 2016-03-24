/*
name: is used by the value in the options
lat: Latitude of the stadium
long: Longitude of the stadium
You can use this to find the Lat/Long http://timw1984.github.io/WebApp-Location/ 
tex: Name, City and State of the stadium. This will be used in the bottom left of the App to describe what the user is looking at
linki: This will be used in the wikipedia search to find the stadium. i.e. https://en.wikipedia.org/w/index.php?title=Special:Search&search=Reser%20Stadium 
If you could test if the link works with the linki string, I would appreciate it.
Look here for stadium list: 
https://en.wikipedia.org/wiki/List_of_American_football_stadiums_by_capacity
*/
var CFData = [ 
				{name:"OregonState", lat:"44.55952", longi:"-123.28147",tex:"Reser Stadium, Corvallis, Oregon", linki:"Reser Stadium"}, 
				{name:"TexasAM", lat:"30.609706", longi:"-96.340535",tex:"Kyle Field, College Station, Texas", linki:"Kyle Field"}, 
				{name:"UoMich", lat:"42.265833", longi:"-83.748611",tex:"Michigan Stadium, Ann Arbor, Michigan", linki:"Michigan Stadium"}, 
				{name:"PenState", lat:"40.812222", longi:"-77.856111",tex:"Beaver Stadium, University Park, Pennsylvania ", linki:"Beaver Stadium"}, 
				{name:"OhioState", lat:"40.001667", longi:"-83.019722",tex:"Ohio Stadium, Columbus, Ohio", linki:"Ohio Stadium"}, 
				{name:"UoTennessee", lat:"35.955", longi:"-83.925",tex:"Neyland Stadium, Knoxville, Tennessee", linki:"Neyland Stadium"}, 
				{name:"LAState", lat:"30.411944", longi:"-91.185556",tex:"Tiger Stadium, Baton Rouge, Louisiana", linki:"Tiger Stadium"}, 
				{name:"UoAlabama", lat:"33.207778", longi:"-87.550556",tex:"Bryant-Denny Stadium, Tuscaloosa, Alabama", linki:"Bryant-Denny Stadium"}, 
				{name:"UoTexas", lat:"30.283611", longi:" -97.7325",tex:"Darrell K. Royal–Texas Memorial Stadium, Austin, TX", linki:"Darrell K. Royal–Texas Memorial Stadium"}, 
				{name:"UoNebraska", lat:"40.820556", longi:"-96.705556",tex:"Memorial Stadium, Lincoln, Nebraska", linki:"Memorial Stadium"}, 
				{name:"USC", lat:"34.014167", longi:"-118.287778",tex:"Los Angeles Memorial Coliseum, Los Angeles, California", linki:"Los Angeles Memorial Coliseum"}, 
				{name:"UoGeorgia", lat:"33.949722", longi:"-83.373333",tex:"Sanford Stadium, Athens, GA", linki:"Sanford Stadium"}, 
				{name:"UCLA", lat:"34.161389", longi:"-118.1675",tex:"Rose Bowl, Pasadena, California", linki:"Rose Bowl"}, 
				{name:"CottonBowl", lat:"32.779722", longi:"-96.759722",tex:"Cotton Bowl, Fair Park, Dallas, Texas", linki:"Cotton Bowl"}, 
				{name:"UoFlorida", lat:"29.65", longi:"-82.348611",tex:"Ben Hill Griffin Stadium at Florida Field, Gainesville, Floridas", linki:"Ben Hill Griffin Stadium at Florida Field"}, 
				{name:"Auburn", lat:"32.602222", longi:"-85.489167",tex:"Jordan–Hare Stadium, Auburn, Alabama", linki:"Jordan–Hare Stadium"}, 
				{name:"FloridaState", lat:"30.438056", longi:"-84.304444",tex:"Doak Campbell Stadium, Tallahassee, Florida", linki:"Doak Campbell Stadium"}, 
				{name:"UoOklahoma", lat:"35.205833", longi:"-97.4425",tex:"Gaylord Family Oklahoma Memorial Stadium, Norman, Oklahoma", linki:"Gaylord Family Oklahoma Memorial Stadium"}, 
				{name:"Clemson", lat:"34.678611", longi:"-82.843056",tex:"Memorial Stadium, Clemson, South Carolina", linki:"Memorial Stadium"}, 
				{name:"NotreDame", lat:"41.698", longi:"-86.234",tex:"Notre Dame Stadium, South Bend, Indiana", linki:"Notre Dame Stadium"}, 
				{name:"UoSCarolina", lat:"33.973056", longi:"-81.019167",tex:"Williams-Brice Stadium, Columbia, South Carolina", linki:"Williams-Brice Stadium"}, 
				{name:"MichiganState", lat:"42.728056", longi:"-84.484722",tex:"Spartan Stadium, East Lansing, MI", linki:"Spartan Stadium"},
					{name:"UoWashington", lat:"47.650278", longi:"-122.301667",tex:"Husky Stadium, Seattle, WA", linki:"Husky Stadium"},
					{name:"UoArkansas", lat:"36.068056", longi:"-94.178889",tex:"Donald W. Reynolds Razorback Stadium, Fayetteville, AR", linki:"Donald W. Reynolds Razorback Stadium"},
					{name:"UoMissouri", lat:"38.935833", longi:"-92.333056",tex:"Faurot Field, Columbia, Missouri", linki:"Faurot Field"},
					{name:"UoIowa", lat:"41.658611", longi:"-91.551111",tex:"Kinnick Stadium, Iowa City, Iowa", linki:"Kinnick Stadium"},
					{name:"RiceU", lat:"29.71625546217552", longi:"-95.40929282019071",tex:"Rice Stadium (Rice University), Houston, TX", linki:"Rice Stadium (Rice University)"},
					{name:"VirginiaTech", lat:"37.22", longi:"-80.418056",tex:"Lane Stadium, Blacksburg, VA", linki:"Lane Stadium"},
					{name:"AzStU", lat:"33.426389", longi:"-111.9325",tex:"Sun Devil Stadium, Tempe, AZ", linki:"Sun Devil Stadium"}
			]; 
	
	
	///////////// THIS IS IN ALPHABETICAL ORDER //////////////////////////////////////////////////////////
	// "value" corresponds to the "name" in the CFData 
	////////////////////////////////////////////////////
	<option class="CFB" value="Auburn">Auburn</option>
	<option class="CFB" value="Clemson">Clemson</option>
	<option class="CFB" value="CottonBowl">Cotton Bowl</option>
	<option class="CFB" value="FloridaState">Florida State</option>
	<option class="CFB" value="LAState">Louisiana State University</option>
	<option class="CFB" value="MichiganState">Michigan State</option>
	<option class="CFB" value="NotreDame">Notre Dame</option>
	<option class="CFB" value="OhioState">Ohio State</option>
	<option class="CFB" value="OregonState">Oregon State</option>
	<option class="CFB" value="PenState">Penn State</option>
	<option class="CFB" value="TexasAM">Texas A&M</option>
	<option class="CFB" value="UoAlabama">University of Alabama</option>
	<option class="CFB" value="UCLA">University of California</option>
	<option class="CFB" value="UoFlorida">University of Florida</option>
	<option class="CFB" value="UoGeorgia">University of Georgia</option>
	<option class="CFB" value="UoMich">University of Michigan</option>
	<option class="CFB" value="UoNebraska">University of Nebraska</option>
	<option class="CFB" value="UoOklahoma">University of Oklahoma</option>
	<option class="CFB" value="USC">University of Southern California</option>
	<option class="CFB" value="UoSCarolina">University of South Carolina</option>
	<option class="CFB" value="UoTennessee">University of Tennessee</option>
	<option class="CFB" value="UoTexas">University of Texas</option>
	<option class="CFB" value="UoWashington">University of Washington</option>
	<option class="CFB" value="UoArkansas">University of Arkansas</option>
	<option class="CFB" value="UoMissouri">University of Missouri</option>
	<option class="CFB" value="UoIowa">University of Iowa</option>
	<option class="CFB" value="RiceU">Rice University</option>
	<option class="CFB" value="VirginiaTech">Virginia Tech</option>
	<option class="CFB" value="AzStU">Arizona State University</option>
	
	
	
