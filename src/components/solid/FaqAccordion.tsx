import { SolidMarkdown } from 'solid-markdown';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';
import { siteMetadata } from '~/constants';

const content = [
  {
    id: '1',
    question: "My notifications aren't showing?",
    answer:
      "Some organizations require applications to request access before allowing access to any data (including notifications) about their repositories.\n\nTo check if Gitify is approved by your organisation you can go to [settings](https://github.com/settings/applications), then click on **Gitify** and scroll to **Organization access**.\n\nAlternatively, if you generated a **PAT**, you can check if it has the correct permissions by going to [settings](https://github.com/settings/tokens) and checking if the token's SSO has been Authorized.",
  },
  {
    id: '2',
    question: 'GitHub Enterprise Server - Authorizing via OAuth?',
    answer:
      'If you want to use OAuth to authenticate with Gitify, first create a new application within _**GitHub** → **Settings** → **Developer settings** → **OAuth Apps**_.\n\nComplete all the fields, ensuring you use https://www.gitify.io/callback as the _**Authorization callback URL**_. Once saved, click on _**Generate a new client secret**_ to get a client/secret pair that you can use with Gitify.',
  },
  {
    id: '3',
    question: 'Unsubscribe from Thread - What does this mean?',
    answer:
      'When you **Unsubscribe from Thread**, you will not receive future notifications for the thread until you either comment on the thread or get a **@mention**.\n\n_Note: If you are watching a repository, you receive notifications for all threads by default._',
  },
  {
    id: '4',
    question: 'Something looks wrong - How can I debug?',
    answer:
      'You can debug Gitify by pressing:\n- macOS: `command + opt + i`\n- Windows + Linux: `ctrl + shift + i`\n\nThis will open the dev tools and then you can see any logs, network requests etc.',
  },
  {
    id: '5',
    question: 'Are there local log files?',
    answer:
      'There sure is! You can find them on your device at:\n- macOS: `~/Library/Logs/gitify`\n- Windows: `%USERPROFILE%\\AppData\\Roaming\\gitify`.',
  },
  {
    id: '6',
    question: 'How can I contribute to Gitify?',
    answer: `You can contribute to Gitify by opening a pull request @[${siteMetadata.repo}](https://github.com/${siteMetadata.repo})! Check out our open issues and see if there's anything you'd like to work on.`,
  },
];

export const FaqAccordion = () => {
  return (
    <Accordion multiple collapsible>
      {content.map((item) => (
        <AccordionItem value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <SolidMarkdown children={item.answer} class="markdown" />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
