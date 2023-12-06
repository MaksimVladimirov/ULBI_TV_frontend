import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/RenderWithTranslation';

describe('Sidebar', () => {
    test('In the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
