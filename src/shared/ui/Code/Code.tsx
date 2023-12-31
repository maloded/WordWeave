import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';
import { Icon } from '../Icon';

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
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        variant="clear"
      >
        <Icon
          className={cls.copyBtn}
          Svg={CopyIcon}
        />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
