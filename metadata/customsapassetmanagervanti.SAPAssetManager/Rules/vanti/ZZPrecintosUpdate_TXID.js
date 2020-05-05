export default function ZZPrecintosUpdate_TXID(context) {
	return context.getActionBinding().OrderId + "_" + context.getActionBinding().Indice;
}