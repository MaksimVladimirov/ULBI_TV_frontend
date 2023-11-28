import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования
export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const throwError = () => setError(!error);

    useEffect(() => {
        if (error === true) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={throwError}>
            {t('throw  Error')}
        </Button>
    );
};
