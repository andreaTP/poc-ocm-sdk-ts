import {AWSNodePool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSNodePoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSNodePool {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSNodePool();
}
