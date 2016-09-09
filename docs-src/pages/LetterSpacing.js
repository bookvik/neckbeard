import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * LetterSpacing Page
 */
const snippet = `<div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
    Different Letter Spacing Depending on Breakpoint
</div>
`

const LetterSpacing = () => (
    <div>
        <H1>
            Letter Spacing
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Name</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls1</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing .1rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls2</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .2rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls3</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .3rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls4</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .4rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls5</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .5rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls6</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .6rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls7</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .7rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls8</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .8rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls9</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: .9rem</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ls10</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>line-spacing: 1rem</Code></td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet }
        </Highlight>

        <div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
            Different Letter Spacing Depending on Breakpoint
        </div>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.letterSpacing \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.letterSpacing, null, '    ') }
        </Highlight>
    </div>
)

export default LetterSpacing
