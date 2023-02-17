import {GitlabIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGitlabIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : GitlabIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GitlabIdentityProvider();
}
