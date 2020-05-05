export default function GetFileName(context) {
	
	var dDate = new Date();
	
	var aAttch = context.getActionBinding().attachment;
	
	var sUri = aAttch[0].uriPath;
	
	var aExt = sUri.split(".");
	
	var sFileName = ('0' + dDate.getDate()).slice(-2) +
              + ('0' + (dDate.getMonth()+1)).slice(-2) +
              + dDate.getFullYear() + "-"
			  +	dDate.getHours()
			  + dDate.getMinutes()
			  + dDate.getSeconds();	
				
	return sFileName + "." + aExt[1];
	
}