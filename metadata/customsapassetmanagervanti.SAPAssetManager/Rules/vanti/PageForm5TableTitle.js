export default function PageForm5TableTitle(context) {
	
	var oBinding = context.binding;
	
	return oBinding.Recinto + "_" + oBinding.TipoRecinto + "_" + oBinding.Descripcion;
	
}