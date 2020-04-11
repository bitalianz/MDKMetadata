//import { WorkOrderLibrary as libWo} from '../WorkOrderLibrary';
import QueryBuilder from '../../Common/Query/QueryBuilder';


export default function WorkOrdersListViewQueryOption(context) {
/*
    if (context.binding.isHighPriorityList) {
        return libWo.getHighPriorityWorkOrdersQueryOptions();
    } else {
        return libWo.getWorkOrdersListViewQueryOptions();
    }
    */
    let queryBuilder = new QueryBuilder();
    queryBuilder.addExpandStatement('WOExtOrder');
    return queryBuilder.build();
}
