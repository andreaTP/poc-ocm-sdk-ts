import {AWSNodePool_tags} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSNodePool_tagsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSNodePool_tags {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSNodePool_tags();
}
