import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { t } = useTranslation();

    const handlePageReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    const { className } = props;
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Возникла непредвиденная ошибка')}</p>
            <Button onClick={handlePageReload}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
