(window.webpackJsonp = window.webpackJsonp || []).push([
    [15],
    {
        TKAK: function (e, a, n) {
            'use strict';
            n.r(a),
                n.d(a, '_frontmatter', function () {
                    return c;
                }),
                n.d(a, 'default', function () {
                    return m;
                });
            var t = n('Fcif'),
                p = n('+I+c'),
                o = (n('mXGw'), n('/FXl')),
                s = n('TjRS'),
                r = n('ZFoC'),
                b = n('7NJV'),
                c = (n('aD51'), {});
            void 0 !== c &&
                c &&
                c === Object(c) &&
                Object.isExtensible(c) &&
                !c.hasOwnProperty('__filemeta') &&
                Object.defineProperty(c, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: '_frontmatter',
                        filename: 'src/docs/typography/Span.mdx',
                    },
                });
            var i = { _frontmatter: c },
                l = s.a;
            function m(e) {
                var a,
                    n,
                    m,
                    u,
                    S = e.components,
                    d = Object(p.a)(e, ['components']);
                return Object(o.b)(
                    l,
                    Object(t.a)({}, i, d, {
                        components: S,
                        mdxType: 'MDXLayout',
                    }),
                    Object(o.b)('h1', { id: 'span' }, 'Span'),
                    Object(o.b)(
                        'p',
                        null,
                        'The ',
                        Object(o.b)('em', { parentName: 'p' }, 'Span'),
                        ' tag is an inline container used to mark up a part of a text, or a part of a document.',
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
                            'The ',
                            Object(o.b)('em', { parentName: 'li' }, 'Span'),
                            ' tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.',
                        ),
                        Object(o.b)(
                            'li',
                            { parentName: 'ul' },
                            'The ',
                            Object(o.b)('em', { parentName: 'li' }, 'Span'),
                            ' tag is much like the ',
                            Object(o.b)('em', { parentName: 'li' }, 'div'),
                            ' element, but ',
                            Object(o.b)('em', { parentName: 'li' }, 'div'),
                            ' is a block-level element and ',
                            Object(o.b)('em', { parentName: 'li' }, 'Span'),
                            ' is an inline element.',
                        ),
                    ),
                    Object(o.b)('h2', { id: 'properties' }, 'Properties'),
                    Object(o.b)(r.c, { of: b.Span, mdxType: 'Props' }),
                    Object(o.b)('h2', { id: 'basic-usage' }, 'Basic usage'),
                    Object(o.b)(
                        r.b,
                        {
                            __position: 1,
                            __code: '<Span styling="base">span</Span>',
                            __scope:
                                ((a = {
                                    props: d,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Span: b.Span,
                                }),
                                (a.DefaultLayout = s.a),
                                (a._frontmatter = c),
                                a),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            b.Span,
                            { styling: 'base', mdxType: 'Span' },
                            'span',
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
                            Object(t.a)(
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
                        r.b,
                        {
                            __position: 2,
                            __code:
                                '<Span styling="base" color="blue">\n  span\n</Span>',
                            __scope:
                                ((n = {
                                    props: d,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Span: b.Span,
                                }),
                                (n.DefaultLayout = s.a),
                                (n._frontmatter = c),
                                n),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            b.Span,
                            { styling: 'base', color: 'blue', mdxType: 'Span' },
                            'span',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(t.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// picks the value defined in `theme.colors.blue`\n<Span styling=\"base\" color='blue'>span</Span>\n\n// picks up a nested color value using dot notation `theme.colors.gray[0]`\n<Span color='gray.0'>span</Span>\n\n// raw CSS color value\n<Span color='#f00'>span</Span>\n\n// background colors\n<Span bg='blue'>span</Span>\n\n// verbose prop\n<Span backgroundColor='blue'>span</Span>\n",
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
                            Object(t.a)(
                                { parentName: 'p' },
                                { href: 'https://styled-system.com/api#space' },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(o.b)(
                        r.b,
                        {
                            __position: 3,
                            __code:
                                '<Span styling="base" m={2}>\n  span\n</Span>',
                            __scope:
                                ((m = {
                                    props: d,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Span: b.Span,
                                }),
                                (m.DefaultLayout = s.a),
                                (m._frontmatter = c),
                                m),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            b.Span,
                            { styling: 'base', m: 2, mdxType: 'Span' },
                            'span',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(t.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// sets margin value of `theme.space[2]`\n<Span styling=\"base\" m={2}>span</Span>\n\n// sets a margin value of `16px` since it's greater than `theme.space.length`\n<Span m={16}>span</Span>\n\n// sets margin `'auto'`\n<Span m='auto'>span</Span>\n\n// sets margin `8px` fom mobile devices, `16px` for tablet and `32px` for desktop from the first breakpoint and up\n<Span m={{ mobile:2, tablet:3, desktop:4 }}>span</Span>\n",
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
                            Object(t.a)(
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
                        r.b,
                        {
                            __position: 4,
                            __code:
                                '<Span styling="base" fontSize={4}>\n  span\n</Span>',
                            __scope:
                                ((u = {
                                    props: d,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Span: b.Span,
                                }),
                                (u.DefaultLayout = s.a),
                                (u._frontmatter = c),
                                u),
                            mdxType: 'Playground',
                        },
                        Object(o.b)(
                            b.Span,
                            { styling: 'base', fontSize: 4, mdxType: 'Span' },
                            'span',
                        ),
                    ),
                    Object(o.b)(
                        'pre',
                        null,
                        Object(o.b)(
                            'code',
                            Object(t.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// font-size of `theme.fontSizes[4]`\n<Span styling=\"base\" fontSize={4}>span</Span>\n\n// font-size `32px`\n<Span fontSize={32}>span</Span>\n\n// font-size `'2em'`\n<Span fontSize='2em'>span</Span>\n\n// font-size `10px` on all viewports and `12px` from the first breakpoint and up\n<Span fontSize={{ mobile:10, desktop:12 }}>span</Span>\n\n// fontFamily\n<Span fontFamily='mono'>span</Span>\n\n// textAlign\n<Span textAlign='center'>span</Span>\n<Span textAlign={{ mobile: 'center', tablet: 'left', desktop: 'center' }}>span</Span>\n\n// lineHeight\n<Span lineHeight='1.25'>span</Span>\n\n// fontWeight\n<Span fontWeight='bold'>span</Span>\n\n// letterSpacing\n<Span letterSpacing='0.1em'>span</Span>\n",
                        ),
                    ),
                );
            }
            void 0 !== m &&
                m &&
                m === Object(m) &&
                Object.isExtensible(m) &&
                !m.hasOwnProperty('__filemeta') &&
                Object.defineProperty(m, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: 'MDXContent',
                        filename: 'src/docs/typography/Span.mdx',
                    },
                }),
                (m.isMDXComponent = !0);
        },
    },
]);
//# sourceMappingURL=component---src-docs-typography-span-mdx-ad1219cb3bcb7502a9aa.js.map
