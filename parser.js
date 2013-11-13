var rows = [
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 0D 10 0C 0A 0D 02 0F 27 02 72 E4 DC 05 61 79 A7 00 00 00 00 00 00 00 00 00 01 0D 0A",
"68 68 1B 05 00 02 13 45 67 89 90 12 34 E5 18 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 01 02 13 45 67 89 90 12 34 F0 9F 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 01 02 13 45 67 89 90 12 34 9F E5 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 01 02 13 45 67 89 90 12 34 18 F0 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 01 02 13 45 67 89 90 12 34 9F E5 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 01 02 13 45 67 89 90 12 34 F0 9F 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 00 02 13 45 67 89 90 12 34 E5 18 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 1B 05 00 02 13 45 67 89 90 12 34 F0 9F 1A 00 2A 1F 16 1A 12 1C 18 27 28 1D 1D 10 00 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 1F 10 0C 0A 0D 02 33 12 02 72 E5 1B 05 61 79 83 03 00 B1 00 00 00 00 00 00 01 0D 0A",
"68 68 19 05 00 02 13 45 67 89 90 12 34 48 02 1A 01 2A 26 1F 25 29 19 1D 2A 28 28 24 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 26 10 0C 0A 0D 02 39 39 02 72 DD 95 05 61 7E BA 01 01 0A 00 00 00 00 00 00 01 0D 0A",
"68 68 19 05 01 02 13 45 67 89 90 12 34 88 02 1A 01 2A 24 24 28 2A 28 27 20 22 28 11 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 37 10 0C 0A 0D 03 06 39 02 73 88 35 05 61 69 0F 2B 00 97 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 3B 10 0C 0A 0D 03 08 1C 02 73 9D 86 05 61 41 F4 00 00 3E 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 01 10 0C 0A 0D 03 09 1B 02 73 9D 20 05 61 40 DD 01 01 22 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 04 10 0C 0A 0D 03 0B 08 02 73 8E 9E 05 61 65 3A 05 01 34 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 08 10 0C 0A 0D 03 0C 08 02 73 8C 94 05 61 65 A0 1A 01 47 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 0C 10 0C 0A 0D 03 0D 26 02 73 41 CD 05 61 61 47 20 01 4B 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 13 10 0C 0A 0D 03 10 26 02 73 13 77 05 61 6A F2 00 00 00 00 00 00 00 00 00 01 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 F0 9F 1A 01 20 22 22 2B 27 26 25 23 20 17 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 E5 18 1A 01 20 23 23 2B 2A 2A 24 2B 27 1D 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 19 10 0C 0A 0D 03 1B 23 02 73 02 1C 05 61 6F AE 33 01 58 00 00 00 00 00 00 01 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 9F E5 1A 01 20 12 1C 1D 15 20 16 13 24 00 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 B0 00 1A 00 20 11 1C 19 19 1D 15 20 24 00 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 00 08 1A 00 20 11 1C 19 19 1D 15 20 24 00 0D 0A",
"68 68 25 07 FB 02 13 45 67 89 90 12 34 00 01 10 0C 0A 0D 03 34 19 02 72 E4 94 05 61 79 BC 0F 01 18 06 31 25 00 00 00 00 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 03 10 0C 0A 0D 03 35 22 02 72 E4 8B 05 61 79 71 00 00 00 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 07 10 0C 0A 0D 03 36 22 02 72 E4 A3 05 61 7A 6D 00 00 00 00 00 00 00 00 00 01 0D 0A",
"68 68 25 00 00 02 13 45 67 89 90 12 34 00 0C 10 0C 0A 0D 03 38 04 02 72 E4 A9 05 61 7A 6D 00 00 00 00 00 00 00 00 00 01 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 E5 18 1A 00 2A 1B 19 11 19 1C 1F 1A 21 12 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 F0 9F 1A 00 2A 1B 19 11 19 1C 1F 1A 21 12 0D 0A",
"68 68 18 05 01 02 13 45 67 89 90 12 34 E5 18 1A 00 2A 1B 19 11 19 1C 1F 1A 21 12 0D 0A"
];

