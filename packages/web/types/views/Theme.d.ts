import { ChangedThemeResponse } from '../hooks/useTheme.js';
import type { DebugProp, ThemeProps } from '../types.js';
export declare function Theme(props: ThemeProps): any;
export declare function useThemedChildren(themeState: ChangedThemeResponse, children: any, props: {
    forceClassName?: boolean;
    shallow?: boolean;
    passPropsToChildren?: boolean;
    debug?: DebugProp;
}, isRoot?: boolean): any;
//# sourceMappingURL=Theme.d.ts.map