import { useContext } from 'react';
import { ThemeContext, ThemeUpdaterContext } from '@/context/theme';

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdater() {
    return useContext(ThemeUpdaterContext);
}