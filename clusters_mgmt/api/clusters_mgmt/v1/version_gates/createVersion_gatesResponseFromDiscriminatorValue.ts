import {Version_gatesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersion_gatesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Version_gatesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Version_gatesResponse();
}
