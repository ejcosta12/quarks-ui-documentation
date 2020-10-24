(window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
        pQKA: function (e, a, t) {
            'use strict';
            t.r(a),
                t.d(a, '_frontmatter', function () {
                    return c;
                }),
                t.d(a, 'default', function () {
                    return m;
                });
            var l = t('Fcif'),
                n = t('+I+c'),
                b = (t('mXGw'), t('/FXl')),
                o = t('TjRS'),
                r = t('ZFoC'),
                p = t('7NJV'),
                c = (t('aD51'), {});
            void 0 !== c &&
                c &&
                c === Object(c) &&
                Object.isExtensible(c) &&
                !c.hasOwnProperty('__filemeta') &&
                Object.defineProperty(c, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: '_frontmatter',
                        filename: 'src/docs/typography/Label.mdx',
                    },
                });
            var s = { _frontmatter: c },
                i = o.a;
            function m(e) {
                var a,
                    t,
                    m,
                    u,
                    d = e.components,
                    f = Object(n.a)(e, ['components']);
                return Object(b.b)(
                    i,
                    Object(l.a)({}, s, f, {
                        components: d,
                        mdxType: 'MDXLayout',
                    }),
                    Object(b.b)('h1', { id: 'label' }, 'Label'),
                    Object(b.b)(
                        'p',
                        null,
                        'The ',
                        Object(b.b)('em', { parentName: 'p' }, 'label'),
                        ' element is the formal way of defining a label for an HTML form widget. This is the most important element if you want to create accessible forms - when implemented correctly, screen readers will speak the label of a form element along with related instructions.',
                    ),
                    Object(b.b)(
                        'h3',
                        { id: 'best-practices' },
                        'Best practices',
                    ),
                    Object(b.b)('h2', { id: 'properties' }, 'Properties'),
                    Object(b.b)(r.c, { of: p.Label, mdxType: 'Props' }),
                    Object(b.b)('h2', { id: 'basic-usage' }, 'Basic usage'),
                    Object(b.b)(
                        r.b,
                        {
                            __position: 1,
                            __code: '<Label styling="base">label</Label>',
                            __scope:
                                ((a = {
                                    props: f,
                                    DefaultLayout: o.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Label: p.Label,
                                }),
                                (a.DefaultLayout = o.a),
                                (a._frontmatter = c),
                                a),
                            mdxType: 'Playground',
                        },
                        Object(b.b)(
                            p.Label,
                            { styling: 'base', mdxType: 'Label' },
                            'label',
                        ),
                    ),
                    Object(b.b)('h2', { id: 'customization' }, 'Customization'),
                    Object(b.b)('h3', { id: 'color' }, 'Color'),
                    Object(b.b)(
                        'p',
                        null,
                        "The color utility parses a component's ",
                        Object(b.b)('em', { parentName: 'p' }, 'color'),
                        ' and ',
                        Object(b.b)('em', { parentName: 'p' }, 'bg'),
                        ' props and converts them into CSS declarations. By default the raw value of the prop is returned. Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.',
                    ),
                    Object(b.b)(
                        'p',
                        null,
                        'You can see all the color customization ',
                        Object(b.b)(
                            'a',
                            Object(l.a)(
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
                    Object(b.b)(
                        r.b,
                        {
                            __position: 2,
                            __code:
                                '<Label styling="base" color="blue">\n  label\n</Label>',
                            __scope:
                                ((t = {
                                    props: f,
                                    DefaultLayout: o.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Label: p.Label,
                                }),
                                (t.DefaultLayout = o.a),
                                (t._frontmatter = c),
                                t),
                            mdxType: 'Playground',
                        },
                        Object(b.b)(
                            p.Label,
                            {
                                styling: 'base',
                                color: 'blue',
                                mdxType: 'Label',
                            },
                            'label',
                        ),
                    ),
                    Object(b.b)(
                        'pre',
                        null,
                        Object(b.b)(
                            'code',
                            Object(l.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// picks the value defined in `theme.colors.blue`\n<Label styling=\"base\" color='blue'>label</Label>\n\n// picks up a nested color value using dot notation `theme.colors.gray[0]`\n<Label color='gray.0'>label</Label>\n\n// raw CSS color value\n<Label color='#f00'>label</Label>\n\n// background colors\n<Label bg='blue'>label</Label>\n\n// verbose prop\n<Label backgroundColor='blue'>label</Label>\n",
                        ),
                    ),
                    Object(b.b)('h3', { id: 'space' }, 'Space'),
                    Object(b.b)(
                        'p',
                        null,
                        'The space utility converts shorthand margin and padding props to ',
                        Object(b.b)('em', { parentName: 'p' }, 'margin'),
                        ' and ',
                        Object(b.b)('em', { parentName: 'p' }, 'padding'),
                        ' CSS declarations.',
                    ),
                    Object(b.b)(
                        'p',
                        null,
                        'You can see all the space customization ',
                        Object(b.b)(
                            'a',
                            Object(l.a)(
                                { parentName: 'p' },
                                { href: 'https://styled-system.com/api#space' },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(b.b)(
                        r.b,
                        {
                            __position: 3,
                            __code:
                                '<Label styling="base" m={2}>\n  label\n</Label>',
                            __scope:
                                ((m = {
                                    props: f,
                                    DefaultLayout: o.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Label: p.Label,
                                }),
                                (m.DefaultLayout = o.a),
                                (m._frontmatter = c),
                                m),
                            mdxType: 'Playground',
                        },
                        Object(b.b)(
                            p.Label,
                            { styling: 'base', m: 2, mdxType: 'Label' },
                            'label',
                        ),
                    ),
                    Object(b.b)(
                        'pre',
                        null,
                        Object(b.b)(
                            'code',
                            Object(l.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// sets margin value of `theme.space[2]`\n<Label styling=\"base\" m={2}>label</Label>\n\n// sets a margin value of `16px` since it's greater than `theme.space.length`\n<Label m={16}>label</Label>\n\n// sets margin `'auto'`\n<Label m='auto'>label</Label>\n\n// sets margin `8px` fom mobile devices, `16px` for tablet and `32px` for desktop from the first breakpoint and up\n<Label m={{ mobile:2, tablet:3, desktop:4 }}>label</Label>\n",
                        ),
                    ),
                    Object(b.b)('h3', { id: 'typography' }, 'Typography'),
                    Object(b.b)(
                        'p',
                        null,
                        'Typography props include ',
                        Object(b.b)('em', { parentName: 'p' }, 'fontFamily'),
                        ', ',
                        Object(b.b)('em', { parentName: 'p' }, 'fontSize'),
                        ', ',
                        Object(b.b)('em', { parentName: 'p' }, 'fontWeight'),
                        ', ',
                        Object(b.b)('em', { parentName: 'p' }, 'lineHeight'),
                        ', ',
                        Object(b.b)('em', { parentName: 'p' }, 'letterSpacing'),
                        ', ',
                        Object(b.b)('em', { parentName: 'p' }, 'textAlign'),
                        ', and ',
                        Object(b.b)('em', { parentName: 'p' }, 'fontStyle'),
                        '.',
                    ),
                    Object(b.b)(
                        'p',
                        null,
                        'You can see all the typography customization ',
                        Object(b.b)(
                            'a',
                            Object(l.a)(
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
                    Object(b.b)(
                        r.b,
                        {
                            __position: 4,
                            __code:
                                '<Label styling="base" fontSize={4}>\n  label\n</Label>',
                            __scope:
                                ((u = {
                                    props: f,
                                    DefaultLayout: o.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    Label: p.Label,
                                }),
                                (u.DefaultLayout = o.a),
                                (u._frontmatter = c),
                                u),
                            mdxType: 'Playground',
                        },
                        Object(b.b)(
                            p.Label,
                            { styling: 'base', fontSize: 4, mdxType: 'Label' },
                            'label',
                        ),
                    ),
                    Object(b.b)(
                        'pre',
                        null,
                        Object(b.b)(
                            'code',
                            Object(l.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// font-size of `theme.fontSizes[4]`\n<Label styling=\"base\" fontSize={4}>label</Label>\n\n// font-size `32px`\n<Label fontSize={32}>label</Label>\n\n// font-size `'2em'`\n<Label fontSize='2em'>label</Label>\n\n// font-size `10px` on all viewports and `12px` from the first breakpoint and up\n<Label fontSize={{ mobile:10, desktop:12 }}>label</Label>\n\n// fontFamily\n<Label fontFamily='mono'>label</Label>\n\n// textAlign\n<Label textAlign='center'>label</Label>\n<Label textAlign={{ mobile: 'center', tablet: 'left', desktop: 'center' }}>label</Label>\n\n// lineHeight\n<Label lineHeight='1.25'>label</Label>\n\n// fontWeight\n<Label fontWeight='bold'>label</Label>\n\n// letterSpacing\n<Label letterSpacing='0.1em'>label</Label>\n",
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
                        filename: 'src/docs/typography/Label.mdx',
                    },
                }),
                (m.isMDXComponent = !0);
        },
    },
]);
//# sourceMappingURL=component---src-docs-typography-label-mdx-8a7c530435ffd6cf1c52.js.map
