import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import css from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();

  const {
    className,
  } = props;

  return (
    <div className={classNames(css.LoginForm, {}, [className])}>
      <Input
        type=""
        className={css.input}
        placeholder={t('Your username')}
        autofocus
      />
      <Input
        type=""
        className={css.input}
        placeholder={t('Your password')}
      />
      <Button
        className={css.loginBtn}
      >
        {t('Log in')}
      </Button>
    </div>
  );
};
