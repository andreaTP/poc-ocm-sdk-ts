import {Sts_credential_requestsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSts_credential_requestsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sts_credential_requestsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sts_credential_requestsResponse();
}
