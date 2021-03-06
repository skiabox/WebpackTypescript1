import '../css/main.css';
import '../css/input-elements.css';

import {secretButton, secretParagraph } from './dom-loader';

let showSecret: boolean = false;

secretButton!.addEventListener('click', toggleSecretState);

updateSecretParagraph();

//methods
function toggleSecretState(): void
{
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton(): void
{
    if (showSecret)
        secretButton!.textContent = 'Hide the Secret';
    else
        secretButton!.textContent = 'Show the Secret';
}

function updateSecretParagraph(): void
{
    if (showSecret)
        (<HTMLElement>secretParagraph!).style.display = 'block';
    else
        (<HTMLElement>secretParagraph!).style.display = 'none';
}