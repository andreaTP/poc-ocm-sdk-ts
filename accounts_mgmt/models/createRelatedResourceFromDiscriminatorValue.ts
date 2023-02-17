import {RelatedResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelatedResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelatedResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelatedResource();
}
