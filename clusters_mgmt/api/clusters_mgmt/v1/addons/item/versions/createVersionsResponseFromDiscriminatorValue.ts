import {VersionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VersionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VersionsResponse();
}
