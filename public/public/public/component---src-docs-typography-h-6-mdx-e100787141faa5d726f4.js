(window.webpackJsonp = window.webpackJsonp || []).push([
    [11],
    {
        jAb7: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, '_frontmatter', function () {
                    return p;
                }),
                n.d(t, 'default', function () {
                    return m;
                });
            var a = n('Fcif'),
                o = n('+I+c'),
                i = (n('mXGw'), n('/FXl')),
                r = n('TjRS'),
                s = n('ZFoC'),
                l = n('7NJV'),
                p = (n('aD51'), {});
            void 0 !== p &&
                p &&
                p === Object(p) &&
                Object.isExtensible(p) &&
                !p.hasOwnProperty('__filemeta') &&
                Object.defineProperty(p, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: '_frontmatter',
                        filename: 'src/docs/typography/H6.mdx',
                    },
                });
            var c = { _frontmatter: p },
                b = r.a;
            function m(e) {
                var t,
                    n,
                    m,
                    u,
                    d = e.components,
                    y = Object(o.a)(e, ['components']);
                return Object(i.b)(
                    b,
                    Object(a.a)({}, c, y, {
                        components: d,
                        mdxType: 'MDXLayout',
                    }),
                    Object(i.b)('h1', { id: 'h6' }, 'H6'),
                    Object(i.b)(
                        'p',
                        null,
                        'Search engines use the headings to index the structure and content of your web pages. Users often skim a page by its headings. It is important to use headings to show the document structure.',
                    ),
                    Object(i.b)(
                        'p',
                        null,
                        'Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS ',
                        Object(i.b)('em', { parentName: 'p' }, 'font-size'),
                        ' property.',
                    ),
                    Object(i.b)(
                        'h3',
                        { id: 'best-practices' },
                        'Best practices',
                    ),
                    Object(i.b)(
                        'ul',
                        null,
                        Object(i.b)(
                            'li',
                            { parentName: 'ul' },
                            "Use HTML headings for headings only. Don't use headings to make text BIG or bold.",
                        ),
                    ),
                    Object(i.b)('h2', { id: 'properties' }, 'Properties'),
                    Object(i.b)(s.c, { of: l.H6, mdxType: 'Props' }),
                    Object(i.b)('h2', { id: 'basic-usage' }, 'Basic usage'),
                    Object(i.b)(
                        s.b,
                        {
                            __position: 1,
                            __code: '<H6 styling="base">Title</H6>',
                            __scope:
                                ((t = {
                                    props: y,
                                    DefaultLayout: r.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    H6: l.H6,
                                }),
                                (t.DefaultLayout = r.a),
                                (t._frontmatter = p),
                                t),
                            mdxType: 'Playground',
                        },
                        Object(i.b)(
                            l.H6,
                            { styling: 'base', mdxType: 'H6' },
                            'Title',
                        ),
                    ),
                    Object(i.b)('h2', { id: 'customization' }, 'Customization'),
                    Object(i.b)('h3', { id: 'color' }, 'Color'),
                    Object(i.b)(
                        'p',
                        null,
                        "The color utility parses a component's ",
                        Object(i.b)('em', { parentName: 'p' }, 'color'),
                        ' and ',
                        Object(i.b)('em', { parentName: 'p' }, 'bg'),
                        ' props and converts them into CSS declarations. By default the raw value of the prop is returned. Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.',
                    ),
                    Object(i.b)(
                        'p',
                        null,
                        'You can see all the color customization ',
                        Object(i.b)(
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
                    Object(i.b)(
                        s.b,
                        {
                            __position: 2,
                            __code:
                                '<H6 styling="base" color="blue">\n  Title\n</H6>',
                            __scope:
                                ((n = {
                                    props: y,
                                    DefaultLayout: r.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    H6: l.H6,
                                }),
                                (n.DefaultLayout = r.a),
                                (n._frontmatter = p),
                                n),
                            mdxType: 'Playground',
                        },
                        Object(i.b)(
                            l.H6,
                            { styling: 'base', color: 'blue', mdxType: 'H6' },
                            'Title',
                        ),
                    ),
                    Object(i.b)(
                        'pre',
                        null,
                        Object(i.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// picks the value defined in `theme.colors.blue`\n<H6 styling=\"base\" color='blue'>Title</H6>\n\n// picks up a nested color value using dot notation `theme.colors.gray[0]`\n<H6 color='gray.0'>Title</H6>\n\n// raw CSS color value\n<H6 color='#f00'>Title</H6>\n\n// background colors\n<H6 bg='blue'>Title</H6>\n\n// verbose prop\n<H6 backgroundColor='blue'>Title</H6>\n",
                        ),
                    ),
                    Object(i.b)('h3', { id: 'space' }, 'Space'),
                    Object(i.b)(
                        'p',
                        null,
                        'The space utility converts shorthand margin and padding props to ',
                        Object(i.b)('em', { parentName: 'p' }, 'margin'),
                        ' and ',
                        Object(i.b)('em', { parentName: 'p' }, 'padding'),
                        ' CSS declarations.',
                    ),
                    Object(i.b)(
                        'p',
                        null,
                        'You can see all the space customization ',
                        Object(i.b)(
                            'a',
                            Object(a.a)(
                                { parentName: 'p' },
                                { href: 'https://styled-system.com/api#space' },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(i.b)(
                        s.b,
                        {
                            __position: 3,
                            __code: '<H6 styling="base" m={2}>\n  Title\n</H6>',
                            __scope:
                                ((m = {
                                    props: y,
                                    DefaultLayout: r.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    H6: l.H6,
                                }),
                                (m.DefaultLayout = r.a),
                                (m._frontmatter = p),
                                m),
                            mdxType: 'Playground',
                        },
                        Object(i.b)(
                            l.H6,
                            { styling: 'base', m: 2, mdxType: 'H6' },
                            'Title',
                        ),
                    ),
                    Object(i.b)(
                        'pre',
                        null,
                        Object(i.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// sets margin value of `theme.space[2]`\n<H6 styling=\"base\" m={2}>Title</H6>\n\n// sets a margin value of `16px` since it's greater than `theme.space.length`\n<H6 m={16}>Title</H6>\n\n// sets margin `'auto'`\n<H6 m='auto'>Title</H6>\n\n// sets margin `8px` fom mobile devices, `16px` for tablet and `32px` for desktop from the first breakpoint and up\n<H6 m={{ mobile:2, tablet:3, desktop:4 }}>Title</H6>\n",
                        ),
                    ),
                    Object(i.b)('h3', { id: 'typography' }, 'Typography'),
                    Object(i.b)(
                        'p',
                        null,
                        'Typography props include ',
                        Object(i.b)('em', { parentName: 'p' }, 'fontFamily'),
                        ', ',
                        Object(i.b)('em', { parentName: 'p' }, 'fontSize'),
                        ', ',
                        Object(i.b)('em', { parentName: 'p' }, 'fontWeight'),
                        ', ',
                        Object(i.b)('em', { parentName: 'p' }, 'lineHeight'),
                        ', ',
                        Object(i.b)('em', { parentName: 'p' }, 'letterSpacing'),
                        ', ',
                        Object(i.b)('em', { parentName: 'p' }, 'textAlign'),
                        ', and ',
                        Object(i.b)('em', { parentName: 'p' }, 'fontStyle'),
                        '.',
                    ),
                    Object(i.b)(
                        'p',
                        null,
                        'You can see all the typography customization ',
                        Object(i.b)(
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
                    Object(i.b)(
                        s.b,
                        {
                            __position: 4,
                            __code:
                                '<H6 styling="base" fontSize={1}>\n  Title\n</H6>',
                            __scope:
                                ((u = {
                                    props: y,
                                    DefaultLayout: r.a,
                                    Playground: s.b,
                                    Props: s.c,
                                    H6: l.H6,
                                }),
                                (u.DefaultLayout = r.a),
                                (u._frontmatter = p),
                                u),
                            mdxType: 'Playground',
                        },
                        Object(i.b)(
                            l.H6,
                            { styling: 'base', fontSize: 1, mdxType: 'H6' },
                            'Title',
                        ),
                    ),
                    Object(i.b)(
                        'pre',
                        null,
                        Object(i.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// font-size of `theme.fontSizes[1]`\n<H6 styling=\"base\" fontSize={1}>Title</H6>\n\n// font-size `32px`\n<H6 fontSize={32}>Title</H6>\n\n// font-size `'2em'`\n<H6 fontSize='2em'>Title</H6>\n\n// font-size `10px` on all viewports and `12px` from the first breakpoint and up\n<H6 fontSize={{ mobile:10, desktop:12 }}>Title</H6>\n\n// fontFamily\n<H6 fontFamily='mono'>Title</H6>\n\n// textAlign\n<H6 textAlign='center'>Title</H6>\n<H6 textAlign={{ mobile: 'center', tablet: 'left', desktop: 'center' }}>Title</H6>\n\n// lineHeight\n<H6 lineHeight='1.25'>Title</H6>\n\n// fontWeight\n<H6 fontWeight='bold'>Title</H6>\n\n// letterSpacing\n<H6 letterSpacing='0.1em'>Title</H6>\n",
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
                        filename: 'src/docs/typography/H6.mdx',
                    },
                }),
                (m.isMDXComponent = !0);
        },
    },
]);
//# sourceMappingURL=component---src-docs-typography-h-6-mdx-e100787141faa5d726f4.js.map
