import {AddonUpgradePolicyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonUpgradePolicyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonUpgradePolicyState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonUpgradePolicyState();
}
