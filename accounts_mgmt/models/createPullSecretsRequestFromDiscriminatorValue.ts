import {PullSecretsRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPullSecretsRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : PullSecretsRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PullSecretsRequest();
}
