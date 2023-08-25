import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('About page')}
      <Counter />
    </div>
  );
};

export default AboutPage;
