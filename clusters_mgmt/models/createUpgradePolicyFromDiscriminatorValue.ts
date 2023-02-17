import {UpgradePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpgradePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpgradePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpgradePolicy();
}