function getItemsByKey(key, val, container){
	var matchKey = function(o){ return o[key] === val ? o : false; }
	var filterContainer = function(b){ return b; };
	var obj = container
		.map(matchKey)
		.filter(filterContainer);
	return obj.length? obj : false;
}
function mapHex(base){
	base.offsets.reduce(function(a,b,c){ 
		base[base.offsetNames[c-1]] = (a>-1)?
			base.response.slice(a,(b>-1)?b:base.response.length+b):
			base.response.slice(a); 
		return b; 
	});
	delete base.offsetNames;
	delete base.offsets;
	delete base.response;
}
function convertHexToInt(hex){
	return parseInt(hex.map(function(n,i){ return parseInt(n,16);}).join(""),10);
}
function convertHexToGPS(hex,dir){
	var base = convertHexToInt([hex.join("")])/30000;
	var minSec = (base%60);
	var degrees = (base-minSec)/60;
	var minutes = Math.floor(minSec);
	var seconds = Math.round((minSec-minutes)*1e4);
	
	return (degrees + minutes/60 + seconds/3600)*dir;
}

function parseCommunication(resp) {
	var data = {
		offsetNames: ["header","contentLength","reserved","ID","infoSerial",
			"protocol","informationHex","endMark"],
		offsets: [0,2,3,5,13,15,16,40,42],
		response: null,
		information: {
			offsetNames: ["dateTimeHex","latitude","longitude","speed","course",
				"reserved","statusHex"],
			offsets: [0,6,10,14,15,17,20,24],
			dateTime: {
				offsetNames: ["year","month","day","hour","minute","second"],
				offsets: [0,1,2,3,4,5,6]	
			}
		}
	}
	
	data.response = resp.split(" ");
	mapHex(data);

	data.information.response = data.informationHex;
	mapHex(data.information);
	delete data.informationHex;

	data.information.dateTime.response = data.information.dateTimeHex;
	mapHex(data.information.dateTime);
	delete data.information.dateTimeHex;
		
	["year","month","day","hour","minute","second"].forEach(function(n,i){
		data.information.dateTime[n] = convertHexToInt(
			data.information.dateTime[n]
		);
	});
		
	data.information.Date = new Date(
		[
			2000 + data.information.dateTime.year, 
			data.information.dateTime.month-1, 
			data.information.dateTime.day
		].join("-") + " " + 
		[
			data.information.dateTime.hour, 
			data.information.dateTime.minute, 
			data.information.dateTime.second
		].join(":")
	);

	data.ID = convertHexToInt(data.ID);
	data.infoSerial = convertHexToInt(data.infoSerial);

	["speed","course"].forEach(function(n,i){
		data.information[n] = convertHexToInt(data.information[n]);
	});
	
	data.information.status = {
		located:	(data.information.statusHex[0] === "01"),
		latitude:	(data.information.statusHex[1] === "01")? 1:-1,
		longitude:	(data.information.statusHex[2] === "01")? 1:-1,
		charged:	(data.information.statusHex[3] === "01")
	}
	delete data.information.statusHex;	

	["latitude","longitude"].forEach(function(n,i){
		data.information[n] = convertHexToGPS(
			data.information[n], 
			data.information.status[n]
		);
	});

	return data;
}

function parseHeartbeat(resp) {
	var data = {
		offsetNames: ["header","contentLength","battery","signalStrength","ID",
			"infoSerial","protocol","informationHex","endMark"],
		offsets: [0,2,3,4,5,13,15,16,-2],
		response: null,
		information: {
			offsetNames: ["status","satellites","satellitesHex"],
			//Max set to a 100 satellites, this is arbitrary,
			//as of May 2013, 64 GPS satellites have been launched.
			offsets: [0,1,2,100] 
		}
	}
	
	data.response = resp.split(" ");
	mapHex(data);
	
	data.information.response = data.informationHex;
	mapHex(data.information);
	delete data.informationHex;
	
	data.ID = convertHexToInt(data.ID);
	data.infoSerial = convertHexToInt(data.infoSerial);
	
	data.battery = ["off/lowest","to low to send","low, critical","low, warning",
	"medium loaded","loaded","fully loaded"][convertHexToInt(data.battery)];
	
	data.signalStrength = ["no signal","weaker signal","weak signal",
	"good signal","strong signal"][convertHexToInt(data.signalStrength)];
	
	data.information.status = ["Not located","real-time GPS",
	"DGPS"][convertHexToInt(data.information.status)];
	
	data.information.satellites = convertHexToInt(data.information.satellites);
	
	data.information.satellitesHex.forEach(function(n,i){
		data.information["Satellite_" + i + "_SNR"] = parseInt(n,16);
	});
	delete data.information.satellitesHex;
	
	return data;
}

function parseRow(hex){
	var row;
	switch(hex.slice(45,47)) {
		case "10":
			row = parseCommunication(hex);
			row.type = "com";
		break;
		case "1A":		
			row = parseHeartbeat(hex);
			row.type = "heartbeat";
		break;	
	}	
	return row;
}
