import {Sts_policiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSts_policiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sts_policiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sts_policiesResponse();
}
