import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Button/Button';
import css from './Code.module.scss';
import { Icon } from '../Icon/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text,
  } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(css.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
        className={css.copyBtn}
      >
        <CopyIcon className={css.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
