import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './page.module.css'

export default function Page() {
  const faqs = [
    {
      question: 'What accessibility features does the streaming platform offer?',
      answer: 'The platform offers a range of accessibility features such as customizable subtitles, audio descriptions, high contrast mode, and keyboard navigation.'
    },
    {
      question: 'How can I navigate through movies on the platform?',
      answer: 'You can browse movies using categories, search by title, or apply filters based on genres, release year, ratings, and more. Additionally, you can use keyboard shortcuts for navigation.'
    },
    {
      question: 'Are subtitles available for all movies?',
      answer: 'The majority of movies on our platform include subtitles in multiple languages. However, a few older or less common titles might not have subtitles available.'
    },
    {
      question: 'Can I adjust the playback speed of the movies?',
      answer: 'Yes, you can change the playback speed to suit your preferences. The platform supports various playback speeds, allowing you to watch content at a pace comfortable for you.'
    },
    {
      question: 'How can I report issues or suggest improvements?',
      answer: 'If you encounter any issues or have suggestions for improvements, please navigate to the "Feedback" section on the platform. You can submit your feedback or report problems there.'
    },
    {
      question: 'Are there parental controls available?',
      answer: 'Yes, the platform offers parental controls that allow you to set restrictions based on content ratings. You can create separate profiles for different family members and customize viewing permissions.'
    },
    {
      question: 'Do you offer audio descriptions for visually impaired users?',
      answer: 'Yes, our platform provides audio descriptions for visually impaired users to enhance their movie-watching experience. These descriptions narrate visual elements, ensuring a comprehensive understanding of the scenes.'
    },
    {
      question: 'Is the platform compatible with screen readers?',
      answer: 'Absolutely! We prioritize accessibility and ensure compatibility with various screen readers. The platform is designed with proper semantic markup for smooth navigation and interaction.'
    },
    {
      question: 'Can I change the language settings for the platform?',
      answer: 'Yes, you can change the language settings to your preferred language. The platform supports multiple languages, allowing you to customize the interface language.'
    },
    {
      question: 'Are there any age restrictions for accessing certain content?',
      answer: 'Yes, some movies might have age restrictions due to mature content. We implement age verification mechanisms to ensure appropriate access to such content.'
    },
    {
      question: 'Is there a limit on the number of devices I can use simultaneously?',
      answer: 'The platform allows multiple devices to stream simultaneously based on the subscription plan. You can refer to your subscription details for the specific number of concurrent streams allowed.'
    },
    {
      question: 'Can I download movies for offline viewing?',
      answer: 'Yes, our platform offers the option to download selected movies for offline viewing. You can download movies and watch them later without an internet connection.'
    },
    // Add more FAQs here
  ];

  return (
    <div>
      <Container id='main-content' className={styles['main-content']}>
        <br/><br/>
        <h1 className={styles['sectionTitle']}>Frequently Asked Questions</h1>
        <br/>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{width: '100%'}}>
            <AccordionSummary className={styles['customAccordionSummary']} expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.customAccordionDetails}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}
