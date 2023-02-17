import {QuotaCost} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotaCostFromDiscriminatorValue(parseNode: ParseNode | undefined) : QuotaCost {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QuotaCost();
}
