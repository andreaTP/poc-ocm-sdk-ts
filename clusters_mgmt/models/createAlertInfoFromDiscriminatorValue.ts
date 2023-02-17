import {AlertInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertInfo();
}
