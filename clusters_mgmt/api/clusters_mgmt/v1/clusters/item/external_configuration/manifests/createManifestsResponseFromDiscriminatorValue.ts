import {ManifestsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManifestsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManifestsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManifestsResponse();
}
