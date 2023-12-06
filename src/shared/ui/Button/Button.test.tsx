import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from './Button';

describe('Button test', () => {
    test('Test theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
