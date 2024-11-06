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
      'When authenticating via **Personal Access Token (PAT)**:\n- open [GitHub Developer Settings >> Tokens](https://github.com/settings/tokens)\n- confirm that your PAT has the following permissions: `notifications`, `read:user` and `repo`\n\nWhen authenticating via **Gitify GitHub App**:\n- some organizations require GitHub Apps to request access prior to allowing access to organization data (including notifications)\n- to check if Gitify is approved by your organization open [GitHub Developer Settings >> GitHub Apps](https://github.com/settings/applications), then click on _Gitify_ and scroll to _Organization access_',
  },
  {
    id: '2',
    question: 'How to configure OAuth App authentication?',
    answer:
      'To authenticate via an **OAuth App**:\n- create a new application within _GitHub → Settings → Developer settings → OAuth Apps_.\n- Set _Authorization callback URL_ as `https://www.gitify.io/callback`\n- Complete all remaining mandatory fields\n-  Click _Register application_\n- Now click on _Generate a new client secret_\n- Use this client/secret pair within Gitify to authenticate.',
  },
  {
    id: '3',
    question: "What does 'Unsubscribe from Thread' mean?",
    answer:
      'When you **Unsubscribe from Thread**, you will not receive future notifications for the thread until you either comment on the thread or get a **@mention**.\n\n_Note: If you are watching a repository, you receive notifications for all threads by default._',
  },
  {
    id: '4',
    question: 'Something is not working as expected, how can I debug Gitify?',
    answer:
      'Using **Chrome Developer Tools** (console logs, network requests, etc):\n- All platforms: right click tray icon then _Developer → Toggle Developer Tools_\n- macOS: `command + opt + i`\n- Windows: `ctrl + shift + i`\n- Linux: `ctrl + shift + i`\n\nUsing **Application Log Files**:\n- macOS: `~/Library/Logs/gitify`\n- Windows: `%USERPROFILE%\\AppData\\Roaming\\gitify\\logs`\n- Linux: `~/.config/gitify/logs`',
  },
  {
    id: '5',
    question: 'How can I contribute to Gitify?',
    answer: `You can contribute to Gitify by opening an issue or pull request on GitHub at [${siteMetadata.repo}](https://github.com/${siteMetadata.repo}).\n\nCheck out our [open issues](https://github.com/${siteMetadata.repo}/issues) and see if there is any existing ideas that you would like to work on.`,
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
