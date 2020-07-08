import Loc from './clLocation';
export default function ZZCoordenadasCreate_TXTID() {
	
	var sLat = Loc._lat;
	var sLong = Loc._long;
	
	return sLat + "_" + sLong;
	
}