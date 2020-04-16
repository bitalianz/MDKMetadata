import libCom from '../Common/Library/CommonLibrary';
import libForm from '../Common/Library/FormatLibrary';

export default function OnPressPartsCategories(context) {
    let item = libForm.getFormattedKeyDescriptionPair(context, libCom.getAppParam(context, 'PART', 'TextItemCategory'),
    context.localizeText('text_item'));
    let stock = libForm.getFormattedKeyDescriptionPair(context, libCom.getAppParam(context, 'PART', 'StockItemCategory') ,
    context.localizeText('stock_item'));
    let nonstock = libForm.getFormattedKeyDescriptionPair(context, libCom.getAppParam(context, 'PART', 'NonStockItemCategory') ,
    context.localizeText('nonstock_item'));
    return [item,stock,nonstock];
}
