import {AddonsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonsResponse();
}
