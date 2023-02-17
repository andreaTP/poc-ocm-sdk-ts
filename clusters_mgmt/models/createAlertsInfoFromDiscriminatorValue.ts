import {AlertsInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertsInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertsInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertsInfo();
}
