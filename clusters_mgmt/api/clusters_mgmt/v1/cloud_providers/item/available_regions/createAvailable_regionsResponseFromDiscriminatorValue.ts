import {Available_regionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailable_regionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Available_regionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Available_regionsResponse();
}
