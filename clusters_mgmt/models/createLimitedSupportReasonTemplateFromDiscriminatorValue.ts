import {LimitedSupportReasonTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLimitedSupportReasonTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : LimitedSupportReasonTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LimitedSupportReasonTemplate();
}
