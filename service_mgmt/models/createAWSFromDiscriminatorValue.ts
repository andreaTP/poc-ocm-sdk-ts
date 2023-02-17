import {AWS} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWS {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWS();
}
