import {AwsEtcdEncryption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAwsEtcdEncryptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AwsEtcdEncryption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AwsEtcdEncryption();
}
