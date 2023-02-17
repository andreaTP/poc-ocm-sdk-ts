import {Upgrade_policiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpgrade_policiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Upgrade_policiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Upgrade_policiesResponse();
}
