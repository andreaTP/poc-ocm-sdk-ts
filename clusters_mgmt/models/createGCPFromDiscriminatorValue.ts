import {GCP} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGCPFromDiscriminatorValue(parseNode: ParseNode | undefined) : GCP {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GCP();
}
