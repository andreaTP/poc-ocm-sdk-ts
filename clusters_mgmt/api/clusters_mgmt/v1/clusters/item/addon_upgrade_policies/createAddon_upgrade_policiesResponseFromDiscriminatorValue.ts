import {Addon_upgrade_policiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddon_upgrade_policiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Addon_upgrade_policiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Addon_upgrade_policiesResponse();
}
