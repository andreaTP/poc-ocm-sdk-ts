import {SyncsetsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncsetsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncsetsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncsetsResponse();
}
