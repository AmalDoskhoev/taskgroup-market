import compose from 'compose-function';

import { withRouter } from './with-router';
import { withTheme } from './with-theme';

/**
 * @hoc Инициализирующая логика приложения
 */
export const withProviders = compose(withTheme, withRouter);
