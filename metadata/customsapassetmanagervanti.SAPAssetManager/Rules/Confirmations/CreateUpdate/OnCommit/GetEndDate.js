import ODataDate from '../../../Common/Date/ODataDate';
import GetEndDateTime from './GetEndDateTime';

export default function GetEndDate(context) {
    let endDateTime = GetEndDateTime(context);
    //let endDateTime = new Date();
    let odataDate = new ODataDate(endDateTime);
    return odataDate.toDBDateString(context);
}
