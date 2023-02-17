import {SummaryDashboard} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSummaryDashboardFromDiscriminatorValue(parseNode: ParseNode | undefined) : SummaryDashboard {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SummaryDashboard();
}
