import {AWS_tags} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWS_tagsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWS_tags {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWS_tags();
}
