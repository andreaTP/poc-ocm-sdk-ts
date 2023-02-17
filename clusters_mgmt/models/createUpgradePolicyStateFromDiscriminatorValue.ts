import {UpgradePolicyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpgradePolicyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpgradePolicyState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpgradePolicyState();
}
