import {AWSSTSPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSSTSPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSSTSPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSSTSPolicy();
}
