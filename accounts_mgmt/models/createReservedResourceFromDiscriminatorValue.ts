import {ReservedResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReservedResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReservedResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReservedResource();
}
