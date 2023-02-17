import {CloudResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudResource();
}
