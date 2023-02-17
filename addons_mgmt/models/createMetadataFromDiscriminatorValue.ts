import {Metadata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Metadata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Metadata();
}
