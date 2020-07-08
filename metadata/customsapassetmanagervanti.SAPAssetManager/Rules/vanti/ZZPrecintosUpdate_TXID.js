export default function ZZPrecintosUpdate_TXID(context) {
	return context.getPageProxy().getActionBinding().OrderId + "_" + context.getPageProxy().getActionBinding().Consec;
}