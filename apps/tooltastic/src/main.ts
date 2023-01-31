import { Writebot } from 'writebot';
import TweetGen from 'tweet-gen';

Writebot.initialize({
    apiKey: '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',
})

const generateButton = document.getElementById('generate');
generateButton!.onclick = async () => {
    const toneInput = document.getElementById('tone_input') as HTMLInputElement;
    const descriptionInput = document.getElementById('description_input') as HTMLTextAreaElement;

    const tone = toneInput!.value;
    const description = descriptionInput!.value;


    const response = await Writebot.write(TweetGen, {
        tone,
        description,
    })

    if (Array.isArray(response)) return;

    const responseOutput = document.getElementById('response');

    responseOutput!.innerHTML = response.data.choices[0].text || 'Nothing returned';

}

export {};