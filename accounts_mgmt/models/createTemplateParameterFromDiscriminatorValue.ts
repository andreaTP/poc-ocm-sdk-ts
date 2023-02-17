import {TemplateParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemplateParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemplateParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemplateParameter();
}
