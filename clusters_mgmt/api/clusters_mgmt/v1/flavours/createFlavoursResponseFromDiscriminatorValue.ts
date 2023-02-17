import {FlavoursResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlavoursResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FlavoursResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FlavoursResponse();
}
