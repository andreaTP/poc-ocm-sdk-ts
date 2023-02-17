import {LDAPAttributes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLDAPAttributesFromDiscriminatorValue(parseNode: ParseNode | undefined) : LDAPAttributes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LDAPAttributes();
}
