//import Loc from './clLocation';

export default function ZZCamposAdicionalesUpdate_Coordenadas(context) {

	/*Loc.getCurrentLocation(context, function (oLoc) {
		var sLong = oLoc.longitude.toString();
		var sLat = oLoc.latitude.toString();
 
		return sLat + "," + sLong;
		
	});*/
	
	var oBinding = context.getPageProxy().binding;
	
	return oBinding.ubicacionFinal;
	
}