import {Provision_shardsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvision_shardsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Provision_shardsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Provision_shardsResponse();
}
