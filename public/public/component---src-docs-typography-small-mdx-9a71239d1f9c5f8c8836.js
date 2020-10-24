(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        KTYt: function (e, t, l) {
            'use strict';
            l.r(t),
                l.d(t, '_frontmatter', function () {
                    return p;
                }),
                l.d(t, 'default', function () {
                    return i;
                });
            var a = l('Fcif'),
                n = l('+I+c'),
                o = (l('mXGw'), l('/FXl')),
                m = l('TjRS'),
                s = l('ZFoC'),
                r = l('7NJV'),
                p = (l('aD51'), {});
            void 0 !== p &&
                p &&
                p === Object(p) &&
                Object.isExtensible(p) &&
                !p.hasOwnProperty('__filemeta') &&
                Object.defineProperty(p, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: '_frontmatter',
                        filename: 'src/docs/typography/Small.mdx',
                    },
                });
            var c = { _frontmatter: p },
                b = m.a;
            function i(e) {
                var t,
                    l,
                    i,
                    u,
                    S = e.components,
                    d = Object(n.a)(e, ['components']);
                return Object(o.b)(
                    b,
                    Object(a.a)({}, c, d, {
                        components: S,
                        mdxType: 'MDXLayout',
                    }),
                    Object(o.b)('h1', { id: 'small' }, 'Small'),
                    Object(o.b)(
                        'p',
                        null,
                        'The ',
                        Object(o.b)('em', { parentName: 'p' }, 'Small'),
                        ' tag defines smaller text (like copyright and other side-comments).',
                    ),
                    Object(o.b)(
                        'h3',
                        { id: 'best-practices' },
                        'Best practices',
                    ),
                    Object(o.b)(
                        'ul',
                        null,
                        Object(o.b)(
                            'li',
                            { parentName: 'ul' },
                            'This tag is not deprecated, but it is possible to achieve richer (or the same) effect with CSS.',
                        ),
                    ),
                    Object(o.b)('h2', { id: 'properties' }, 'Properties'),
                    Object(o.b)(s.c, { of: r.Small, mdxType: 'Props' }),
                    Object(o.b)('h2', { id: 'basic-usage' }, 'Basic usage'),
                    Object(o.b)(
                        s.b,
                        {
                            __position: 1,
                            __code: '<Small styling="base">small text</Small>',
                            __scope:
                                ((t = {
                                    props: d,
                                    DefaultLayout: m.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    Small: r.Small,
                                }),
                                (t.DefaultLayout = m.a),
                                (t._frontmatter = p),
                                t),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            r.Small,
                            { styling: 'base', mdxType: 'Small' },
                            'small text',
                        ),
                    ),
                    Object(o.b)('h2', { id: 'customization' }, 'Customization'),
                    Object(o.b)('h3', { id: 'color' }, 'Color'),
                    Object(o.b)(
                        'p',
                        null,
                        "The color utility parses a component's ",
                        Object(o.b)('em', { parentName: 'p' }, 'color'),
                        ' and ',
                        Object(o.b)('em', { parentName: 'p' }, 'bg'),
                        ' props and converts them into CSS declarations. By default the raw value of the prop is returned. Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.',
                    ),
                    Object(o.b)(
                        'p',
                        null,
                        'You can see all the color customization ',
                        Object(o.b)(
                            'a',
                            Object(a.a)(
                                { parentName: 'p' },
                                {
                                    href:
                                        'https://styled-system.com/api/#color',
                                },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(o.b)(
                        s.b,
                        {
                            __position: 2,
                            __code:
                                '<Small styling="base" color="blue">\n  small text\n</Small>',
                            __scope:
                                ((l = {
                                    props: d,
                                    DefaultLayout: m.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    Small: r.Small,
                                }),
                                (l.DefaultLayout = m.a),
                                (l._frontmatter = p),
                                l),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            r.Small,
                            {
                                styling: 'base',
                                color: 'blue',
                                mdxType: 'Small',
                            },
                            'small text',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// picks the value defined in `theme.colors.blue`\n<Small styling=\"base\" color='blue'>small text</Small>\n\n// picks up a nested color value using dot notation `theme.colors.gray[0]`\n<Small color='gray.0'>small text</Small>\n\n// raw CSS color value\n<Small color='#f00'>small text</Small>\n\n// background colors\n<Small bg='blue'>small text</Small>\n\n// verbose prop\n<Small backgroundColor='blue'>small text</Small>\n",
                        ),
                    ),
                    Object(o.b)('h3', { id: 'space' }, 'Space'),
                    Object(o.b)(
                        'p',
                        null,
                        'The space utility converts shorthand margin and padding props to ',
                        Object(o.b)('em', { parentName: 'p' }, 'margin'),
                        ' and ',
                        Object(o.b)('em', { parentName: 'p' }, 'padding'),
                        ' CSS declarations.',
                    ),
                    Object(o.b)(
                        'p',
                        null,
                        'You can see all the space customization ',
                        Object(o.b)(
                            'a',
                            Object(a.a)(
                                { parentName: 'p' },
                                { href: 'https://styled-system.com/api#space' },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(o.b)(
                        s.b,
                        {
                            __position: 3,
                            __code:
                                '<Small styling="base" m={2}>\n  small text\n</Small>',
                            __scope:
                                ((i = {
                                    props: d,
                                    DefaultLayout: m.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    Small: r.Small,
                                }),
                                (i.DefaultLayout = m.a),
                                (i._frontmatter = p),
                                i),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            r.Small,
                            { styling: 'base', m: 2, mdxType: 'Small' },
                            'small text',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// sets margin value of `theme.space[2]`\n<Small styling=\"base\" m={2}>small text</Small>\n\n// sets a margin value of `16px` since it's greater than `theme.space.length`\n<Small m={16}>small text</Small>\n\n// sets margin `'auto'`\n<Small m='auto'>small text</Small>\n\n// sets margin `8px` fom mobile devices, `16px` for tablet and `32px` for desktop from the first breakpoint and up\n<Small m={{ mobile:2, tablet:3, desktop:4 }}>small text</Small>\n",
                        ),
                    ),
                    Object(o.b)('h3', { id: 'typography' }, 'Typography'),
                    Object(o.b)(
                        'p',
                        null,
                        'Typography props include ',
                        Object(o.b)('em', { parentName: 'p' }, 'fontFamily'),
                        ', ',
                        Object(o.b)('em', { parentName: 'p' }, 'fontSize'),
                        ', ',
                        Object(o.b)('em', { parentName: 'p' }, 'fontWeight'),
                        ', ',
                        Object(o.b)('em', { parentName: 'p' }, 'lineHeight'),
                        ', ',
                        Object(o.b)('em', { parentName: 'p' }, 'letterSpacing'),
                        ', ',
                        Object(o.b)('em', { parentName: 'p' }, 'textAlign'),
                        ', and ',
                        Object(o.b)('em', { parentName: 'p' }, 'fontStyle'),
                        '.',
                    ),
                    Object(o.b)(
                        'p',
                        null,
                        'You can see all the typography customization ',
                        Object(o.b)(
                            'a',
                            Object(a.a)(
                                { parentName: 'p' },
                                {
                                    href:
                                        'https://styled-system.com/api/#typography',
                                },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(o.b)(
                        s.b,
                        {
                            __position: 4,
                            __code:
                                '<Small styling="base" fontSize={1}>\n  small text\n</Small>',
                            __scope:
                                ((u = {
                                    props: d,
                                    DefaultLayout: m.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    Small: r.Small,
                                }),
                                (u.DefaultLayout = m.a),
                                (u._frontmatter = p),
                                u),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            r.Small,
                            { styling: 'base', fontSize: 1, mdxType: 'Small' },
                            'small text',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// font-size of `theme.fontSizes[1]`\n<Small styling=\"base\" fontSize={1}>small text</Small>\n\n// font-size `32px`\n<Small fontSize={32}>small text</Small>\n\n// font-size `'2em'`\n<Small fontSize='2em'>small text</Small>\n\n// font-size `10px` on all viewports and `12px` from the first breakpoint and up\n<Small fontSize={{ mobile:10, desktop:12 }}>small text</Small>\n\n// fontFamily\n<Small fontFamily='mono'>small text</Small>\n\n// textAlign\n<Small textAlign='center'>small text</Small>\n<Small textAlign={{ mobile: 'center', tablet: 'left', desktop: 'center' }}>small text</Small>\n\n// lineHeight\n<Small lineHeight='1.25'>small text</Small>\n\n// fontWeight\n<Small fontWeight='bold'>small text</Small>\n\n// letterSpacing\n<Small letterSpacing='0.1em'>small text</Small>\n",
                        ),
                    ),
                );
            }
            void 0 !== i &&
                i &&
                i === Object(i) &&
                Object.isExtensible(i) &&
                !i.hasOwnProperty('__filemeta') &&
                Object.defineProperty(i, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: 'MDXContent',
                        filename: 'src/docs/typography/Small.mdx',
                    },
                }),
                (i.isMDXComponent = !0);
        },
    },
]);
//# sourceMappingURL=component---src-docs-typography-small-mdx-9a71239d1f9c5f8c8836.js.map
