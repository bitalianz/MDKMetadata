export default function ResetStateApp(context) {
	
	var oBinding = context.getPageProxy().binding;
	
	//Borra oPages
	delete oBinding.oPages;
	
	delete oBinding.Consec;
	delete oBinding.fInicio;
	delete oBinding.hFin;
	delete oBinding.hInicio;
	//delete oBinding.sMsg;
	//delete oBinding.sUserStatus;
	delete oBinding.sUserStatusChar;
		
}