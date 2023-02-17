import {SkuRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkuRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkuRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkuRule();
}
