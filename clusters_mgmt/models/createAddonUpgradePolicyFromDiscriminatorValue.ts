import {AddonUpgradePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonUpgradePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonUpgradePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonUpgradePolicy();
}
