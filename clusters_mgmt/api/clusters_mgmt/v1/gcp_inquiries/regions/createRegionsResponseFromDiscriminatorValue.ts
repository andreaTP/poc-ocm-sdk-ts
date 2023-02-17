import {RegionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegionsResponse();
}
