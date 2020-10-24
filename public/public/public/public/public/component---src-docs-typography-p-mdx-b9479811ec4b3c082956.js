(window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
        aqKj: function (e, t, i) {
            'use strict';
            i.r(t),
                i.d(t, '_frontmatter', function () {
                    return p;
                }),
                i.d(t, 'default', function () {
                    return b;
                });
            var a = i('Fcif'),
                o = i('+I+c'),
                n = (i('mXGw'), i('/FXl')),
                s = i('TjRS'),
                r = i('ZFoC'),
                c = i('7NJV'),
                p = (i('aD51'), {});
            void 0 !== p &&
                p &&
                p === Object(p) &&
                Object.isExtensible(p) &&
                !p.hasOwnProperty('__filemeta') &&
                Object.defineProperty(p, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: '_frontmatter',
                        filename: 'src/docs/typography/P.mdx',
                    },
                });
            var l = { _frontmatter: p },
                m = s.a;
            function b(e) {
                var t,
                    i,
                    b,
                    u,
                    d = e.components,
                    g = Object(o.a)(e, ['components']);
                return Object(n.b)(
                    m,
                    Object(a.a)({}, l, g, {
                        components: d,
                        mdxType: 'MDXLayout',
                    }),
                    Object(n.b)('h1', { id: 'p' }, 'P'),
                    Object(n.b)(
                        'p',
                        null,
                        'The HTML ',
                        Object(n.b)('em', { parentName: 'p' }, 'P'),
                        ' element defines a paragraph.',
                    ),
                    Object(n.b)(
                        'p',
                        null,
                        'A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.',
                    ),
                    Object(n.b)(
                        'h3',
                        { id: 'best-practices' },
                        'Best practices',
                    ),
                    Object(n.b)(
                        'ul',
                        null,
                        Object(n.b)(
                            'li',
                            { parentName: 'ul' },
                            'You cannot be sure how HTML will be displayed.',
                        ),
                        Object(n.b)(
                            'li',
                            { parentName: 'ul' },
                            'Large or small screens, and resized windows will create different results.',
                        ),
                        Object(n.b)(
                            'li',
                            { parentName: 'ul' },
                            'With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.',
                        ),
                        Object(n.b)(
                            'li',
                            { parentName: 'ul' },
                            'The browser will automatically remove any extra spaces and lines when the page is displayed',
                        ),
                    ),
                    Object(n.b)('h2', { id: 'properties' }, 'Properties'),
                    Object(n.b)(r.c, { of: c.P, mdxType: 'Props' }),
                    Object(n.b)('h2', { id: 'basic-usage' }, 'Basic usage'),
                    Object(n.b)(
                        r.b,
                        {
                            __position: 1,
                            __code:
                                '<P styling="base">\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n</P>',
                            __scope:
                                ((t = {
                                    props: g,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    P: c.P,
                                }),
                                (t.DefaultLayout = s.a),
                                (t._frontmatter = p),
                                t),
                            mdxType: 'Playground',
                        },
                        Object(n.b)(
                            c.P,
                            { styling: 'base', mdxType: 'P' },
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                        ),
                    ),
                    Object(n.b)('h2', { id: 'customization' }, 'Customization'),
                    Object(n.b)('h3', { id: 'color' }, 'Color'),
                    Object(n.b)(
                        'p',
                        null,
                        "The color utility parses a component's ",
                        Object(n.b)('em', { parentName: 'p' }, 'color'),
                        ' and ',
                        Object(n.b)('em', { parentName: 'p' }, 'bg'),
                        ' props and converts them into CSS declarations. By default the raw value of the prop is returned. Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.',
                    ),
                    Object(n.b)(
                        'p',
                        null,
                        'You can see all the color customization ',
                        Object(n.b)(
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
                    Object(n.b)(
                        r.b,
                        {
                            __position: 2,
                            __code:
                                '<P styling="base" color="blue">\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n</P>',
                            __scope:
                                ((i = {
                                    props: g,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    P: c.P,
                                }),
                                (i.DefaultLayout = s.a),
                                (i._frontmatter = p),
                                i),
                            mdxType: 'Playground',
                        },
                        Object(n.b)(
                            c.P,
                            { styling: 'base', color: 'blue', mdxType: 'P' },
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                        ),
                    ),
                    Object(n.b)(
                        'pre',
                        null,
                        Object(n.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// picks the value defined in `theme.colors.blue`\n<P styling=\"base\" color='blue'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// picks up a nested color value using dot notation `theme.colors.gray[0]`\n<P color='gray.0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// raw CSS color value\n<P color='#f00'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// background colors\n<P bg='blue'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// verbose prop\n<P backgroundColor='blue'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n",
                        ),
                    ),
                    Object(n.b)('h3', { id: 'space' }, 'Space'),
                    Object(n.b)(
                        'p',
                        null,
                        'The space utility converts shorthand margin and padding props to ',
                        Object(n.b)('em', { parentName: 'p' }, 'margin'),
                        ' and ',
                        Object(n.b)('em', { parentName: 'p' }, 'padding'),
                        ' CSS declarations.',
                    ),
                    Object(n.b)(
                        'p',
                        null,
                        'You can see all the space customization ',
                        Object(n.b)(
                            'a',
                            Object(a.a)(
                                { parentName: 'p' },
                                { href: 'https://styled-system.com/api#space' },
                            ),
                            'here',
                        ),
                        '.',
                    ),
                    Object(n.b)(
                        r.b,
                        {
                            __position: 3,
                            __code:
                                '<P styling="base" m={2}>\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n</P>',
                            __scope:
                                ((b = {
                                    props: g,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    P: c.P,
                                }),
                                (b.DefaultLayout = s.a),
                                (b._frontmatter = p),
                                b),
                            mdxType: 'Playground',
                        },
                        Object(n.b)(
                            c.P,
                            { styling: 'base', m: 2, mdxType: 'P' },
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                        ),
                    ),
                    Object(n.b)(
                        'pre',
                        null,
                        Object(n.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// sets margin value of `theme.space[2]`\n<P styling=\"base\" m={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// sets a margin value of `16px` since it's greater than `theme.space.length`\n<P m={16}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// sets margin `'auto'`\n<P m='auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// sets margin `8px` fom mobile devices, `16px` for tablet and `32px` for desktop from the first breakpoint and up\n<P m={{ mobile:2, tablet:3, desktop:4 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n",
                        ),
                    ),
                    Object(n.b)('h3', { id: 'typography' }, 'Typography'),
                    Object(n.b)(
                        'p',
                        null,
                        'Typography props include ',
                        Object(n.b)('em', { parentName: 'p' }, 'fontFamily'),
                        ', ',
                        Object(n.b)('em', { parentName: 'p' }, 'fontSize'),
                        ', ',
                        Object(n.b)('em', { parentName: 'p' }, 'fontWeight'),
                        ', ',
                        Object(n.b)('em', { parentName: 'p' }, 'lineHeight'),
                        ', ',
                        Object(n.b)('em', { parentName: 'p' }, 'letterSpacing'),
                        ', ',
                        Object(n.b)('em', { parentName: 'p' }, 'textAlign'),
                        ', and ',
                        Object(n.b)('em', { parentName: 'p' }, 'fontStyle'),
                        '.',
                    ),
                    Object(n.b)(
                        'p',
                        null,
                        'You can see all the typography customization ',
                        Object(n.b)(
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
                    Object(n.b)(
                        r.b,
                        {
                            __position: 4,
                            __code:
                                '<P styling="base" fontSize={4}>\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n</P>',
                            __scope:
                                ((u = {
                                    props: g,
                                    DefaultLayout: s.a,
                                    Playground: r.b,
                                    Props: r.c,
                                    P: c.P,
                                }),
                                (u.DefaultLayout = s.a),
                                (u._frontmatter = p),
                                u),
                            mdxType: 'Playground',
                        },
                        Object(n.b)(
                            c.P,
                            { styling: 'base', fontSize: 4, mdxType: 'P' },
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                        ),
                    ),
                    Object(n.b)(
                        'pre',
                        null,
                        Object(n.b)(
                            'code',
                            Object(a.a)(
                                { parentName: 'pre' },
                                { className: 'language-javascript' },
                            ),
                            "// font-size of `theme.fontSizes[4]`\n<P styling=\"base\" fontSize={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// font-size `32px`\n<P fontSize={32}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// font-size `'2em'`\n<P fontSize='2em'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// font-size `10px` on all viewports and `12px` from the first breakpoint and up\n<P fontSize={{ mobile:10, desktop:12 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// fontFamily\n<P fontFamily='mono'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// textAlign\n<P textAlign='center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n<P textAlign={{ mobile: 'center', tablet: 'left', desktop: 'center' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// lineHeight\n<P lineHeight='1.25'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// fontWeight\n<P fontWeight='bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n\n// letterSpacing\n<P letterSpacing='0.1em'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>\n",
                        ),
                    ),
                );
            }
            void 0 !== b &&
                b &&
                b === Object(b) &&
                Object.isExtensible(b) &&
                !b.hasOwnProperty('__filemeta') &&
                Object.defineProperty(b, '__filemeta', {
                    configurable: !0,
                    value: {
                        name: 'MDXContent',
                        filename: 'src/docs/typography/P.mdx',
                    },
                }),
                (b.isMDXComponent = !0);
        },
    },
]);
//# sourceMappingURL=component---src-docs-typography-p-mdx-b9479811ec4b3c082956.js.map
